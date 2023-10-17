export const Props = () => {
    return (
        <div className="Props">
            <div className="Props__holder">
                <h2 className="Props__title">Реквизит</h2>
                <div><p className="Props__text">То, что мы называем аргументами в мире функций, в мире компонентов называется свойствами.
                    Функциональные компоненты свойства принимают в качестве аргумента.
                    Props представляют собой объект, содержащие свойства.
                    Обратиться к ним можно - props.имя-свойства.
                    Props - только для чтения.</p></div>
                <div className="Props__code App-code">
                    <pre>
                        <code>
                            {`  function Welcome(props) {
                return <h1>Привет, {props.name}</h1>;
            }`}
                        </code>
                    </pre>
                </div>
                <div><p className="Props__text">Классовые компоненты свойства принимают по умолчанию и обратиться к ним можно с помощью this.props.имя-свойства.</p></div>
                <div className="Props__code App-code">
                    <pre>
                        <code>
                            {`  class Welcome extends React.Props {
                render() {
                    return <h1>Привет, {this.props.name}</h1>;
                }
            }
            
            `}
                        </code>
                    </pre>
                </div>
                <div><p className="Props__text">Элементы могут описывать и наши собственные компоненты:</p></div>
                <div className="Props__code App-code">
                    <pre>
                        <code>
                            {`    const element = <Welcome name="Алиса" />;
            
            `}
                        </code>
                    </pre>
                </div>
                <div><p className="Props__text">Когда React встречает подобный элемент, он собирает все JSX-атрибуты и дочерние элементы в один объект и передаёт их нашему компоненту. Этот объект называется «пропсы».

                    <br />Например, этот компонент выведет «Привет, Алиса» на страницу:</p></div>
                <div className="Props__code App-code">
                    <pre>
                        <code>
                            {`   
            function Welcome (props) {
                return <h1> Привет, {props.name}</h1>;
            }

            const element = <Welcome name="Алиса" />;
            ReactDOM.render(
                element,
                document.getElementById('root')
            );
            
            `}
                        </code>
                    </pre>
                </div>

                    <p className="Props__text">
                        <ol className='Props__list'>
                            <li>Мы передаём React-элемент {`<Welcome name="Алиса"> в ReactDOM.render()`}.</li>
                            <li>React вызывает наш компонент Welcome с пропсами {`{name: 'Алиса'}`}.</li>
                            <li>Наш компонент Welcome возвращает элемент {`<h1>Привет, Алиса</h1>`} в качестве результата.</li>
                            <li>React DOM делает минимальные изменения в DOM, чтобы получилось {`<h1>Привет, Алиса</h1>`}.</li>
                    </ol>
                    Компонент никогда не должен что-то записывать в свои пропсы— вне зависимости от того, функциональный он или классовый.
                    </p>
                </div>
                
            </div>
    )
}
