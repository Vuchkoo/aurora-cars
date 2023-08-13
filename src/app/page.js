"use client";
import Header from "@/components/Header";
import VehicleCard from "@/components/VehicleCard";
import { Center, Grid, SimpleGrid } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Header />

      <SimpleGrid mt={20} ml={20} cols={5}>
        {Array.from({ length: 10 }).map(() => {
          return <VehicleCard />;
        })}
      </SimpleGrid>
    </>
  );
}
