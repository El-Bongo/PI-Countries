import React from "react";
import styles from "./Pagination.module.css"


const Pagination = ({countries, total, pagination}) =>{
  let pageNumbers = []

  for (let i = 1; i <= Math.ceil(total/countries); i++) {
    pageNumbers.push(i)
  }

  return(
        <nav className={styles.nav}>
            <ul>
                {pageNumbers.map(num =>
                    <li  key={num}>
                        <a className={styles.markers} onClick={()=> {pagination(num)}} >
                            {num}
                        </a>
                        <div></div>
                    </li>
                )}
            </ul>
        </nav>

  )
}

export default Pagination