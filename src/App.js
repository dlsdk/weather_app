import './App.css';
import Searchbar from './components/Searchbar';
import Main from "./components/Main"
import { wheatherimages } from './images/images';
import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Actions from './redux/actions';


function App() {
  
  const dispatch = useDispatch();
  const {SET_WHEATHER} = Actions.wheateractions;
  const {weather} = useSelector(state =>  state.WheaterReducers)
  const [bgUrl,setBgUrl] = useState(wheatherimages.default);

  
 useEffect(() => {
  console.log("ilk yüklendiğinde")
  fetch("https://api.openweathermap.org/data/2.5/weather?q=Istanbul&units=metric&APPID=b9218977a3028474c252b928e5d701ee")
        .then(res => res.json())
        .then(res => {
            dispatch(SET_WHEATHER(res));
        }).catch(console.log("error"));

}, []);


useEffect(() => {
  
  if (weather.cod === 200){

    switch (weather.weather[0].main) {
      case "Sunny":
        setBgUrl(wheatherimages.sunny);
        break;
      case "Clouds":
        setBgUrl(wheatherimages.cloud);
        break;
      case "Clear":
        setBgUrl(wheatherimages.clear);
        break;
      case "Rain":
        setBgUrl(wheatherimages.rain);
        break;
      case "Dust":
        setBgUrl(wheatherimages.dust);
        break;
      default:
        setBgUrl(wheatherimages.default);
        console.log("default");
        break;
    }
}}, [weather])

  return (
    <div className="App" style={{backgroundImage:`url(${bgUrl})`}}>
      <Searchbar/>
      <Main/>
    </div>
  );
}

export default App;
