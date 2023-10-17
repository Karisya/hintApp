export const Fragment = () => {
    return (
        <div className="Fragment">
            <div className="Fragment__holder">
                <h2 className="Fragment__title">Фрагмент</h2>
                <div><p className="Fragment__text">С помощью фрагментов можно сгруппировать список дочерних элементов без добавления дополнительных узлов в DOM.

                    Используем React.Fragment или выполняем импорт, чтобы использовать Fragment:
                </p>
                </div>
                <div className="Fragment__code App-code">
                    <pre>
                        <code>
                            {`  import { Fragment } from 'react';`}
                        </code>
                    </pre>
                </div>
                <div><p className="Fragment__text">Заменяем теги div на Fragment:
                </p></div>
                <div className="Fragment__code App-code">
                    <pre>
                        <code>
                            {`  class ChildComponent extends React.Component {
                render() {
                    return (
                        <Fragment>
                            <h1>Hello Child Component</h1>
                        </Fragment>
                    )
                }
            }`}
                        </code>
                    </pre>
                </div>
                <div><p className="Fragment__text">Существует сокращенная запись (импортировать не нужно):</p></div>
                <div className="Fragment__code App-code">
                    <pre>
                        <code>
                            {`  class ChildComponent extends React.Component {
                render() {
                    return (
                        <>
                            <h1>Hello Child Component</h1>
                        </>
                    )
                }
            }`}
                        </code>
                    </pre>
                </div>
            <div><p className="Fragment__text">Недостаток сокращенной записи: нельзя использовать атрибут key.</p></div>
            </div>

        </div>
    )
}