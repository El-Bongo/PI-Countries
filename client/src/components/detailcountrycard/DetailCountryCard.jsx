import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { getSingleCountry } from "../../redux/actions";
import styles from "./DetailCountryCard.module.css"
import image1 from "../../img/image1.jpg"
import image2 from "../../img/image2.jpg"
import image3 from "../../img/image3.jpg"
import image4 from "../../img/image4.jpg"
import image5 from "../../img/image5.jpg"

const DetailCountryCard = () =>{
  const dispatch = useDispatch()
  const {id} = useParams()
  const country = useSelector(state => state.country)

  useEffect(()=>{
    // dispatch(deleteSingleCountry())
    dispatch(getSingleCountry(id))
  },[dispatch])

  let bgArray = [image1, image2, image3, image4, image5]
  let randomSelectorBg = bgArray[Math.floor(Math.random()*bgArray.length)]

// Actividades turísticas con toda su información asociada
  return(
    <div className={styles.main}>
      <img className={styles.bg_image} src={randomSelectorBg} alt="background image of travels" />
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
        <section>
          <h3>Population number {country?.population}</h3>
          <h3>Area on square kilometers {country?.area} km²</h3>
        </section>
      </div>
    </div>
  )
}

export default DetailCountryCard