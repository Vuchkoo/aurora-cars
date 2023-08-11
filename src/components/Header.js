import React from "react";
import Logo from "./Logo";
import {
  Anchor,
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Modal,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <header>
      <Flex align="center" justify="space-between">
        <Group>
          <Logo />
        </Group>
        <Group>
          <Anchor underline={false} color="dark">
            About
          </Anchor>
          <Anchor underline={false} color="dark">
            Cars
          </Anchor>
          <Anchor underline={false} color="dark">
            Rent
          </Anchor>
        </Group>
        <Group>
          <Button variant="outline" color="dark" onClick={open}>
            SIGN IN
          </Button>
          <Button color="violet">SIGN UP</Button>
        </Group>
      </Flex>
      <Divider />
      <Modal opened={opened} onClose={close} centered>
        <Box>
          <TextInput label="E-mail" placeholder="Your name" mb={20} />
          <PasswordInput label="Password" placeholder="Your password" />
        </Box>
        {/* Modal content */}
      </Modal>
    </header>
  );
};

export default Header;
