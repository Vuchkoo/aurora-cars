"use client";
import { supabase } from "@/common/config/Supabase";
import Header from "@/components/Header";
import VehicleCard from "@/components/VehicleCard";
import CreateVehicle from "@/components/forms/CreateVehicle";
import {
  ActionIcon,
  Button,
  Card,
  Center,
  Divider,
  Flex,
  Grid,
  Image,
  Modal,
  Pagination,
  Paper,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  const [activePage, setPage] = useState(1);
  const [vehicleMake, setVehicleMake] = useState([]);
  const [vehicleModel, setVehicleModel] = useState([]);

  const getVehicleMake = async () => {
    const { data } = await supabase.from("vehicle_make").select();
    if (data) {
      setVehicleMake(data);
    } else console.log("Error");
  };

  const getVehicleModel = async () => {
    const { data } = await supabase.from("vehicle_model").select();
    if (data) {
      setVehicleModel(data);
    } else console.log("Error");
  };

  useEffect(() => {
    getVehicleMake();
    getVehicleModel();
  }, []);

  const removeVehicle = async (index, id) => {
    console.log(index, id);
    // const {data} = await supabase.from('vehicle_make').delete().eq('id', id)
  };

  const vehicles = vehicleMake?.map((item, index) => {
    const model = vehicleModel[index];
    console.log(model);
    return <VehicleCard data={item} model={model} key={index} index={index} />;
    // return (
    //   <Card withBorder radius="md" w={300}>
    //     <Paper>
    //       <Flex justify="flex-end">
    //         <ActionIcon onClick={() => removeVehicle(index, item.id)}>
    //           <IconX />
    //         </ActionIcon>
    //       </Flex>
    //       <Center>
    //         {" "}
    //         <Image
    //           src="https://i.imgur.com/ZL52Q2D.png"
    //           alt="Tesla Model S"
    //           width={200}
    //           height={200}
    //           fit="scale-down"
    //         />
    //       </Center>
    //       <Center>
    //         <Text fw={500}>
    //           {item.name} <span>{model.name}</span>
    //         </Text>
    //       </Center>
    //   <Center my={20}>
    //   <Button variant="outline" color="violet" size="xs">
    //     Edit
    //   </Button>
    // </Center>
    //     </Paper>
    //   </Card>
    // );
  });

  return (
    <>
      <Header />

      <Center my={20}>
        <Button color="violet" onClick={open}>
          Create a new vehicle
        </Button>
      </Center>

      <Modal opened={opened} onClose={close} title="Vehicle Creation">
        <CreateVehicle close={close} />
      </Modal>

      <Divider />

      <SimpleGrid mt={20} ml={20} cols={5}>
        {/* {vehicleMake.map((vehicle, index) => {
          return <VehicleCard data={vehicleMake} key={index} />;
        })} */}
        {vehicles}
      </SimpleGrid>

      <Divider my={20} />

      <Center>
        <Pagination
          value={activePage}
          onChange={setPage}
          total={5}
          color="violet"
        />
      </Center>
    </>
  );
}
