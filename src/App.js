import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, NavLink } from 'react-router-dom'
import './App.css';
import { Component } from './components/components';
import { Props } from './components/props';
import { MainPage } from './mApp/main';
import { State } from './components/state';
import { LyfeCycle } from './components/lyfeCycle';
import { Events } from './components/events';
import { Key } from './components/key';
import { Refs } from './components/refs';
import { Async } from './components/asynRequest';
import { Vdom } from './components/vdom';
import { Router } from './components/router';
import { Memo } from './components/memo';
import { UseEff } from './components/useEff';
import { Fragment } from './components/fragment';
import { Form } from './components/form';
import { Context } from './components/context';
import { Home } from './components/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}>
          <Route index element={<div>not found</div>}></Route>
          <Route path='/components/home.js' element={<Home />} ></Route>
          <Route path='/components/components.js' element={<Component />} ></Route>
          <Route path='/components/props.js' element={<Props />} ></Route>
          <Route path='/components/state.js' element={<State />} ></Route>
          <Route path='/component/lyfeCycle.js' element={<LyfeCycle />} ></Route>
          <Route path='/component/events.js' element={<Events />} ></Route>
          <Route path='/component/key.js' element={<Key />} ></Route>
          <Route path='/component/refs.js' element={<Refs />} ></Route>
          <Route path='/component/asynRequest.js' element={<Async />} ></Route>
          <Route path='/component/vdom.js' element={<Vdom />} ></Route>
          <Route path='/component/fragment.js' element={<Fragment />} ></Route>
          <Route path='/component/memo.js' element={<Memo />} ></Route>
          <Route path='/component/useEff.js' element={<UseEff />} ></Route>
          <Route path='/component/router.js' element={<Router />} ></Route>
          <Route path='/component/context.js' element={<Context />} ></Route>
          <Route path='/component/form.js' element={<Form />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
