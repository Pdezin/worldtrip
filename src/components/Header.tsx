import { Flex, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

type HeaderProps = {
  voltar?: boolean;
};

export function Header({ voltar = false }: HeaderProps) {
  return (
    <Flex
      as="header"
      h={["3.125rem", "6.25rem"]}
      w={["90%", "85%"]}
      maxW="1280px"
      mx="auto"
      align="center"
    >
      {voltar && (
        <Link href="/" passHref>
          <Icon
            as={FaChevronLeft}
            fontSize={["1rem", "1.2rem", "1.5rem"]}
            cursor="pointer"
          />
        </Link>
      )}
      <Image
        mx="auto"
        src="../Logo.svg"
        alt="logo"
        w={["6rem", "8.5rem", "10.5rem"]}
      />
    </Flex>
  );
}
