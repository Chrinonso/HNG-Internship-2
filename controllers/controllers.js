const Person = require('../models/models');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
 


const createPerson = async (req,res) => {
    const person = await Person.create(req.body);
    res.status(StatusCodes.OK).json({ person });

};

const getPerson = async (req,res) => {
    const {user_id:personID} = req.params;
    const person = await Person.findOne({_id:personID});

    if(!person) {
        throw new CustomError.NotFoundError(`There is no Person with ID ${personID}`)
    }
    res.status(StatusCodes.OK).json({ person })
    
};

const updatePerson = async (req,res) => {
    const {user_id:personID} = req.params;
    const person = await Person.findOneAndUpdate({_id:personID}, req.body, {new:true, runValidators:true});

    if(!person) {
        throw new CustomError.NotFoundError(`There is no Person with ID ${personID}`)
    }
    res.status(StatusCodes.OK).json({ person, msg: "Person Updated succesfully!!!" })
};

const deletePerson = async (req,res) => {
    const {user_id:personID} = req.params;
    const person = await Person.findOneAndDelete({_id:personID});

    if(!person) {
        throw new CustomError.NotFoundError(`There is no Person with ID ${personID}`)
    }
    res.status(StatusCodes.OK).json({msg: "Person deleted succesfully!!!" })
};

module.exports = {
    createPerson,
    getPerson,
    updatePerson,
    deletePerson,
};