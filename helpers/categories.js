import Categories from "../models/categories.js"

const SearchName = async (name) => {
    let categoria = await Categories.findOne({ name: name })
    if (categoria) {
        throw new Error(`LA CATEGORIA ${name} YA SE ENCUENTRA CREADA`);
    }
}

const SearchNameUpdate = async (name_search) => {
    let categoria = await Categories.findOne({ name: name_search })
    if (!categoria) {
        throw new Error(`LA CATEGORIA NO SE ENCUENTRA CREADA`);
    }
}


export { SearchName, SearchNameUpdate }