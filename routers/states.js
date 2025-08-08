import { Router } from "express";
import { validateFields } from "../middlewares/validateFields.js";
import { SearchName, SearchNameUpdate } from "../helpers/states.js";
import { check } from "express-validator";
import { CreateStates, ListStatesProjects, ListStatesTaks, UpdateState } from "../controllers/states.js";
import { validateJWT } from "../middlewares/jwt.js";
import { isAdmin} from "../middlewares/validerol.js";

const router = Router()

router.post("/create", [
    validateJWT,
    isAdmin,
    check("name").notEmpty(),
    check("name").custom(SearchName),
    check("description").notEmpty(),
    check("type").notEmpty().toLowerCase(),
    check("type").isIn(["task", "project"]).withMessage("TIPO INVALIDO"),
    validateFields
], CreateStates);


router.get("/listtaks", [

], ListStatesTaks)

router.get("/listprojects", [

], ListStatesProjects)


router.put("/update/:name_search", [
    check("name_search").custom(SearchNameUpdate),
    check("name").notEmpty(),
    check("name").custom(SearchName),
    check("description").notEmpty(),
    check("isActive").notEmpty(),
    check("type").notEmpty().toLowerCase(),
    check("type").isIn(["task", "project"]).withMessage("TIPO INVALIDO"),
    validateFields
], UpdateState)


export default router