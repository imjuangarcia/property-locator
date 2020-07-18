import React from 'react';
import SearchForm from './components/SearchForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: {
        property: 'casa',
        operationType: 'alquiler',
        places: ['escobar', 'maschwittz', 'pilar'],
        pageNumber: 1,
      },
      properties: [],
    };
  }

  // Lifecycle Methods
  componentDidMount() {
    // Get the properties
    this.getProperties(this.state.searchCriteria.property, this.state.searchCriteria.operationType, this.state.searchCriteria.places, this.state.searchCriteria.pageNumber);
  }
  
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
    
    // And update the state
    this.setState({
      searchCriteria: {
        ...this.state.searchCriteria,
        operationType,
        property,
      }
    })
  }

  render() {
    return (
      <main className="App">
        <SearchForm
          searchCriteria={this.state.searchCriteria}
          handleSubmit={this.handleSearchCriteriaSubmit}
        />
      </main>
    );
  }
}

export default App;
