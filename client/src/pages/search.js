import React, {Component} from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import BookSearch from "../components/BookSearch";
import ResultsContainer from "../components/ResultsContainer";

class Search extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <br/>
        <Header/>
        <br/>
        <BookSearch/>
        <ResultsContainer/>
      </div>
    );
  };

};

export default Search;