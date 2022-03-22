//import logo from './logo.svg';
import './App.css';
import Accordion from "./Accordion"
import data from "./data"

function App() {
  const accordion = data.map(item => {
    return <Accordion title={item.title} content={item.content}/>
  })
  return (
    <div>
      
      {accordion}
    </div>
  );
}

export default App;
