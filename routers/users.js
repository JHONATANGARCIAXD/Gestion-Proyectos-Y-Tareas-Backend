import { Router } from "express";
import { check } from "express-validator";
import {register} from "../controllers/users.js";
import {login} from "../controllers/users.js"

const router = Router()

router.post("/auth/register", [
    check("name").notEmpty(),
    check("lastname:").notEmpty(),
    check("email").notEmpty(),
    check("email").isEmail(),
    check("phone").notEmpty(),
    check("globalrole").notEmpty(),
    check("password").notEmpty(),
    check('password').isLength({ min: 8 })
],register)
router.post("/auth/login",login)
export default router