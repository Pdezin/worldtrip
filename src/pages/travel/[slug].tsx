import { Box, SimpleGrid, Spinner, Text, useToast } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { Banner } from "../../components/continent/Banner";
import { City } from "../../components/continent/City";
import { Informations } from "../../components/continent/Informations";
import { Header } from "../../components/Header";
import api from "../../services/api";

type Continent = {
  name: string;
  id: string;
  image: string;
  description: string;
  countries: number;
  languages: number;
  cities: number;
  favoriteCities: Array<{
    name: string;
    country: string;
    flag: string;
    image: string;
  }>;
};

type TravelProps = {
  slug?: string;
};

export default function Travel({ slug }: TravelProps) {
  const [continent, setContinent] = useState({} as Continent);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const toast = useToast();

  async function getContinent(id: string) {
    try {
      const { data } = await api.get(`/fullcontinents/${id}`);
      setContinent(data);
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
    getContinent(slug ?? "");
  }, []);

  return (
    <Box as="main">
      <Header voltar />
      {isLoading || isError ? (
        <Box textAlign="center">
          <Spinner />
        </Box>
      ) : (
        <Box as="section">
          <Banner image={continent.image} name={continent.name} />
          <Box mx="auto" maxW="1280px" w={["90%", "85%"]}>
            <Informations
              description={continent.description}
              cities={continent.cities}
              countries={continent.countries}
              languages={continent.languages}
            />
            <Text as="h2" fontSize="2rem">
              Cidades +100
            </Text>
            <SimpleGrid
              py="2.5rem"
              columns={[1, 1, 2, 3, 4, 4]}
              w="100%"
              gap={8}
            >
              {continent?.favoriteCities?.map((city) => (
                <City
                  key={city.name}
                  country={city.country}
                  name={city.name}
                  flag={city.flag}
                  image={city.image}
                />
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  return {
    props: {
      slug: params?.slug,
    },
  };
};
