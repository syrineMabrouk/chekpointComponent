import './App.css';
import Adresse from './component/Profile/Adresse';
import FullName from './component/Profile/FullName';
import ProfilePhoto from './component/Profile/ProfilePhoto';



function App() {
  return (
    <div className="App">
      <Adresse/>

      <FullName/>
      <ProfilePhoto/>
    </div>
  );
}

export default App;
