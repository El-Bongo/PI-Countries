const {Router} = require("express")
const router = Router()
const axios = require("axios")
const {Op} = require("sequelize")

const {Country} = require("../db")

router.get("/", async (req, res)=>{
  const {name} = req.query
    try {
      let info
      if(!name){
        info = await axios.get("https://restcountries.com/v3/all")
      }else{
        info = await axios.get(`https://restcountries.com/v3/name/${name}`)
      }
      const countries = info.data.map(country => {
        let capitals 
        if(country.capital === undefined){
          capitals = "This country has no capital"
        }else if (country.capital.length > 1) {
          capitals = country.capital.join(", ")
        }else{
          capitals = country.capital[0]
        }
        if(!country.subregion){
          country.subregion = "This country has no subregion known"
        }
        if(country.area < 0){
          country.area = 0
        }
        const details = {
          id: country.cca3,
          name: country.name["official"],
          image: country.flags[1],
          continent: country.continents[0],
          capital: capitals,
          subregion: country.subregion,
          area: country.area,
          population: country.population,
        }
      return details
      });
      if(!name){
        Country.bulkCreate(countries, {updateOnDuplicate: ["id"]})
        .then(console.log("All the countries has been added to the Data Base"))
        res.status(200).json(countries)
      }else{
        res.status(200).json(countries)
        console.log(`${name} has been found`)
      }
    } catch (error) {
      res.status(404).send("A problem has occured, please try again")
    }
})

router.get("/:id", async (req, res) =>{
  try {
    let id = req.params.id
    console.log(id)
    const data = await Country.findAll({
      where: {
        id : {
          [Op.like] : `%${id}`
        }
      }
    })
    res.status(200).json(data)
  } catch (error) {
    res.status(404).send("The Id of that country doesnt exist, please try again")
  }
})


module.exports = router