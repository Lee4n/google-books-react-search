import React, {Component} from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import BookSearch from "../components/BookSearch";
import ResultsContainer from "../components/ResultsContainer";
import Api from "../utils/api";
import ResultsList from "../components/ResultsList";

class Search extends Component {
state = {
    apiResults: [],
    search: ""
}
 
 handleChange = event => {
         const {name, value} = event.target;
         this.setState({
           [name]:value//search:value
         })

 }

 handleSubmit = event => {
     console.log("SEARCH", this.state.search)
     Api.getGoogleBooks(this.state.search).then(results => {
         
         this.setState({
            apiResults: results.data.items
         });
     })
    
 }
  render() {
    return (
      <div>
        <Nav/>
        <br/>
        <Header/>
        <br/>
        <BookSearch  handleChange={this.handleChange} search={this.state.search} handleSubmit={this.handleSubmit}/>
        <ResultsContainer>
            <ResultsList apiResults={this.state.apiResults}/>
        </ResultsContainer>
      </div>
    );
  };

};

export default Search;