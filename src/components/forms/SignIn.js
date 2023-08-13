import { Box, Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import React from "react";

function SignIn() {
  const handleSignIn = (e) => {
    e.preventDefault();
  };

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={handleSignIn}>
        <TextInput
          label="Email"
          rightSection={<IconAt size={14} color="gray" />}
          placeholder="Email"
          //   {...form.getInputProps("email")}
        />

        <PasswordInput
          mt="md"
          label="Password"
          placeholder="Password"
          //   {...form.getInputProps("password")}
        />

        <Group position="center" mt="md">
          <Button type="submit" uppercase>
            Sign in
          </Button>
        </Group>
      </form>
    </Box>
  );
}

export default SignIn;
