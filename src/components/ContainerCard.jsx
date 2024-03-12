import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Button, Box, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ContainerCard = ({ container, onOpenModal, onAddVolume }) => {
  const { id, volume } = container;
  const [addedVolume, setAddedVolume] = useState(0);

  useEffect(() => {
    if (volume >= 80) {
      onOpenModal(id);
    }
  }, [volume, id, onOpenModal]);

  const getStatusColor = (volume) => {
    if (volume === 0) return "#98ee99";
    if (volume <= 20) return "#8bc34a";
    if (volume <= 40) return "#ffeb3b";
    if (volume <= 60) return "#ff9800";
    if (volume <= 80) return "#f44336";
    return "#d32f2f";
  };

  const containerStatus = () => {
    if (volume === 0) {
      return "Vazio";
    } else if (volume < 20) {
      return "Nível Baixo";
    } else if (volume < 40) {
      return "Nível Médio";
    } else if (volume < 60) {
      return "Nível Alto";
    } else if (volume < 80) {
      return "Nível Muito Alto";
    } else {
      return "Nível Crítico";
    }
  };

  const handleAddVolume = () => {
    onAddVolume(addedVolume);
    setAddedVolume(0);
  };

  const handleInputVolumeChange = (event) => {
    const inputVolume = parseInt(event.target.value);
    if (!isNaN(inputVolume)) {
      setAddedVolume(Math.min(inputVolume, 100 - volume));
    }
  };

  return (
    <Card
      variant="outlined"
      style={{
        border: `2px solid ${getStatusColor(volume)}`,
        marginBottom: "10px",
        position: "relative",
        height: "100%",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Container {id}
          <DeleteIcon
            style={{ color: getStatusColor(volume), fontSize: "40px", marginLeft: "5px", verticalAlign: "middle" }}
          />
        </Typography>
        <Typography variant="body1" gutterBottom>
          Volume: {volume}%
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <TextField
            type="number"
            label="Adicionar Volume (%)"
            value={addedVolume}
            onChange={handleInputVolumeChange}
            InputProps={{ inputProps: { min: 0, max: 100 - volume } }}
            style={{ marginBottom: "10px", width: "100px" }}
          />
          <Button
            variant="contained"
            onClick={handleAddVolume}
            disabled={addedVolume <= 0 || volume + addedVolume > 100}
            style={{ height: "56px" }}
          >
            Adicionar Volume
          </Button>
        </div>
        <Box
          sx={{
            position: "absolute",
            top: 5,
            right: 5,
            fontSize: "12px",
          }}
        >
          <span>{containerStatus()}</span>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onOpenModal(id)}
          disabled={volume === 0}
          style={{ marginTop: "10px", width: "100%" }}
        >
          Coletar
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContainerCard;
