import React from 'react';

// Components
import Loading from './components/Loading';
import Header from './components/Header';
import PropertyList from './components/PropertyList';
import PropertyFilters from './components/PropertyFilters';

// Data
import { propertyData } from './data/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // searchCriteria: {
      //   property: 'casa',
      //   operationType: 'alquiler',
      //   ordering: 'ord:p-a',
      //   places: [],
      // },
      filters: {
        ambients: 0,
        surface: 'all',
        priceRange: 'all',
      },
      searchTerm: '',
      // pageNumber: 1,
      properties: propertyData,
      filteredProperties: [],
      defaultView: 'grid',
      loading: false,
    };
  }
  
  componentDidUpdate() {
    console.log(this.state.filteredProperties);
  }

  // Function to fetch the properties and update state
  // getProperties = async (property, operationType, ordering, places, page, status) => {
  //   // Set the loading state
  //   this.setState({
  //     loading: true,
  //   });

  //   // Ping the API
  //   const response = await fetch(`https://www.properati.com.ar/${property}/${operationType}/${ordering}_en:${places}/${page}/?format=json`);
  //   const json = await response.json();

  //   // If there aren't elements on the array, we return the function
  //   if(json.length === 0) {

  //     // Remove the loading state
  //     this.setState({
  //       loading: false,
  //     });

  //     // Alert the user
  //     alert('No hay más resultados');

  //     // Exit the fn
  //     return;
  //   }

  //   // Check the type of operation (status). 1 === new, 2 === update
  //   if(status === 1) {
  //     // We're making a new search, so we drop the existing properties, and add the new ones
  //     this.setState({
  //       properties: json,
  //       filteredProperties: json,
  //       loading: false,
  //     });

  //   } else {
  //     // We're updating the list via the pagination, thus we take a copy of the existing properties on state
  //     const currentProperties = this.state.properties;

  //     // We push the new items
  //     json.forEach(item => currentProperties.push(item));

  //     // Set the new state
  //     this.setState({
  //       properties: currentProperties,
  //       loading: false,
  //     });

  //     // And filter the results
  //     this.filterProperties(this.state.filters.ambients, this.state.filters.coveredSurface, this.state.filters.totalSurface, this.state.searchTerm);
  //   }
  // }

  // Function to handle the search form submission and update the state
  // handleSearchCriteriaSubmit = (e) => {
  //   e.preventDefault();

  //   // Get the values from the inputs
  //   const operationType = e.target.operationType.value;
  //   const property = e.target.property.value;
  //   const ordering = e.target.ordering.value;
  //   const places = [];

  //   // If we have more than one, we iterate over the values
  //   if(e.target.places.length > 1) {
  //     e.target.places.forEach(place => places.push(place.value))
  //   }
  //   // If we have only one, we get its value
  //   else if (e.target.places.value !== '') {
  //     places.push(e.target.places.value);
  //   } 
  //   // If none of the above are met, that means the field is empty, thus we alert the user
  //   else {
  //     alert('Elegí un lugar, piscui');
  //     return;
  //   }
    
  //   // Update the state
  //   this.setState({
  //     searchCriteria: {
  //       ...this.state.searchCriteria,
  //       operationType,
  //       property,
  //       places
  //     },
  //     // We reset the counter because it's a new search
  //     pageNumber: 1,
  //   });

  //   // And call getProperties
  //   this.getProperties(property, operationType, ordering, places, 1, 1);
  // }

  // To handle the filters form
  handleFiltersForm = (e) => {
    e.preventDefault();
    const inputs = e.currentTarget.parentElement.parentElement;

    // Get the input values
    const ambients = inputs[0].value;
    const surface = inputs[1].value;
    const priceRange = inputs[2].value;

    // Set them to state
    this.setState({
      filters: {
        ambients,
        surface,
        priceRange,
      }
    });

    // And filter the properties using this criteria
    this.filterProperties(ambients, surface, priceRange, this.state.searchTerm);
  }

  // To handle the search functionality
  handleSearch = (e) => {
    e.preventDefault();

    // Get the value from the input
    const searchTerm = e.target.value;

    // Set the value on state
    this.setState({
      searchTerm,
    });

    // Call the filter properties method
    this.filterProperties(this.state.filters.ambients, this.state.filters.surface, this.state.filters.priceRange, searchTerm);
  }

  // To load more results after a search has been performed
  // handleLoadMore = (e) => {
  //   // Prevent the form from being submitted
  //   e.preventDefault();
    
  //   // Update the page number
  //   this.setState({
  //     ...this.state,
  //     pageNumber: this.state.pageNumber + 1,
  //   });

  //   // And call the getProperties method
  //   this.getProperties(this.state.searchCriteria.property, this.state.searchCriteria.operationType, this.state.searchCriteria.ordering, this.state.searchCriteria.places, this.state.pageNumber + 1, 2);
  // }

  // To toggle the default view
  // toggleDefaultView = (e) => {
  //   e.preventDefault();

  //   if (this.state.defaultView === 'grid') {
  //     this.setState({
  //       defaultView: 'map'
  //     });
  //   } else {
  //     this.setState({
  //       defaultView: 'grid'
  //     });
  //   }
  // }

  // To filter the properties
  filterProperties = (ambients, surface, priceRange, searchTerm) => {

    // Filter by ambients
    let filteredByAmbient;
    ambients === '0' ? filteredByAmbient = this.state.properties : filteredByAmbient = this.state.properties.filter(property => property.ambients === parseInt(ambients));
    
    // Filter by surface
    let filteredBySurface;
    switch(surface) {
      case '0-49':
        filteredBySurface = filteredByAmbient.filter(property => property.area > 0 && property.area < 49).sort((a, b) => a.area > b.area ? 1 : -1);
        break;
      case '50-99':
        filteredBySurface = filteredByAmbient.filter(property => property.area > 50 && property.area < 99).sort((a, b) => a.area > b.area ? 1 : -1);
        break;
      case '100-149':
        filteredBySurface = filteredByAmbient.filter(property => property.area > 100 && property.area < 149).sort((a, b) => a.area > b.area ? 1 : -1);
        break;
      case '150-199':
        filteredBySurface = filteredByAmbient.filter(property => property.area > 150 && property.area < 199).sort((a, b) => a.area > b.area ? 1 : -1);
        break;
      case '200-+':
        filteredBySurface = filteredByAmbient.filter(property => property.area > 200).sort((a, b) => a.area > b.area ? 1 : -1);
        break;
      default:
        filteredBySurface = filteredByAmbient;
    }

    // Filter by price
    let filteredByPrice;
    switch(priceRange) {
      case '0-30':
        filteredByPrice = filteredBySurface.filter(property => property.price > 0 && property.price < 29999).sort((a, b) => a.price > b.price ? 1 : -1);
        break;
      case '30-60':
        filteredByPrice = filteredBySurface.filter(property => property.price > 30000 && property.price < 59999).sort((a, b) => a.price > b.price ? 1 : -1);
        break;
      case '60-90':
        filteredByPrice = filteredBySurface.filter(property => property.price > 60000 && property.price < 89999).sort((a, b) => a.price > b.price ? 1 : -1);
        break;
      case '90-120':
        filteredByPrice = filteredBySurface.filter(property => property.price > 90000 && property.price < 119999).sort((a, b) => a.price > b.price ? 1 : -1);
        break;
      case '120-+':
        filteredByPrice = filteredBySurface.filter(property => property.price > 120000).sort((a, b) => a.price > b.price ? 1 : -1);
        break;
      default:
        filteredByPrice = filteredBySurface;
    }

    // Filter by word
    const filteredBySearchTerm = filteredByPrice.filter(property => {
      if(property.description) {
        return property.description.toLowerCase().includes(searchTerm);
      } else if(property.title) {
        return property.title.toLowerCase().includes(searchTerm);
      } else if(property.location) {
        return property.location.toLowerCase().includes(searchTerm);
      }
    });

    // After all the filtering, push the data to state
    this.setState({
      filteredProperties: filteredBySearchTerm,
    });
  }

  render() {
    return (
      <main className="App">
        {this.state.loading ? <Loading /> : ''}
        <Header />
        <PropertyFilters
          handleFiltersForm={this.handleFiltersForm}
          handleSearch={this.handleSearch}
          filters={this.state.filters}
          defaultView={this.state.defaultView}
          toggleDefaultView={this.toggleDefaultView}
        />
        {/* <SearchForm
          searchCriteria={this.state.searchCriteria}
          handleSubmit={this.handleSearchCriteriaSubmit}
          handleLoadMore={this.handleLoadMore}
          properties={this.state.filteredProperties}
        /> */}
        <PropertyList
          properties={this.state.filteredProperties}
        />
      </main>
    );
  }
}

export default App;
