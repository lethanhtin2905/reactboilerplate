import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from 'app/components/Header';
import { Intro } from 'app/components/Home/Intro';
import { Partners } from 'app/components/Home/Partners';
import { Tutorial } from 'app/components/Home/Tutorial';
import { Features } from 'app/components/Home/Features';
import { Footer } from 'app/components/Footer';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <Header />
      <Intro />
      <Partners />
      <Tutorial />
      <Features />
      {/* <Footer /> */}
    </>
  );
}
