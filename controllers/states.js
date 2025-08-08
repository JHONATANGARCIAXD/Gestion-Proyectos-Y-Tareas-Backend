import States from "../models/states.js"

const CreateStates = async (req, res) => {
    try {
        const { name, description, type } = req.body
        const State = new States({ name: name, description: description, type: type })
        await State.save()
        res.json({ msg: "ESTADO CREADO CORRECTAMENTE", State })
    }
    catch {
        res.status(400).json({ msg: "ALGO SALIO MAL" })
    }
}

const ListStatesTaks = async (req, res) => {
    try {
        const StatesTaks = await States.find({ type: "task" })
        res.json({ msg: StatesTaks })
    }
    catch {
        res.status(400).json({ msg: "ALGO SALIO MAL" })
    }
}

const ListStatesProjects = async (req, res) => {
    try {
        const StatesProjects = await States.find({ type: "project" })
        res.json({ msg: StatesProjects })
    }
    catch {
        res.status(400).json({ msg: "ALGO SALIO MAL" })

    }
}

const UpdateState = async (req, res) => {
    try {
        const {name_search } = req.params
        const { name, description, isActive, type } = req.body
        await States.findOneAndUpdate({ name: name_search, type: type }, { name: name, description: description, isActive: isActive })

        res.json({ msg: "ESTADO ACUALIZADO CORRECTAMENTE" })
    }
    catch {
        res.status(400).json({ msg: "ALGO SALIO MAL" })
    }
}

export { CreateStates, ListStatesTaks, ListStatesProjects, UpdateState }