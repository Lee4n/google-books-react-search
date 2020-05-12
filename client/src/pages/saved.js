import React, {Component} from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import SavedContainer from "../components/SavedContainer";
import SavedList from "../components/SavedList";

class Saved extends Component {
  state = {
    apiResults: [],
    search: ""
  }

  render() {
    return (
      <div>
        <Nav/>
        <br/>
        <Header/>
        <br/>
        <SavedContainer>
          <SavedList apiResults={this.state.apiResults}/>
        </SavedContainer>
      </div>
    );
  };
};
export default Saved;