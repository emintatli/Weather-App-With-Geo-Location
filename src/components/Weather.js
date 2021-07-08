import { useContext,useEffect,useState } from "react";
import WeatherContext from "../context/WeatherContext";
const Weather=()=>{
    const locationData=useContext(WeatherContext);
    const api_key="YOUR_API_KEY_HERE"; // normalde bunu server side render ile kullanmak lazım ödevde belirtilmediği için yapmıyorum.
    const [weatherData,setWeatherData]=useState([]);
    const [location,setLocation]=useState("");
    useEffect(async()=>{
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async function(position) {
                const location_api=`https://us1.locationiq.com/v1/reverse.php?key=YOUR_API_KEY_HERE&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
                const req = await fetch(location_api);
                const res=await req.json();
                
                setLocation(res.display_name)
                if(res.display_name.includes("Ankara")){
                    locationData.setLocation("Ankara")
                }
                else if(res.display_name.includes("Istanbul")){
                    locationData.setLocation("Istanbul")
                }
                else if(res.display_name.includes("Izmir")){
                    locationData.setLocation("Izmir")
                }
                else if(res.display_name.includes("Adana")){
                    locationData.setLocation("Adana")
                }
                else if(res.display_name.includes("Kocaeli")){
                    locationData.setLocation("Kocaeli")
                }
            });
          } else {
            setLocation("Location service not permitted!");
          }
    },[])
    useEffect(()=>{
        const getData=async ()=>{

            const req = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${locationData.location},TR&key=${api_key}`);
            const res=await req.json();
            setWeatherData(res);
        }
        getData();
    },[locationData.location])
   
    return <>
    <p className="d-flex align-items-center justify-content-center"><img className="me-1" width="20px" height="20px" src="./images/reddot.gif"></img>{location}</p>
    <div className="d-flex flex-row main-weather">
       
        {weatherData.data&&weatherData.data.map((value,index)=>index<7&&<div className={`card m-2 ${index===0&&"active"}`}>
       
            <div className="card-body d-flex flex-column align-items-center">
            <span className="today">{index===0&&"Today"}</span>
            <p className="fs-6 text-secondary">{value.valid_date}</p>
            <img className={`${value.weather.description.includes("cloud")?"":"visually-hidden"}`} src="./images/cloudy.png"></img>
            <img className={`${value.weather.description.includes("Clear")?"":"visually-hidden"}`} src="./images/sunny.png"></img>
            <img className={`${value.weather.description.includes("rain")?"":"visually-hidden"}`} src="./images/rain.png"></img>
            <p className="text-secondary mt-1">{value.weather.description}</p>
            <p className="">{value.max_temp}° <span className="text-secondary">{value.min_temp}°</span></p>
            </div>
        </div>)}

      
    </div>
    </>
    }
    export default Weather;