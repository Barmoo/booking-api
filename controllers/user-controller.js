import { registerUserValidator } from "../validators/user.js";
import { UserModel } from "../models/user-models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async(req,res,next)=> {
    try {
        //validate user input
        const{error,value}=
        registerUserValidator.validate(req.body);
        if(error){
            return res.status(422).json
            (error)
        }
        //check if user does not exist
        const user = await UserModel.findOne({email: value.email});
        if(user){
            return res.status(409).json('User already exist!');
        }
        //harsh their password
        const hashedPassword = bcrypt.hashSync(value.password, 10);
        //save the user into database
        await UserModel.create({
            ...value,
            password: hashedPassword
        });
        //send user confirmation email
        //respond to the request
    } catch (error) {
        next(error);
        
    }
}
