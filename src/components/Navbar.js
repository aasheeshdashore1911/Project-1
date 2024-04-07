//shortcut:
// first time create app on terminal npm install: 1) npm install -g create-react-app
// first time create app on terminal npx install: 2) npx create-react-app (folder Name jo create karna h folder)
//rfc = React Functional components
//impt = import prop types
//pts = Proptpye.string
// Run Code: Type terminal -> npm start -> Enter
//imrs shortcut ka used ham useState ko  import karne ke liye karte h.

import React from 'react'  //rfc
import PropTypes from 'prop-types'  //impt
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
    {/*yaha hamne navbar-${props.mode} ka used text ko "dark" ya "light" or bg-${props.mode} used navbar ke backgorund ko "dark" ya "light" karne ke liye kiya h*/}
    {/* yaha "$" ka used variable ko identify karne ke liye karte h orham isse karenege */}
    {/*https://getbootstrap.com/docs/5.3/components/navbar/ */}
    {/*yadi hame Navbar ko Light color se dark(Black) karna h toh "body-tertiary" ko "bg-dark" se replace karna hoga.*/}
    {/*yadi hame navbar ke text ko dark show karna h toh ham "expand-lg" ke baad "navbar-dark" OR light show karna h toh "navbar-light"*/}
    <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutText}</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-primary" type="submit">Search</button> */}
        {/*ye upper ka Function search button ka h*/}
        {/*yadi hame Button ka color change karna h green se blue to ham ise success se replace karke primary kar denge Bcoz success=green and primary=blue*/}
        {/*outline bhi nahi chahiye toh ham use bhi Button se hata sakte h*/}
      </form> 
        {/* "Enable Dark Mode" Switch ke liye text niche h.*/}
        <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
          {/*add yaha text-${props.mode ==='light'?'dark':'light'} ka used hamne jab props.mode barabar hoga "light ke toh usse "Dark" me change kar de varna "light" me kar de It's Called Turnory Oprator*/}
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        {/*add yaha hamne onClick={props.toggleMode} ka used switch par click karne par "light" mode Or "dark" mode me change karne ke liye java class ka used kara h*/}
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        {/*yaha hamne "Default switch checkbox input" ko "Enable Dark Mode" se Replace kara h*/}
        </div>

    </div>
  </div>
</nav>
  )
}

// proptype ka used karne se pahle ham Top par (impt) import react ke niche add karenge.
Navbar.propTypes = {  // https://legacy.reactjs.org/docs/typechecking-with-proptypes.html
    title: PropTypes.string.isRequired,  //pts
    aboutText: PropTypes.string.isRequired, //jab ham about me App.js file me number,Array,object use karenge toh ab wo Error dega kyuki hamne yaha define kardiya h ki aboutText and title String hoga iska us ham isliye karte h(yadi hame Array ya number karna hoga toh ham wo used karenge). OR is Required ka used ham title our About ke liye karenge hi kyuki wo Navbar me used hota hi h yadi nahi karenge toh wo Error dega fir ki ye required h. ye Optional h yadi karna ho toh
  };

  //default proptype ka used ham tab karte h jab App.js me hamne koi props used nahi kara ho means kot title ya aboutText nahi add kara ho toh wo by default me likha website par add kardega.

  Navbar.defaultProps = {   //https://legacy.reactjs.org/docs/typechecking-with-proptypes.html
    title: 'TextUtils2',
    aboutText: 'About Text2'
  };