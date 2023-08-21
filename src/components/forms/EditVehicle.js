import { supabase } from "@/common/config/Supabase";
import { Button, Group, Stepper, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useEffect, useState } from "react";

export default function EditVehicle({ opened, close, editingVehicleId }) {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const [editingVehicleMake, setEditingVehicleMake] = useState([]);
  const [editingVehicleModel, setEditingVehicleModel] = useState([]);

  const editingVehicleMakeForm = useForm({
    initialValues: {
      name: "",
      abbrv: "",
    },
  });

  const editingVehicleModelForm = useForm({
    initialValues: {
      name: "",
      abbrv: "",
    },
  });

  const getEditingVehicleMake = async () => {
    if (opened) {
      setLoading(true);
      const { data } = await supabase
        .from("vehicle_make")
        .select()
        .eq("id", editingVehicleId)
        .single();
      if (data) {
        setEditingVehicleMake(data);
      } else console.log("Error");
      setLoading(false);
    } else setEditingVehicleMake([]);
  };

  const getEditingVehicleModel = async () => {
    if (opened) {
      setLoading(true);
      const { data } = await supabase
        .from("vehicle_model")
        .select()
        .eq("make_id", editingVehicleId)
        .single();
      if (data) {
        setEditingVehicleModel(data);
      } else console.log("Error");
      setLoading(false);
    } else setEditingVehicleModel([]);
  };

  useEffect(() => {
    getEditingVehicleMake();
    getEditingVehicleModel();
  }, []);

  const nextEditStep = async () => {
    if (activeStep === 0) {
      const { data, error } = await supabase
        .from("vehicle_make")
        .update({ ...editingVehicleMakeForm.values })
        .eq("id", editingVehicleId);
      if (error) {
        console.log("Error");
      } else console.log(data);
    }
    setActiveStep((current) => (current < 2 ? current + 1 : current));
  };

  const editVehicleModel = async (index, id) => {
    const { data } = await supabase
      .from("vehicle_model")
      .update({ ...editingVehicleModelForm.values })
      .eq("make_id", editingVehicleId);
    if (data) console.log(index, id);
    else console.log("Error");
  };

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
              placeholder={editingVehicleMake.name}
              required
              withAsterisk
              {...editingVehicleMakeForm.getInputProps("name")}
            />

            <TextInput
              mt="md"
              label="Abbrv"
              placeholder={editingVehicleMake.abbrv}
              {...editingVehicleMakeForm.getInputProps("abbrv")}
            />
          </>
        ) : (
          activeStep === 1 && (
            <>
              <TextInput
                mt="md"
                label="Model"
                placeholder={editingVehicleModel.name}
                required
                withAsterisk
                {...editingVehicleModelForm.getInputProps("name")}
              />

              <TextInput
                mt="md"
                label="Abbrv"
                placeholder={editingVehicleModel.abbrv}
                {...editingVehicleModelForm.getInputProps("abbrv")}
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
              nextEditStep();
            } else if (activeStep === 1) {
              editVehicleModel();
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
