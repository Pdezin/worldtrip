import { Box, Flex, Text } from "@chakra-ui/react";

type BannerParams = {
  name: string;
  image: string; //
};

export function Banner({ image, name }: BannerParams) {
  return (
    <Box
      backgroundImage={image}
      h={["250px", "500px", "500px"]}
      backgroundRepeat="no-repeat"
      backgroundPosition="center center"
      backgroundSize="cover"
    >
      <Box background="blackAlpha.400" w="100%" h="100%">
        <Flex
          mx="auto"
          w={["90%", "85%"]}
          maxW="1280px"
          h="100%"
          align={["center", "flex-end", "flex-end"]}
          justify={["center", "start", "start"]}
        >
          <Text
            as="h1"
            color="white"
            marginBottom={["0", "3rem", "3rem"]}
            fontSize={["2rem", "2.5rem", "3rem"]}
            fontWeight="bold"
          >
            {name}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
