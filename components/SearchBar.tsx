class SearchBar extends React.Component {
  // ...

  handleSearchSubmit = e => {
    e.preventDefault();
    e.stopPropagation(); // just to be sure
  }

  render() {
    return (
      <form onSubmit={this.handleSearchSubmit}>
          <input width
            placeholder="Search all posts..."
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
      </form>
    );
  }
}
export default SearchBar;