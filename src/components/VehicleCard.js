import {
  ActionIcon,
  Button,
  Card,
  Center,
  Flex,
  Image,
  Text,
} from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import React from "react";

function VehicleCard({ data, model, index, removeVehicle }) {
  return (
    <>
      <Card withBorder radius="md" w={300} mr={20} mb={20}>
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
