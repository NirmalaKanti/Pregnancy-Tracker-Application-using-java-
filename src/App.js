
import './App.css';
import Login from './components/pregenant/Login';
import {Routes,Route} from "react-router-dom"
import Cover1 from './components/Cover1';
import Cover from './components/Cover';
import Signin from './components/pregenant/Signin';
import WelcomeScreen from './components/pregenant/WelcomeScreen';
import StressManagementScreen from './components/pregenant/question1';
import EmotionalDevelopmentScreen from './components/pregenant/question2';
import NutritionScreen from './components/pregenant/question3';
import ActivityScreen from './components/pregenant/question4';
import PregnancyCalculator from './components/pregenant/pprofile';
import Bdevelop from './components/pregenant/Bdevelop';
import PHome from './components/pregenant/phome';
import PHealth from './components/pregenant/PHealth';
import PProgram from './components/pregenant/pprogram';
import Content from './components/Content';
import Discussion from './components/Discussion';
import Research from './components/Research';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';



function App() {
  return (
 
  
    <div className="App">
        <Routes>
          <Route path="/" element={<Cover1/>}/>
          <Route path="/cover" element={<Cover/>}/>
          <Route path="/pregnancy"element={<Content/>}/>
          <Route path="/pregnant/login" element={<Login/>}/>
          <Route path="/pregnant/Signin" element={<Signin />} />
          <Route path="/pregenant/welcome" element={<WelcomeScreen/>}/>
          <Route path="/pregenant/question1" element={<StressManagementScreen/>}/>
          <Route path="/pregenant/question2" element={<EmotionalDevelopmentScreen/>}/>
          <Route path="/pregenant/question3" element={<NutritionScreen/>}/>
          <Route path="/pregenant/question4" element={<ActivityScreen/>}/>
          <Route path="/pregenant/profile" element={<PregnancyCalculator/>}/>
          <Route path="/pregenant/Bdevelop" element={<Bdevelop />} />
          <Route path="/pregenant/home" element={<PHome/>}/>
          <Route path="/pregenant/health" element={<PHealth/>}/>
          <Route path="/pregenant/program" element={<PProgram/>}/>
          <Route path="/askdoctor" element={<Discussion/>}/>
          <Route path="/research" element={<Research/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
        </Routes>
    </div>
    
  );
}

export default App;
