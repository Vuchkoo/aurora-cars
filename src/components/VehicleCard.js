import {
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
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers,
} from "@tabler/icons-react";
import React from "react";

function VehicleCard() {
  const vehicleData = [
    { label: "4 passengers", icon: IconUsers },
    { label: "100 km/h in 4 seconds", icon: IconGauge },
    { label: "Automatic gearbox", icon: IconManualGearbox },
    { label: "Electric", icon: IconGasStation },
  ];

  const useStyles = createStyles((theme) => ({
    icon: {
      marginRight: rem(5),
    },
    section: {
      padding: theme.spacing.md,
      borderTop: `${rem(1)} solid dark`,
    },
    label: {
      marginBottom: theme.spacing.xs,
      lineHeight: 1,
      fontWeight: 700,
      fontSize: theme.fontSizes.xs,
      letterSpacing: rem(-0.25),
      textTransform: "uppercase",
    },
  }));

  //   const useStyles = createStyles((theme) => ({
  //     card: {
  //       backgroundColor:
  //         theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  //     },

  //     imageSection: {
  //       padding: theme.spacing.md,
  //       display: "flex",
  //       alignItems: "center",
  //       justifyContent: "center",
  //       borderBottom: `${rem(1)} solid ${
  //         theme.colorScheme === "dark"
  //           ? theme.colors.dark[4]
  //           : theme.colors.gray[3]
  //       }`,
  //     },

  //     label: {
  //       marginBottom: theme.spacing.xs,
  //       lineHeight: 1,
  //       fontWeight: 700,
  //       fontSize: theme.fontSizes.xs,
  //       letterSpacing: rem(-0.25),
  //       textTransform: "uppercase",
  //     },

  //     section: {
  //       padding: theme.spacing.md,
  //       borderTop: `${rem(1)} solid ${
  //         theme.colorScheme === "dark"
  //           ? theme.colors.dark[4]
  //           : theme.colors.gray[3]
  //       }`,
  //     },

  //     icon: {
  //       marginRight: rem(5),
  //       color:
  //         theme.colorScheme === "dark"
  //           ? theme.colors.dark[2]
  //           : theme.colors.gray[5],
  //     },
  //   }));

  const { classes } = useStyles();
  const features = vehicleData.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <>
      <Card withBorder radius="md" w={300}>
        <Card.Section withBorder>
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

        <Group position="apart" mt="md">
          <div>
            <Text fw={500}>Tesla Model S</Text>
            <Text fz="xs" c="dimmed">
              Free recharge at any station
            </Text>
          </div>
          <Badge variant="outline" color="violet">
            25% off
          </Badge>
        </Group>

        <Card.Section mt="md" className={classes.section} withBorder>
          <Text fz="sm" c="dimmed" className={classes.label}>
            Basic configuration
          </Text>
          <Group spacing={10} mb={10}>
            {features}
          </Group>
        </Card.Section>

        <Card.Section className={classes.section}>
          <Group spacing={30}>
            <div>
              <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
                $168.00
              </Text>
              <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
                per day
              </Text>
            </div>
            <Button radius="xl" color="violet" style={{ flex: 1 }}>
              Rent now
            </Button>
          </Group>
        </Card.Section>
      </Card>
    </>
  );
}

export default VehicleCard;
