import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const CardWithImage = ({ item: { url, title, id } }) => {
  return (
    <Container>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={url}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              sed nulla inventore, fugit aperiam eveniet deleniti placeat
              expedita nisi nihil?
            </Text>
            <Text color="blue.600" fontSize="2xl">
              ${id}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default CardWithImage;
