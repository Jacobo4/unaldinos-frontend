import React from "react";
import DateTableRow from '../DateCard/DateCard';
import styles from './DataTable.module.css'; // Import the CSS module

const DateTable = ({ data }) => {
  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Paciente</th>
            <th>Doctor</th>
            <th>Especialidad</th>
            <th>Fecha</th>
            <th>Motivo</th>
            <th>EstadoCita</th>
          </tr>
        </thead>
        <tbody>
          {data.map((date, index) => (
            <DateTableRow key={index} data={date} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DateTable;
