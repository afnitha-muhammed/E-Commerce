import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Home() {
  const [isloggined, setisloggined] = useState(false)
  const data = useFetch('https://dummyjson.com/products')
  console.log(data);
  const dispatch = useDispatch()
  const login = ()=>{
    alert("Please Loggin")
  }
  useEffect(()=>{
    var token = localStorage.getItem('token');
    setisloggined(token)
    console.log(isloggined);
    
  })
  return (
    <div>
<Header/>
    <Row className='w-100 p-3 my-5'>
      {data?.length>0?
      data?.map((item)=>(
        <Col sm={12} md={4} lg={3} className='mt-3 d-flex justify-content-center'>
        <Card style={{ width: '100%' }} className='border shadow rounded'>
        <Card.Img variant="top" src={item.thumbnail} className='w-100 p-3' style={{height:'250px'}}/>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            <p className='fs-2 text-warning bold'>${item.price}</p>
          </Card.Text>
          <div className="d-flex justify-content-between">
            {!isloggined?
            <Button variant="danger" onClick={login}><FontAwesomeIcon icon={faHeart} /></Button>
            :
            <Button variant="danger" onClick={()=>dispatch(addToWishlist(item))}><FontAwesomeIcon icon={faHeart} /></Button>
            }
            {!isloggined?
          <Button variant="success" onClick={login}><FontAwesomeIcon icon={faCartPlus} /></Button>
            :
            <Button variant="success" onClick={()=>dispatch(addToCart(item))}><FontAwesomeIcon icon={faCartPlus} /></Button>
            }
          </div>
        </Card.Body>
      </Card>
        </Col>

      ))
      :
      <p>Nothing to Display</p>
      }
      
    </Row>

    <Footer />
    </div>
  )
}

export default Home