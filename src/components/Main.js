import React from 'react';
import Header from './Header';
import Footer from './Footer';
import General from './General';
import Education from './Education';
import Experience from './Experience';

export default function Main() {
  return (
    <div>
      <Header />
      <Footer />
      <form>
        <General />
        <Education />
        <Experience />
        <input type='submit' />
      </form>
    </div>
  );
}
