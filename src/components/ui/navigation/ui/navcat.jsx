export default function Navcat(
  { titulo, iconName, color, handleToggle, toggleParam, openSubmenus={}, children }
) {
  return (
    <ul className="Navbar__nav-list">
      <li>
        <a 
          href="#"
          onClick={() => {
            handleToggle(toggleParam);
          }}
        >
          {/* Icono con color personalizado */}
          <ion-icon 
            name={iconName} 
            style={{
              fontSize: '25px',
              color: color || '#333',
              marginRight: '10px'
            }} 
            className="Navbar__icon">
          </ion-icon>

          <span>{titulo}</span>

          {/* Chevron dinámico basado en el estado del submenú */}
          {
            openSubmenus[toggleParam] ? (
              <ion-icon 
                name="chevron-up-outline" 
                style={{
                  fontSize: '20px',
                  color: '#666',
                  marginLeft: 'auto'
                }} 
                className="Navbar__chevron">
              </ion-icon>
            ) : (
              <ion-icon 
                name="chevron-down-outline"  
                style={{
                  fontSize: '20px',
                  color: '#999',
                  marginLeft: 'auto'
                }} 
                className="Navbar__chevron">
              </ion-icon>
            )
          }
        </a>

        {/* Children: mostrar contenido con transición */}
        <div 
          style={{
            maxHeight: openSubmenus[toggleParam] ? '200px' : '0px',  // Cambiar entre abierto y cerrado
            overflow: 'hidden',
            opacity: openSubmenus[toggleParam] ? 1 : 0,  // Cambiar la opacidad
            transition: 'max-height 0.3s ease, opacity 0.3s ease'  // Añadir transición de opacidad
          }}
        >
          {children}
        </div>
      </li>
    </ul>
  );
}
