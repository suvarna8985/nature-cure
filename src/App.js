
import './App.css';
import Header from './header.jsx';
import Home from  './home.jsx';
import FoodDetails from "./FoodDetails";
import Foods from "./Foods";
import Juices  from './juices.jsx';
import JuiceDetails from "./juice Details.jsx";
import About from "./About"; 
import Contact from"./contact.jsx";



function App() {
  return (
    <div className="App">
      <Header />
       <Home /> 
       <FoodDetails />
       <Foods />
      
      <Juices />
      <JuiceDetails />
      <About />   {/* Add here */}
      <Contact />
    </div>
  );
}

export default App;
