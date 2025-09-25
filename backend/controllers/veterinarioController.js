

const registrar = (req, res) => {

    console.log(req.body)

    res.json({ msg: 'usuario registrado' })
}

const perfil = (req, res) => {
    res.json({ url: 'desde perfil' })
}

export {
    registrar,
    perfil
}
