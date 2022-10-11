import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, postActions } from "../../redux/actions";
import styles from "./Form.module.css"

const Form = () =>{
  let countries = useSelector(state => state.countries)
  const dispatch = useDispatch()

  let arrayDificulty = [1, 2, 3, 4, 5]
  let arraySeason = ["Summer", "Autumn", "Winter", "Spring"]

  const [dificulty, setDificulty] = useState(new Array(arrayDificulty.length).fill(false))
  const [season, setSeason] = useState(new Array(arraySeason.length).fill(false))

  const [formInfo, setFormInfo] = useState({
                                            name: "",
                                            duration: 0,
                                            dificulty: 0,
                                            season: "",
                                            countries: []
                                            })

  const [errors, setErrors] = useState({})
  const [submit, setSubmit] = useState(false)

  useEffect(()=>{
    if(!countries) dispatch(getAllCountries())
    if(Object.keys(errors).length === 0){
      setSubmit(true)
    }else{
      setSubmit(false)
    }
    setErrors(validate(formInfo))
  },[dispatch, formInfo])

  //Country select and unselect functions
  function handleCountrySelect(e) {
    let country = e.target.getAttribute('value')
    let repeated = formInfo.countries.includes(country)
    if(repeated !== true){
      setFormInfo({...formInfo, countries: formInfo.countries.concat(country)})
    }
  }
  function handleCountryUnselect(e) {
    let data = e.target.parentElement.innerText.slice(0,3)
    setFormInfo({...formInfo, countries: formInfo.countries.filter(e => e !== data)})
  }


  function validate(input){
    const errors = {}

    if(!input.name) errors.name = ""
    else if(input.name.length < 1) errors.name = "Name is require"
    else if(!/[^a-z\s]/i.test(input.name) === false) errors.name = "The name can only contain letters"
    else if(input.name.length < 3) errors.name = "The name is too short"
    else if(input.name.length > 30) errors.name = "The name is too large"

    if(input.duration < 1) errors.duration = ""
    else if(!input.duration) errors.duration = "Duration is required"
    else if(input.duration > 20000) errors.duration = "Damn ... thats too many hours ... dont you think? &#129300; "
    else if(input.duration < 4) errors.duration = "So can you do that under 4 minutes? &#129488; "
    return errors
  }

  //Error Handlers and checkers
  function dinamicForm(input){
    if(input.name === "name"){
      setFormInfo({...formInfo, name: input.value})
    }
    if(input.name === "duration"){
      setFormInfo({...formInfo, duration: input.value})
    }
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
    if(submit === false){
      alert("Some fields are not right! check again.")
    }else{
      alert("New activity has been saved, have fun!")
      setFormInfo({
                  name: "",
                  duration: 0,
                  dificulty: 0,
                  season: "",
                  countries: []
                  })
      setDificulty(new Array(arrayDificulty.length).fill(false))
      setSeason(new Array(arraySeason.length).fill(false))
      dispatch(postActions(formInfo))
    }
  }

  return(
    <div className={styles.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Submit a new activity</h1>
        <div>
          <label> *Name: </label>
          <input type="text" required value={formInfo.name} name="name" onChange={(e) =>{dinamicForm(e.target) }} />
        </div>
        <p className={styles.errors}>{errors.name}</p>
        <div>
          <label> *Duration(in minutes): </label>
          <input type="number" min="1" required value={formInfo.duration} name="duration" onChange={e => {dinamicForm(e.target)}} />
        </div>
        <p className={styles.errors}>{errors.duration}</p>
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
            arraySeason.map((d, i) => {
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
              formInfo.countries?.map(sc => {
                return <p key={sc}>{sc}<span onClick={e => handleCountryUnselect(e)}> X </span></p>
              })
            }
          </section>
        </div>
        <ul className={`${styles.menu} ${styles.cf}`}>
          <li>
            <p>Select a country</p>
            <ul onClick={e => {handleCountrySelect(e)}}  className={styles.submenu}>
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