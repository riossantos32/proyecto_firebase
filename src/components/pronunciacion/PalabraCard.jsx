import React from "react";
import { Button, Alert } from "react-bootstrap";  // Componentes de react-bootstrap

// Componente PalabraCard
const PalabraCard = ({
  palabra,
  escuchando,
  resultado,
  error,
  onHablar,
  onNueva
}) => {
  return (
    <div className="text-center">
      {/* Título e indicación para el usuario */}
      <h4 className="mt-4">Pronuncia esta palabra:</h4>
      <h1 className="display-4">{palabra}</h1>

      {/* Botón para iniciar el reconocimiento de voz */}
      <Button
        variant="primary"
        onClick={onHablar}
        disabled={escuchando}  // Deshabilitado mientras se está escuchando
        className="mt-3"
      >
        {escuchando ? "Escuchando..." : "Hablar"}  {/* Cambia el texto dependiendo del estado */}
      </Button>

      {/* Botón para generar una nueva palabra */}
      <Button variant="secondary" onClick={onNueva} className="ms-2 mt-3">
        Nueva Palabra
      </Button>

      {/* Muestra el resultado del reconocimiento de voz si está disponible */}
      {resultado && (
        <Alert
          variant={resultado.correcto ? "success" : "danger"}  // Muestra el color correspondiente al resultado
          className="mt-4"
        >
          {resultado.correcto
            ? `¡Correcto! Dijiste "${resultado.texto}"`
            : `Incorrecto. Dijiste "${resultado.texto}", pero la palabra era "${palabra}"`}
        </Alert>
      )}

      {/* Muestra un mensaje de error si hay alguno */}
      {error && (
        <Alert variant="warning" className="mt-3">
          {error}
        </Alert>
      )}
    </div>
  );
};

export default PalabraCard;
