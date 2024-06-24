import logo from './logo.svg';
import './App.css';
import Bubble from './components/shapes/Bubble';
import SecondScreen from './screens/SecondScreen';
import FirstScreen from './screens/FirstScreen';
import Recommends from './components/recommends/Recommends';
import ForthScreen from './screens/ForthScreen';
import ThirdScreen from './screens/ThirdScreen';
import ByMe from './components/ByMe/ByMe';
import Students from './components/recommends/Students';
import FormScreen from './components/form/FormScreen';

function App() {
  return <>
  <FirstScreen/>
<Recommends/>
<SecondScreen/>
<ForthScreen/>
<Students/>
<ThirdScreen/>
<FormScreen/>
<ByMe/>
  </>
}

export default App;
