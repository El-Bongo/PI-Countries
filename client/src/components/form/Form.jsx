import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, postActions } from "../../redux/actions";
import styles from "./Form.module.css"

const Form = () =>{
  let countries = useSelector(state => state.countries)
  const dispatch = useDispatch()

  let arrayDificulty = [1, 2, 3, 4, 5]
  let arraySeasons = ["Summer", "Autumn", "Winter", "Spring"]

  const [name, setName] = useState("")
  const [duration, setDuration] = useState("")
  const [dificulty, setDificulty] = useState(new Array(arrayDificulty.length).fill(false))
  const [season, setSeason] = useState(new Array(arraySeasons.length).fill(false))
  const [selectedCountry, setSelectedCountry] = useState([])

  const [formInfo, setFormInfo] = useState({
                                            name: name,
                                            duration: duration,
                                            dificulty: 0,
                                            season: "",
                                            countries: []
                                            })

  useEffect(()=>{
    if(!countries) dispatch(getAllCountries())
  },[dispatch])

  //Country select and unselect functions
  function handleCountrySelect(e) {
    let country = e.target.getAttribute('value')
    let repeated = selectedCountry.includes(country)
    if(repeated !== true) setSelectedCountry(selectedCountry.concat(country))
  }
  function handleCountryUnselect(e) {
    let data = e.target.parentElement.innerText.slice(0,3)
    setSelectedCountry(selectedCountry.filter(e => e !== data))
  }

  //Error Handlers and checkers
  function handlerNameError(value){
    if(value === "") return ""
    else if(!/[^a-z\s]/i.test(value) === false) return <h4>The name can only contain letters</h4>
    else if(value.length < 3) return <h4>The name is too short</h4>
    else if(value.length > 30) return <h4>The name is too large</h4>
  }
  function handlerDurationError(value){
    if(!value) return ""
    if(value > 20000) return <h4>Damn ... thats too many hours ... dont you think? &#129300;</h4>
    if(value <= 0) return <h4>So can you do that under 4 minutes? &#129488;</h4>
    if(value < 4) return <h4>So can you do that under 4 minutes? &#129488;</h4>
  }
  function handleDificultyCheck(e){
    let checkIndex = e.target.value - 1
    let newArr = []
    for (let i = 0; i < dificulty.length; i++) {
      if(i === checkIndex) newArr.push(true)
      else newArr.push(false)
    }
    setDificulty(newArr)
  }
  function handleSeasonCheck(e){
    let checkIndex
    switch (e.target.value) {
      case "Summer":
          checkIndex = 0
        break;
      case "Autumn":
          checkIndex = 1
        break;
      case "Winter":
          checkIndex = 2
        break;
      case "Spring":
          checkIndex = 3
        break;
      default:
        break;
    }
    let newArr = []
    for (let i = 0; i < season.length; i++) {
      if(i === checkIndex) newArr.push(true)
      else newArr.push(false)
    }
    setSeason(newArr)
  }

  // Submit handler
  function handleSubmit(e){
    e.preventDefault();
    dispatch(postActions(formInfo))
  }

  return(
    <div className={styles.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Submit a new activity</h1>
        <div>
          <label> *Name: </label>
          <input type="text" required value={name} onChange={(e) =>{ setName(e.target.value); setFormInfo({...formInfo, name: e.target.value}) }} />
          {
            handlerNameError(name)
          }
        </div>
        <div>
          <label> *Duration(in minutes): </label>
          <input type="number" min="1" required value={duration} onChange={e => {setDuration(e.target.value); setFormInfo({...formInfo, duration: e.target.value})}} />
          {
            handlerDurationError(duration)
          }
        </div>
        <div>
          <label> *Dificulty(from 1 to 5): </label>
          <section className={styles.checkbox} onChange={e => handleDificultyCheck(e)}>
          {
            arrayDificulty.map((d, i) => {
              return (
                <section key={i}>
                  <input type="checkbox" onChange={() => setFormInfo({...formInfo, dificulty: d})} checked={dificulty[i]} value={d} name={d}/>
                  <label>{d}</label>
                </section>
              )
            })
          }
          </section>
        </div>
        <div>
          <label> *Season: </label>
          <section className={styles.checkbox} onChange={e => handleSeasonCheck(e)}>
          {
            arraySeasons.map((d, i) => {
              return (
                <section key={i}>
                  <input type="checkbox" onChange={() => setFormInfo({...formInfo, season: d})} checked={season[i]} value={d} name={d}/>
                  <label>{d}</label>
                </section>
                
              )
            })
          }
          </section>
        </div>
        <div>
          <label> *Countries selected: </label>
          <section className={styles.country_add}>
            {
              selectedCountry?.map(sc => {
                return <p key={sc}>{sc}<span onClick={e => handleCountryUnselect(e)}> X </span></p>
              })
            }
          </section>
        </div>
        <ul className={`${styles.menu} ${styles.cf}`}>
          <li>
            <p>Select a country</p>
            <ul onClick={e => {handleCountrySelect(e); setFormInfo({...formInfo, countries: selectedCountry})}} className={styles.submenu}>
                {
                  countries?.map(c => {
                    return <li key={c.id} value={c.id} name={c.name}> {c.name}</li>
                  })
                }
            </ul>			
          </li>
        </ul>			
        <button type="submit">Send activity</button>
      </form>
    </div>
  )
}

export default Form