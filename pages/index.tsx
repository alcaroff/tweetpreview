import type { NextPage } from "next";
import Form from "../src/Form";
import { Text, Row, Spacer } from "@nextui-org/react";
import emoji from "react-easy-emoji";
import Tweet from "../src/Tweet";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  > main {
    padding: 0 16px;
    width: 100%;
    max-width: 594px;
  }
`;

const Home: NextPage = () => {
  return (
    <Container>
      <main>
        <Text h1>{emoji("Tweet Preview 😄")}</Text>
        <Spacer />
        <Tweet />
        <Spacer />
        <Form />
      </main>
    </Container>
  );
};

export default Home;
