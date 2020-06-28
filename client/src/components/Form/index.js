import React from "react";

function Form(props) {
  return (
    <div className="container">
      <form>
        <div className="form">
          <label html="search">
            <h2>Explore for books here</h2>
          </label>
          <input
            onChange={props.handleInputchange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for a Book"
            id="search"
          />
          <button onClick={props.handleFormSubmit} className="btn">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;