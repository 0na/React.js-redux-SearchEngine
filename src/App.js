import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';

class App extends Component {
    render() {
        return (
            <Router history={ hashHistory }>
                <Route path='/' component={ Navigation }>
                    <IndexRoute component={ Home } />
                    <Route path='/contact' component={ Contact } />
                    <Route path='*' component={ PageNotFound } />
                </Route>
            </Router>
        )
    }
}

//arrow function to wygodny skrót, który można zastosować do tworzenia komponentów prezentacyjnych, które nie zawierają żadnej logiki
const Home = () => <h1>Hej, tu Home component</h1>

const Contact = () => <h1>A tu Contact component</h1>
const PageNotFound = () => <h1>404 Not Found</h1>;

const Navigation = props => (
    <div>
        <ul>
            <li><Link to="/" activeStyle={ { color: '#48abee' } }>Home</Link>
            </li>
            <li><Link to="/contact" activeStyle={ { color: '#48abee' } }>Contact</Link>
            </li>
        </ul>
        { props.children }
    </div>
);




export default App
