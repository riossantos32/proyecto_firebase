import React, { useState, useEffect } from 'react';
import { Container, Button } from "react-bootstrap";
import ModalInstalacionIOS from "../components/inicio/ModalInstalacionIOS";
import { useTranslation } from 'react-i18next';

const Inicio = () => {

  const [solicitudInstalacion, setSolicitudInstalacion] = useState(null);
  const [mostrarBotonInstalacion, setMostrarBotonInstalacion] = useState(false);
  const [esDispositivoIOS, setEsDispositivoIOS] = useState(false);
  const [mostrarModalInstrucciones, setMostrarModalInstrucciones] = useState(false);

  const { t, i18n } = useTranslation();

  // Detectar dispositivo iOS
  useEffect(() => {
    const esIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setEsDispositivoIOS(esIOS);
  }, []);

  // Manejar evento beforeinstallprompt
  useEffect(() => {
    const manejarSolicitudInstalacion = (evento) => {
      evento.preventDefault();
      setSolicitudInstalacion(evento);
      setMostrarBotonInstalacion(true);
    };

    window.addEventListener("beforeinstallprompt", manejarSolicitudInstalacion);

    return () => {
      window.removeEventListener("beforeinstallprompt", manejarSolicitudInstalacion);
    };
  }, []);

  const instalacion = async () => {
    if (!solicitudInstalacion) return;
  
    try {
      await solicitudInstalacion.prompt();
      const { outcome } = await solicitudInstalacion.userChoice;
      console.log(outcome === "accepted" ? "Instalación aceptada" : "Instalación rechazada");
    } catch (error) {
      console.error("Error al intentar instalar la PWA:", error);
    } finally {
      setSolicitudInstalacion(null);
      setMostrarBotonInstalacion(false);
    }
  };

  const abrirModalInstrucciones = () => setMostrarModalInstrucciones(true);
  const cerrarModalInstrucciones = () => setMostrarModalInstrucciones(false);

  return (
    <>
      <Container className="mt-5">
        <br />
        <h1>{t('inicio.titulo')}</h1>
        <p>{t('inicio.descripcion')}</p>
        
        <br/>
        {!esDispositivoIOS && mostrarBotonInstalacion && (
          <div className="my-4">
            <Button className="sombra" variant="primary" onClick={instalacion}>
              Instalar app Ferreteria Selva <i className="bi-download"></i>
            </Button>
          </div>
        )}

        {esDispositivoIOS && (
          <div className="text-center my-4">
            <Button className="sombra" variant="primary" onClick={abrirModalInstrucciones}>
              Cómo instalar Ferreteria Selva en iPhone <i className="bi-phone"></i>
            </Button>
          </div>
        )}

        <ModalInstalacionIOS 
          mostrar={mostrarModalInstrucciones}
          cerrar={cerrarModalInstrucciones}
        />

      </Container>
    </>
  )
}

export default Inicio;