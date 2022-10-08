import React from "react";
import styles from "./CountryCard.module.css"
import { Link } from "react-router-dom";

const CountryCard = ({id, name, image, continent}) =>{
  return(
    <div className={styles.container}>
      <Link to={`/countries/${id}`}>
      <div className={styles.flaps}>
        <h2>{name}</h2>
        <img className={styles.image} src={image} alt={`flag of ${name}`} />
      </div>
      <div className={styles.main_info}>
        <p>Continent: {continent}</p>
      </div>
      </Link>
    </div>
  )
}

export default CountryCard