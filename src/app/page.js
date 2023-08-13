"use client";
import Header from "@/components/Header";
import VehicleCard from "@/components/VehicleCard";
import CreateVehicle from "@/components/forms/CreateVehicle";
import { Button, Center, Grid, Modal, SimpleGrid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Header />

      <Center my={20}>
        <Button color="violet" onClick={open}>
          Create a new vehicle
        </Button>
      </Center>

      <Modal opened={opened} onClose={close} title="Vehicle Creation">
        <CreateVehicle />
      </Modal>

      <SimpleGrid mt={20} ml={20} cols={5}>
        {Array.from({ length: 10 }).map(() => {
          return <VehicleCard />;
        })}
      </SimpleGrid>
    </>
  );
}
