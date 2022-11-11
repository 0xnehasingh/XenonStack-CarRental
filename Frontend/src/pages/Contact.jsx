import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Layout from '../components/Layout'

import axios from 'axios';


const Contact = () => {

  const dispatch = useDispatch();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();

    const submitHandler = async (e) => {
        e.preventDefault();

        dispatch({type: 'LOADING', payload: true});

        try {

          await axios.post("/api/contact", {
              name,
              email,
              subject,
          });
          toast.success('Submited Successfull!');
          dispatch({type: 'LOADING', payload: false});


      } catch(error) {
        console.log(error);
        toast.error('Error, Try again!');
        dispatch({type: 'LOADING', payload: false});
      }
    }

    

  return (
    <Layout>
      <div className="form-container">
        <div className="form-groups">
          <form className="form" onSubmit={submitHandler}>
            <h3 className='form-title'>Contact</h3>
            <div className="form-group">
              <label htmlFor="username">Name</label>
              <input type="text" onChange={(e) => setName(e.target.value)} className='input' id='username' required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="text" onChange={(e) => setEmail(e.target.value)} className='input' id='password' required />
            </div>
            <div className="form-group">
              <label htmlFor="rpassword">Subject</label>
              <input type="text" onChange={(e) => setSubject(e.target.value)} className='input' id='rpassword' required />
            </div>
            <div className="form-group">
              <button className='rent-now'>Submit</button>
            </div>
            <div className="form-group">
              <p>Our team is reay to help you! </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contact