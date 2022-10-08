import React from "react";
import styles from "./Loader.module.css"

const Loader = () =>{
  return(
    <div className={styles.loader}>
      <span className={styles.loader_element}></span>
      <span className={styles.loader_element}></span>
      <span className={styles.loader_element}></span>
    </div>
  )
}


export default Loader