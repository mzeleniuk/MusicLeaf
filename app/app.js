import React from "react";
import ReactDOM from "react-dom";
import Search from "./components/search.jsx";

class App extends React.Component {
  render() {
    return (
      <Search />
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById("content")
);
