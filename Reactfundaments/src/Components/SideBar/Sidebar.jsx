import styles from './Sidebar.module.css'


export function Sidebar() {
    return (
       <aside className={styles.sidebar}>
            <img  className={styles.cover} src="https://images.unsplash.com/photo-1682685797406-97f364419b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" alt="" />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/Zapotoczn.png" alt="" />
                <strong>
                    Filipe Zapotoczny
                </strong>
                
                <span>
                    web developer
                </span>
            </div>

            <footer>
                <a href="#">
                    editar seu perfil
                </a>
            </footer>
       </aside>
    );
}