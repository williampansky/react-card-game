import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ROUTES from 'config/routes.config';
import styled from 'styled-components';

// route views
// import TheCardCollectionView from 'layout/TheCardCollectionView';
// import TheDeckBuilderView from './TheDeckBuilderView';

export default function Header() {
  const { HOME, ABOUT, NEWS, STORE, ACCOUNT, COLLECTION, DECKS, PLAY } = ROUTES;

  return (
    <Component>
      <div className="container">
        <nav className="navbar">
          <div className="navbar-left">
            <Link className="item logo" to={HOME.path}>
              HSclone
            </Link>
            <ul className="nav">
              <li>
                <Link className="item" to={ABOUT.path}>
                  {ABOUT.name}
                </Link>
              </li>
              <li>
                <Link className="item" to={NEWS.path}>
                  {NEWS.name}
                </Link>
              </li>
              <li>
                <Link className="item" to={STORE.path}>
                  {STORE.name}
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <ul className="nav">
              <li>
                <Link className="item" to={ACCOUNT.path}>
                  {ACCOUNT.name}
                </Link>
              </li>
              <li>
                <Link className="item" to={COLLECTION.path}>
                  {COLLECTION.name}
                </Link>
              </li>
              <li>
                <Link className="item" to={DECKS.path}>
                  {DECKS.name}
                </Link>
              </li>
            </ul>
            <div className="item play">
              <Link className="play-button" to={PLAY.path}>
                {PLAY.name}
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
  z-index: 100;

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
    font-family: 'Open Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    justify-content: center;
    min-height: 80px;
    padding: 0 15px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
  }

  .navbar .item:before {
    content: '';
    display: block;
    position: absolute;
    left: 15px;
    right: calc(102% - 15px);
    bottom: 20px;
    height: 1px;
    background-color: currentColor;
    transition: 300ms ease-in-out;
    transition-property: right;
  }

  .navbar .item:hover,
  .navbar .item:focus {
    color: white;

    &:before {
      right: 15px;
    }
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

    &:before {
      content: none;
    }
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
    background-color: var(--theme-primary);
    border-radius: 2px;
    border: 0;
    color: #065174;
    cursor: pointer;
    display: inline-block;
    font-size: 13px;
    font-weight: 800;
    height: 41px;
    letter-spacing: 0.065em;
    line-height: 41px;
    max-width: 220px;
    min-width: 129px;
    outline: 0;
    padding: 0 12px;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-overflow: ellipsis;
    transition: color 300ms cubic-bezier(0.06, 0.81, 0, 0.98);
    vertical-align: middle;
    z-index: 0;
  }
`;
