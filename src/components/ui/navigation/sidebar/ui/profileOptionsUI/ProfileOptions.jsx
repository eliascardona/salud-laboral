import './ProfileOptions.css'

export default function ProfileOptions() {
    return (
        <div className={`user-profile`}>
            <div className="user-profile-content">
                <div className="user-avatar">
                    <ion-icon name="people-outline"></ion-icon>
                </div>
                <div className="user-details">
                    <span className="username">Hola suario</span>
                    <span className="user-role">Rol del Usuario</span>
                </div>
            </div>
        </div>
    )
}