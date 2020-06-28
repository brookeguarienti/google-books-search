import React from "react";
import Form from "../components/Form";
import Results from "../components/Results";
import API from "../utils/API";

class Search extends React.Component {
  state = {
    value: "",
    books: [],
  };

  componentDidMount() {
    this.searchBooks();
  }
  makeBook = (bookData) => {
    return {
      _id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink,
    };
  };

  searchBook = (query) => {
    API.getBook(query)
      .then((res) =>
        this.setState({
          books: res.data.items.map((bookData) => this.makeBook(bookData)),
        })
      )
      .catch((err) => console.error(err));
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchBook(this.state.search);
  };

  render() {
    return (
      <div>
        <Form
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <div classNAme="container">
          <h2>Search Results</h2>
          <Results books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default Search;
