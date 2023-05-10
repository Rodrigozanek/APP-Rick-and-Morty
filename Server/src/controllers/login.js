const user = require("../utils/user")

const login = (req, res) => {
    const {password, email} = req.query
    if(user[0].email === email && user[0].password === password) {
        res.status(200).json({access: true})
    } 
    else res.status(200).json({access: false})
    
}

module.exports = login