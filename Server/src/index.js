//CON EXPRESS
const express = require('express');
const router = require('./routes/index');

const server = express();
const PORT = 3001;

server.use((req, res, next)=>{
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
})

server.use(express.json());
server.use('/rickandmorty', router);

server.listen(PORT, () => {
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
    
