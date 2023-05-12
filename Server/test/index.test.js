const app = require('../src/app')
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", ()=>{
  describe( 'GET /rickandmorty/character/:id',()=>{

    it('GET Responde con status: 200', async()=>{
        await agent.get('/rickandmorty/character/1').expect(200);
    })

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async()=>{
        const {body} = await agent.get('/rickandmorty/character/1');
        expect(body).toHaveProperty("id")
        expect(body).toHaveProperty("name")
        expect(body).toHaveProperty("species")
        expect(body).toHaveProperty("gender")
        expect(body).toHaveProperty("status")
        expect(body).toHaveProperty("origin")
        expect(body).toHaveProperty("image")
    })

    it('Si hay un error responde con status: 500', async ()=>{
        await agent.get('/rickandmorty/character/asd').expect(500)
    })
  })

  describe("GET /rickandmorty/login", ()=>{
    it("GET Validando access: debe responder con true, si las credenciales email y password son correctas", async()=>{
        const {body} = await agent.get('/rickandmorty/login/?email=email@email.com&password=notengo22')
        expect(body.access).toBe(true)
    })

    it("GET Validando access: debe responder con false, si las credenciales email y password son incorrectas", async()=>{
      const {body} = await agent.get('/rickandmorty/login/?email=email@em&password=not')
      expect(body.access).toBe(false)
  })

  describe("POST /rickandmorty/fav",()=>{
  //   it("devuelve un array el usuario que se pasa por body", async()=>{
  //     const character ={id: 1, name: "rodrigo"}
  //     const {body} = (await agent.post('/rickandmorty/fav')).send(character)
  //     expect(Array.isArray(body))
  //   })
   })
  })

  describe(" DELETE /rickandmorty/fav/:id", ()=>{
    
  })
})