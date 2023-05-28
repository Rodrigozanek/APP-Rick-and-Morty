const { Favorite } = require('../DB_connection');

const postFav = async (req, res) =>{

    const { name, origin, status, image, species, gender } = req.body;
        console.log(req.body);
    try {
        if (!name || !origin || !status || !image || !species || !gender)
            return res,status(404).send("Faltan datos");

            await Favorite.findOrCreate({
                where: { name, origin, status, image, species, gender }
            });
            const favs = await Favorite.findAll();


            return res.status(201).json(favs);
        
    } catch (error) {
        return res.status(500).json({message:error});
    }
}

module.exports = postFav;