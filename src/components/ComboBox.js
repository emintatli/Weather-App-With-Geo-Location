import { useContext } from "react"
import WeatherContext from "../context/WeatherContext";
const ComboBox=()=>{
const locationData=useContext(WeatherContext);
const city=locationData.location;
const changeCity=(event)=>{
locationData.setLocation(event.target.value)
}
return <>
<div className="combo-main">
<select onChange={changeCity} className="form-select w-25" aria-label="Default select example">
<option selected>{locationData.location}</option>
<option value="Istanbul">Istanbul</option>
  <option value="Ankara">Ankara</option>
  <option value="Izmir">İzmir</option>
  <option value="Kocaeli">Kocaeli</option>
  <option value="Adana">Adana</option>
</select>
</div>



</>
}
export default ComboBox