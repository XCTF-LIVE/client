import { Heading, Center } from "@chakra-ui/react";

interface SubheadingInput {
  text: string;
}

export default function Subheading({ text }: SubheadingInput) {
  return (
    <Center>
      <Heading
        fontWeight={900}
        color={"grays.300"}
        textTransform={"uppercase"}
        fontSize={"lg"}
      >
        {text}
      </Heading>
    </Center>
  );
}
