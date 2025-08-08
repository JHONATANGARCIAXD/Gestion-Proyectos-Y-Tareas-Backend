import usuarios from "../models/users.js";
import bcrypt from "bcryptjs";
import {generateJWT} from "../middlewares/jwt.js"

const register = async (req, res) => {
    const { firstName, lastName, email, phone, password } = req.body
    try {
        const registeruser = new usuarios({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            password: password
        })
        const salt = bcrypt.genSaltSync();
        registeruser.password = bcrypt.hashSync(password, salt)
        await registeruser.save()
        res.json("usuario registrado exitosamente")

    } catch (error) {
        res.json(error)
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const emailvali = await usuarios.findOne({ email: email })
        const validPassword = bcrypt.compareSync(password, emailvali.password);

        if (!validPassword) {
            return res.status(400).json({
                msg: "Usuario / Password no son correctos"
            })
        }
        const token = await generateJWT(emailvali._id);
        res.json({
            emailvali,
            token
        })
    } catch (error) {
        res.json(error)
    }
}


export { register, login }