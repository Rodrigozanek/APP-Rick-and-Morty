const http = require("http");
// const { url } = require("inspector");    
const POST = 3001
const data = require("./utils/data.js")

http.createServer((req, res)=>{
    res. setHeader('Access-Control-Allow-Origin', '*');
    try {
        const {url} = req
        if(url.includes("/rickandmorty/character/")){
            const id = url.split("/").at(-1)
            // const id = url.split("/").pop() 
            const character = data.find((char)=>char.id == id) 
            res.writeHead(200, {"Content-Type":"application/json"})
            res.end(JSON.stringify(character))
        }
        
    } catch (error) {
        console.log(error)
        throw new Error(error)              
    }
    // res.end("hola")
}).listen(POST, "localhost", ()=>{
    console.log(`server on port ${POST}`)
})