import React from 'react';
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
    };
  }

  // Lifecycle Methods
  componentDidUpdate() {
    console.log(this.state.properties);
  }

  // Function to fetch the properties and update state
  getProperties = async (property, operationType, places, page) => {
    const response = await fetch(`https://www.properati.com.ar/${property}/${operationType}/en:${places}/${page}/?format=json`);
    const json = await response.json();
    
    // Update the properties state
    this.setState({
      properties: json
    });
  }

  // Function to handle the search form submission and update the state
  handleSearchCriteriaSubmit = (e) => {
    e.preventDefault();

    // Get the values from the inputs
    const operationType = e.target.operationType.value;
    const property = e.target.property.value;
    const places = [];
    e.target.places.length ? e.target.places.forEach(place => places.push(place.value)) : places.push(e.target.places.value);
    
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
