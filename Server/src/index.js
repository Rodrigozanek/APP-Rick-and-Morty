//CON EXPRESS
const server = require ('./app')
const {conn} = require("./DB_connection")
const PORT = 3001;

server.listen(PORT, async() => {
   await conn.sync({force: true});
   console.log('Server raised in port: ' + PORT);
});







/*___________________________________________________________________*/
// CON HTTP
//
// const http = require("http");
// const getCharById = require('./controllers/getCharById')
// // const { url } = require("inspector");    
// // const data = require("./utils/data.js")
// const POST = 3001

// http.createServer((req, res)=>{
//     res. setHeader('Access-Control-Allow-Origin', '*');
//     try {
//         const {url} = req
//         if(url.includes("/rickandmorty/character")){
//             const id = url.split("/").pop()
//             getCharById(res, id)
//         }

//     } catch (error) {
//         console.log(error)
//         throw new Error(error)              
//     }
//     // res.end("hola")
// }).listen(POST, "localhost", ()=>{
//     console.log(`server on port ${POST}`)
// })
    
