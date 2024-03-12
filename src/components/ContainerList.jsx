import React from "react";
import { Grid } from "@mui/material";
import ContainerCard from "./ContainerCard";

const ContainerList = ({ containers, onOpenModal }) => {
  return (
    <Grid container spacing={2}>
      {containers.map((container) => (
        <Grid item xs={12} sm={6} md={4} key={container.id}>
          <ContainerCard
            container={container}
            onOpenModal={() => onOpenModal(container.id)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ContainerList;
