import States from "../models/states.js";

const SearchName = async (name, { req }) => {
    const { type } = req.body
    let State = await States.findOne({ name: name, type: type })
    if (State) {
        throw new Error(`EL ESTADO ${name} YA SE ENCUENTRA CREADO`);
    }
}

const SearchNameUpdate = async (name_search, { req }) => {
    const { type } = req.body
    let State = await States.findOne({ name: name_search, type: type })
    if (!State) {
        throw new Error(`LA CATEGORIA NO SE ENCUENTRA CREADA`);
    }
}


export { SearchName, SearchNameUpdate }
