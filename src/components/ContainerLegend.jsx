import React from "react";
import { Box, Typography,Divider  } from "@mui/material";
import Legend from "./Legend";

const ContainerLegend = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Legendas:
      </Typography>
      <div style={{display : 'flex', justifyContent: "space-around"}}>
      <Legend color="#98ee99" text="Vazio" />
      <Legend color="#8bc34a" text="Nível Baixo" />
      <Legend color="#ffeb3b" text="Nível Médio" />
      <Legend color="#ff9800" text="Nível Alto" />
      <Legend color="#f44336" text="Nível Muito Alto" />
      <Legend color="#d32f2f" text="Nível Crítico" />
      <Divider style={{ margin: "10px 0" }} />
      </div>
    </Box>
  );
};

export default ContainerLegend;
