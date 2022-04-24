import { Box, Divider, Text } from "@chakra-ui/react";
import { TravelTypesItem } from "./TravelTypesItem";

type TravelTypesProps = {
  title: string;
  url: string;
};

const travelTypes: TravelTypesProps[] = [
  {
    title: "vida noturna",
    url: "/travel-types/Nightlife.svg",
  },
  {
    title: "praia",
    url: "/travel-types/Beach.svg",
  },
  {
    title: "moderno",
    url: "/travel-types/Modern.svg",
  },
  {
    title: "clássico",
    url: "/travel-types/Classic.svg",
  },
  {
    title: "e mais...",
    url: "/travel-types/More.svg",
  },
];

export function TravelTypes() {
  return (
    <Box
      as="section"
      pt={["1rem", "3rem", "6.125rem"]}
      pb={["1rem", "1.5rem", "3rem"]}
    >
      <Box mx="auto" w={["90%", "85%"]} maxW="1280px">
        <TravelTypesItem data={travelTypes} />
        <Divider
          background="gray.400"
          w="5rem"
          h={["0.1rem", "0.175rem"]}
          alignSelf="center"
          mx="auto"
          my={["2.2rem", "3rem", "4.5rem"]}
        />
        <Text
          as="h3"
          color="gray.400"
          fontSize={["1.2rem", "1.8rem", "2.25rem"]}
          textAlign="center"
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
      </Box>
    </Box>
  );
}
