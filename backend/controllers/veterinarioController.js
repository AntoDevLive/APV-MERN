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

const confirmar = async(req, res) => {
    const { token } = req.params;

    const usuarioConfirmar = await Veterinario.findOne({token})

    if(!usuarioConfirmar) {
        const error = new Error('Token no válido')
        return res.status(404).json({msg: error.message})
    }

    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save();

        res.json({msg: 'cuenta validada'})
    } catch(error) {
        console.log(error)
    }

    res.json({ url: 'confirmado' })
}

export {
    registrar,
    perfil,
    confirmar
}
