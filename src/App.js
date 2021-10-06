import './App.css';
import Greet from './component/Greet';
import Message from './component/Message';

function App() 
{
  return(
          <div className="App">
            <Greet name="Ajinkya" skill="UI/UX Developer"/>
            <Message msg="Default Message"/>
          </div>
        );
}

export default App;
