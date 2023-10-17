export const Context = () => {
    return (
        <div className="Context">
            <div className="Context__holder">
                <h2 className="Context__title">Контекст</h2>
                <div><p className="Context__text">Контекст разработан для передачи данных для всего дерева React-компонентов, не прокидывая через пропсы.
<br/>
                    Создать контекст:
                <div className="Context__code App-code">
                    <pre>
                        <code>
                                {` const MyContext = React.createContext(defaultValue);`}
                        </code>
                    </pre>
                </div>
                </p>
                    <ul>
                        <li>defaultValue - дефолтное значение или объект для получения через контекст</li>
                    </ul>
                    <p>Вызывая React.createContext мы получаем объект, который содержит два компонента:</p>
                    <ol>
                        <li>Компонент Provider. Благодаря ему все дочерние компоненты могут получать значения, которые мы ему передаем.</li>
                <div className="Context__code App-code">
                    <pre>
                        <code>
                                    {` <MyContext.Provider value={value}> </MyContext.Provider>`}
                        </code>
                    </pre>
                        </div>
                        <p>Компонент Provider принимает проп value, который будет передан во все компоненты, использующие этот контекст и являющиеся потомками этого компонента Provider. Один Provider может быть связан с несколькими компонентами, потребляющими контекст. Так же компоненты Provider могут быть вложены друг в друга, переопределяя значение контекста глубже в дереве.</p>
                        <li>Компонент Consumer - это React-компонент, который подписывается на изменения контекста.</li>
                        <div><p className="Context__text">Consumer принимает функцию в качестве дочернего компонента. Эта функция принимает текущее значение контекста и возвращает React-компонент. Передаваемый аргумент value будет равен ближайшему (вверх по дереву) значению этого контекста, а именно пропу value компонента Provider. Если такого компонента Provider не существует, аргумент value будет равен значению defaultValue, которое было передано в createContext().</p></div>
                            <div className="Context__code App-code">
                                <pre>
                                    <code>
                                    {` <MyContext.Consumer>
            {value => /* отрендерить что-то, используя значение контекста */}
          </MyContext.Consumer>`}
                                    </code>
                                </pre>
                            </div>
                        <div><p className="Context__text">Хук useContext. Принимает один параметр - это объект контекста, получаемый при вызове React.createContext и возвращает текущее значение контекста для этого контекста.
<br/>
                            Текущее значение контекста определяется пропом value ближайшего MyContext.Provider над вызывающим компонентом в дереве.</p></div>
                            <div className="Context__code App-code">
                                <pre>
                                    <code>
                                    {` 
            const value = useContext(MyContext);`}
                                    </code>
                                </pre>
                            </div>
                    </ol>
                </div>
                <div><p className="Context__text">Компонент, вызывающий useContext, всегда будет перерендериваться при изменении значения контекста. Если повторный рендер компонента затратен, вы можете оптимизировать его с помощью мемоизации.

                    Контекст лучше всего создавать в отдельном файле.</p></div>
                
            </div>

        </div>
    )
}