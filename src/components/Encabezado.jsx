import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/ferreteria_selva_logo.png";
import { useAuth } from "../database/authcontext";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Container, Nav, Navbar, Offcanvas, NavDropdown  } from "react-bootstrap";
import "../App.css";
import { useTranslation } from 'react-i18next';

const Encabezado = () => {

  const [isCollapsed, setIsCollapsed] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  const cambiarIdioma = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleLogout = async () => {
    try {
      // Cerrar el offcanvas antes de proceder
      setIsCollapsed(false);

      // Eliminar variables almacenadas en localStorage
      localStorage.removeItem("adminEmail");
      localStorage.removeItem("adminPassword");

      // Cerrar sesión
      await logout();

      // Redirigir al inicio
      navigate("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const handleToggle = () => setIsCollapsed(!isCollapsed);

  // Funciones de navegación
  const handleNavigate = (path) => {
    navigate(path);
    setIsCollapsed(false);
  };

  return (
    <Navbar expand="md" fixed="top" className="color-navbar">
      <Container>
        <Navbar.Brand onClick={() => handleNavigate("/inicio")} className="text-white" style={{ cursor: "pointer" }}>
          <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />{" "}
          <strong>Ferreteria</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" onClick={handleToggle} />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-sm"
          aria-labelledby="offcanvasNavbarLabel-expand-sm"
          placement="end"
          show={isCollapsed}
          onHide={() => setIsCollapsed(false)}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id="offcanvasNavbarLabel-expand-sm"
              className={isCollapsed ? "color-texto-marca" : "text-white"}
            >
              Menú
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">

              <Nav.Link
                onClick={() => handleNavigate("/inicio")}
                className={isCollapsed ? "color-texto-marca" : "text-white"}
              >
                {isCollapsed ? <i className="bi-house-door-fill me-2"></i> : null}
                <strong>{t('menu.inicio')}</strong>
              </Nav.Link>

              <Nav.Link
                onClick={() => handleNavigate("/categorias")}
                className={isCollapsed ? "color-texto-marca" : "text-white"}
              >
                {isCollapsed ? <i className="bi-bookmark-check-fill me-2"></i> : null}
                <strong>{t('menu.categorias')}</strong>
              </Nav.Link>

              <Nav.Link
                onClick={() => handleNavigate("/productos")}
                className={isCollapsed ? "color-texto-marca" : "text-white"}
              >
                {isCollapsed ? <i className="bi-bag-heart-fill me-2"></i> : null}
                <strong>{t('menu.productos')}</strong>
              </Nav.Link>

              <Nav.Link
                onClick={() => handleNavigate("/catalogo")}
                className={isCollapsed ? "color-texto-marca" : "text-white"}
              >
                {isCollapsed ? <i className="bi-file-earmark-richtext-fill me-2"></i> : null}
                <strong>{t('menu.catalogo')}</strong>
              </Nav.Link>

              <Nav.Link
                onClick={() => handleNavigate("/libros")}
                className={isCollapsed ? "color-texto-marca" : "text-white"}
              >
                {isCollapsed ? <i className="bi-book me-2"></i> : null}
                <strong>{t('menu.libros')}</strong>
              </Nav.Link>

              <Nav.Link
                onClick={() => handleNavigate("/clima")}
                className={isCollapsed ? "color-texto-marca" : "text-white"}
              >
                {isCollapsed ? <i className="bi-cloud-sun-fill me-2"></i> : null}
                <strong>{t('menu.clima')}</strong>
              </Nav.Link>

              <Nav.Link
                onClick={() => handleNavigate("/pronunciacion")}
                className={isCollapsed ? "color-texto-marca" : "text-white"}
              >
                {isCollapsed ? <i className="bi-cloud-sun-fill me-2"></i> : null}
                <strong>{t('menu.pronunciacion')}</strong>
              </Nav.Link>

              <Nav.Link
                onClick={() => handleNavigate("/estadisticas")}
                className={isCollapsed ? "color-texto-marca" : "text-white"}
              >
                {isCollapsed ? <i className="bi-cloud-sun-fill me-2"></i> : null}
                <strong>{t('menu.estadisticas')}</strong>
              </Nav.Link>

              <Nav.Link
                onClick={() => handleNavigate("/empleados")}
                className={isCollapsed ? "color-texto-marca" : "text-white"}
              >
                {isCollapsed ? <i className="bi-cloud-sun-fill me-2"></i> : null}
                <strong>{t('menu.empleados')}</strong>
              </Nav.Link>

              <NavDropdown 
                title={
                  <span>
                    <i className="bi-translate me-2"></i>
                    {isCollapsed && <span>{t('menu.idioma')}</span>}
                  </span>
                }
                  id="basic-nav-dropdown"  
                  className={isCollapsed ? "color-texto-marca" : "texto-blanco"}
                >
                <NavDropdown.Item
                  onClick={() => cambiarIdioma('es')}
                  className="text-black"
                >
                  <strong>{t('menu.español')}</strong>
                </NavDropdown.Item>

                <NavDropdown.Item
                  className="text-black"
                  onClick={() => cambiarIdioma('en')}
                >
                  <strong>{t('menu.ingles')}</strong>
                </NavDropdown.Item>

              </NavDropdown>

              {isLoggedIn ? (
                <>
                  <Nav.Link onClick={handleLogout} className={isCollapsed ? "text-black" : "text-white"}>
                  {isCollapsed ? <i className="bi-box-arrow-in-right me-2"></i> : null}
                    {t('menu.cerrarSesion')}
                  </Nav.Link>
                </>
              ) : location.pathname === "/" && (
                <Nav.Link
                  onClick={() => handleNavigate("/")}
                  className={isCollapsed ? "text-black" : "text-white"}
                >
                  {t('menu.iniciarSesion')}
                </Nav.Link>
              )}

            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Encabezado;