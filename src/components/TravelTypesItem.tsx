import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

type TravelTypesItemProps = {
  data: Array<{ title: string; url: string }>;
};

export function TravelTypesItem({ data }: TravelTypesItemProps) {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isMobile) {
    return (
      <Box textAlign="center">
        {data.map(({ title }) => (
          <Box key={title} w="50%" display="inline-block">
            <Box
              w={["1rem", "1.2rem"]}
              h={["1rem", "1.2rem"]}
              borderRadius="50%"
              background="yellow.400"
              display="inline-block"
            />
            <Text
              mt="2rem"
              fontSize={["1rem", "1.2rem", "1.5rem"]}
              fontWeight="500"
              ml="0.6rem"
              display="inline-block"
            >
              {title}
            </Text>
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <Flex justify="space-between">
      {data.map(({ title, url }) => (
        <Flex
          key={title}
          align="center"
          justify="center"
          width="100%"
          direction="column"
        >
          <Image src={url} alt={title} h="70px" />
          <Text mt="2rem" fontSize="1.4rem" fontWeight="500">
            {title}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}
