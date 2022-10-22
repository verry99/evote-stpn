import React, {useState, useEffect} from "react";
import logoStpn from "../assets/images/stpn-logo.png";
import axios from "axios";
import {Link, redirect, useLocation} from "react-router-dom";
import './index.css'


export default function Regist() {
  const base = process.env.REACT_APP_BASE_URL;
  const locaation = useLocation();

  const [data , setData] = useState({
    nim: "",
    name: "",
    major: "",
    email: "",
    password: "",
  });
  // const btnSubmit = document.querySelector(".btn-submit");

  // btnSubmit.addEventListener("click", function (e) {
  //   e.preventDefault();
  //   window.location.href = "/";
  // });
  
  useEffect(() => {
    document.title = 'Register'
    const nim = document.querySelector("#nim");
    nim.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(base + "/regist", data)
      .then((res) => {
        alert(JSON.stringify(res.data.data));
        if(res.data.status === 200){
          window.location.href = "/";
        }
      })
      .catch((err) => {
        if (err.response.status === 404) {
          alert(err.response.data.errors);
        }
        if (err.response.status === 403) {
          alert(err.response.data.errors);
        }
      });
  };


  return (
    <div className='container py-5 d-flex justify-content-center align-items-center'>
      <div>
        <div className='form__header text-center d-flex align-items-center'>
          <img
            src={logoStpn}
            alt='logo__stpn'
            height={95}
            width='auto'
          />
          <h4 className='mt-3 ms-3 fw-bold'>
            DAFTAR EVOTE <br />
            STPN 2022/2023
          </h4>
        </div>
        {/* FORM */}
        <form onSubmit={handleSubmit} method="post">
          {/* nim */}
          <div className='form-group mt-3'>
            <label htmlFor='nim' className='form-label mt-3'>
              NIM
            </label>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                id='nim'
                autoComplete='off'
                onChange={(e) => setData({...data, nim: e.target.value})}
                required={true}
              />
            </div>
          </div>
          {/* nama lengkap */}
          <div className='form-group mt-3'>
            <label htmlFor='nama' className='form-label'>
              Nama Lengkap
            </label>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                id='nama'
                autoComplete='off'
                onChange={(e) => setData({...data, name: e.target.value})}
                required={true}
              />
            </div>
          </div>
          {/* jurusan */}
          <div className='form-group mt-3'>
            <label htmlFor='jurusan' className='form-label'>
              Jurusan
            </label>
            <div className='input-group'>
              <select
                className='form-select'
                aria-label='Default select example'
                onChange={(e) => setData({...data, major: e.target.value})}>  
                
                <option value='Pilih jurusan' selected>
                  Pilih jurusan
                </option>
                <option value='Diploma I PPK'>
                  Diploma I PPK
                </option>
                <option value='Diploma IV Pertanahan'>
                  Diploma IV Pertanahan
                </option>
                <option value='Prodiksus PPAT'>Prodiksus PPAT</option>
              </select>
            </div>
          </div>
          {/* email */}
          <div className='form-group mt-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <div className='input-group'>
              <input
                type='email'
                className='form-control'
                id='email'
                autoComplete='off'
                onChange={(e) => setData({...data, email: e.target.value})}
                required={true}
              />
            </div>
          </div>
          {/* password */}
          <div className='form-group mt-3'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <div className='input-group'>
              <input
                type='password'
                className='form-control'
                id='password'
                autoComplete='off'
                onChange={(e) => setData({...data, password: e.target.value})}
                required={true}
              />
            </div>
          </div>
          {/* konfirmasi password */}
          <div className='form-group mt-3'>
            <label htmlFor='password-confirm' className='form-label'>
              Konfirmasi Password
            </label>
            <div className='input-group'>
              <input
                type='password'
                className='form-control'
                id='password-confirm'
                autoComplete='off'
                required={true}
              />
            </div>
          </div>
          {/* buttons */}
          <input
            type='submit'
            className='btn btn-primary btn-submit mt-5 py-2 w-100 rounded-5 fw-semibold'
            defaultValue='DAFTAR'
          />
          <Link to='/login'>
            <div className='btn btn-light mt-3 py-2 w-100 rounded-5 fw-semibold'>
              BATAL
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
}
