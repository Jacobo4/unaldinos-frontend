import {useEffect, useState} from "react";
import DateTable from "@components/DateTable/DateTable.tsx";
import styles from './Admin.module.css';

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
                {dates && <DateTable data={dates} />}
            </div>
        </div>
    );
};

export default Admin;