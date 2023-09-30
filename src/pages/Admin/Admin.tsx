import {useEffect, useState} from "react";
import DateCard from "@components/DateCard/DateCard.tsx";
import Date from "@components/DateCard/DateCard.tsx";
import styles from './Admin.module.css';

const dommie = [
    {
        "model": "citas.cita",
        "pk": 1,
        "fields": {
            "paciente": "123",
            "doctor": "1234",
            "especialidad": "Fisioterapia",
            "fecha": "2023-09-27",
            "motivo": "Prueba",
            "estado_cita": "C"
        }
    },
    {
        "model": "citas.cita",
        "pk": 2,
        "fields": {
            "paciente": "123",
            "doctor": "1234",
            "especialidad": "Cardiologia",
            "fecha": "2023-09-27",
            "motivo": "Prueba",
            "estado_cita": "P"
        }
    }
]


const Admin = () => {
    const [dates, setDates] = useState([]);

    useEffect(() => {

        const fetchDates = async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/citas`);
            const data = await response.json();
            setDates(data)
        }

        fetchDates();
    }, [])

    return (
        <div className={`${styles['Admin']}`}>
            <h1>Citas</h1>
            {/*Create types*/}
            <div className={styles['dates']}>
                {dates && dates.map((date: Date) => <DateCard data={date}/>)}
                {dates && dates.map((date: Date) => <DateCard data={date}/>)}

            </div>
        </div>
    );
};

export default Admin;