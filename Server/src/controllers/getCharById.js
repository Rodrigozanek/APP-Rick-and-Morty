const axios = require ('axios')



const getCharById = async (req, res) => {
        let {id} = req.params
        // const url = `https://rickandmortyapi.com/api/character/${id}`
        const url = 'https://rickandmortyapi.com/api/character/'
        const response = await axios(url + id)
        try {
            if(response.data){
                //si esxiste el personaje
                let {id, status, name, species, origin, image, gender} = response.data
                const charObj = {id, status, name, species, origin, image, gender} 
                res.status(200).json(charObj)
            }
        } catch (error) {
            res.status(500).send(error.message) 
        }
    }

//con Chris
// const getCharById = (req, res) => {
//     let {id} = req.params
//     let url = `https://rickandmortyapi.com/api/character/${id}`
//     axios(url)
//     .then(data =>{
//         if(data.data){
//             let {id, name, gender, species, origin, image, status} = data.data
//             let charObj = {
//                 id, 
//                 name, 
//                 gender, 
//                 species, 
//                 origin, 
//                 image, 
//                 status
//             }
//             res.status(200).json(charObj)
//         }
//         else res.status(404).send('Not fount')
      
//     })
//     .catch(err=>{
//         res.status(500).send(err.message)
//     })
// }

module.exports = getCharById
























//Con Express
// const axios = require ('axios')
// const URL = 'https://rickandmortyapi.com/api/character/'

// const getCharById = (req, res) => {
//     const {id} = req.params
//     axios.get( URL + id )
//     .then((response) => {
//         const character = response.data
//         if(character.error){
//             res.status(404).json({message: "Not Found"})
//         } else{
//             const {id, name, gender, species, origin, image, status} = character;
//             res.json({id, name, gender, species, origin, image, status})
//         }
//     })
//     .catch((error)=>{
//         console.log(error)
//         res.status(500).json({message: error.message})
//     })
// }







//Sin Express
// const axios = require ('axios')
// const URL = 'https://rickandmortyapi.com/api/character/' 


// const getCharById = (res, id) => {
//     axios.get( URL + id )
//     .then((data) => {
//         const { id, name, gender, species, origin, image, status} = data.data
//         res.writeHead(200, {"Content-Type": "application/json"})
//         res.end(JSON.stringify({id, name, gender, species, origin, image, status}))

//     })
//     .catch((reason) => {
//         res.writeHead(500, {"Content-Type":"text/plain"})
//         res.end(reason.message)
//     })
// };



// module.exports = getCharById