import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Form from "../src/Form";
import styles from "../styles/Home.module.css";
import { Text, Row, Spacer } from "@nextui-org/react";
import emoji from "react-easy-emoji";
import Tweet from "../src/Tweet";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  > main {
    max-width: 598px;
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
