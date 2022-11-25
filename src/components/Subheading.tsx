import { Heading, Center } from "@chakra-ui/react";

export default function Subheading(heading: string) {
  return (
    <Center pt={5}>
      <Heading
        fontWeight={900}
        color={"grays.300"}
        textTransform={"uppercase"}
        fontSize={"lg"}
      >
        {heading}
      </Heading>
    </Center>
  );
}
