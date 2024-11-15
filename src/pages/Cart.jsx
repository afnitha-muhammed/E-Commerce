import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFRomCart } from '../redux/slice/cartSlice'
import { Link, useNavigate } from 'react-router-dom'

function Cart() {
const [total, settotal] = useState()

const [isloggined, setisloggined] = useState(false)
const cartrray = useSelector((state)=>state.cartreducer)
console.log(cartrray);

const dispatch = useDispatch()
const navigate = useNavigate()

const gettotal = ()=>{
  if(cartrray.length>0){
    settotal(cartrray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
  }
  else{
    settotal(0)
  }
}
const handlecart = ()=>{
  alert("Your order Placed Successfully")
  dispatch(emptyCart())
  navigate('/')
}
useEffect(()=>{
  var token = localStorage.getItem('token');
  setisloggined(token)
  console.log(isloggined);
  
})

useEffect(()=>{
  gettotal()
},[cartrray])


  return (
    
    <div>
      
      <Header/> 
      {isloggined?
      <div>
{ cartrray?.length>0?
      <Row className='p-5'>
       <Col lg={8} sm={12} className='d-flex justify-content-center'>
       <table className="table table-hover shadow my-3" >
         <thead>
           <tr class="table">
             <th scope="col">#</th>
             <th scope="col">Product</th>
             <th scope="col">Image</th>
             <th scope="col">Price</th>
             <th scope="col">action</th>
           </tr>
         </thead>
        
       
      {  cartrray?.map((item, index)=>(
          <tbody>
          <tr class="table">
            <th scope="row">{index+1}</th>
              <td>{item.title}</td>
              <td><img src={item.thumbnail} alt="" height={'70px'} /></td>
              <td>{item.price}</td>
              <td><button className='btn border-warning' onClick={()=>dispatch(removeFRomCart(item.id))}><FontAwesomeIcon icon={faTrash} size="lg" style={{color: "#fb0e0e",}} /></button></td>
          </tr>
        </tbody>
        
        ))}
        </table>
       </Col>
        <Col lg={4} sm={6} className='mt-3'>
        <div className="card mb-3 my-3 p-2 rounded shadow">
        <div className="card-body">
            <h3 className="text-dark">Cart Summery</h3><hr />
            <h6 className="text-dark">Total Number of Products: {cartrray.length}</h6>
            <h4 className="card-title text-dark">Total Price: Rs. {total} </h4>
            <button className="btn btn-success" type="button" onClick={handlecart}>Check Out</button>
        </div>
        </div>
        </Col>
      </Row>
        :
        <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'70vh',display:'flex',flexDirection:'column'}}>
        <img src="https://tse3.mm.bing.net/th?id=OIP.GXn45ML0OgTebm6ojh7QNwHaFj&pid=Api&P=0&h=180" alt="no-image" />
        <Link to={"/"} ><button className='btn btn-warning shadow mt-3' type="button">Back to Home
          </button></Link>
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

export default Cart