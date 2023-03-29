import React from 'react';
import { ReactNode } from 'react';
import Head from 'next/head';
import {NextComponentType} from 'next/types';
import { ScriptProps } from 'next/script';

const Layout: NextComponentType<{}, {}, ScriptProps> = ({ children }) => {
  const head: () => JSX.Element = () => (
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
  );
  const nav = () => ( 
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">Register</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">Login</a>
      </li>
    </ul>
  );
  return (
  <>
  {head()}
  {nav()}
  {children}
  </>
    );

};

export default Layout;