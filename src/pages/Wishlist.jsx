import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistreducer)
  const [isloggined, setisloggined] = useState(false)
  console.log(wishlistArray);
  const dispatch = useDispatch()

  const handlecart =(item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }

  useEffect(()=>{
    var token = localStorage.getItem('token');
    setisloggined(token)
    console.log(isloggined);
    
  })
  return (
    <div>
      <Header/>
      {isloggined?
      <div>
        
     {  wishlistArray?.length>0 ? 
      <Row className='w-100 p-3 my-5'>
       { wishlistArray?.map((item)=>(
             <Col sm={12} md={4} lg={3} className='mt-3 d-flex justify-content-center'>
             <Card style={{ width: '100%' }} className='border shadow rounded'>
             <Card.Img variant="top" src={item.thumbnail} className='w-100 p-3' style={{height:'250px'}}/>
             <Card.Body>
               <Card.Title>{item.title}</Card.Title>
               <Card.Text>
               <p className='fs-2 text-warning bold'>${item.price}</p>
               </Card.Text>
               <div className="d-flex justify-content-between">
               <Button variant="danger" onClick={()=>dispatch(removeFromWishlist(item.id))}><FontAwesomeIcon icon={faTrash} /></Button>
               <Button variant="success" onClick={()=>handlecart(item)} ><FontAwesomeIcon icon={faCartPlus} /></Button>
               </div>
             </Card.Body>
           </Card>
             </Col>
        )) }
     
    </Row>
      :
    <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'70vh',display:'flex',flexDirection:'column'}}>
      <img src="https://tse3.mm.bing.net/th?id=OIP.GXn45ML0OgTebm6ojh7QNwHaFj&pid=Api&P=0&h=180" alt="no-image" />
      <Link to={"/"} ><button className='btn btn-warning shadow mt-3'>Back to Home</button></Link>
    </div>
    
}
</div>
      :
      <div className="d-flex justify-content-center align-items-center my-5" style={{width:'100%', height:'70vh',display:'flex',flexDirection:'column'}}>
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/a3a1d6166656287.641bdd2d65a71.jpg" alt="no-image" width={'400vh'}/>
      <Link to={"/login"} ><button className='btn btn-warning shadow mt-3 w-100'>Login</button></Link>
    </div>
      }
    <Footer/>  
  </div> 
  )
}

export default Wishlist