import React, { useState } from "react";
import Logo from "./Logo";
import { Anchor, Button, Divider, Flex, Group, Modal } from "@mantine/core";
import SignIn from "./forms/SignIn";
import SignUp from "./forms/SignUp";

const Header = () => {
  const [signInOpened, setSignInOpened] = useState(false);
  const [signUpOpened, setSignUpOpened] = useState(false);
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
          <Button
            variant="outline"
            color="dark"
            onClick={() => setSignInOpened(true)}
          >
            SIGN IN
          </Button>
          <Button color="violet" onClick={() => setSignUpOpened(true)}>
            SIGN UP
          </Button>
        </Group>
      </Flex>
      <Divider />
      <Modal
        opened={signInOpened}
        onClose={() => setSignInOpened(false)}
        title="Please sign in!"
        centered
      >
        <SignIn />
      </Modal>
      <Modal
        opened={signUpOpened}
        onClose={() => setSignUpOpened(false)}
        title="Sign up!"
        centered
      >
        <SignUp />
      </Modal>
    </header>
  );
};

export default Header;
