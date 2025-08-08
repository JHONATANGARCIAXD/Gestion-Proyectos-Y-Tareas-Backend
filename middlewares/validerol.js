const isAdmin = (req, res, next) => {
    const user = req.user
    if (user.globalRole != "ADMIN") {
        return res.json({ msg: "NO HAY PERMISOS" })
    }

    next()
}


export { isAdmin }