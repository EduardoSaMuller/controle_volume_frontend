import React from "react";
import { List, ListItem, ListItemText, Divider, Stack, useMediaQuery, useTheme } from "@mui/material";

const ColetaList = ({ coletas }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <h2>Lista de Coletas</h2>
      <List>
        {coletas.map((coleta, index) => (
          <div key={index}>
            {isMobile ? (
              <ListItem>
                <Stack spacing={1}>
                  <ListItemText
                    primary={`Container ${coleta.containerId}`}
                  />
                  <ListItemText
                    secondary={`Volume Coletado: ${coleta.volume}%`}
                  />
                  <ListItemText
                    secondary={`Dia e Hora: ${coleta.dataHora}`}
                  />
                </Stack>
              </ListItem>
            ) : (
              <ListItem>
                <ListItemText
                  primary={`Container ${coleta.containerId}`}
                  secondary={`Volume Coletado: ${coleta.volume}% | Dia e Hora: ${coleta.dataHora}`}
                />
              </ListItem>
            )}
            {index < coletas.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </div>
  );
};

export default ColetaList;
