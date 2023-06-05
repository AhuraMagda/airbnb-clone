import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Main from './components/Main';
import Card from './components/Card';
import cardPhoto from "./images/firstcard.png";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Card 
        img={cardPhoto} 
        rating="5.0"
        reviewCount="6"
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price="$36"
      />
    </div>
  );
}

export default App;
