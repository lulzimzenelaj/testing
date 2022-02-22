import Joi from "joi";

//e krijojm nje sken te validimit
const schema = Joi.object().keys({
    email: Joi.string().email().min(5).max(25).required(),
    password: Joi.string().alphanum().min(5).max(10).required(),

}) 
export default schema; 