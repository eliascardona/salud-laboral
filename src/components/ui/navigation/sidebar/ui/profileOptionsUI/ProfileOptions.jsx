import './ProfileOptions.css'

export default function ProfileOptions({ userMenuOpen, toggleUserMenu }) {
    return (
        <div className={`user-profile ${userMenuOpen ? 'open' : ''}`}>
            <div className="user-profile-content">
                <div className="user-avatar">
                    <ion-icon name="people-outline"></ion-icon>
                </div>
                <div className="user-details">
                    <span className="username">Hola suario</span>
                    <span className="user-role">Rol del Usuario</span>
                </div>
                <button
                    className="user-menu-btn"
                    onClick={toggleUserMenu}
                    aria-label="Toggle User Menu"
                >
                    {
                        userMenuOpen ? (
                            <ion-icon name="people-outline"></ion-icon>
                        ) : (
                            <ion-icon name="people-outline"></ion-icon>
                        )
                    }
                </button>
            </div>

            <ul className={`user-menu ${userMenuOpen ? 'open' : ''}`}>
                <li>
                    <a href="#">
                        <ion-icon name="people-outline"></ion-icon>
                        <span>Editar Perfil</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <ion-icon name="people-outline"></ion-icon>
                        <span>Configuración</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <ion-icon name="people-outline"></ion-icon>
                        <span>Ayuda</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <ion-icon name="people-outline"></ion-icon>
                        <span>Cerrar Sesión</span>
                    </a>
                </li>
            </ul>

        </div>
    )
}