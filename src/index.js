import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './Header/Header';
import { Pagename } from './Pagename/Pagename';
import { Fullname } from './Fullname/Fullname';
import { Input } from './Input/Input';
import { Pagebutton } from './Pagebutton/Pagebutton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header></Header>
    <div className='page-layout'>
      <Pagename></Pagename>
      <Fullname name="Full name"></Fullname>
      <Input></Input>
      <Fullname name="Email address"></Fullname>
      <Input></Input>
      <Fullname name="Password"></Fullname>
      <Input></Input>
      <div className='flex'>
        <Pagebutton></Pagebutton>
      </div>
    </div>
  </>
);

