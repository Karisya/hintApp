import { useState } from 'react';
export const State = () => {
    const [count, counter] = useState(0)
    const increment = () => {
        counter(count + 1)
    }
    const decrement = () => {
        if (count > 0)
            counter(count - 1)
    }
    return (
        <div className="State">
            <div className="State__holder">
                <h2 className="State__title">Состояние</h2>
                <div><p className="State__text">State (состояние) в React – это объект простого JS, позволяющий отслеживать данные компонента. Состояние компонента может меняться. Смена состояния компонента зависит от функциональности приложения. Изменения могут основываться на ответе от пользователя, новых сообщениях с сервера, ответа сети и т.д.

                    Состояние компонента должно быть приватным для компонента и контролироваться им. Изменения состояния компонента необходимо делать внутри компонента – инициализация и обновление состояния компонента.</p></div>
                <div className="State__code App-code">
                    <pre>
                        <code>
                            {`  class App extends React.Component {
                constructor(props) {
                    super(props)
                    this.state = { username: 'johndoe' }
                }
                render() {
                    return (
                        <div> { this.state.username } </div>
                    )
                }
            }
            }`}
                        </code>
                    </pre>
                </div>
                <div><p className="State__text">Единственный допустимый способ обновления состояния компонента – через setState().

                    Так нельзя менять состояние: this.state.username='Mark'

                    1 способ изменить state:</p></div>
                <div className="State__code App-code">
                    <pre>
                        <code>
                            {`  this.setState({username:'Mark'});
            
            `}
                        </code>
                    </pre>
                </div>
                <div><p className="State__text">2 способ изменить state:</p></div>
                <div className="State__code App-code">
                    <pre>
                        <code>
                            {`    this.setState(() => ({ username: 'Mark' }))
            
            `}
                        </code>
                    </pre>
                </div>
                <div><p className="State__text">В функциональных компонентах state создается с помощью хука useState()

                    Чтобы воспользоваться им, необходимо импортировать useState из 'react':</p></div>
                <div className="State__code App-code">
                    <pre>
                        <code>
                            {`  
            import {useState} from 'react';
            
            `}
                        </code>
                    </pre>
                </div>
                <div>
                    <p className="State__text">
                        Хук useState() принимается в качестве параметра первоначальное значение для переменной, а возвращает массив, содержащий переменную и функцию, которая изменяет эту переменную.

                        При объявлении state часто используют деструктурирующее присваивание:</p>
                </div>
                <div className="State__code App-code">
                    <pre>
                        <code>
                            {`  
            const [name, setName] = useState('Mark');
            
            `}
                        </code>
                    </pre>
                </div>
                <div className='State__counter'>
                    <button className='State__decrement btn' onClick={decrement}>-1</button>
                    <p>Cчетчик: {count}</p>
                    <button className='State__increment btn' onClick={increment}>+1</button>
                </div>
                <div>
                    <p className="State__text">
                        Примером работы со state является счётчик, который изменяется при нажатии на кнопку.
<br/>
                        Код имеет следующий вид:

</p>
                </div>
                <div className="State__code App-code">
                    <pre>
                        <code>
                            {`  
             function Counter() {
                const [count, setCount] = useState(0);
                return (
                  <div className="count">
                     <button className="count__btn" onClick={() => setCount(count - 1)}>-1</button>
                     <p>Счётчик: {count}</p>
                     <button className="count__btn" onClick={() => setCount(count + 1)}>+1</button>
                  </div>
                );
            }           
            `}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    )
}