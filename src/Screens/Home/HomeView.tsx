import React from 'react';
import './Home.css';
import logo from '../../logo.svg';

interface IProps {
    info: number;
  }

const HomeView = (props: IProps) =>{
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hello Word!{props.info}
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
}

export default HomeView;