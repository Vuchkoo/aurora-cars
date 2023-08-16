import { supabase } from "@/common/config/Supabase";
import {
  Button,
  Center,
  Flex,
  Group,
  SimpleGrid,
  Stepper,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useState } from "react";

function CreateVehicle({ close }) {
  const [activeStep, setActiveStep] = useState(0);

  const vehicleMakeForm = useForm({
    initialValues: {
      id: undefined,
      name: "",
      abbrv: "",
    },
  });

  const vehicleModelForm = useForm({
    initialValues: {
      make_id: vehicleMakeForm.values.id,
      name: "",
      abbrv: "",
    },
  });

  const nextStep = async () => {
    if (activeStep === 0) {
      const { data, error } = await supabase
        .from("vehicle_make")
        .upsert({ ...vehicleMakeForm.values })
        .select()
        .single();
      vehicleModelForm.setFieldValue("make_id", data.id);
      if (error) {
        console.log("Error");
      } else console.log(data);
    }
    setActiveStep((current) => (current < 2 ? current + 1 : current));
  };

  const prevStep = () =>
    setActiveStep((current) => (current > 0 ? current - 1 : current));

  const createNewModel = async () => {
    const { data, error } = await supabase
      .from("vehicle_model")
      .upsert({ ...vehicleModelForm.values });
    if (error) {
      console.log("Error");
    } else console.log(data);
  };

  console.log(vehicleMakeForm.values);
  console.log(vehicleModelForm.values);

  return (
    <>
      <Stepper
        active={activeStep}
        onStepClick={setActiveStep}
        breakpoint="sm"
        color="violet"
      >
        <Stepper.Step label="Vehicle Name"></Stepper.Step>
        <Stepper.Step label="Vehicle Model"></Stepper.Step>
      </Stepper>

      <form>
        {activeStep === 0 ? (
          <>
            <TextInput
              mt="md"
              label="Name"
              placeholder="e.g. Volkswagen"
              withAsterisk
              {...vehicleMakeForm.getInputProps("name")}
            />

            <TextInput
              mt="md"
              label="Abbrv"
              placeholder="e.g. VW"
              {...vehicleMakeForm.getInputProps("abbrv")}
            />
          </>
        ) : (
          activeStep === 1 && (
            <>
              <TextInput
                mt="md"
                label="Model"
                placeholder="e.g. Golf"
                withAsterisk
                {...vehicleModelForm.getInputProps("name")}
              />

              <TextInput
                mt="md"
                label="Abbrv"
                placeholder="e.g. GTI"
                {...vehicleModelForm.getInputProps("abbrv")}
              />
            </>
          )
        )}
      </form>

      <Group position="center" spacing={20} mt={20}>
        {/* <Button
          onClick={prevStep}
          display={activeStep === 0 && "none"}
          variant="outline"
          radius={50}
          color="violet"
        >
          Back
        </Button> */}
        <Button
          onClick={() => {
            if (activeStep === 0) {
              nextStep();
            } else if (activeStep === 1) {
              createNewModel();
              close();
            }
          }}
          radius={50}
          color="violet"
        >
          {activeStep < 1 ? "Next" : "Submit"}
        </Button>
      </Group>
    </>
  );
}

export default CreateVehicle;
