import { Router } from "express";
import { check } from "express-validator";
import { CreateCategorie, ListCategories, UpdateCategorie, DeleteCategorie } from "../controllers/categories.js";
import { validateFields } from "../middlewares/validateFields.js"
import { SearchName, SearchNameUpdate } from "../helpers/categories.js";
import { isAdmin } from "../middlewares/validerol.js";
import { validateJWT } from "../middlewares/jwt.js";
const router = Router()

router.post("/create", [
    validateJWT,
    isAdmin,
    check("name").notEmpty(),
    check("name").custom(SearchName),
    check("description").notEmpty(),
    check("createdBy").notEmpty(),
    validateFields
], CreateCategorie)


router.get("/list", [

], ListCategories)


router.put("/update/:name_search", [
    check("name_search").custom(SearchNameUpdate),
    check("name").notEmpty(),
    check("name").custom(SearchName),
    check("description").notEmpty(),
    check("type").notEmpty(),
    validateFields
], UpdateCategorie)


router.delete("/delete/:name_search", [
    check("name_search").notEmpty(),
    check("name_search").custom(SearchNameUpdate),
    validateFields
], DeleteCategorie)

export default router