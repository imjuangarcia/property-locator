import React from 'react';

import Loading from './components/Loading';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import PropertyList from './components/PropertyList';
import Pagination from './components/Pagination';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: {
        property: '',
        operationType: '',
        places: [],
      },
      pageNumber: 1,
      properties: [],
      loading: false,
    };
  }

  // Lifecycle Methods
  componentDidUpdate() {
    console.log(this.state.properties);
  }

  // Function to fetch the properties and update state
  getProperties = async (property, operationType, places, page, status) => {
    // Set the loading state
    this.setState({
      loading: true,
    });

    // Ping the API
    const response = await fetch(`https://www.properati.com.ar/${property}/${operationType}/en:${places}/${page}/?format=json`);
    const json = await response.json();

    // If there aren't elements on the array, we return the function
    if(json.length === 0) {

      // Remove the loading state
      this.setState({
        loading: false,
      });

      // Alert the user
      alert('No hay más resultados');

      // Exit the fn
      return;
    }

    // Check the type of operation (status). 1 === new, 2 === update
    if(status === 1) {
      // We're making a new search, so we drop the existing properties, and add the new ones
      this.setState({
        properties: json,
        loading: false,
      });
    } else {
      // We're updating the list via the pagination, thus we take a copy of the existing properties on state
      const currentProperties = this.state.properties;

      // We push the new items
      json.forEach(item => currentProperties.push(item));

      // And set the new state
      this.setState({
        properties: currentProperties,
        loading: false,
      });
    }
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
      },
      // We reset the counter because it's a new search
      pageNumber: 1,
    });

    // And call getProperties
    this.getProperties(property, operationType, places, 1, 1);
  }

  // To load more results after a search has been performed
  loadMoreResults = () => {
    
    // Update the page number
    this.setState({
      ...this.state,
      pageNumber: this.state.pageNumber + 1,
    });

    // And call the getProperties method
    this.getProperties(this.state.searchCriteria.property, this.state.searchCriteria.operationType, this.state.searchCriteria.places, this.state.pageNumber + 1, 2);
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
        <Pagination
          loadMoreResults={this.loadMoreResults}
        />
      </main>
    );
  }
}

export default App;
