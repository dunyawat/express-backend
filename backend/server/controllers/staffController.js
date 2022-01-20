const Staff = require('../models/staff')

exports.index = async (req,res,next) => {

    const staff = await Staff.find().sort({salary:1});

    res.status(200).json({
        data: staff
    })
}

exports.findid = async (req,res,next) => {
 try{
    const { id } = req.params;
    // const staff = await Staff.findOne({ _id: id });
    const staff = await Staff.findById(id);

    if(!staff){
        throw new Error('Wrong ID')
    } else{
        res.status(200).json({
            data: staff
        });
    }

   
 }catch(error){
    res.status(400).json({
        error:{
            message:'Error ' + error.message
        }
    })
 }
}


exports.insert = async (req,res,next) => {

    const {name,salary} = req.body

    // let staff = new Staff(req.body)

    let staff = new Staff({
        name:name,
        salary:salary
    })
    await staff.save();
    res.status(201).json({
        message: 'Add Data already'
    })
}

exports.delete = async (req,res,next) => {
    try {
        const { id } = req.params;
        const staff = await Staff.findByIdAndDelete(id)

        if(!staff){
            throw new Error('Wrong ID')
        } else{
            res.status(200).json({
                message:'deleted already'
            });
        }

    } catch (error) {
        res.status(400).json({
            error:{
                message:'Error ' + error.message
            }
        })
    }
}

exports.update = async (req,res,next) => {
    try {
        const { id } = req.params;
        const {name,salary} = req.body

        // * find update save
        // * last data replace
        // const staff = await Staff.findById(id)
        // staff.name = name;
        // staff.salary = salary;
        // await staff.save();

        // * last data not replace
        // const staff = await Staff.findByIdAndUpdate(id,{
        //     name:name,
        //     salary:salary
        // });

        const staff = await Staff.updateOne({_id:id},{
            name:name,
            salary:salary
        });
        if(staff.modifiedCount === 0){
            throw new Error('Not Update')
        } else{
            res.status(200).json({
                message:'update already'
            });
        }

    } catch (error) {
        res.status(400).json({
            error:{
                message:'Error ' + error.message
            }
        })
    }
}