import { useState } from 'react';
import { main_cat } from '../../../../lib/utils/(infoForNavbarUI)/items';
import { sub_cat } from '../../../../lib/utils/(infoForNavbarUI)/items'
import ProfileOptions from './profileOptionsUI/ProfileOptions';
import LogicSidebar from './logicSidebar/LogicSidebar';
import Navcat from './ui/navcat';
import Subcat from './ui/subcat'
import './navbar.css';


export default function SideNavbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [scrollbarVisible, setScrollbarVisible] = useState(true);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleSubmenuToggle = (submenuKey) => {
    setOpenSubmenus((prevSubmenus) => {
      const newSubmenus = { ...prevSubmenus };

      // Obtener el nivel del submenú actual
      const level = submenuKey.split('.').length;

      // Obtener el padre del submenú actual
      const parentKey = submenuKey.split('.').slice(0, -1).join('.');

      // Cerrar otros submenús en el mismo nivel y padre
      Object.keys(newSubmenus).forEach((key) => {
        const keyLevel = key.split('.').length;
        const keyParent = key.split('.').slice(0, -1).join('.');

        if (
          keyLevel === level &&
          keyParent === parentKey &&
          key !== submenuKey
        ) {
          newSubmenus[key] = false;
        }
      });

      // Alternar el estado del submenú actual
      newSubmenus[submenuKey] = !newSubmenus[submenuKey];

      return newSubmenus;
    });
  };

  const handleSidebarActivity = () => {
    // Mostrar el scrollbar si está oculto
    if (!scrollbarVisible) {
      setScrollbarVisible(true);
    }
    // Limpiar el timeout anterior
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }
    // Configurar un nuevo timeout para ocultar el scrollbar después de 2 segundos de inactividad
    hideTimeout.current = setTimeout(() => {
      setScrollbarVisible(false);
    }, 2000); // Puedes ajustar el tiempo según prefieras
  };

  return (
      <LogicSidebar
        navOpen={navOpen}
        scrollbarVisible={scrollbarVisible}
        onScrollCB={handleSidebarActivity}
        onMouseEnterCB={handleSidebarActivity}
        onMouseMoveCB={handleSidebarActivity}
      >
        <>
        <button
          className={`${navOpen ? 'Navbar__btn-open' : 'Navbar__btn-close'}`}
          onClick={toggleNav}
          aria-label={navOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={navOpen}
        >
          {
            navOpen ? (
              <ion-icon name="people-outline"></ion-icon>
            ) : (
              <ion-icon name="people-outline"></ion-icon>
            )
          }
        </button>
          <ProfileOptions userMenuOpen={userMenuOpen} toggleUserMenu={toggleUserMenu} />
          <div className="Navbar__nav-sections">
            <div className="Navbar__nav-title">Navigation</div>
            {
              main_cat.map((items, i) => (
                <Navcat
                  titulo={items.titulo}
                  iconName={items.iconName}
                  color={items.color}
                  handleToggle={handleSubmenuToggle}
                  toggleParam={items.titulo}  // Usar título (o cualquier valor único) como toggleParam
                  openSubmenus={openSubmenus}
                  key={i + 1}
                >
                  {
                    sub_cat.filter(item => item.id === i).map((item, j) => (
                        <Subcat
                          titulo={item.titulo}
                          link={item.link}
                          color={item.color}
                          iconName={item.iconName}
                          key={j + 1}
                        />
                      ))
                  }
                </Navcat>
              ))
            }
          </div>
        </>
      </LogicSidebar>
  )
}
