import React from "react";

function SavedList(props) {
  return (
    <div className="card" style={{
      width: '18rem;'
    }}>
      <div className="card-body">
        <button type="button" class="btn btn-outline-primary float-right">View</button>
        <button type="button" class="btn btn-outline-primary float-right">Delete</button>
        <h5 className="card-title">Results</h5>
        <p className="card-text">Book Title</p>
        <div className="row">
          <img
            style={{
            width: "200px",
            height: "200px"
          }}
            src="https://images-na.ssl-images-amazon.com/images/I/71sH3vxziLL.jpg"/>
          <p className="col">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
};

export default SavedList;