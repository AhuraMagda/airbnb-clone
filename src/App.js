import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Main from './components/Main';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <div className='cards-container'>
          <Card 
            img={"../images/cardimg1.png"} 
            rating="5.0"
            reviewCount="6"
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price="$36"
          />
          <Card 
            img={"../images/cardimg2.png"} 
            rating="5.0"
            reviewCount="30"
            country="USA"
            title="Learn wedding photography"
            price="$125"
          />
          <Card 
            img={"../images/cardimg3.png"} 
            rating="4.8"
            reviewCount="2"
            country="USA"
            title="Group Mountain Biking"
            price="$50"
          />
      </div>
    </div>
  );
}

export default App;
