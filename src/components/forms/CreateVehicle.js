import { Button, Center, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";

function CreateVehicle() {
  const vehicleForm = useForm({
    initialValues: {
      name: "",
      abrv: "",
      model: "",
    },
  });

  return (
    <>
      <form>
        <TextInput
          mt="md"
          label="Name"
          placeholder="e.g. Volkswagen"
          withAsterisk
          //   {...vehicleForm.getInputProps("name")}
        />

        <TextInput
          mt="md"
          label="Abrv"
          placeholder="e.g. VW"
          //   {...vehicleForm.getInputProps("abrv")}
        />

        <TextInput
          mt="md"
          label="Model"
          placeholder="e.g. Golf"
          withAsterisk
          //   {...vehicleForm.getInputProps("model")}
        />

        <Center mt={40}>
          <Button color="violet">Create</Button>
        </Center>
      </form>
    </>
  );
}

export default CreateVehicle;
