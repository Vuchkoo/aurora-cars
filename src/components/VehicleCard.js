import { supabase } from "@/common/config/Supabase";
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Center,
  Flex,
  Group,
  Image,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import React from "react";

function VehicleCard({ data, model, index }) {
  const removeVehicle = async (index, id) => {
    // console.log(index, id);
    const { data } = await supabase.from("vehicle_make").delete().eq("id", id);
    if (data) {
      console.log(index, id);
    }
  };

  return (
    <>
      <Card withBorder radius="md" w={300}>
        <Card.Section withBorder>
          <Flex justify="flex-end">
            <ActionIcon onClick={() => removeVehicle(index, data.id)}>
              <IconX />
            </ActionIcon>
          </Flex>
          <Center>
            <Image
              src="https://i.imgur.com/ZL52Q2D.png"
              alt="Tesla Model S"
              width={200}
              height={200}
              fit="scale-down"
            />
          </Center>
        </Card.Section>

        <Card.Section>
          <Center mt="md">
            <Text fw={500}>
              {data?.name} <span>{model?.name}</span>
            </Text>
          </Center>
        </Card.Section>

        <Card.Section>
          <Center my={20}>
            <Button variant="outline" color="violet" size="xs">
              Edit
            </Button>
          </Center>
        </Card.Section>
      </Card>
    </>
  );
}

export default VehicleCard;
