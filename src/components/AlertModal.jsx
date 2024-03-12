import React from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const AlertModal = ({ open, onClose, container, onColeta }) => {
  const handleColeta = () => {
    onColeta(container.id);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="modal" style={{ backgroundColor: "#ffffff", Width: "300px", height: "150px", padding: "20px", borderRadius: "10px" }}>
        <h2>Alerta de Coleta</h2>
        <p>O container {container.id} está com {container.volume}% de ocupação.</p>
        <Button variant="contained" onClick={handleColeta} style={{ marginTop: "10px" }}>Coletar</Button>
        <Button variant="outlined" onClick={onClose} style={{ marginLeft: "10px", marginTop: "10px" }}>Fechar</Button>
      </div>
    </Modal>
  );
};

export default AlertModal;
