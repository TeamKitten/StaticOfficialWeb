import React, { useRef } from 'react';
import Head from 'next/head';
import Welcome from '../components/sections/Welcome';
import Header from '../components/Header';
import About from '../components/sections/About';
import Members from '../components/sections/Members';

const Home: React.FC = () => {
  const aboutSectionRef = useRef<HTMLDivElement>();

  const handleArrowPress = () =>
    aboutSectionRef.current.scrollIntoView({
      behavior: 'smooth',
    });

  return (
    <>
      <Head>
        <title>TeamKitten</title>
      </Head>

      <main>
        <Header />
        <Welcome onArrowPress={handleArrowPress} />
        <About ref={aboutSectionRef} />
        <Members />
      </main>
    </>
  );
};

export default Home;