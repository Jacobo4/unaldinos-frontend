// Core
import React, {useState} from "react";
// Styles
import styles from './DateCard.module.css';
// Icons
import {BiSolidLockAlt, BiSolidLockOpenAlt} from "react-icons/bi";
import {AiOutlineStar, AiFillStar} from "react-icons/ai";

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
    toggleFavoriteCb: (isFavorite: boolean) => void;
}

/**
 * DateCard component
 * @param data Dates data
 * @constructor
 * @return JSX.Element
 * @category Components
 */
const DateCard: React.FC<Props> = ({data}) => {

    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    /**
     * Toggle favorite status
     */
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    }
    return (
        <div className={`${styles['DateCard']} shadow-md rounded-md`}>
            <div className={styles['header']}>
                <div>
                    <span>Paciente: {data.fields.paciente}</span>

                </div>

                <span>Doctor: {data.fields.doctor}</span>
                <span>Especialidad: {data.fields.especialidad}</span>
                <span>Motivo: {data.fields.motivo}</span>
                {/*<div className={'text-2xl text-yellow-500 hover:cursor-pointer'} onClick={toggleFavorite}>*/}
                {/*    {isFavorite ? <AiFillStar/> : <AiOutlineStar/>}*/}
                {/*</div>*/}

            </div>

            {/*<div className={styles['description']}>*/}
            {/*    {data.isPrivate*/}
            {/*            ? <><BiSolidLockAlt/> Private</>*/}
            {/*            : <><BiSolidLockOpenAlt/> Public</>*/}
            {/*        }*/}
            {/*</div>*/}

            <hr/>

            {/*<div className={styles['languages']}>*/}
            {/*    {data.languages.edges.map((language,i) => {*/}
            {/*       return <span key={i} className={'rounded text-white text-xs p-1'} style={{backgroundColor: language.node.color}}>{language.node.name}</span>*/}
            {/*    })}*/}
            {/*</div>*/}
            <h4 className={'text-xs'}>Last updated: {new Date(data.fields.fecha).toLocaleDateString()}</h4>
        </div>
    )


}

export default DateCard;
