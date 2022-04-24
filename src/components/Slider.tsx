import { Box, Flex, Image, Spinner, Text, useToast } from "@chakra-ui/react";
import Router from "next/router";
import { useEffect, useState } from "react";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import api from "../services/api";

type Continent = {
  title: string;
  slug: string;
  url: string;
  description: string;
};

export function Slider() {
  const [continents, setContinents] = useState({} as Continent[]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const toast = useToast();

  async function getContinents() {
    try {
      const { data } = await api.get("/continents");
      setContinents(data);
    } catch (e: any) {
      setIsError(true);

      toast({
        title: "Falha ao carregar dados.",
        description: e.message,
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top-right",
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getContinents();
  }, []);

  return (
    <Box as="section" py={["2rem", "3rem", "5rem"]}>
      <Box w={["100%", "90%", "85%"]} maxW="1280px" mx="auto">
        {isLoading || isError ? (
          <Box textAlign="center">
            <Spinner />
          </Box>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {continents?.map(({ title, url, description, slug }) => (
              <SwiperSlide key={slug}>
                <Flex
                  onClick={() => Router.push(`/travel/${slug}`)}
                  cursor="pointer"
                >
                  <Flex
                    position="absolute"
                    w="100%"
                    h="100%"
                    background="blackAlpha.400"
                    color="white"
                    textShadow="2px 2px 3px #000000a1"
                    align="center"
                    justify="center"
                    direction="column"
                    textAlign="center"
                    px="2rem"
                  >
                    <Text fontSize={["2rem", "2rem", "3rem"]} fontWeight="bold">
                      {title}
                    </Text>
                    <Text
                      fontSize={["1rem", "1rem", "1.5rem"]}
                      fontWeight="bold"
                    >
                      {description}
                    </Text>
                  </Flex>
                  <Image
                    src={url}
                    alt={title}
                    objectFit="cover"
                    objectPosition="center"
                    w="100%"
                    h="500px"
                  />
                </Flex>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Box>
    </Box>
  );
}
