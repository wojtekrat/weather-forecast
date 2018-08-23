import React, {Component} from 'react';

class CityList extends Component {

  renderCity(city) {
    return <li key={city.id}>{city.name}, {city.country}, {city.id}</li>;
  }

  renderWeather(city, index) {
    return <li key={index}> {city.base}</li>;
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.cityList.map(this.renderCity)}
          {this.props.weather.map(this.renderWeather)}
        </ul>
      </div>
    );
  }
}

export default CityList;
