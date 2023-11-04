import React from 'react'
import { Navbar } from 'components/Navbar'
import { Intro } from 'components/Intro';
import { Tech } from 'components/Tech';
import { Projects } from 'components/Projects';
import { Skills } from 'components/Skills';
import { Footer } from 'components/Footer';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Tech />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}
