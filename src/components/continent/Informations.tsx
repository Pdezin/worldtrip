import { Box, Flex, Icon, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

type InformationsParams = {
  description: string;
  countries: number;
  languages: number;
  cities: number;
};

export function Informations({
  cities,
  languages,
  countries,
  description,
}: InformationsParams) {
  return (
    <SimpleGrid
      py={["3rem", "5rem"]}
      columns={[1, 1, 1, 2]}
      gap={["2rem", "4rem"]}
    >
      <Flex>
        <Text
          fontSize={["1rem", "1.275rem", "1.5rem"]}
          fontWeight="200"
          align="justify"
        >
          {description}
        </Text>
      </Flex>
      <Flex justify="space-between" align="center">
        <Box textAlign="center">
          <Text
            display="block"
            color="yellow.400"
            fontSize={["2rem", "3rem", "4rem"]}
          >
            {countries}
          </Text>
          <Text fontSize="1.2rem">países</Text>
        </Box>
        <Box textAlign="center">
          <Text
            display="block"
            color="yellow.400"
            fontSize={["2rem", "3rem", "4rem"]}
          >
            {languages}
          </Text>
          <Text fontSize="1.2rem">Línguas</Text>
        </Box>
        <Box textAlign="center">
          <Text
            display="block"
            color="yellow.400"
            fontSize={["2rem", "3rem", "4rem"]}
          >
            {cities}
          </Text>
          <Text fontSize="1.2rem">
            <Tooltip hasArrow label="Lugares incríveis">
              <Flex align="center" justify="center">
                cidades +100
                <Icon as={FiInfo} color="gray.300" marginLeft="0.2rem" />
              </Flex>
            </Tooltip>
          </Text>
        </Box>
      </Flex>
    </SimpleGrid>
  );
}
