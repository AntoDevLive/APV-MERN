import Veterinario from "../models/Veterinario.js"

const registrar = async (req, res) => {

    // const {email, password, nombre} = req.body

    try {
        // Guardar nuevo veterinario
        const veterinario = new Veterinario(req.body);
        const veterinarioGuardado = await veterinario.save();
        res.json(`${veterinarioGuardado} registrado correctamente`)
    } catch (error) {
        console.log(error)
    }

}

const perfil = (req, res) => {
    res.json({ url: 'desde perfil' })
}

export {
    registrar,
    perfil
}
