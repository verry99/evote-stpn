import React from "react";
import "./home.css"
import { Link } from "react-router-dom";
import logoStpn from "../../assets/images/stpn-logo.png";
import imgKetua from "../../assets/images/img-ketua-1.png";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export default function Home() {
  const navToggler = document.querySelector(".navbar-toggler");
  const sidebar = document.querySelector(".sidebar");

  // show sidebar on nav toggler click
  // navToggler.addEventListener("click", function () {
  //   sidebar.classList.toggle("active");
  // });

  return (
    <>
      <div className='main-container d-flex'>
        {/* SIDEBAR */}
        <div className='sidebar position-relative' id='side_nav'>
          <div className='header-box px-3 pt-4 pb-4 d-flex justify-content-center me-4'>
            <img src= {logoStpn} alt='stpn-logo' height={50} />
            <h1 className='fs-5 text-center text-white ms-3'>
              EVOTE <br />
              BEM STPN
            </h1>
          </div>
          <ul className='list-unstyled px-2'>
            <li className='my-2 active'>
              <Link to='/dashboard' className='text-decoration-none'>
                <div
                  className='text-decoration-none d-flex px-3 py-2 d-block'>
                  <span className='material-symbols-outlined fs-5 d-flex align-items-center me-3'>
                    {" "}
                    <HomeOutlinedIcon />{" "}
                  </span>{" "}
                  Dashboard
                </div>
              </Link>
            </li>
            <li className='my-2'>
              <a
                href='periode.html'
                className='text-decoration-none d-flex px-3 py-2 d-block'>
                <span className='material-symbols-outlined fs-5 d-flex align-items-center me-3'>
                  {" "}
                  <HowToRegOutlinedIcon />{" "}
                </span>{" "}
                Periode &amp; Paslon
              </a>
            </li>
            <li className='my-2'>
              <a
                href='user-management.html'
                className='text-decoration-none d-flex px-3 py-2 d-block'>
                <span className='material-symbols-outlined fs-5 d-flex align-items-center me-3'>
                  {" "}
                  <PeopleAltOutlinedIcon />{" "}
                </span>{" "}
                User Management
              </a>
            </li>
            <hr className='h-color mx-3' />
            <li className='mt-auto'>
              <a
                href='/index.html'
                className='btn__logout text-decoration-none d-flex px-3 py-2 d-block'>
                <span className='material-symbols-outlined fs-5 d-flex align-items-center me-3'>
                  {" "}
                  <LogoutOutlinedIcon />{" "}
                </span>{" "}
                Logout
              </a>
            </li>
          </ul>
        </div>
        {/* CONTENT */}
        <div className='content'>
          {/* Dashboard */}
          <div className='dashboard' id='dashboard'>
            <nav className='navbar d-md-none bg-dark navbar-dark'>
              <div className='container-fluid'>
                <button className='navbar-toggler' type='button'>
                  <span className='navbar-toggler-icon' />
                </button>
              </div>
            </nav>
            {/* breadcrumb */}
            <div className='main-content px-lg-5 px-4 py-4'>
              <nav aria-label='breadcrumb'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item active' aria-current='page'>
                    Dashboard
                  </li>
                </ol>
              </nav>
              <div className='content-title'>
                <h2 className='fw-bold'>Dashboard</h2>
                <p className='fs-5'>
                  Summary pemilihan ketua dan wakil BEM periode 2022/2023.
                </p>
              </div>
              <div className='paslon-container container-fluid'>
                <div className='row'>
                  {/* PASLON 01 */}
                  <div className='paslon__card col-lg-3 mt-3 me-lg-4 pb-4 px-0'>
                    <div className='paslon__img'>
                      <img
                        src={imgKetua}
                        alt='img__ketua'
                        width='50%'
                      />
                      <img
                        src={imgKetua}
                        alt='img__wakil'
                        width='50%'
                      />
                      <div className='img__overlay'>
                        <h1>01</h1>
                      </div>
                    </div>
                    <div className='paslon__desc mt-4 px-3'>
                      <div className='d-flex justify-content-between'>
                        <p className='text-black-50'>Ketua</p>
                        <p className='text-end'>Muhammad Yusuf</p>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <p className='text-black-50'>Wakil</p>
                        <p className='text-end'>Ridwan Ahmad</p>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <p className='text-black-50'>Persentase</p>
                        <p className='text-success fw-semibold'>60%</p>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <p className='text-black-50'>Total Vote</p>
                        <p>144/240</p>
                      </div>
                    </div>
                  </div>
                  {/* PASLON 02 */}
                  <div className='paslon__card col-lg-3 mt-3 me-lg-4 pb-4 px-0'>
                    <div className='paslon__img'>
                      <img
                        src={imgKetua}
                        alt='img__ketua'
                        width='50%'
                      />
                      <img
                        src={imgKetua}
                        alt='img__wakil'
                        width='50%'
                      />
                      <div className='img__overlay'>
                        <h1>02</h1>
                      </div>
                    </div>
                    <div className='paslon__desc mt-4 px-3'>
                      <div className='d-flex justify-content-between'>
                        <p className='text-black-50'>Ketua</p>
                        <p className='text-end'>Arifiyanto Hadinegoro</p>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <p className='text-black-50'>Wakil</p>
                        <p className='text-end'>Zidan Ainul</p>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <p className='text-black-50'>Persentase</p>
                        <p className='text-danger fw-semibold'>40%</p>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <p className='text-black-50'>Total Vote</p>
                        <p>96/240</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
