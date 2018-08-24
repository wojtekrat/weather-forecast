import React, {Component} from 'react';

class CityList extends Component {

  constructor(props) {
    super();
    console.log(props)
  }



  renderCity(city) {
    return (
      <li key={city.id} onClick={() => {
        this.props.getCurrentWeather(city.id);
      }}>
        {city.name},
        {city.country},
        {city.id}
      </li>
    );
  }

  render() {
    return (
      <div>
        <ul className="city-list">
          {this.props.cityList.map(this.renderCity)}
        </ul>
      </div>
    );
  }
}

export default CityList;
