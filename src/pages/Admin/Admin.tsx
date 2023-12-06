import {useEffect, useState} from "react";
import AppointmentCard from "@components/AppointmentCard/AppointmentCard.tsx";
import Date from "@components/AppointmentCard/AppointmentCard.tsx";
import styles from './Admin.module.css';
import axios from 'axios';
import Uploader from "@components/Uploader/Uploader.tsx";
const Admin = () => {
    const [dates, setDates] = useState([]);

    useEffect(() => {

        const fetchDates = async () => {


            const response = await axios.get(`${import.meta.env.VITE_API_URL}/citas`)
                .then(function (response) {
                    // handle success
                    console.log(response);
                })

            const data = await response.json();
            setDates(data)
        }

        fetchDates();
    }, [])

    return (
        <div className={`${styles['Admin']}`}>
            <h1>Contratos</h1>
            {/*Create types*/}
            <div className={styles['dates']}>
                {dates && dates.map((date: Date) => <AppointmentCard data={date}/>)}
                {dates && dates.map((date: Date) => <AppointmentCard data={date}/>)}

            </div>

            <Uploader/>
        </div>
    );
};

export default Admin;