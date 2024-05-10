import React from 'react'
import PropTypes from 'prop-types'
//for props Type 

export default function Header(props) { //props is a js object
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a> {/*Here we use the value of props(Data Pass) */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>


          </ul>
          {props.searchBar ? <form className="d-flex"> {/*search bar will be visible bcz the value is true*/}
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> : ""}
        </div>
      </div>
    </nav>

  )
}
//The default title if user forget to write the title of this app
Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
}
// if by mistake I declare title as a number then it will give err on console
Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired

}

