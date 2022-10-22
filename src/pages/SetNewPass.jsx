import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function SetNewPass() {
  return (
    <div className='container vh-100 d-flex justify-content-center mt-5'>
      <div className='col-lg-4 col-10'>
      <Link to='/forgot-password' className='text-secondary fw-semibold text-decoration-none d-flex'>
          <ArrowBackIcon fontSize='medium' /> 
          <span className='d-flex align-items-center me-2'> Kembali</span>
        </Link>
        <hr />
        <div className='text-center mt-5'>
          <h4 className='my-3 fw-bold'>Buat Password Baru</h4>
          <p>Masukkan password baru Anda!</p>
        </div>
        {/* FORM */}
        <form action='#' method='POST'>
          {/* nim */}
          <div className='form-group mt-4'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                id='password'
                autoComplete='off'
              />
            </div>
          </div>
          <div className='form-group mt-3'>
            <label htmlFor='password' className='form-label'>
              Konfirmasi Password
            </label>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                id='password-confirm'
                autoComplete='off'
              />
            </div>
          </div>
          {/* submit */}
          <input
            type='submit'
            className='btn btn-primary btn-submit mt-4 w-100 rounded-5 py-2 fw-semibold'
            id='simpan'
            defaultValue='Buat Password'
          />
        </form>
      </div>
    </div>
  );
}
