exports.index = (req,res,next) => {
    res.status(200).json({
        data:{
            name:'Dunyawat',
            address:{
                province:'bkk'
            }
        }
    })
}