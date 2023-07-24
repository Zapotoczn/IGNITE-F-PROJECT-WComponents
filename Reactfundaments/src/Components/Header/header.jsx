import styles from '../Header/Header.module.css';
import ignitelogo from '../../img/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={ignitelogo} alt="" />
        </header>
    )
}