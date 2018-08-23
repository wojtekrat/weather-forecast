import React, {Component} from 'react';
import Searchbar from './Searchbar';
import CityList from './CityList';
import axios from "axios";


class App extends Component {

  state = {
    cities: [],
    cityList: [],
    weather: {}
  };

  componentWillMount() {
    this.loadCities();

  }

  loadCities = () => {
    $.getJSON("src/components/city.list.json", (data) => {
      this.setState({cities: data});
      console.log(this.state.cities);
    });
  };


  getCities = (query) => {
    let cities = this.state.cities.filter(function (city) {
      return (city.name.toLowerCase().includes(query.toLowerCase()));
    });
    this.setState({cityList: cities});
    console.log(this.state.cityList);
    this.getWeather(cities[0].id);
  };

  getWeather = (query) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${query}&APPID=44f2f084f7e358bf70863f3ac77089bf`)
      .then((data) => {
        this.setState({weather: data.data});
        console.log(this.state.weather);
      });
  };

  render() {
    return (
      <div>
        <Searchbar getCities={this.getCities}/>
        <CityList cityList={this.state.cityList}/>
      </div>
    );
  }
}

// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=44f2f084f7e358bf70863f3ac77089bf

export default App;
