import React, {Component} from 'react';
import AnimalContainer from './components/AnimalContainer'

import './App.css';

class App extends Component {
  
  state = {
    animals: []
  }

  
  //parses the token out from the request
  getToken = response => {
      const token = response.access_token
      return token
  }
  //filter the animals for ones that have pictures
  filterResponseForAnimalsWithPhotos = (response) => {
      return response.animals.filter(animal => animal.photos.length !== 0)
    
  }

componentDidMount() {
  fetch("https://api.petfinder.com/v2/oauth2/token", {
    body: "grant_type=client_credentials&client_id=fnK2eAeCFxLdrat5tPgeqpOmw5hSR86WPsYHmYX7qBPGmrlYMB&client_secret=JzyDFtjV3PZd3fgMLOCTxccTmJODxZ1VLJiTlpvh",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
  },
    method: "POST"
}).then(response => response.json())
    .then(this.getToken)
    .then(token => {
      fetch('https://api.petfinder.com/v2/animals?type=cat&limit=100', {
        headers: {
            "Authorization": `Bearer ${token}`
        }
      }).then(response => response.json())
        .then(this.filterResponseForAnimalsWithPhotos)
        .then(animals => this.setState({ animals }))
    })
  }    
  
  render(){
    return (
      <div className="App">
        <AnimalContainer animals={this.state.animals} />
      </div>
    );    
  }
}

export default App;
