import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { cleanCountry, getSingleCountry } from "../../redux/actions";
import styles from "./DetailCountryCard.module.css"
import Loader from "../../blocks/loader/Loader";
// import image1 from "../../img/image1.jpg"
// import image2 from "../../img/image2.jpg"
// import image3 from "../../img/image3.jpg"
// import image4 from "../../img/image4.jpg"
// import image5 from "../../img/image5.jpg"

const DetailCountryCard = () =>{
  const dispatch = useDispatch()
  const {id} = useParams()
  const country = useSelector(state => state.country)

  useEffect(()=>{
    dispatch(getSingleCountry(id))
    return (dispatch(cleanCountry()))
  },[dispatch])

  if(country) console.log(country)

  function renderDet() {
    if(country){
      return(
        <div className={styles.content}>
            <section className={styles.flag}>
              <img src={country?.image} alt={`flag of ${country?.name}`} />
              <div>
                <h3>{country?.name}</h3>
                <h3>{country?.id}</h3>
              </div>
            </section>
            <section>
              <h3>Continent of {country?.continent}</h3>
              <h3>Capital {country?.capital}</h3>
              <h3>Subregion of {country?.subregion}</h3>
            </section>
            <div>
              <section>
                <h3>Population number {country?.population}</h3>
                <h3>Area on square kilometers {country?.area} km²</h3>
              </section>
              {
                country?.activities ? country.activities.map(act => {
                  return(
                    <div key={act.id}>
                      <h3>Activities:</h3>
                      <h3>Activity: {act.name}</h3>
                      <h3>Dificulty: {act.dificulty}</h3>
                      <h3>Duration: {act.duration}</h3>
                      <h3>Season: {act.season}</h3>
                    </div>
                  )
                }) : <h3>This country has no activity yet</h3>
              }
            </div>
          </div>
      )
    }else{
      <Loader/>
    }
  }

  // renderizado de varias imagenes, comentado por bajo rendimiento
  // let bgArray = [image1, image2, image3, image4, image5]
  // let randomSelectorBg = bgArray[Math.floor(Math.random()*bgArray.length)]

  // Actividades turísticas con toda su información asociada
  return(
    <div className={styles.main}>
      {
        renderDet()
      }
    </div>
  )
}

export default DetailCountryCard