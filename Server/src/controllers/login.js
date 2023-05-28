const { User } = require('../DB_connection');

const login = async (req, res) =>{

    let { password, email } = req.query;

    try {
        if (email && password) {
            const foundUser = await User.findOne({
                where: { email }
            });
            if (!foundUser) return res.status(404).json({message:'Usuario no encontrado'});
            if (foundUser.password !== password) return res.status(403).json({message:'Contraseña incorrecta'});
            return res.status(200).json ({access: true});
        }
        return res.status(400).json({message:'Faltan datos'});
    } catch (error) {
        return res.status(500).json({message:error});
    }
}




// // const user = require("../utils/user")
// const {User} = require("../DB_connection")

// const login = async (req, res) => {
//     let {password, email} = req.query
    
//     console.log({password, email});
//     try {
//         if(email && password){
//             const foundUser = await User.findOne({
//                 where: {email}
//             })
//             if(!foundUser)return res.status(404).json({message: 'Usuario no encontrado'})
//             if(!foundUser.password !== password)return res.status(403).json({message: 'Contraseña incorrecta'})
//             return res.status(200).jeson({access: true})
//         }
//         return res.status(404).json({message: 'Usuario no encontrado'})
//     } catch (error) {
//          res.status(500).json({message: error})
//     }



    // if(user[0].email === email && user[0].password === password) {
    //     res.status(200).json({access: true})
    // } 
    // else res.status(200).json({access: false})
    

module.exports = login