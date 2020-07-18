import React from 'react';

import Loading from './components/Loading';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import PropertyList from './components/PropertyList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: {
        property: '',
        operationType: '',
        places: [],
        pageNumber: 1,
      },
      properties: [],
      loading: false,
    };
  }

  // Lifecycle Methods
  componentDidUpdate() {
    console.log(this.state.properties);
  }

  // Function to fetch the properties and update state
  getProperties = async (property, operationType, places, page) => {
    // Set the loading state
    this.setState({
      loading: true,
    });

    const response = await fetch(`https://www.properati.com.ar/${property}/${operationType}/en:${places}/${page}/?format=json`);
    const json = await response.json();
    
    // Update the properties state
    this.setState({
      properties: json,
      loading: false,
    });
  }

  // Function to handle the search form submission and update the state
  handleSearchCriteriaSubmit = (e) => {
    e.preventDefault();

    // Get the values from the inputs
    const operationType = e.target.operationType.value;
    const property = e.target.property.value;
    const places = [];

    // If we have more than one, we iterate over the values
    if(e.target.places.length > 1) {
      e.target.places.forEach(place => places.push(place.value))
    }
    // If we have only one, we get its value
    else if (e.target.places.value !== '') {
      places.push(e.target.places.value);
    } 
    // If none of the above are met, that means the field is empty, thus we alert the user
    else {
      alert('Elegí un lugar, piscui');
      return;
    }
    
    // Update the state
    this.setState({
      searchCriteria: {
        ...this.state.searchCriteria,
        operationType,
        property,
        places
      }
    });

    // And call getProperties
    this.getProperties(property, operationType, places, 1);
  }

  render() {
    return (
      <main className="App">
        {this.state.loading ? <Loading /> : ''}
        <Header />
        <SearchForm
          searchCriteria={this.state.searchCriteria}
          handleSubmit={this.handleSearchCriteriaSubmit}
        />
        <PropertyList
          properties={this.state.properties}
        />
      </main>
    );
  }
}

export default App;
