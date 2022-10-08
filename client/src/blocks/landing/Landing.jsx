import React from "react"
import { Link } from "react-router-dom"
import styles from "./Landing.module.css"


const Landing = () =>{
  return(
    <div className={styles.main_container}>
      <div className={styles.image_container}>
        <a href="http://www.freepik.com">Designed by rawpixel.com / Freepik</a>
        <div className={styles.image}></div>
      </div>
      <div className={styles.main_redirection}>
        <h1>API countries <span>SoyHenry &#128640;</span></h1>
        <Link to="/home">
          <div className={styles.btn_container}>
            <p>Go see the countries!</p>
            <div className={styles.btn}></div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Landing

