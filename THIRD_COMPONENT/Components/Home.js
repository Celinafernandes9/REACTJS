import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
  return (
    <>
    <div>Home</div>
    <section className='main bg-img'>
      <h6>
        Enjoy the offer today
      </h6>
      <h4>
        NEW COLLECTION<br></br>SALE 40% 
      </h4>
      
    <button type="button" className="btn btn-danger text-danger pl-5 m-4 bg-transparent" onClick={()=>navigate('collection')}>SHOP NOW</button>
    </section>
    </>
  )
}

