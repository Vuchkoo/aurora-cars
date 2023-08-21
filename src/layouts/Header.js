import React, { useState } from "react";
import Logo from "../components/Logo";
import { Anchor, Button, Divider, Flex, Group, Modal } from "@mantine/core";
import SignIn from "../components/forms/SignIn";
import SignUp from "../components/forms/SignUp";
import { useRouter } from "next/navigation";

const Header = ({ children }) => {
  const [signInOpened, setSignInOpened] = useState(false);
  const [signUpOpened, setSignUpOpened] = useState(false);

  const router = useRouter();

  return (
    <header>
      <Flex align="center" justify="space-between" mx={20} my={5}>
        <Group
          sx={{ "&:hover": { cursor: "pointer" } }}
          onClick={() => router.push("/")}
        >
          <Logo />
        </Group>
        <Group ml={40}>
          <Anchor
            underline={false}
            color="dark"
            onClick={() => router.push("/about")}
            weight={500}
            sx={{ "&:hover": { fontWeight: "700", color: "purple" } }}
          >
            About
          </Anchor>
          <Anchor
            underline={false}
            color="dark"
            onClick={() => router.push("/")}
            weight={500}
            sx={{ "&:hover": { fontWeight: "700", color: "purple" } }}
          >
            Cars
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

      <Divider
        color="violet"
        size={5}
        sx={{ boxShadow: "0px 3px 5px black" }}
      />

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
      {children}
    </header>
  );
};

export default Header;
