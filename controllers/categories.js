import Categories from "../models/categories.js"

const CreateCategorie = async (req, res) => {
    try {
        const { name, description, createdBy } = req.body
        let categoria = new Categories({ name: name, description: description, createBy: createdBy })
        await categoria.save()
        res.json({ msg: "CATEGORIA CREADA CORRECTAMENTE", categoria })
    }
    catch {
        res.json({ msg: "ALGO SALIO MAL" })
    }
}

const ListCategories = async (req, res) => {
    try {
        const categorias = await Categories.find({}).populate("createBy", ["firstName", "lastName", "email"])
        res.json({ msg: categorias })
    }
    catch {
        res.json({ msg: "ALGO SALIO MAL" })
    }
}

const UpdateCategorie = async (req, res) => {
    try {
        const { name_search } = req.params
        const { name, description, isActive } = req.body
        await Categories.findOneAndUpdate({ name: name_search }, { name: name, description: description, isActive: isActive ?? true, })

        res.json({ msg: "CATEGORIA ACTUALIZADA" })
    }
    catch {
        res.json({ msg: "ALGO SALIO MAL" })
    }
}

const DeleteCategorie = async (req, res) => {
    try {
        const { name_search } = req.params
        await Categories.findOneAndDelete({ name: name_search })
        res.json({ msg: "CATEGORIA ELIINADA CORRECTAMENTE" })
    }
    catch {
        res.json({ msg: "ALGO SALIO MAL" })
    }

}


export { CreateCategorie, ListCategories, UpdateCategorie, DeleteCategorie }