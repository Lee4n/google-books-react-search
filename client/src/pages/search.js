import React, {Component} from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import BookSearch from "../components/BookSearch";

class Search extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <br/>
        <Header/>
        <br/>
        <BookSearch/>
      </div>
    )
  }

}

export default Search;