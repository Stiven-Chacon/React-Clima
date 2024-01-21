import React, { useEffect, useState } from 'react'
import WeatterForma from './weatterForm'
import WeatterMainInfo from './weatterMainInfo';
import Loading from './loading';
import styles from "./weatherApp.module.css";


const WeatterApi = () => {
    const [clima, setClima] = useState(null)

    useEffect(() => {
        console.log("entro");
        loadInfo();
      }, []);
    
      useEffect(() => {
        document.title = `Clima de | ${clima?.location.name ?? ''}`;
      }, [clima]);

      
    async function loadInfo(city = 'Manizales'){
        try {
            const request = await fetch(
                `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
              );
              const json = await request.json()
              setTimeout(() => {
                setClima({ ...json });
              }, 2000);
              console.log(json);
        } catch (error) {
            
        }
    }

    function handleChangeCity(city){
        setClima(null)
        loadInfo(city)  
    }

  return (
    <>
    <div className={styles.weatherContainer}>
        <WeatterForma onChangeCity={handleChangeCity}/>
       {clima ?  <WeatterMainInfo clima={clima}/> : <Loading/> }
    </div>
    </>
  )
}
export default WeatterApi