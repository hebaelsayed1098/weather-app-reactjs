import React ,{Component} from 'react';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';
const ApIkey ='54bbee5d1bd4b2d9064675dc9cc59894'; 
class App extends Component{
  state={
    tempreature: '' ,
    city :'' ,
    country: '' ,
    humidity : '' ,
    description:'' ,
    error: '',
  }
  getweather= async(e)=>{
    e.preventDefault();
    const city =e.target.elements.city.value;
    const country =e.target.elements.country.value;
    const Api =await fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+','+country +'&appid='+ApIkey);
    const data =await Api.json();
   //console.log(data);
    if(city && country){
      this.setState({
        tempreature: data.main.temp ,
        city :data.name ,
        country: data.sys.country ,
        humidity : data.main.humidity ,
        description:data.weather[0].description,
        error: '',
       })
  }
  else if(city){
    this.setState({
      tempreature: '' ,
      city :'' ,
      country: '' ,
      humidity : '' ,
      description:'' ,
      error: 'Please Enter Country',
     })
  }
  else if(country){
    this.setState({
      tempreature: '' ,
      city :'' ,
      country: '' ,
      humidity : '' ,
      description:'' ,
      error: 'Please Enter City',
     })
  }
  else{
  this.setState({
    tempreature: '' ,
    city :'' ,
    country: '' ,
    humidity : '' ,
    description:'' ,
    error: 'Please Enter Data',
   })
}
}
  render(){
  return (
    <div className="weather">
    <div className="form-container">
        <p className ="app">Weather App</p>
        <Form getweather ={this.getweather}/>
        <Weather
        tempreature= {this.state.tempreature}
        city  = {this.state.city}
        country = {this.state.country}
        humidity ={this.state.humidity}
        description ={this.state.description}
        error = {this.state.error}
        />
        </div>
    </div>
  );
}
}
export default App;
