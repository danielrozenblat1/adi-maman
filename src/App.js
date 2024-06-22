import logo from './logo.svg';
import './App.css';
import Bubble from './components/shapes/Bubble';
import SecondScreen from './screens/SecondScreen';
import FirstScreen from './screens/FirstScreen';
import Recommends from './components/recommends/Recommends';
import ForthScreen from './screens/ForthScreen';
import ThirdScreen from './screens/ThirdScreen';
import ByMe from './components/ByMe/ByMe';

function App() {
  return <>
  <FirstScreen/>
<Recommends/>
<SecondScreen/>
<ForthScreen/>
<ThirdScreen/>
<ByMe/>
  </>
}

export default App;
