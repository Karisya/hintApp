// export const Router = () => {
//     return (
//         <div className="Router">
//             <div className="Router__holder">
//                 <h2 className="Router__title">Router</h2>
//                 <div><p className="Router__text">В React имеется своя система маршрутизации, которая позволяет сопоставлять запросы к приложению с определенными компонентами. Ключевым звеном в работе маршрутизации является модуль react-router, который содержит основной функционал по работе с маршрутизацией. Однако если мы собираемся работать в браузере, то нам также надо использовать модуль react-router-dom.
//                 </p>
//                 </div>
//                 <div className="Router__code App-code">
//                     <pre>
//                         <code>
//                             {`  npm i react-router-dom`}
//                         </code>
//                     </pre>
//                 </div>
//                 <div><p className="Router__text">После установки нужно импортировать BrowserRouter, Routes, Route:
//                 </p></div>
//                 <div className="Router__code App-code">
//                     <pre>
//                         <code>
//                             {`  import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';`}
//                         </code>
//                     </pre>
//                 </div>
//                 <div><p className="Router__text">Вместо рендеринга компонента App мы рендерим компонент Router. Компонент Router передает информацию о текущем местоположении всем дочерним элементам, вложенным в него. Его следует использовать один раз и поместить рядом с корнем дерева компонентов:

//                 </p></div>
//                 <div className="Router__code App-code">
//                     <pre>
//                         <code>
//                             {` render(
//                 <Router>
//                 <App />
//                 </Router>,
//                 document.getElementById("root")
//             ); `}
//                         </code>
//                     </pre>
//                 </div>
//                 <div><p className="Router__text">Компонент-оболочка для любых маршрутов, которые мы хотим отобразить, называется Routes. Внутри Routes мы будем использовать компонент Route для каждой страницы, которую хотим отобразить.

//                 </p></div>
//                 <div className="Router__code App-code">
//                     <pre>
//                         <code>
//                             {` import React from "react";
//             import { Routes, Route } from "react-router-dom";
//             import { Home, About, Events, Products, Contact } from "./pages";
//             function App() {
//                 return (
//                     <div>
//                          <Routes>
//                             <Route path="/" element={<Home />} />
//                             <Route  path="/about"  element={<About />} />
//                             <Route  path="/events"  element={<Events />}  />
//                             <Route  path="/products"  element={<Products />}  />
//                             <Route  path="/contact"  element={<Contact />}  />
//                         </Routes>
//                      </div>
//                 );
//             }`}
//                         </code>
//                     </pre>
//                 </div>
//                 <div><p className="Router__text">Эти маршруты сообщают Router, какой компонент отображать при изменении положения окна. Каждый компонент Route имеет свойства path и element. Когда расположение браузера совпадает с path, отобразится element. Если местоположение равно /, маршрутизатор отобразит компонент Home. Если расположение является /products, маршрутизатор отобразит компонент Products.
//                     <br />
//                     У react-router-dom есть компонент Link, который мы можем использовать для создания ссылок для браузера

//                 </p></div>
//                 <div className="Router__code App-code">
//                     <pre>
//                         <code>
//                             {` import { Link } from "react-router-dom";
//             export function Home() {
//                 return (
//                      <div>
//                          <h1>[Company Website]</h1>
//                             <nav>
//                                 <Link to="about">About</Link>
//                                 <Link to="events">Events</Link>
//                                 <Link to="products">Products</Link>
//                                 <Link to="contact">Contact Us</Link>
//                             </nav>
//                     </div>
//                 );
//             } `}
//                         </code>
//                     </pre>
//                 </div>
//                 <div><p className="Router__text">Если мы вводим несуществующий маршрут, например highway, нужно отобразить компонент Whoops404. Мы будем использовать * как значение пути, а компонент — как элемент:
//                 </p></div>
//                 <div className="Router__code App-code">
//                     <pre>
//                         <code>
//                             {`  function App() {
//                 return (
//                     <div>
//                          <Routes>
//                             <Route path="/" element={<Home />} />
//                             <Route  path="/about"  element={<About />} />
//                             <Route  path="/events"  element={<Events />}  />
//                             <Route  path="/products"  element={<Products />}  />
//                             <Route  path="/contact"  element={<Contact />}  />
//                             <Route path="*" element={<Whoops404 />} />
//                         </Routes>
//                      </div>
//                 );
//             }`}
//                         </code>
//                     </pre>
//                 </div>
//                 <div><p className="Router__text">Мы также можем отображать значение маршрута, который мы посетили, используя значение местоположения. Поскольку мы живем в мире, где есть хуки React, используем хук. В компоненте Whoops404 создадим переменную с именем location, которая возвращает значение текущего местоположения (то есть свойство с информацией о том, на какую страницу вы перешли). Затем используем значение location.pathname для рендеринга посещаемого маршрута:
//                 </p></div>
//                 <div className="Router__code App-code">
//                     <pre>
//                         <code>
//                             {` export function Whoops404() {
//                     let location = useLocation();
//                     console.log(location);
//                     return (
//                         <div>
//                             <h1>
//                                 Resource not found at {location.pathname}
//                             </h1>
//                             </div>
//                             );
//                }`}
//                         </code>
//                     </pre>
//                 </div>
//                 <div><p className="Router__text">Если мы введем в журнал location, то сможем исследовать этот объект дальше.
//                     <br />
//                     Router используется один раз и включает в себя все компоненты, которые будут использовать маршрутизацию. Все компоненты Route должны быть обернуты компонентом Routes, который выбирает компонент для рендеринга на основе текущего местоположения окна. Компоненты Link могут использоваться для облегчения навигации.
//                 </p></div>
//             </div>

//         </div>
//     )
// }

