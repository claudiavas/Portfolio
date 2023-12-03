import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import { Footer } from './Footer';

export default function Layout({ children }) {

  return (
    <div>
        <ResponsiveAppBar />
        {children}
        <Footer/>
    </div>
  );
}