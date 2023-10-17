export const Component = () => {
    return (
        <div className="Component">
            <div className="Component__holder">
                <h2 className="Component__title">Компоненты</h2>
                <div>
                    <p className="Component__text">Компоненты React — это многократно иcпользуемые фрагменты JavaScript-кода, которые выводят HTML-элементы (благодаря JSX ).
                        Компоненты бывают функциональные и классовые.<br />Проще всего объявить React-компонент как функцию:</p>
                </div>
                <div className="Component__code App-code">
                    <blockquote>
                        <pre>
                            <code>
                                {`function Welcome() {
                                    return <h1>Привет, мир! </h1>;
                                }`}
                            </code>
                        </pre>
                    </blockquote>
                </div>
                <div>
                    <p className="Component__text">Эта функция — компонент, потому что она получает данные в одном объекте («пропсы») в качестве параметра и возвращает React-элемент. Мы будем называть такие компоненты «функциональными», так как они буквально являются функциями.
                        <br />
                        Ещё компоненты можно определять как классы ES6:
                    </p>
                </div>
                <div className="Component__code App-code">
                    <blockquote>
                        <pre>
                            <code>
                                {`class Welcome extends React.Component {
                render() {
                    return <h1>Привет, мир!</h1>;
                }
            }
                                }`}
                            </code>
                        </pre>
                    </blockquote>
                </div>
                <div>
                    <p className="Component__text">Компонента должна себя вести как чистая функция.
                        «Чистой» называется функция, которая:
                        <ul>
                            <li>Для одинаковых входных данных всегда возвращает один результат.</li>
                            <li>Не имеет побочных эффектов (то есть не изменяет внешние состояния).</li>
                            <li>Не зависит от внешних состояний</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}

