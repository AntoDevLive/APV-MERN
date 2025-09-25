import Veterinario from "../models/Veterinario.js"

const registrar = async (req, res) => {
    const {email} = req.body;

    // Prevenir usuarios replicados
    const existeUsuario = await Veterinario.findOne({email})

    if(existeUsuario) {
        const error = new Error('Este usuario ya existe')
        return res.status(400).json({msg: error.message});
    }

    try {
        // Guardar nuevo veterinario
        const veterinario = new Veterinario(req.body);
        const veterinarioGuardado = await veterinario.save();
        res.json(`${veterinarioGuardado} registrado correctamente`)
    } catch (error) {
        console.log(error);
        
    }

}

const perfil = (req, res) => {
    res.json({ url: 'desde perfil' })
}

const confirmar = (req, res) => {
    console.log(req.params.token)

    res.json({ url: 'confirmado' })
}

export {
    registrar,
    perfil,
    confirmar
}
