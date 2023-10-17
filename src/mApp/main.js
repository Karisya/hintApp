import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const MainPage = () => {
  return (
    <div className='App'>
      <div className='App__content'>
        <p><Link to='/components/home.js'><img className='App__home' src={require("../img/home.svg").default} /></Link></p>
        {/* <img className='App__home' src={require("../img/home.svg".default)} /> */}
        <h1>Основная теория по библиотеке</h1>
        <img className='App__logo' src={require("../img/react1.svg").default} alt='logo' />
      </div>
      <div className='App__holder'>
        <nav className='App__list'>
          <ul>
            <li className='App__link'>
              <Link to='/components/components.js'>Component</Link>
            </li>
            <li className='App__link'>
              <Link to='/components/props.js'>Props</Link>
            </li>
            <li className='App__link'>
              <Link to='/components/state.js'>State</Link>
            </li>
            <li className='App__link'>
              <Link to='/component/lyfeCycle.js'>LyfeCycle</Link>
            </li>
            <li className='App__link'>
              <Link to='/component/events.js'>Events</Link>
            </li>
            <li className='App__link'>
              <Link to='/component/key.js'>Key</Link>
            </li>
            <li className='App__link'>
              <Link to='/component/refs.js'>Refs</Link>
            </li>
            <li className='App__link'>
              <Link to='/component/asynRequest.js'>Asynchronous requests</Link>
            </li>
            <li className='App__link'>
              <Link to='/component/vdom.js'>Virtual DOM</Link>
            </li>
            <li className='App__link'>
              <Link to='/component/fragment.js'>Fragment</Link>
            </li>
            <li className='App__link'>
              <Link to='/component/memo.js'>React.memo</Link>
            </li>
            <li className='App__link'>
              <Link to='/component/useEff.js'>useEffect</Link>
            </li>
            <li className='App__link'>
              <Link to='/component/router.js'>Router</Link>
            </li>
            <li className='App__link'>
              <Link to='/component/context.js'>Context</Link>
            </li>
            <li className='App__link'>
              <Link to='/component/form.js'>Form</Link>
            </li>
          </ul>
        </nav>
        <div className='App__pages'>
        <Outlet  /></div></div>
    </div>
  )
};