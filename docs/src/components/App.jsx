import React, {Component} from 'react';
import Searchbar from './Searchbar';
import CityList from './CityList';
import axios from "axios";


class App extends Component {

  state = {
    cityList: [],
    weather: []
  };

  wArray = [];
  cities = [];

  componentWillMount() {
    this.loadCities();
  }

  loadCities = () => {
    $.getJSON("src/components/city.list.json", (data) => {
      this.cities = data;
    });
  };


  findCities = (query) => {
    if (query.length > 2) {
      let cities = this.cities.filter(function (city) {
        return (city.name.toLowerCase().includes(query.toLowerCase()));
      });
      this.setState({cityList: cities}, () => console.log(this.state.cityList));
    } else {
      this.setState({cityList: []}, () => console.log(this.state.cityList));
    }
    // for (let i = 0; i < cities.length; i++) {
    //   this.getWeather(cities[i].id);
    // }
    // console.log(this.state.weather);
  };


  getWeather = (query) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${query}&APPID=44f2f084f7e358bf70863f3ac77089bf`)
      .then((data) => {
        console.log(data.data);
        // this.wArray = data;
      });
  };

  render() {
    return (
      <div>
        <Searchbar findCities={this.findCities}/>
        <CityList cityList={this.state.cityList} weather={this.wArray}/>
      </div>
    );
  }
}


export default App;
