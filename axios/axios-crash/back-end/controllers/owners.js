const Owner = require('../models/Owner');


const getAllOwners = async (req, res) => {
    const owners = await Owner.find({ });
    
    res.status(200).json({ owners })
};

const getOwner = async (req, res) => {
    const owner = await Owner.find({ _id: ownerId});
    if(!owner) {
        console.log(`No owner with name: ${ ownerId }`)
    }
    res.json({ owner })
};

const createOwner = async (req, res) => {
    const owner = await Owner.create(req.body)
    console.log(req.body)
    console.log('create a owner')
    res.status(200).json({ owner })
};

const updateOwner = async (req, res) => {
    console.log('update a owner')
};

const deleteOwner = async (req, res) => {
    console.log('delete a owner')
}

module.exports = {
    getAllOwners,
    getOwner,
    createOwner,
    updateOwner,
    deleteOwner
}