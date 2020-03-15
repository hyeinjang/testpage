import "../assets/css/index.css";
import '../css/tailwind.css';
import React from "react";
import App from "next/app";
import { Provider } from 'context-q';

class myApp extends App {
  render() {
    const { pageProps, Component } = this.props;

    return (
      <>
        <Provider defaultState={{

        }}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default myApp;
