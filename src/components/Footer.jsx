import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
<footer className="text-center text-lg-start" style={{backgroundColor:'#593196'}}>
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

  </section>
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4 text-white">
          <FontAwesomeIcon icon={faCartShopping} style={{color: "white",}} className='me-2' />E-Cart
          </h6>
          <p className='text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aspernatur accusamus reiciendis deserunt voluptate alias incidunt ullam beatae quam voluptatem modi esse, sapiente molestiae veniam pariatur? Quae magni eum rerum?
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4 text-white">
            Links
          </h6>
          <p>
            <Link to="/" className="text-white" style={{textDecoration:'none'}}>Home</Link>
          </p>
          <p>
            <Link to="/wishlist" className="text-white" style={{textDecoration:'none'}}>WishList</Link>
          </p>
          <p>
          <Link to="/cart" className="text-white" style={{textDecoration:'none'}}>Cart</Link>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4 text-white">
           Guides
          </h6>
          <p>
            <Link to="" className="text-white" style={{textDecoration:'none'}}>React</Link>
          </p>
          <p>
            <Link to="" className="text-white" style={{textDecoration:'none'}}>React Bootstrap</Link>
          </p>
          <p>
            <Link to="" className="text-white" style={{textDecoration:'none'}}>Bootstrap</Link>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4 text-white">Contact Us</h6>
         <div className="d-flex p-3">
            <input type="text" placeholder="Enter your Email ID" className='rounded p-2'/>
            <button className='btn btn-warning ms-2 rounded'>Subscribe</button>
         </div>
         <div className="d-flex">
                <div>
      <a href="" className="me-4 text-reset">
      <FontAwesomeIcon icon={faFacebook} size="xl" style={{color: "white",}} />
      </a>
      <a href="" class="me-4 text-reset">
      <FontAwesomeIcon icon={faTwitter} size="xl" style={{color: "white",}} />
      </a>
      <a href="" class="me-4 text-reset">
      <FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "white",}} />
      </a>
      <a href="" class="me-4 text-reset">
      <FontAwesomeIcon icon={faInstagram} size="xl" style={{color: "white",}} />
      </a>
    </div>
         </div>
        </div>
      </div>
    </div>
  </section>
</footer>
    </div>
  )
}

export default Footer