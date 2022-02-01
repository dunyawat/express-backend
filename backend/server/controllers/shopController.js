const Shop = require('../models/shop');
const Menu = require('../models/menu');

exports.index = async (req,res,next) => {

    const shops = await Shop.find().select('name photo location');

    const shopWithPhotoDomain = await shops.map( (shop,index) => {
        return{
            id:shop._id,
            name: shop.name,
            photo:'http://localhost:3000/images/'+shop.photo,
            location:shop.location
        }
    })

    res.status(200).json({
        data: shopWithPhotoDomain
    });
}

//get menus
exports.menu = async (req,res,next) => {

    const menu = await Menu.find();

    res.status(200).json({
        data: menu
    });
}