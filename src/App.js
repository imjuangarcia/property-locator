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
        property: 'casa',
        operationType: 'alquiler',
        ordering: 'ord:p-a',
        places: [],
      },
      filters: {
        ambients: '',
        coveredSurface: '',
        totalSurface: '',
      },
      pageNumber: 1,
      properties: [],
      filteredProperties: [],
      loading: false,
    };
  }

  // Lifecycle Methods
  componentDidUpdate() {
    console.log(this.state.properties);
  }

  // Function to fetch the properties and update state
  getProperties = async (property, operationType, ordering, places, page, status) => {
    // Set the loading state
    this.setState({
      loading: true,
    });

    // Ping the API
    const response = await fetch(`https://www.properati.com.ar/${property}/${operationType}/${ordering}_en:${places}/${page}/?format=json`);
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
        filteredProperties: [],
        loading: false,
      });

    } else {
      // We're updating the list via the pagination, thus we take a copy of the existing properties on state
      const currentProperties = this.state.properties;

      // We push the new items
      json.forEach(item => currentProperties.push(item));

      // Set the new state
      this.setState({
        properties: currentProperties,
        loading: false,
      });

      // And filter the results
      this.filterProperties(this.state.filters.ambients);
    }
  }

  // Function to handle the search form submission and update the state
  handleSearchCriteriaSubmit = (e) => {
    e.preventDefault();

    // Get the values from the inputs
    const operationType = e.target.operationType.value;
    const property = e.target.property.value;
    const ordering = e.target.ordering.value;
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
    this.getProperties(property, operationType, ordering, places, 1, 1);
  }

  // To handle the filters form
  handleFiltersForm = (e) => {
    e.preventDefault();

    // Get the input values
    const ambients = e.target.ambients.value;
    const coveredSurface = e.target.coveredSurface.value;
    const totalSurface = e.target.totalSurface.value;

    // Set them to state
    this.setState({
      filters: {
        ambients,
        coveredSurface,
        totalSurface,
      }
    });

    // And filter the properties using this criteria
    this.filterProperties(ambients, coveredSurface, totalSurface);
  }

  // To load more results after a search has been performed
  loadMoreResults = () => {
    
    // Update the page number
    this.setState({
      ...this.state,
      pageNumber: this.state.pageNumber + 1,
    });

    // And call the getProperties method
    this.getProperties(this.state.searchCriteria.property, this.state.searchCriteria.operationType, this.state.searchCriteria.ordering, this.state.searchCriteria.places, this.state.pageNumber + 1, 2);
  }

  // To filter the properties
  filterProperties = (ambients, coveredSurface, totalSurface) => {
    console.log('test');
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
          properties={this.state.filteredProperties.length ? this.state.filteredProperties : this.state.properties}
          handleFiltersForm={this.handleFiltersForm}
        />
        {this.state.properties.length > 0 ? <Pagination loadMoreResults={this.loadMoreResults} /> : ''}
      </main>
    );
  }
}

export default App;
