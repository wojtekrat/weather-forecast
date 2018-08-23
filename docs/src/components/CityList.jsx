import React, {Component} from 'react';

class CityList extends Component {

  renderCity(city, index) {
    return <li key={index}>{city.name}, {city.country}, {city.id}</li>;
  }

  render() {
    return (
      <ul>
        {this.props.cityList.map(this.renderCity)}
      </ul>
    );
  }
}

export default CityList;
