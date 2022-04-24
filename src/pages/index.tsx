import { Box } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Box as="main">
      <Header />
      <Banner />
      <TravelTypes />
      <Slider />
    </Box>
  );
}
