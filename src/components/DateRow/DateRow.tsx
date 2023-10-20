import React from "react";
import styles from "./DateCard.module.css";

export interface Date {
    model: string;
    pk: number;
    fields: {
        paciente: string;
        doctor: string;
        especialidad: string;
        fecha: string;
        motivo: string;
        estado_cita: string;
    }
}

interface Props {
    data: Date;
}

const dataTableRow:React.FC<Props> = ({ data }) => {
  return (
    <tr>
      <td>{data.fields.paciente}</td>
      <td>{data.fields.doctor}</td>
      <td>{data.fields.especialidad}</td>
      <td>{data.fields.fecha}</td>
      <td>{data.fields.motivo}</td>
      <td>{data.fields.estado_cita}</td>
    </tr>
  );
};

export default dataTableRow;
