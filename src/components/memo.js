export const Memo = () => {
    return (
        <div className="Memo">
            <div className="Memo__holder">
                <h2 className="Memo__title">React.memo</h2>
                <div className="Memo__code App-code">
                    <pre>
                        <code>
                            {`  const MyComponent = React.memo(function MyComponent(props) {
                /* рендер с использованием пропсов */
            });`}
                        </code>
                    </pre>
                </div>
                <div><p className="Memo__text">React.memo — это компонент высшего порядка.<br/>

                    Компонент высшего порядка — это функция, которая принимает компонент и возвращает новый компонент.<br />

                    Если ваш компонент всегда рендерит одно и то же при неменяющихся пропсах, вы можете обернуть его в вызов React.memo для повышения производительности в некоторых случаях, мемоизируя тем самым результат. Это значит, что React будет использовать результат последнего рендера, избегая повторного рендеринга.
                    <br />
                    React.memo затрагивает только изменения пропсов. Если функциональный компонент обёрнут в React.memo и использует useState, useReducer или useContext, он будет повторно рендериться при изменении состояния или контекста.
                    <br />
                    По умолчанию он поверхностно сравнивает вложенные объекты в объекте props. Если вы хотите контролировать сравнение, вы можете передать свою функцию сравнения в качестве второго аргумента.
                </p></div>
                <div className="Memo__code App-code">
                    <pre>
                        <code>
                            {` function MyComponent(props) {
                /* рендер с использованием пропсов */
              }
              function areEqual(prevProps, nextProps) {
                /*
                возвращает true, если nextProps рендерит
                тот же результат что и prevProps,
                иначе возвращает false
                */
            }
            export default React.memo(MyComponent, areEqual);`}
                        </code>
                    </pre>
                </div>
                <div><p className="Memo__text">Этот метод предназначен только для оптимизации производительности.
<br/>
                    Аналогом в классовых компонентах выступает метод shouldComponentUpdate()

</p></div>
                <div className="Memo__code App-code">
                    <pre>
                        <code>
                            {` shouldComponentUpdate(nextProps, nextState) {
                return !shallowEqual (nextProps, this.props) ||
                       !shallowEqual (nextState, this.state);
            }`}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    )
}