import { Button, Group, useMantineColorScheme } from "@mantine/core";
import { Test } from "../components/Test";

export default function Home() {
  const { setColorScheme } = useMantineColorScheme();
  return (
    <>
      <Group>
        <Button onClick={() => setColorScheme("light")}>Light</Button>
        <Button onClick={() => setColorScheme("dark")}>Dark</Button>
      </Group>
      <Test />
    </>
  );
}
