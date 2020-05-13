import React from "react";

function SavedContainer(props) {
  return (
    <div>
      <div className="container clearfix shadow-lg p-3 mb-5 bg-white rounded">Saved
      </div>
      {props.children}
    </div>

  );
};

export default SavedContainer;