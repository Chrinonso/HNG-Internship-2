const Person = require('../models/models');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
 


const createPerson = async (req,res) => {
    const { name } = req.body;

    const person = await Person.create({ name });
    if(!person) {
        throw new CustomError.BadRequestError('Please provide a name')
    }


    res.status(StatusCodes.CREATED).json({ person });

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
    res.status(StatusCodes.OK).json({ person, msg: `Person with ID ${personID} has been Updated succesfully!!!` })
};

const deletePerson = async (req,res) => {
    const {user_id:personID} = req.params;
    const person = await Person.findOneAndDelete({_id:personID});

    if(!person) {
        throw new CustomError.NotFoundError(`There is no Person with ID ${personID}`)
    }
    res.status(StatusCodes.OK).json({msg: `Person with ID ${personID} has been deleted succesfully!!!` })
};

module.exports = {
    createPerson,
    getPerson,
    updatePerson,
    deletePerson,
};