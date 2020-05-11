import React, {Component} from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import SavedContainer from "../components/SavedContainer";

class Saved extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <br/>
        <Header/>
        <br/>
        <SavedContainer/>
      </div>
    );
  };
};
export default Saved;