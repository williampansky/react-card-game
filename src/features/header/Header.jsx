import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ROUTES from 'config/routes.config';
import styled from 'styled-components';

// route views
// import TheCardCollectionView from 'layout/TheCardCollectionView';
// import TheDeckBuilderView from './TheDeckBuilderView';

export default function Header() {
  const { HOME } = ROUTES;

  return (
    <Component>
      <div className="container">
        <nav className="navbar">
          <div className="navbar-left">
            <Link className="item logo" to="/">
              HSclone
            </Link>
            <ul className="nav">
              <li>
                <Link className="item" to="/">
                  About
                </Link>
              </li>
              <li>
                <Link className="item" to="/">
                  News
                </Link>
              </li>
              <li>
                <Link className="item" to="/">
                  Store
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <ul className="nav">
              <li>
                <Link className="item" to="/">
                  Account
                </Link>
              </li>
              <li>
                <Link className="item" to="/">
                  Collection
                </Link>
              </li>
              <li>
                <Link className="item" to="/">
                  Decks
                </Link>
              </li>
            </ul>
            <div className="item play">
              <Link className="play-button" to="/">
                Play
              </Link>
            </div>
            <div className="item toggle">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                data-svg="navbar-toggle-icon"
              >
                <rect y="9" width="20" height="2"></rect>
                <rect y="3" width="20" height="2"></rect>
                <rect y="15" width="20" height="2"></rect>
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </Component>
  );
}

const Component = styled.div`
  border: 0;
  background: black;
  left: 0;
  margin: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10000;

  .container {
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    max-width: none;
    padding-left: 15px;
    padding-right: 15px;

    @media (min-width: 640px) {
      padding-left: 30px;
      padding-right: 30px;
    }

    @media (min-width: 960px) {
      padding-left: 40px;
      padding-right: 40px;
    }
  }

  .navbar {
    display: flex;
    position: relative;
  }

  .navbar-left,
  .navbar-right {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
  }

  .navbar-right {
    margin-left: auto;
  }

  .navbar .item {
    align-items: center;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    font-family: sans-serif;
    font-size: 11px;
    justify-content: center;
    min-height: 80px;
    padding: 0 15px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
  }

  .navbar .nav {
    display: none;
    margin: 0;
    padding: 0;
    list-style: none;

    @media (min-width: 960px) {
      display: flex;
    }
  }

  .item.logo {
    color: white;
    font-size: 25px;
    font-family: 'Carter One', sans-serif;
    text-transform: none;
  }

  .item.toggle {
    @media (min-width: 960px) {
      display: none;
    }
  }

  .item.toggle svg {
    fill: rgba(255, 255, 255, 0.8);
  }

  .item.play {
    display: none;

    @media (min-width: 960px) {
      display: flex;
    }
  }

  .play-button {
    border-radius: 2px;
    font-size: 11px;
    font-weight: 600;
    height: 41px;
    line-height: 41px;
    max-width: 220px;
    min-width: 129px;
    padding: 0 12px;
    position: relative;
    text-align: center;
    text-overflow: ellipsis;
    z-index: 0;
    cursor: pointer;
    display: inline-block;
    transition: color 300ms cubic-bezier(0.06, 0.81, 0, 0.98);
    vertical-align: middle;
    text-decoration: none;
    color: #f9f9f9;
    border: 0;
    outline: 0;
    background-color: #986f45;
  }
`;
