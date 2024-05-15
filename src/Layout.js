import React from 'react';
import {Link} from 'react-router-dom';

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
          <ul className='h3 mt-2'>
            <li><Link to="/">Currency Exchange Rates</Link></li>
            <span> | </span>
            <li><Link to="/currencyconverter">Currency Converter</Link></li>
          </ul>
      </nav>
      <div className="container py-3">
        {props.children}
      </div>
      <footer className="p-3 bg-light">
        <div className="mb-2">
          <a className="badge text-secondary" href="https://github.com/Altcademy/exchange-rate-site" target="_blank">GitHub</a>
        </div>
        <div>
          <span className="mr-3 text-secondary">Built by <a href="https://www.altcademy.com" target="_blank">Altcademy</a> with ☕ and 💜</span>
        </div>
      </footer>
    </React.Fragment>
  );
}
export default Layout;