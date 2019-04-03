import React from 'react';
import Titles from './Titles';
import Form from './Form';
import Weather from './Weather';

class App extends React.Component {
  render() {
    return (
      <div>
        <Titles />
        <Form/>
        <Weather />
      </div>
    );
  };
}
export default App;