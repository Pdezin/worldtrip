import { ChakraProvider, extendTheme, Theme } from "@chakra-ui/react";
import { AppProps } from "next/app";

const theme = extendTheme({
  colors: {
    yellow: {
      400: "#FFBA08",
    },
    gray: {
      400: "#47585B",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        color: "gray.400",
      },
    },
  },
} as Theme | {});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
