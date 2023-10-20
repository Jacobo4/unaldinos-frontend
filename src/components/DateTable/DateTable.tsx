import DateTableRow from '../DateRow/DateRow';
import styles from './DataTable.module.css'; // Import the CSS module

const DateTable = ({ data }) => {
  return (
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
  );
};

export default DateTable;
