import React from 'react';
import { CgSearch } from 'react-icons/cg';
import styles from './Buscador.module.scss';


interface Props {
    busca: string,
    setBusca : React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({busca, setBusca}: Props) {
    return (
        <div className={styles.buscador}>
            <input
               value={busca}
               onChange={(evento) => setBusca(evento.target.value)}            
            />
            <CgSearch
               size={20}
               color='$dark-grey'
            />
        </div>
    )
}