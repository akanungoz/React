import React from 'react';
import Titles from './Titles';
import Form from './Form';
import Weather from './Weather';

class App extends React.Component {

  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=797070862e222d139c22b70a1e93751a`);

    const response = await api_call.json();

    console.log(response);

  }
  // use props to pass states to components
  render() {
    return (
      <div>
        <Titles />
        <Form loadWeather={this.getWeather}/>
        <Weather/>
      </div>
    );
  };
}
export default App;