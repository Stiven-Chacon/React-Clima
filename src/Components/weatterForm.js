import { useState } from "react";
import styles from "./weatherForm.module.css";


export default function WeatterForma({onChangeCity}) {
    const [city, setCity] = useState('')

    function onChange(e) {
        const value = e.target.value

        if (value !== '') {
            setCity(value)
        }
    }
    function handleChange(e) {
        e.preventDefault()

        onChangeCity(city)
    };

    return (
        <form onSubmit={handleChange} className={styles.container}>
            <input type="text" onChange={onChange} className={styles.input}/>
        </form>
    )
}