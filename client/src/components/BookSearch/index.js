import React from "react";

function BookSearch() {
  return (
    <div className="container clearfix shadow-lg p-3 mb-5 bg-white rounded">
      <p>Book Search</p>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search for a book..."/>
      </div>
      <button type="button" class="btn btn-outline-primary float-right">Search</button>
    </div>
  );
};

export default BookSearch;