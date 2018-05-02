import React from "react";
import ReactDOM from "react-dom";
import Search from "./components/search.jsx";
import Details from "./components/details.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <Details title={"Track Title"} />
      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById("content")
);
