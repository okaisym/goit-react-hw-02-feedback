import React from "react";
import {Component} from React;

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  },
  };
