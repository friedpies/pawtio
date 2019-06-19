import React, { Component } from "react";
const AppContext = React.createContext();

export class Provider extends Component {
  state = {
    defaultText: "Austin"
  };

  onTextChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          defaultText: this.state.defaultText,
          onTextChange: this.onTextChange
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const Consumer = AppContext.Consumer;
