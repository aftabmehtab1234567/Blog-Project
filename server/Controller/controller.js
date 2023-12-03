import bcrypt from 'bcrypt';
import User from '../model/user.js';
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken';
import Token from '../model/token.js';
dotenv.config();
export const signupuser = async (request, response) => {
    try {
        const salt=await bcrypt.genSalt();
        const hashpassword=await bcrypt.hash(request.body.password ,salt);
        const user  = {username:request.body.username,name:request.body.name,password:hashpassword}
        const newUser = new User(user); // Corrected the instantiation of the User model
        await newUser.save();

        response.status(200).json({ message: 'Signup successful' });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
};
export const loginUser = async (request, response) => {
    try {
        let user = await User.findOne({ username: request.body.username });

        if (!user) {
            return response.status(400).json({ msg: 'Username does not exist' });
        }

        let match = await bcrypt.compare(request.body.password, user.password);

        if (match) {console.log('hi');
            const accessToken = jwt.sign(user.toJSON(), process.env.Access_Secret_key, { expiresIn: '15m' });
            const refreshToken = jwt.sign(user.toJSON(), process.env.Refresh_Secret_key);
            console.log('acessToken,refreshToken');
            const newToken = new Token({ token: refreshToken });
            await newToken.save();

            // Handle success case
            return response.status(200).json({ accessToken, refreshToken });
        } else {
            return response.status(400).json({ msg: 'Password does not match' });
        }
    } catch (error) {
        console.error(error);
        return response.status(500).json({ msg: 'Internal Server Error' });
    }
};
