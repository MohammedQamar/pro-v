import Head from "next/head";
import styled from "styled-components";
import NavBar from "../components/common/navigation/NavBar";
import HomePage from "../components/page-styles/home-page/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Profounc Coder</title>
        <meta
          name="description"
          content="Learn to code websites using HTML, CSS and JavaScript."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <HomePage />
    </div>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
