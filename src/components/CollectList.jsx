import React from "react";
import { List, ListItem, ListItemText, Divider } from "@mui/material";

const ColetaList = ({ coletas }) => {
  return (
    <div>
      <h2>Lista de Coletas</h2>
      <List>
        {coletas.map((coleta, index) => (
          <div key={index}>
            <ListItem>
              <ListItemText
                primary={`Container ${coleta.containerId}`}
              />
              <ListItemText
                              secondary={`Volume Coletado: ${coleta.volume}%`}

      
              />
              <ListItemText
                         secondary={`Dia e Hora: ${coleta.dataHora}`}
              />
            </ListItem>
            {index < coletas.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </div>
  );
};

export default ColetaList;
