import styles from './Lojinha.module.scss'
import Logo from '../../assets/imgs/logo.jpg'
import { useState } from 'react';
import Buscador from './Buscador';
import Filtros from './Filtros';


export default function Disquetes() {
    const [busca, setBusca] = useState("");

    return (
        <main>
            <nav className={styles.menu}>
                <img src={ Logo } alt="logo"/>
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    "A melhor loja de discos da região!!"
                </div>
            </header>
            <section className={styles.discos}>
                <h3 className={styles.discos__titulo}>Destaques</h3>
                <Buscador busca={busca} setBusca={setBusca}/>
                <div className={styles.discos__filtros}>
                    <Filtros/>
                </div>
            </section>
            
        </main>
    );
}