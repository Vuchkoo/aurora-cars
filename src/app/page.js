"use client";
import { supabase } from "@/common/config/Supabase";
import Header from "@/components/Header";
import VehicleCard from "@/components/VehicleCard";
import CreateVehicle from "@/components/forms/CreateVehicle";
import EditVehicle from "@/components/forms/EditVehicle";
import {
  ActionIcon,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  Image,
  LoadingOverlay,
  Modal,
  Pagination,
  Table,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconLayoutGrid,
  IconLayoutList,
  IconPencil,
  IconX,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [
    openedCreateModal,
    { open: openCreateModal, close: closeCreateModal },
  ] = useDisclosure(false);

  const [openedEditModal, { open: openEditModal, close: closeEditModal }] =
    useDisclosure(false);

  const [activePage, setPage] = useState(1);
  const [vehicleMake, setVehicleMake] = useState([]);
  const [vehicleModel, setVehicleModel] = useState([]);

  const [iconGrid, setIconGrid] = useState(true);
  const [iconList, setIconList] = useState(false);
  const [loading, setLoading] = useState(false);

  const [minLoad, setMinLoad] = useState(0);
  const [maxLoad, setMaxLoad] = useState(9);
  const [vehicleCount, setVehicleCount] = useState(null);

  const [editingVehicleId, setEditingVehicleId] = useState("");

  const getVehicleMake = async () => {
    setLoading(true);
    const { data, count } = await supabase
      .from("vehicle_make")
      .select("*", { count: "exact" })
      .range(minLoad, maxLoad);
    if (data) {
      setVehicleMake(data);
      setVehicleCount(count);
    } else console.log("Error");
    setLoading(false);
  };

  const getVehicleModel = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("vehicle_model")
      .select("*", { count: "exact" })
      .range(minLoad, maxLoad);
    if (data) {
      setVehicleModel(data);
    } else console.log("Error");
    setLoading(false);
  };

  useEffect(() => {
    getVehicleMake();
    getVehicleModel();
  }, [minLoad, maxLoad]);

  const removeVehicle = async (index, id) => {
    setLoading(true);
    const { error } = await supabase.from("vehicle_make").delete().eq("id", id);
    if (error) {
      console.log("Error");
    }
    setLoading(false);
  };

  const changePage = (prevPage) => {
    if (activePage > prevPage) {
      setPage((prevPage) => prevPage - 1);
      setMinLoad((prevIndex) => prevIndex - 10),
        setMaxLoad((prevIndex) => prevIndex - 10);
    } else {
      setPage((prevPage) => prevPage + 1),
        setMinLoad((prevIndex) => prevIndex + 10),
        setMaxLoad((prevIndex) => prevIndex + 10);
    }
  };

  const vehicles = vehicleMake?.map((item, index) => {
    const model = vehicleModel[index];
    if (iconGrid)
      return (
        <VehicleCard
          data={item}
          model={model}
          key={index}
          index={index}
          removeVehicle={removeVehicle}
          open={openEditModal}
          setEditingVehicleId={setEditingVehicleId}
        />
      );
    else
      return (
        <tr key={index}>
          <td>
            <Image
              src="https://i.imgur.com/ZL52Q2D.png"
              alt="Tesla Model S"
              width={100}
              height={100}
              fit="scale-down"
            />
          </td>

          <td width="100%">
            <Flex direction="column">
              <Text fw={500}>{item.name}</Text>
              <Text>{model.name}</Text>
            </Flex>
          </td>

          <td>
            <Flex>
              <ActionIcon color="violet" variant="light">
                <IconPencil
                  onClick={() => {
                    openEditModal();
                    setEditingVehicleId(item.id);
                  }}
                />
              </ActionIcon>
              <ActionIcon
                color="violet"
                onClick={() => removeVehicle(index, item.id)}
              >
                <IconX />
              </ActionIcon>
            </Flex>
          </td>
        </tr>
      );
  });

  return (
    <>
      <Header />

      <Flex justify="center" align="center" direction="column" my={20}>
        <Button color="violet" onClick={openCreateModal}>
          Create a new vehicle
        </Button>
        <Divider my={20} w={400} />
      </Flex>

      <Modal
        opened={openedCreateModal}
        onClose={closeCreateModal}
        title="Vehicle Creation"
      >
        <CreateVehicle close={closeCreateModal} />
      </Modal>

      <Modal
        opened={openedEditModal}
        onClose={closeEditModal}
        title="Edit Vehicle"
      >
        <EditVehicle
          editingVehicleId={editingVehicleId}
          opened={openedEditModal}
          close={closeEditModal}
        />
      </Modal>

      <Flex ml={20}>
        <ActionIcon
          variant={iconGrid ? "light" : "transparent"}
          color={iconGrid ? "violet" : "gray"}
          mr={10}
          onClick={() => {
            setIconGrid(true);
            setIconList(false);
          }}
        >
          <IconLayoutGrid />
        </ActionIcon>
        <ActionIcon
          variant={iconList ? "light" : "transparent"}
          color={iconList ? "violet" : "gray"}
          mr={10}
          onClick={() => {
            setIconList(true);
            setIconGrid(false);
          }}
        >
          <IconLayoutList />
        </ActionIcon>
      </Flex>

      {loading ? (
        <LoadingOverlay visible={loading} loaderProps={{ color: "violet" }} />
      ) : iconGrid ? (
        <Center>
          <Grid my={20} ml={20} cols={5} justify="center">
            {vehicles}
          </Grid>
        </Center>
      ) : (
        <Table highlightOnHover w="100%" striped>
          <tbody>{vehicles}</tbody>
        </Table>
      )}

      <Flex justify="center" align="center" direction="column" mb={50}>
        <Divider my={20} w={400} />
        <Pagination
          value={activePage}
          onChange={changePage}
          total={Math.floor(vehicleCount / 10 + 1)}
          color="violet"
        />
      </Flex>
    </>
  );
}
