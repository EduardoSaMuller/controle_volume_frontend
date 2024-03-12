import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import ContainerCard from "../components/ContainerCard";
import AlertModal from "../components/AlertModal";
import ColetaList from "../components/CollectList";
import ContainerLegend from "../components/ContainerLegend";
import Header from "../components/Header";
const Home = () => {
  const [containers, setContainers] = useState([
    { id: 1, volume: 10 },
    { id: 2, volume: 50 },
    { id: 3, volume: 80 },
  ]);
  const [selectedContainer, setSelectedContainer] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [coletas, setColetas] = useState([]);

  const handleColeta = (containerId, isAutomatic) => {
    const container = containers.find((c) => c.id === containerId);
    const now = new Date();
    const horaMinuto = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dataHora = `${now.toLocaleDateString()} - ${horaMinuto}`;
    const coleta = {
      containerId: containerId,
      volume: container.volume,
      hora: horaMinuto,
      dataHora: dataHora,
     
    };
    setColetas([...coletas, coleta]);
    const updatedContainers = containers.map((c) =>
      c.id === containerId ? { ...c, volume: 0 } : c
    );
    setContainers(updatedContainers);
  };

  const handleAddVolume = (containerId, volumeToAdd) => {
    const updatedContainers = containers.map((c) =>
      c.id === containerId ? { ...c, volume: c.volume + volumeToAdd } : c
    );
    setContainers(updatedContainers);
    if (
      updatedContainers.find(
        (c) => c.id === containerId && c.volume >= 80
      )
    ) {
      const selectedContainer = updatedContainers.find(
        (c) => c.id === containerId
      );
      setSelectedContainer(selectedContainer);
      setOpenModal(true);
      handleColeta(containerId, true);
    }
  };

  const handleOpenModal = (containerId) => {
    const container = containers.find((container) => container.id === containerId);
    setSelectedContainer(container);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedContainer(null);
    setOpenModal(false);
  };

  return (
<><Header/>
<Container style={{border: "1px solid gray" , borderRadius: "10px", padding: '15px', marginTop: '30px'}}>
       <ContainerLegend />
      <Grid container spacing={2}>
        {containers.map((container) => (
          <Grid item xs={12} sm={6} md={4} key={container.id}>
            <ContainerCard
              container={container}
              onOpenModal={() => handleOpenModal(container.id)}
              onColeta={() => handleColeta(container.id, false)}
              onAddVolume={(volume) => handleAddVolume(container.id, volume)}
            />
          </Grid>
        ))}
      </Grid>
      {selectedContainer && (
        <AlertModal
          open={openModal}
          onClose={handleCloseModal}
          container={selectedContainer}
          onColeta={() => handleColeta(selectedContainer.id, true)}
        />
      )}
      <ColetaList coletas={coletas} />
    </Container>
    </>
  );
};

export default Home;
