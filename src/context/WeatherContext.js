import { createContext,useState } from "react";

const WeatherContext=createContext();

export const LocationProvider=(props)=>{
    const [location,setLocation]=useState("Istanbul");
    const values={
        location:location,
        setLocation:setLocation
    }
    return <WeatherContext.Provider value={values}>{props.children}</WeatherContext.Provider>
}

export default WeatherContext;