const {Router} = require("express")
const router = Router()
const {Op} = require("sequelize")
const {Activity, Country} = require("../db")

router.get("/", async (req, res) =>{
  try {
    const allActivities = await Activity.findAll()
    res.status(200).send(allActivities)
  } catch (error) {
    res.status(404).send(error)
    console.log(error)
  }
})

router.post("/", async (req, res) =>{
  const {name, dificulty, duration, season, countries} = req.body
  try {
    const activity = await Activity.findOrCreate({
      where: {
        name:{[Op.like] : name}
      },
      defaults: {
        name: name,
        dificulty: dificulty,
        duration: duration,
        season: season,
      }
    })
    countries.map(async e => {
      const addOn = await Country.findByPk(e)
      await addOn.addActivity(activity[0].dataValues.id)
    })
    res.status(201).send(activity)
  } catch (error) {
    res.status(404).send(error)
    console.log(error)
  }

})

module.exports = router

// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)

// "name": "Escalada",
// "dificulty": 4,
// "duration": 50,
// "season": "Verano"