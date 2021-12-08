import type { NextPage } from "next";
import Form from "../components/Form";
import { Text, Row, Spacer } from "@nextui-org/react";
import emoji from "react-easy-emoji";
import Tweet from "../components/Tweet";
import styled from "styled-components";
import AlphaChip from "../components/AlphaChip";
import { NextSeo } from "next-seo";

const Container = styled.div`
  display: flex;
  justify-content: center;
  > main {
    padding: 16px;
    width: 100%;
    max-width: 594px;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="😄 Simple tweet preview"
        description="A simple online tool to allow you to see what your tweet will look like on twitter (including emojis)"
      />
      <Container>
        <main>
          <AlphaChip />
          <Text h1>{emoji("😄 Tweet Preview")}</Text>
          <Spacer />
          <Tweet />
          <Spacer />
          <Form />
        </main>
      </Container>
    </>
  );
};

export default Home;
