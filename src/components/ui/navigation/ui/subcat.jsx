import { useNavigate } from 'react-router-dom';

export default function Subcat({ titulo, link, iconName, color }) {
  const navigate = useNavigate();

  const GoTo = (url) => {
    navigate(url);  // Usa navigate para cambiar de ruta
  };

  return (
    <li>
      <a 
        href="#"
        onClick={(e) => {
          e.preventDefault();  // Previene el comportamiento por defecto
          GoTo(link);  // Navega usando la función GoTo
        }}
      >
        {/* Icono con color personalizado */}
        <ion-icon 
          name={iconName} 
          style={{
            fontSize: '10px',
            color: color || '#333',  // Aplica el color al ícono
            marginRight: '8px'
          }} 
          className="Navbar__sub-icon">
        </ion-icon>

        {/* Título con estilo de color gris */}
        <span 
          style={{
            color: '#666'  // Cambia el color del texto a gris
          }}
        >
          {titulo}
        </span>
      </a>
    </li>
  );
}
