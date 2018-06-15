import React from "react";
import Autocomplete from "react-autocomplete";

class Search extends React.Component {
  handleRenderItem(item, isHighlighted) {
    const listStyles = {
      item: {
        padding: "2px 6px",
        cursor: "pointer"
      },
      highlightedItem: {
        color: "white",
        background: "#28a745",
        padding: "2px 6px",
        cursor: "pointer"
      }
    };

    return (
      <div id={item.id} key={item.id} style={isHighlighted ? listStyles.highlightedItem : listStyles.item}>
        {item.title}
      </div>
    );
  };

  render() {
    return (
      <div className="search">
        <Autocomplete
          ref="autocomplete"
          inputProps={{ title: "Title" }}
          value={this.props.autoCompleteValue}
          items={this.props.tracks}
          getItemValue={(item) => item.title}
          onSelect={this.props.handleSelect}
          onChange={this.props.handleChange}
          renderItem={this.handleRenderItem.bind(this)}
        />
      </div>
    );
  };
};

export default Search;
