import { faCartShopping, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import { useSelector } from 'react-redux'

function Header() {
  const wishlistarrar = useSelector((state) => state.wishlistreducer)
  const cartarrar = useSelector((state) => state.cartreducer)
  return (
    <div>

      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid mx-2 p-3">
          <Link to={"/"} style={{ textDecoration: 'none' }} ><a className="navbar-brand fs-3" href="#"> <FontAwesomeIcon icon={faCartShopping} bounce style={{ color: "white", }} className='me-2' /><strong>E-Cart</strong></a></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <form className="d-flex ms-auto">
              <Link to={'/wishlist'}>
                <button type="button" className="btn btn-outline-secondary me-5 border-bottom-3" fdprocessedid="o5i9ar" style={{ borderBottomWidth: '4px' }}> <FontAwesomeIcon icon={faMessage} size="lg" style={{ color: "#f10909", }} className='me-1' /> WishList <Badge bg="secondary" className='ms-2'>{wishlistarrar.length}</Badge></button>
              </Link>
              <Link to={'/cart'}>
                <button type="button" className="btn btn-outline-secondary me-5" fdprocessedid="o5i9ar" style={{ borderBottomWidth: '4px' }}> <FontAwesomeIcon icon={faCartShopping} size="lg" style={{ color: "yellow", }} className='me-1' /> Cart  <Badge bg="secondary" className='ms-2'>{cartarrar.length}</Badge></button>
              </Link>
              <Link to={'/login'}>
                <button type="button" className="btn btn-outline-secondary me-5" fdprocessedid="o5i9ar" style={{ borderBottomWidth: '4px' }}><FontAwesomeIcon icon={faUser}  size="lg" style={{ color: "white", }} /> </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header