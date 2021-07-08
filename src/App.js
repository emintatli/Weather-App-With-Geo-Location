
import './main.scss';
import {LocationProvider} from "./context/WeatherContext";
import ComboBox from "./components/ComboBox"
import Weather from "./components/Weather"
function App() {
  return (
    <LocationProvider>
     
      <div className="main container d-flex justify-content-center align-items-center">
        <div className="card w-100">
          <div className="card-body">
          <ComboBox/>
           <Weather/>
          </div>
        </div>

      </div>
    </LocationProvider>
  );
}

export default App;
