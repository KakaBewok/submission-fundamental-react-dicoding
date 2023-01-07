/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <h1 className="Brand">
        <a href="https://www.linkedin.com/in/noprizal/" target="_blank">
          NotesApp
        </a>
      </h1>
      <ul className="navlink">
        <li>
          <Link to="/">
            <svg
              // className="Home icon icon-tabler icon-tabler-home"
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-home Home"
              width="33"
              height="33"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="5 12 3 12 12 3 21 12 19 12" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
          </Link>
        </li>
        <li>
          <Link to="/add">
            <svg
              className="Add"
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-circle-plus Add"
              width="33"
              height="33"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <line x1="9" y1="12" x2="15" y2="12" />
              <line x1="12" y1="9" x2="12" y2="15" />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
