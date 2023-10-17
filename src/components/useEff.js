export const UseEff = () => {
    return (
        <div className="useEff">
            <div className="useEff__holder">
                <h2 className="useEff__title">UseEffect</h2>
                <div><p className="useEff__text">Для использования методов жизненного цикла в функциональных компонентах предназначек хук useEffect.
                </p>
                    <div className="useEff__code App-code">
                        <pre>
                            <code>
                                {` import {useEffect} from 'react';`}
                            </code>
                        </pre>
                    </div>
                    <p>Хук позволяет использовать 3 метода жизненного цикла:</p>
                    <ul>
                        <li>componentDidMount()</li>
                        <li>componentDidUpdate(prevProps, prevState)</li>
                        <li>componentWillUnmount()</li>
                    </ul>
                </div>
                <div><p className="useEff__text">UseEffect принимает в качестве первого параметра функцию, в качестве второго - [ ] (аналог componentDidMount).

                </p></div>
                <div className="useEff__code App-code">
                    <pre>
                        <code>
                            {`useEffect ( () => { }, [])
            `}
                        </code>
                    </pre>
                </div>
                <div><p className="useEff__text">UseEffect принимает в качестве первого параметра функцию, в качестве второго - массив с зависимостью (или несколькими) (аналог componentDidUpdate).

                </p></div>
                <div className="useEff__code App-code">
                    <pre>
                        <code>
                            {`  useEffect ( () => { }, [name])
            `}
                        </code>
                    </pre>
                </div>
                <div><p className="useEff__text">UseEffect принимает в качестве первого параметра функцию, второго параметра - нет (аналог componentDidMount + componentDidUpdate).

                </p></div>
                <div className="useEff__code App-code">
                    <pre>
                        <code>
                            {`  useEffect ( () => { } )
            `}
                        </code>
                    </pre>
                </div>
                <div><p className="useEff__text">UseEffect принимает в качестве первого параметра функцию, которая возвращает другую функцию (аналог componentWillUnmount).

                </p></div>
                <div className="useEff__code App-code">
                    <pre>
                        <code>
                            {`  useEffect ( () => {
                return () => {};
            })
            `}
                        </code>
                    </pre>
                </div>
            </div>

        </div>
    )
}