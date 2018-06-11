import React, {Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from '../src/components/navbar';
import TheRouter from './components/TheRouter';

// class App extends Component {
//     render() {
//
//         return (
//             <Navbar/>,
//             <TheRouter/>
//
//     );}
// }
// export default App;
const App = () => (
    <div>
        <TheRouter />
    </div>
)

export default App;