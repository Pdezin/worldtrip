import { Box, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isMobile) {
    return (
      <Box
        minH="163px"
        backgroundImage="BannerMobile.svg"
        backgroundRepeat="no-repeat"
        backgroundPosition="center center"
        backgroundSize="cover"
      >
        <Box w={["90%", "85%"]} mx="auto" py={["2rem", "2.5rem"]}>
          <Text
            as="h1"
            color="white"
            fontWeight="bold"
            mb="1rem"
            fontSize={["1.2rem", "1.5rem"]}
          >
            <Text as="span" display="block">
              5 Continentes,
            </Text>
            infinitas possibilidades.
          </Text>
          <Text as="h2" fontSize={["0.9rem", "1.2rem"]} color="gray.300">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      <Image src="Banner.svg" alt="banner" width="100%" />
    </Box>
  );
}
