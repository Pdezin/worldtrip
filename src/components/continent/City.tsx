import { Box, Flex, Text } from "@chakra-ui/react";

type CityParams = {
  name: string;
  country: string;
  flag: string;
  image: string;
};

export function City({ country, name, flag, image }: CityParams) {
  return (
    <Box key={name} minW="226px">
      <Box
        w="100%"
        backgroundImage={image}
        h="173px"
        backgroundRepeat="no-repeat"
        backgroundPosition="center center"
        backgroundSize="cover"
        borderTopRadius="0.3rem"
      />
      <Flex
        p="1rem"
        justify="space-between"
        align="center"
        border="1px solid"
        borderTop="none"
        borderColor="yellow.400"
        borderBottomRadius="0.3rem"
      >
        <Box>
          <Text as="h3" fontSize="1.2rem" fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="0.8rem" fontWeight="light">
            {country}
          </Text>
        </Box>
        <Box
          w="2rem"
          h="2rem"
          backgroundImage={flag}
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          backgroundSize="cover"
          borderRadius="50%"
        />
      </Flex>
    </Box>
  );
}
