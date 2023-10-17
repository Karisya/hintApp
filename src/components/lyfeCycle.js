export const LyfeCycle = () => {
    return (
        <div className="LyfeCycle">
            <div className="LyfeCycle__holder">
                <h2 className="LyfeCycle__title">Методы жизненного цикла</h2>
                <div><p className="LyfeCycle__text">Основные методы жизненного цикла:
                    <br />
                    <ol>
                        <li> constructor {`()`}</li>
                        <div><p className="LyfeCycle__text">Обычно в React конструкторы используются только для двух целей:</p></div>
                        <ul>
                            <li>Инициализация локального состояния путем присвоения объекта this.state.</li>
                            <li>Привязка методов обработчика событий к экземпляру.</li>
                        </ul>
                        <div className="LyfeCycle__code App-code">
                            <pre>
                                <code>
                                    {`   constructor(props) {
                super(props);
                this.state = { counter: 0 };
                this.handleClick = this.handleClick.bind(this);
            }
            }`}
                                </code>
                            </pre>
                        </div>
                        <li>render {`()`}</li>
                        <div><p className="LyfeCycle__text">Рендеринг компонента. Отдает JSX.</p></div>
                        <div className="LyfeCycle__code App-code">
                            <pre>
                                <code>
                                    {`   render () {
                return (
                    <div>
                        'Hello'
                    </div>
                )
            }
            }`}
                                </code>
                            </pre>
                        </div>
                        <li>componentDidMount()</li>
                        <div><p className="LyfeCycle__text">componentDidMount() вызывается сразу после монтирования компонента (вставки в дерево). Используется для отправки запросов на серверк удаленным ресурсам, setTimeout, обращение к DOM-элементам</p></div>
                        <div className="LyfeCycle__code App-code">
                            <pre>
                                <code>
                                    {`    componentDidMount()`}
                                </code>
                            </pre>
                        </div>
                        <li>componentDidUpdate(prevProps, prevState)</li>
                        <div><p className="LyfeCycle__text">Вызывается после обновления компонента. В качестве парапметров передаются старые значения объектов: props и state.</p></div>
                        <div className="LyfeCycle__code App-code">
                            <pre>
                                <code>
                                    {`     componentDidUpdate(prevProps, prevState) {
                if (this.props.userID !== prevProps.userID) {
                    this.fetchData(this.props.userID);
                }
            }
        `}
                                </code>
                            </pre>
                        </div>
                        <li>componentWillUnmount()</li>
                        <div><p className="LyfeCycle__text">Вызывается перед удалением компонента из DOM. Используется для закрытия асинхронных запросов, таймеров.</p></div>
                        <div className="LyfeCycle__code App-code">
                            <pre>
                                <code>
                                    {`    componentWillUnmount() {
                alert("The component named Header is about to be unmounted.");
            }
        `}
                                </code>
                            </pre>
                        </div>
                    </ol>
                </p></div>
                <div><p className="LyfeCycle__text">Для использования методов жизненного цикла в функциональных компонентах предназначек хук useEffect.</p></div>
            </div></div>
    )
}