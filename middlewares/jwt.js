import 'dotenv/config'
import jwt from 'jsonwebtoken'
import Users from '../models/users.js'

const generateJWT = (_id) => {
    return new Promise((resolve, reject) => {
        const payload = { _id }
        jwt.sign(payload, process.env.JWT_PD, {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject("No se pudo generar el token")
            } else {
                resolve(token)
            }
        })
    })
}

const validateJWT = async (req, res, next) => {
    const token = req.header('token')
    if (!token) {
        return res.status(401).json({
            msg: "No hay token en la peticion",
        })
    }
    try {
        const { _id } = jwt.verify(token, process.env.JWT_PD)
        const usuario = await Users.findById(_id);
        if (!usuario || usuario.estado == 0) {
            return res.status(401).json({
                msg: "Token no válido - Usuario inexistente o inactivo"
            })
        }
        req.user = usuario;
        next();
    } catch (error) {
        res.status(401).json({
            msg: "Token no valido",
            error: error.message
        })
    }
}

export { generateJWT, validateJWT }