import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Header />

      <div id="magic-cursor">
        <div id="ball" />
      </div>

      <div className="circle-container two">
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.03516 0.416666L7.03516 15H8.28516L8.28516 0.416666H7.03516Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.28516 1.04115C8.28516 3.98115 5.70016 6.38281 2.94349 6.38281H2.31849V5.13281H2.94349C5.03599 5.13281 7.03516 3.26448 7.03516 1.04115V0.416979H8.28516V1.04115Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.03333 1.04115C7.03333 3.98115 9.61833 6.38281 12.375 6.38281H13V5.13281H12.375C10.2817 5.13281 8.28333 3.26448 8.28333 1.04115V0.416979H7.03333V1.04115Z"
            />
          </g>
        </svg>
      </div>
      <div className="sidebar-area">
        <div className="sidebar-menu-top-area">
          <div className="sidebar-menu-logo">
            <a className="logo-dark" href="index.html">
              <img
                alt="image"
                className="img-fluid"
                src="assets/img/black-logo.svg"
              />
            </a>
            <a className="logo-light" href="index.html">
              <img
                alt="image"
                className="img-fluid"
                src="assets/img/white-logo.svg"
              />
            </a>
          </div>
          <div className="nav-right d-flex jsutify-content-end align-items-center">
            <div className="sidebar-menu-close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 18 18"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 0L11.1686 8.99601L18 18L9.0041 11.1605L0 18L6.83156 8.99601L0 0L9.0041 6.83156L18 0Z"
                ></path>
              </svg>
            </div>
            <a href="tel:+990737621432" className="header-btn btn-hover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                viewBox="0 0 12 12"
              >
                <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
              </svg>
              Schedule a Call
              <span />
            </a>
          </div>
        </div>
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-4 order-lg-1 order-2">
              <div className="sidebar-contact">
                <div className="getin-touch-area mb-60">
                  <h4>
                    Get in Touch
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>
                  </h4>
                  <ul>
                    <li className="single-contact">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                        >
                          <path d="M14.2333 11.1504C13.8642 10.7667 13.4191 10.5615 12.9473 10.5615C12.4794 10.5615 12.0304 10.7629 11.6462 11.1466L10.4439 12.3433C10.345 12.2901 10.2461 12.2407 10.151 12.1913C10.014 12.1229 9.88467 12.0583 9.77433 11.9899C8.64819 11.2757 7.62476 10.345 6.64319 9.14067C6.16762 8.54043 5.84804 8.03516 5.61596 7.52229C5.92793 7.23736 6.21708 6.94104 6.49861 6.65611C6.60514 6.54974 6.71167 6.43957 6.8182 6.33319C7.61715 5.5354 7.61715 4.50207 6.8182 3.70427L5.77955 2.66714C5.66161 2.54937 5.53987 2.4278 5.42573 2.30623C5.19746 2.07069 4.95777 1.82755 4.71047 1.59961C4.34143 1.2349 3.9001 1.04115 3.43595 1.04115C2.97179 1.04115 2.52286 1.2349 2.1424 1.59961L2.13479 1.60721L0.841243 2.91027C0.35426 3.39655 0.076528 3.9892 0.0156552 4.67682C-0.0756541 5.78614 0.251537 6.81947 0.502638 7.4957C1.11898 9.15587 2.03968 10.6945 3.41312 12.3433C5.07952 14.3301 7.08452 15.8991 9.37486 17.0047C10.2499 17.4187 11.4179 17.9088 12.7229 17.9924C12.8028 17.9962 12.8865 18 12.9626 18C13.8414 18 14.5795 17.6847 15.1578 17.0578C15.1616 17.0502 15.1692 17.0464 15.173 17.0388C15.3708 16.7995 15.5991 16.583 15.8388 16.3512C16.0024 16.1955 16.1698 16.0321 16.3334 15.8611C16.71 15.4698 16.9079 15.014 16.9079 14.5467C16.9079 14.0756 16.7062 13.6235 16.322 13.2436L14.2333 11.1504ZM15.5953 15.1507C15.5915 15.1545 15.5915 15.1507 15.5953 15.1507C15.4469 15.3103 15.2947 15.4547 15.1311 15.6142C14.8838 15.8498 14.6327 16.0967 14.3969 16.374C14.0126 16.7843 13.5599 16.9781 12.9664 16.9781C12.9093 16.9781 12.8484 16.9781 12.7913 16.9743C11.6614 16.9021 10.6113 16.4614 9.82379 16.0853C7.67042 15.0444 5.77955 13.5665 4.20827 11.6936C2.91092 10.1322 2.04348 8.68859 1.46899 7.13859C1.11517 6.19263 0.985816 5.45562 1.04288 4.7604C1.08093 4.31591 1.25214 3.94741 1.56791 3.63209L2.86527 2.33662C3.05169 2.16187 3.24953 2.06689 3.44356 2.06689C3.68324 2.06689 3.87728 2.21125 3.99902 2.33282L4.01044 2.34422C4.24251 2.56076 4.46318 2.78491 4.69526 3.02424C4.8132 3.14581 4.93494 3.26738 5.05669 3.39275L6.09533 4.42988C6.49861 4.83258 6.49861 5.20488 6.09533 5.60758C5.985 5.71775 5.87847 5.82792 5.76814 5.9343C5.44856 6.26101 5.14419 6.56494 4.8132 6.86126C4.80559 6.86886 4.79798 6.87266 4.79417 6.88025C4.46698 7.20697 4.52786 7.52609 4.59634 7.74263L4.60775 7.77682C4.87787 8.43026 5.25833 9.0457 5.83662 9.77891L5.84043 9.78271C6.89048 11.0744 7.99761 12.0811 9.21887 12.8523C9.37486 12.9511 9.53465 13.0309 9.68683 13.1069C9.82379 13.1752 9.95315 13.2398 10.0635 13.3082C10.0787 13.3158 10.0939 13.3272 10.1091 13.3348C10.2385 13.3994 10.3602 13.4298 10.4858 13.4298C10.8016 13.4298 10.9994 13.2322 11.0641 13.1676L12.3652 11.8684C12.4946 11.7392 12.7 11.5834 12.9397 11.5834C13.1756 11.5834 13.3696 11.7316 13.4876 11.8608L13.4952 11.8684L15.5915 13.9616C15.9834 14.3491 15.9834 14.748 15.5953 15.1507ZM9.72868 4.28172C10.7255 4.44888 11.631 4.91996 12.3538 5.64177C13.0767 6.36359 13.5446 7.26775 13.7159 8.2631C13.7577 8.51383 13.9746 8.68859 14.2219 8.68859C14.2523 8.68859 14.2789 8.68479 14.3094 8.68099C14.5909 8.6354 14.7773 8.36947 14.7317 8.08834C14.5262 6.88405 13.9555 5.78614 13.0843 4.91616C12.2131 4.04618 11.1135 3.47633 9.90749 3.27118C9.62596 3.22559 9.36344 3.41175 9.31398 3.68907C9.26452 3.9664 9.44714 4.23613 9.72868 4.28172ZM17.9922 7.94018C17.6536 5.95709 16.7176 4.15255 15.2795 2.71652C13.8414 1.28049 12.0342 0.345932 10.0483 0.00781895C9.77053 -0.0415684 9.50802 0.148383 9.45856 0.425712C9.4129 0.70684 9.59932 0.968972 9.88086 1.01836C11.6538 1.31848 13.2707 2.15807 14.5567 3.43834C15.8426 4.72241 16.6796 6.33699 16.9802 8.10734C17.022 8.35808 17.2389 8.53283 17.4862 8.53283C17.5166 8.53283 17.5432 8.52903 17.5737 8.52523C17.8514 8.48344 18.0416 8.21751 17.9922 7.94018Z" />
                        </svg>
                      </div>
                      <div className="contact">
                        <span>Phone</span>
                        <h6>
                          <a href="tel:+991-7636844563">+991 - 763 684 4563</a>
                        </h6>
                      </div>
                    </li>
                    <li className="single-contact">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                        >
                          <path d="M0 4.5C0 3.90326 0.237053 3.33097 0.65901 2.90901C1.08097 2.48705 1.65326 2.25 2.25 2.25H15.75C16.3467 2.25 16.919 2.48705 17.341 2.90901C17.7629 3.33097 18 3.90326 18 4.5V13.5C18 14.0967 17.7629 14.669 17.341 15.091C16.919 15.5129 16.3467 15.75 15.75 15.75H2.25C1.65326 15.75 1.08097 15.5129 0.65901 15.091C0.237053 14.669 0 14.0967 0 13.5V4.5ZM2.25 3.375C1.95163 3.375 1.66548 3.49353 1.4545 3.7045C1.24353 3.91548 1.125 4.20163 1.125 4.5V4.74413L9 9.46912L16.875 4.74413V4.5C16.875 4.20163 16.7565 3.91548 16.5455 3.7045C16.3345 3.49353 16.0484 3.375 15.75 3.375H2.25ZM16.875 6.05587L11.5785 9.234L16.875 12.4931V6.05587ZM16.8367 13.7914L10.4918 9.8865L9 10.7809L7.50825 9.8865L1.16325 13.7903C1.22718 14.0296 1.36836 14.2412 1.56486 14.3922C1.76137 14.5431 2.00221 14.625 2.25 14.625H15.75C15.9976 14.625 16.2384 14.5434 16.4349 14.3926C16.6313 14.2419 16.7726 14.0306 16.8367 13.7914ZM1.125 12.4931L6.4215 9.234L1.125 6.05587V12.4931Z" />
                        </svg>
                      </div>
                      <div className="contact">
                        <span>Email Now</span>
                        <h6>
                          <a href="/cdn-cgi/l/email-protection#bfd6d1d9d0ffdac7ded2cfd3dad8d2ded6d391dcd0d2">
                            <span
                              className="__cf_email__"
                              data-cfemail="127b7c747d52776a737f627e77757f737b7e3c717d7f"
                            >
                              [email&nbsp;protected]
                            </span>
                          </a>
                        </h6>
                      </div>
                    </li>
                    <li className="single-contact">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={18}
                          viewBox="0 0 14 18"
                        >
                          <path d="M11.8603 10.0575C11.249 11.2522 10.4207 12.4425 9.57367 13.5113C8.77018 14.5188 7.91105 15.484 7 16.4025C6.08893 15.484 5.2298 14.5188 4.42633 13.5113C3.57933 12.4425 2.751 11.2522 2.13967 10.0575C1.52133 8.85037 1.16667 7.71975 1.16667 6.75C1.16667 5.25816 1.78125 3.82742 2.87521 2.77252C3.96917 1.71763 5.4529 1.125 7 1.125C8.5471 1.125 10.0308 1.71763 11.1248 2.77252C12.2188 3.82742 12.8333 5.25816 12.8333 6.75C12.8333 7.71975 12.4775 8.85037 11.8603 10.0575ZM7 18C7 18 14 11.6033 14 6.75C14 4.95979 13.2625 3.2429 11.9497 1.97703C10.637 0.711159 8.85652 0 7 0C5.14348 0 3.36301 0.711159 2.05025 1.97703C0.737498 3.2429 2.76642e-08 4.95979 0 6.75C0 11.6033 7 18 7 18Z" />
                          <path d="M7 9C6.38116 9 5.78767 8.76295 5.35008 8.34099C4.9125 7.91903 4.66667 7.34674 4.66667 6.75C4.66667 6.15326 4.9125 5.58097 5.35008 5.15901C5.78767 4.73705 6.38116 4.5 7 4.5C7.61884 4.5 8.21233 4.73705 8.64992 5.15901C9.0875 5.58097 9.33333 6.15326 9.33333 6.75C9.33333 7.34674 9.0875 7.91903 8.64992 8.34099C8.21233 8.76295 7.61884 9 7 9ZM7 10.125C7.92826 10.125 8.8185 9.76942 9.47487 9.13649C10.1313 8.50355 10.5 7.64511 10.5 6.75C10.5 5.85489 10.1313 4.99645 9.47487 4.36351C8.8185 3.73058 7.92826 3.375 7 3.375C6.07174 3.375 5.1815 3.73058 4.52513 4.36351C3.86875 4.99645 3.5 5.85489 3.5 6.75C3.5 7.64511 3.86875 8.50355 4.52513 9.13649C5.1815 9.76942 6.07174 10.125 7 10.125V10.125Z" />
                        </svg>
                      </div>
                      <div className="contact">
                        <span>Canada Office</span>
                        <h6>
                          <a href="https://www.google.com/maps">
                            Canada City, Office-02, Road-11, House-3B/B, Section-H
                          </a>
                        </h6>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="social-link-area">
                  <h6>
                    Social Link
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>
                  </h6>
                  <ul className="social-area">
                    <li>
                      <a href="https://dribbble.com/">
                        <i className="bi bi-dribbble" /> Dribbble
                      </a>
                    </li>
                    <li>
                      <a href="https://www.behance.net/">
                        <i className="bi bi-behance" /> Behance
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <i className="bi bi-pinterest" />
                        Pinterest
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bi bi-facebook" />
                        Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8 order-lg-2 order-1">
              <div className="sidebar-menu-wrap">
                <ul className="main-menu">
                  <li className="active">
                    <a href="#">Home</a>
                    <span className="dropdown-icon2 active">
                      <i className="bi bi-plus" />
                    </span>
                    <ul className="submenu-list active">
                      <li className="active">
                        <a href="index.html">Light Version</a>
                        <span className="dropdown-icon2 two">
                          <i className="bi bi-plus" />
                        </span>
                        <ul className="submenu-list">
                          <li>
                            <a href="index.html">Digital Agency</a>
                          </li>
                          <li className="active">
                            <a href="software-agency.html">Software Agency</a>
                          </li>
                          <li>
                            <a href="marketing-agency.html ">Marketing Agency</a>
                          </li>
                          <li>
                            <a href="design-studio.html">Design Studio</a>
                          </li>
                          <li>
                            <a href="personal-portfolio.html">Personal Portfolio</a>
                          </li>
                          <li>
                            <a href="saas-product.html">SaaS Product</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="digital-agency-dark.html">Dark Version</a>
                        <span className="dropdown-icon2 two">
                          <i className="bi bi-plus" />
                        </span>
                        <ul className="submenu-list">
                          <li>
                            <a href="digital-agency-dark.html">Digital Agency</a>
                          </li>
                          <li>
                            <a href="software-agency-dark.html">Software Agency</a>
                          </li>
                          <li>
                            <a href="marketing-agency-dark.html ">
                              Marketing Agency
                            </a>
                          </li>
                          <li>
                            <a href="design-studio-dark.html">Design Studio</a>
                          </li>
                          <li>
                            <a href="personal-portfolio-dark.html">
                              Personal Portfolio
                            </a>
                          </li>
                          <li>
                            <a href="saas-product-dark.html">SaaS Product</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Services</a>
                    <span className="dropdown-icon2">
                      <i className="bi bi-plus" />
                    </span>
                    <ul className="submenu-list">
                      <li>
                        <a href="services1.html">
                          Service Style 01
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="service2.html">
                          Service Style 02
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="service3.html">
                          Service Style 03
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="service4.html">
                          Service Style 04
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="service-details.html ">
                          Service Details
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <span className="dropdown-icon2">
                      <i className="bi bi-plus" />
                    </span>
                    <ul className="submenu-list">
                      <li>
                        <a href="about.html">
                          About Us
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="about-me.html">
                          About Me
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="case-study1.html">Case Study</a>
                        <span className="dropdown-icon2 two">
                          <i className="bi bi-plus" />
                        </span>
                        <ul className="submenu-list">
                          <li>
                            <a href="case-study1.html">Case Study Style 01</a>
                          </li>
                          <li>
                            <a href="case-study2.html">Case Study Style 02</a>
                          </li>
                          <li>
                            <a href="case-study-details.html">Case Study Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="our-team1.html">Our Team</a>
                        <span className="dropdown-icon2 two">
                          <i className="bi bi-plus" />
                        </span>
                        <ul className="submenu-list">
                          <li>
                            <a href="our-team1.html">Team Style 01</a>
                          </li>
                          <li>
                            <a href="our-team2.html">Team Style 02</a>
                          </li>
                          <li>
                            <a href="our-team3.html">Team Style 03</a>
                          </li>
                          <li>
                            <a href="our-team4.html">Team Style 04</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="blog-standard.html">Blog</a>
                        <span className="dropdown-icon2 two">
                          <i className="bi bi-plus" />
                        </span>
                        <ul className="submenu-list">
                          <li>
                            <a href="blog-grid.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog-grid2.html">Blog Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-standard.html">Blog Standard</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="career-list.html">Career</a>
                        <span className="dropdown-icon2 two">
                          <i className="bi bi-plus" />
                        </span>
                        <ul className="submenu-list">
                          <li>
                            <a href="career-list.html">Career List</a>
                          </li>
                          <li>
                            <a href="career-details.html">Career Details </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="shop.html">Shop</a>
                        <span className="dropdown-icon2 two">
                          <i className="bi bi-plus" />
                        </span>
                        <ul className="submenu-list">
                          <li>
                            <a href="shop.html">Shop</a>
                          </li>
                          <li>
                            <a href="product-details.html">Product Details</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="office-gallery.html">
                          {" "}
                          Office Gallery
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="pricing.html">
                          Pricing
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="faq.html">
                          FAQs
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="error.html">
                          Error 404
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="terms-conditions.html">
                          Terms &amp; Conditions
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Portfolio </a>
                    <span className="dropdown-icon2">
                      <i className="bi bi-plus" />
                    </span>
                    <ul className="submenu-list">
                      <li>
                        <a href="portfolio-manonery.html">
                          Portfolio Masonery
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-vertical-grid.html">
                          Portfolio Vertical Grid
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-showcase.html">
                          Portfolio Showcase
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-showcase-slider.html">
                          Portfolio Showcase Slider
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-showcase-carosuel.html">
                          Portfolio Showcase Carosuel
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-showcase-horizental.html">
                          Portfolio Horizental Showcase
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-interactive-banner.html">
                          Interactive Banner
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-interactive-link.html">
                          Interactive links
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-details.html">
                          Portfolio Details
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="header-area style-2">
        <div className="logo-and-menu">
          <div className="header-logo">
            <a href="index.html">
              <img
                alt="image"
                className="img-fluid"
                src="assets/img/software-logo.svg"
              />
            </a>
          </div>
          <div className="main-menu">
            <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
              <div className="mobile-logo-wrap">
                <a href="index.html">
                  <img alt="image" src="assets/img/software-logo.svg" />
                </a>
              </div>
            </div>
            <ul className="menu-list">
              <li className="menu-item-has-children active">
                <a href="#" className="drop-down">
                  Home
                </a>
                <i className="bi bi-plus dropdown-icon" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={10}
                  viewBox="0 0 18 10"
                >
                  <path d="M18 4.95V10H13.0154V8.62143H15.7362L10.6962 3.50714L6.59769 7.65714L0 0.978571L0.962308 0L6.59769 5.71429L10.6962 1.56429L16.6154 7.57857V4.95H18Z" />
                </svg>
                <ul className="sub-menu">
                  <li className="active">
                    <a href="index.html">Light Version</a>
                    <i className="bi bi-chevron-right dropdown-icon" />
                    <ul className="sub-menu">
                      <li>
                        <a href="index.html">Digital Agency</a>
                      </li>
                      <li className="active">
                        <a href="software-agency.html">Software Agency</a>
                      </li>
                      <li>
                        <a href="marketing-agency.html ">Marketing Agency</a>
                      </li>
                      <li>
                        <a href="design-studio.html">Design Studio</a>
                      </li>
                      <li>
                        <a href="personal-portfolio.html">Personal Portfolio</a>
                      </li>
                      <li>
                        <a href="saas-product.html">SaaS Product</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="digital-agency-dark.html">Dark Version</a>
                    <i className="bi bi-chevron-right dropdown-icon" />
                    <ul className="sub-menu">
                      <li>
                        <a href="digital-agency-dark.html">Digital Agency</a>
                      </li>
                      <li>
                        <a href="software-agency-dark.html">Software Agency</a>
                      </li>
                      <li>
                        <a href="marketing-agency-dark.html">Marketing Agency</a>
                      </li>
                      <li>
                        <a href="design-studio-dark.html">Design Studio</a>
                      </li>
                      <li>
                        <a href="personal-portfolio-dark.html">
                          Personal Portfolio
                        </a>
                      </li>
                      <li>
                        <a href="saas-product-dark.html">SaaS Product</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#" className="drop-down">
                  Services
                </a>
                <i className="bi bi-plus dropdown-icon" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={10}
                  viewBox="0 0 18 10"
                >
                  <path d="M18 4.95V10H13.0154V8.62143H15.7362L10.6962 3.50714L6.59769 7.65714L0 0.978571L0.962308 0L6.59769 5.71429L10.6962 1.56429L16.6154 7.57857V4.95H18Z" />
                </svg>
                <ul className="sub-menu">
                  <li>
                    <a href="services1.html">Service Style 01</a>
                  </li>
                  <li>
                    <a href="service2.html">Service Style 02</a>
                  </li>
                  <li>
                    <a href="service3.html">Service Style 03</a>
                  </li>
                  <li>
                    <a href="service4.html">Service Style 04</a>
                  </li>
                  <li>
                    <a href="service-details.html ">Service Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#" className="drop-down">
                  Pages
                </a>
                <i className="bi bi-plus dropdown-icon" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={10}
                  viewBox="0 0 18 10"
                >
                  <path d="M18 4.95V10H13.0154V8.62143H15.7362L10.6962 3.50714L6.59769 7.65714L0 0.978571L0.962308 0L6.59769 5.71429L10.6962 1.56429L16.6154 7.57857V4.95H18Z" />
                </svg>
                <ul className="sub-menu">
                  <li>
                    <a href="about.html">about us</a>
                  </li>
                  <li>
                    <a href="about-me.html">about me</a>
                  </li>
                  <li>
                    <a href="case-study1.html">Case Study</a>
                    <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                    <i className="d-lg-none d-flex bi bi-plus dropdown-icon" />
                    <ul className="sub-menu">
                      <li>
                        <a href="case-study1.html">Case Study Style 01</a>
                      </li>
                      <li>
                        <a href="case-study2.html">Case Study Style 02</a>
                      </li>
                      <li>
                        <a href="case-study-details.html">Case Study Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="our-team1.html">Our Team</a>
                    <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                    <i className="d-lg-none d-flex bi bi-plus dropdown-icon" />
                    <ul className="sub-menu">
                      <li>
                        <a href="our-team1.html">Team Style 01</a>
                      </li>
                      <li>
                        <a href="our-team2.html">Team Style 02</a>
                      </li>
                      <li>
                        <a href="our-team3.html">Team Style 03</a>
                      </li>
                      <li>
                        <a href="our-team4.html">Team Style 04</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog-standard.html">Blog</a>
                    <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                    <i className="d-lg-none d-flex bi bi-plus dropdown-icon" />
                    <ul className="sub-menu">
                      <li>
                        <a href="blog-grid.html">Blog Grid</a>
                      </li>
                      <li>
                        <a href="blog-grid2.html">Blog Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-standard.html">Blog Standard</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="career-list.html">Career</a>
                    <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                    <i className="d-lg-none d-flex bi bi-plus dropdown-icon" />
                    <ul className="sub-menu">
                      <li>
                        <a href="career-list.html">Career List</a>
                      </li>
                      <li>
                        <a href="career-details.html">Career Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="shop.html">Shop</a>
                    <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                    <i className="d-lg-none d-flex bi bi-plus dropdown-icon" />
                    <ul className="sub-menu">
                      <li>
                        <a href="shop.html">Shop</a>
                      </li>
                      <li>
                        <a href="product-details.html">Product Details</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="office-gallery.html">Office Gallery</a>
                  </li>
                  <li>
                    <a href="pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQs</a>
                  </li>
                  <li>
                    <a href="error.html">Error 404</a>
                  </li>
                  <li>
                    <a href="terms-conditions.html">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#" className="drop-down">
                  Portfolio{" "}
                </a>
                <i className="bi bi-plus dropdown-icon" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={10}
                  viewBox="0 0 18 10"
                >
                  <path d="M18 4.95V10H13.0154V8.62143H15.7362L10.6962 3.50714L6.59769 7.65714L0 0.978571L0.962308 0L6.59769 5.71429L10.6962 1.56429L16.6154 7.57857V4.95H18Z" />
                </svg>
                <ul className="sub-menu">
                  <li>
                    <a href="portfolio-manonery.html">Portfolio Masonery</a>
                  </li>
                  <li>
                    <a href="portfolio-vertical-grid.html">
                      Portfolio Vertical Grid
                    </a>
                  </li>
                  <li>
                    <a href="portfolio-showcase.html">Portfolio Showcase</a>
                  </li>
                  <li>
                    <a href="portfolio-showcase-slider.html">
                      Portfolio Showcase Slider
                    </a>
                  </li>
                  <li>
                    <a href="portfolio-showcase-carosuel.html">
                      Portfolio Showcase Carosuel
                    </a>
                  </li>
                  <li>
                    <a href="portfolio-showcase-horizental.html">
                      Portfolio Horizental Showcase
                    </a>
                  </li>
                  <li>
                    <a href="portfolio-interactive-banner.html">
                      Interactive Banner
                    </a>
                  </li>
                  <li>
                    <a href="portfolio-interactive-link.html">Interactive links</a>
                  </li>
                  <li>
                    <a href="portfolio-details.html">Portfolio Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-right d-flex jsutify-content-end align-items-center">
          <div className="sidebar-btn">
            <svg
              className="open"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.28585 11.4286C9.28585 11.2391 9.2106 11.0574 9.07664 10.9235C8.94269 10.7895 8.76101 10.7143 8.57157 10.7143H5.35585C4.31437 10.7145 3.31559 11.1283 2.57915 11.8647C1.84271 12.6012 1.4289 13.5999 1.42871 14.6414V14.6443C1.4289 15.6858 1.84271 16.6845 2.57915 17.421C3.31559 18.1574 4.31437 18.5712 5.35585 18.5714H5.35871C6.4002 18.5712 7.39897 18.1574 8.13541 17.421C8.87185 16.6845 9.28567 15.6858 9.28585 14.6443V11.4286ZM18.5716 5.3557C18.5714 4.31422 18.1576 3.31544 17.4211 2.579C16.6847 1.84256 15.6859 1.42875 14.6444 1.42856H14.6416C13.6001 1.42875 12.6013 1.84256 11.8649 2.579C11.1284 3.31544 10.7146 4.31422 10.7144 5.3557V8.57142C10.7144 8.76086 10.7897 8.94254 10.9236 9.07649C11.0576 9.21045 11.2393 9.2857 11.4287 9.2857H14.643C15.6849 9.2857 16.6842 8.8718 17.4209 8.13505C18.1577 7.3983 18.5716 6.39905 18.5716 5.35713V5.3557ZM18.5716 14.6414C18.5714 13.5999 18.1576 12.6012 17.4211 11.8647C16.6847 11.1283 15.6859 10.7145 14.6444 10.7143H11.4287C11.2393 10.7143 11.0576 10.7895 10.9236 10.9235C10.7897 11.0574 10.7144 11.2391 10.7144 11.4286V14.6443C10.7146 15.6858 11.1284 16.6845 11.8649 17.421C12.6013 18.1574 13.6001 18.5712 14.6416 18.5714H14.6444C15.6859 18.5712 16.6847 18.1574 17.4211 17.421C18.1576 16.6845 18.5714 15.6858 18.5716 14.6443V14.6414ZM9.28585 5.3557C9.28567 4.31422 8.87185 3.31544 8.13541 2.579C7.39897 1.84256 6.4002 1.42875 5.35871 1.42856H5.35585C4.31437 1.42875 3.31559 1.84256 2.57915 2.579C1.84271 3.31544 1.4289 4.31422 1.42871 5.3557V5.35713C1.42871 6.39905 1.84261 7.3983 2.57936 8.13505C3.31611 8.8718 4.31536 9.2857 5.35728 9.2857H8.57157C8.76101 9.2857 8.94269 9.21045 9.07664 9.07649C9.2106 8.94254 9.28585 8.76086 9.28585 8.57142V5.3557Z"
              />
            </svg>
            <svg
              className="close"
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 18 18"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 0L11.1686 8.99601L18 18L9.0041 11.1605L0 18L6.83156 8.99601L0 0L9.0041 6.83156L18 0Z"
              />
            </svg>
          </div>
          <div className="hotline-area d-xl-flex d-none">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                viewBox="0 0 30 30"
              >
                <path d="M27.0705 2.34375H17.344C15.7286 2.34375 14.4141 3.65801 14.4141 5.27344V10.6641C14.4141 12.2795 15.7286 13.594 17.344 13.594H22.5002V15.2998C22.5002 15.5367 22.6429 15.7503 22.8614 15.8411C22.9339 15.8711 23.0104 15.8858 23.0859 15.8858C23.2411 15.8859 23.3899 15.8245 23.4998 15.715L25.6288 13.5939H27.0705C28.686 13.5939 30.0002 12.2795 30.0002 10.6641V5.27344C30.0002 3.65801 28.686 2.34375 27.0705 2.34375ZM28.8284 10.6641C28.8284 11.6334 28.0399 12.4221 27.0705 12.4221H25.3867C25.2317 12.4221 25.0829 12.4835 24.9731 12.5929L23.6721 13.889V13.008C23.6721 12.6844 23.4098 12.4221 23.0862 12.4221H17.344C16.3747 12.4221 15.5862 11.6334 15.5862 10.6641V5.27344C15.5862 4.30412 16.3747 3.51563 17.344 3.51563H27.0705C28.0399 3.51563 28.8284 4.30412 28.8284 5.27344V10.6641Z" />
                <path d="M26.4262 18.5918C24.7633 16.9288 22.0575 16.9288 20.3947 18.5918L18.8298 20.1564C18.2233 20.7632 17.2695 20.8058 16.611 20.2565C14.1209 18.1774 11.8225 15.879 9.74351 13.3889C9.19396 12.7304 9.23702 11.7764 9.84352 11.1701L11.4084 9.60526C13.0712 7.94237 13.0712 5.23657 11.4084 3.57374L9.08362 1.24898C8.27814 0.443554 7.20699 0 6.06793 0C4.92887 0 3.85778 0.443554 3.05211 1.24898C1.31493 2.98652 0.244015 5.29159 0.0368863 7.73987C-0.170008 10.188 0.498311 12.6402 1.91921 14.6448C5.61734 19.8621 10.1378 24.3824 15.3552 28.0807C17.1207 29.3323 19.2333 30.0001 21.3848 29.9999C21.676 29.9999 21.9682 29.9878 22.26 29.963C24.7084 29.7559 27.0134 28.6852 28.7507 26.9478C29.5564 26.1423 29.9999 25.0712 29.9999 23.932C29.9999 22.7928 29.5564 21.722 28.7507 20.9163L26.4262 18.5918ZM16.0328 27.1248C10.9239 23.5031 6.49677 19.0763 2.87516 13.967C0.259308 10.2766 0.682295 5.27642 3.88086 2.07779C4.46504 1.49367 5.24182 1.17187 6.06793 1.17187C6.89416 1.17187 7.67076 1.49367 8.25511 2.07773L10.5796 4.40255C11.1639 4.98661 11.4855 5.76345 11.4855 6.5895C11.4855 7.41555 11.1639 8.19233 10.5796 8.77645L10.483 8.87324L6.66412 5.0544C6.43549 4.82571 6.06447 4.82571 5.8356 5.0544C5.60674 5.28327 5.60674 5.65429 5.8356 5.88315L9.65427 9.70182L9.01478 10.3413C7.97679 11.3795 7.90308 13.0126 8.8438 14.1398C10.9679 16.6839 13.316 19.0321 15.8601 21.1562C16.9873 22.0967 18.6204 22.0234 19.6586 20.9852L20.2981 20.3457L26.9318 26.9794C23.7551 29.3712 19.3615 29.4841 16.0329 27.1248H16.0328ZM27.9221 26.1191C27.8892 26.152 27.8557 26.1843 27.8225 26.2166C27.8114 26.2033 27.7999 26.1902 27.7874 26.1776L21.1266 19.5172L21.2234 19.4203C21.8075 18.8363 22.5843 18.5145 23.4104 18.5145C24.2364 18.5145 25.0132 18.8363 25.5973 19.4203L27.9221 21.7451C28.5064 22.3292 28.828 23.1061 28.828 23.932C28.828 24.7583 28.5064 25.5349 27.9221 26.1191Z" />
                <path d="M4.64648 3.28009C4.49121 3.28041 4.34235 3.34212 4.2324 3.45177C4.12289 3.5619 4.06116 3.71072 4.06055 3.86603C4.06055 4.02013 4.12324 4.17136 4.2324 4.28029C4.34247 4.38976 4.49125 4.45144 4.64648 4.45197C4.8007 4.45197 4.95176 4.38927 5.06074 4.28029C5.17029 4.1702 5.23199 4.02134 5.23242 3.86603C5.23242 3.71204 5.1699 3.56075 5.06074 3.45177C4.9508 3.342 4.80184 3.28027 4.64648 3.28009ZM12.7913 21.5575C11.5864 20.4851 10.4311 19.3583 9.32895 18.1805C9.10781 17.9441 8.73703 17.9318 8.50084 18.1529C8.26441 18.3738 8.25205 18.7447 8.47313 18.9809C9.59963 20.1849 10.7805 21.3367 12.0121 22.4329C12.1193 22.5285 12.2578 22.5813 12.4014 22.5813C12.563 22.5813 12.7237 22.5149 12.8395 22.3846C13.0547 22.1429 13.0329 21.7726 12.7913 21.5575ZM7.80498 16.4793C7.59358 16.2344 7.22525 16.209 6.98016 16.4207C6.73523 16.6322 6.70986 17.0039 6.92133 17.249L6.92842 17.2572C6.98302 17.3205 7.05063 17.3712 7.12664 17.4059C7.20264 17.4406 7.28525 17.4586 7.36881 17.4584C7.50475 17.4584 7.64186 17.411 7.7533 17.3147C7.99799 17.1028 8.02272 16.7306 7.81096 16.4862L7.80498 16.4793ZM25.0485 7.38283C24.8933 7.38337 24.7444 7.44505 24.6343 7.5545C24.5249 7.66468 24.4632 7.81349 24.4626 7.96876C24.4626 8.12304 24.5253 8.27404 24.6343 8.38302C24.7433 8.49201 24.8945 8.5547 25.0485 8.5547C25.2026 8.5547 25.3538 8.49201 25.4628 8.38302C25.5723 8.2729 25.634 8.12406 25.6345 7.96876C25.6345 7.81472 25.5718 7.66366 25.4628 7.5545C25.3526 7.44505 25.2038 7.38337 25.0485 7.38283ZM22.2102 7.38283C22.0549 7.38337 21.9061 7.44505 21.7959 7.5545C21.6865 7.66468 21.6248 7.81349 21.6243 7.96876C21.6243 8.12304 21.687 8.27404 21.7959 8.38302C21.9055 8.49201 22.0561 8.5547 22.2102 8.5547C22.3643 8.5547 22.5155 8.49201 22.6245 8.38302C22.7342 8.27308 22.796 8.12412 22.7961 7.96876C22.7961 7.81472 22.7341 7.66366 22.6245 7.5545C22.5144 7.44493 22.3655 7.38324 22.2102 7.38283ZM19.3725 7.38283C19.2178 7.38283 19.0672 7.44552 18.9582 7.5545C18.8486 7.6645 18.7868 7.81342 18.7866 7.96876C18.7866 8.12304 18.8486 8.27404 18.9582 8.38302C19.0672 8.49201 19.2185 8.5547 19.3725 8.5547C19.5265 8.5547 19.6778 8.49201 19.7868 8.38302C19.8963 8.2729 19.9579 8.12406 19.9584 7.96876C19.9584 7.81472 19.8957 7.66366 19.7868 7.5545C19.6766 7.44505 19.5278 7.38337 19.3725 7.38283Z" />
              </svg>
            </div>
            <div className="content">
              <span>To More Inquiry</span>
              <h6>
                <a href="tel:+990737621432">+990-737 621 432</a>
              </h6>
            </div>
          </div>
          <a href="contact.html" className="header-btn btn-hover">
            Get in Touch
            <span />
          </a>
        </div>
      </header>
      <div className="home2-banner-area">
        <div className="container-xl container-fluid">
          <div className="row">
            <div className="col-xxl-8 col-xl-7 col-lg-7 d-flex align-items-center">
              <div className="banner-content-wrap">
                <h1 className="text-animation2">
                  We Compose <span>Software</span> Masterpieces.
                </h1>
                <div className="banner-content">
                  <div className="vector-and-review  text-animation">
                    <div className="vector">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={341}
                        height={65}
                        viewBox="0 0 341 65"
                      >
                        <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM339 3L339.319 3.38519L340.388 2.5H339V3ZM312.916 65L316.032 60.1396L310.265 59.8712L312.916 65ZM3 3.5H339V2.5H3V3.5ZM338.681 2.61481C328.01 11.4468 314.692 27.9505 312.626 60.4724L313.624 60.5358C315.671 28.3112 328.842 12.0559 339.319 3.38519L338.681 2.61481Z" />
                      </svg>
                    </div>
                    <a href="#" className="rating-area">
                      <div className="review">
                        <span>Review On</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={78}
                          height={22}
                          viewBox="0 0 78 22"
                          fill="none"
                        >
                          <path
                            d="M57.5244 16.95C58.9366 16.95 60.0814 15.8109 60.0814 14.4057C60.0814 13.0005 58.9366 11.8613 57.5244 11.8613C56.1121 11.8613 54.9673 13.0005 54.9673 14.4057C54.9673 15.8109 56.1121 16.95 57.5244 16.95Z"
                            fill="#E62415"
                          />
                          <path d="M20.3027 0H23.6865V21.713H20.3027V0ZM36.0104 15.0174C36.0104 18.3843 33.2418 18.6522 32.3959 18.6522C30.281 18.6522 29.9734 16.6817 29.9734 15.4957V7.09739H26.5704V15.4765C26.5511 17.5617 27.1472 19.2835 28.3007 20.4313C29.3484 21.3606 30.6831 21.9067 32.0846 21.9798C33.4862 22.0528 34.8709 21.6483 36.0104 20.833V21.713H39.4134V7.09739H36.0104V15.0174ZM46.7577 2.18087H43.3547V7.09739H40.9899V10.2922H43.3547V21.713H46.7577V10.2922H49.5455V7.09739H46.7577V2.18087ZM60.562 17.5617C59.793 18.2504 58.774 18.633 57.6589 18.633C57.0924 18.649 56.5286 18.5494 56.0022 18.3404C55.4758 18.1315 54.998 17.8175 54.5982 17.4178C54.1984 17.0182 53.885 16.5414 53.6773 16.0167C53.4696 15.492 53.3721 14.9306 53.3907 14.367C53.3907 11.8991 55.1403 10.1774 57.6589 10.1774C58.7547 10.1774 59.793 10.5409 60.5812 11.2296L61.1195 11.6887L63.5036 9.31652L62.9076 8.78087C61.4638 7.49957 59.5934 6.79737 57.6589 6.81043C53.2369 6.81043 50.0261 9.98609 50.0261 14.3478C50.0026 15.3534 50.1837 16.3533 50.5585 17.2874C50.9333 18.2215 51.494 19.0706 52.207 19.7836C52.9199 20.4966 53.7704 21.0588 54.7073 21.4364C55.6442 21.814 56.6482 21.9992 57.6589 21.9809C59.6776 21.9809 61.5617 21.273 62.946 19.9913L63.5228 19.4557L61.1003 17.0835L60.562 17.5617ZM76.2697 8.37913C75.222 7.44988 73.8873 6.90369 72.4858 6.83066C71.0842 6.75762 69.6995 7.16211 68.56 7.97739V0H65.157V21.713H68.56V13.8122C68.56 10.4452 71.3286 10.1774 72.1745 10.1774C74.2894 10.1774 74.597 12.1478 74.597 13.3339V21.7322H78V13.3339C78.1027 11.5199 77.4807 9.73895 76.2697 8.37913ZM15.2847 16.5096C14.6226 17.1863 13.8302 17.7231 12.9548 18.088C12.0793 18.4529 11.1389 18.6383 10.1898 18.633C6.24846 18.633 3.38378 15.553 3.38378 11.3252C3.38378 7.07826 6.24846 3.99826 10.1898 3.99826C12.0932 3.99826 13.9004 4.74435 15.2655 6.10261L15.8038 6.63826L18.1686 4.28522L17.6495 3.74957C16.674 2.76231 15.5096 1.97946 14.2251 1.44719C12.9406 0.914914 11.562 0.644003 10.1706 0.650435C4.38353 0.650435 0 5.24174 0 11.3443C0 17.4087 4.38353 22 10.1706 22C13.0352 22 15.6884 20.8904 17.6495 18.8817L18.1686 18.3461L15.823 15.9548L15.2847 16.5096Z" />
                        </svg>
                      </div>
                      <div className="rating">
                        <ul className="star">
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-half" />
                          </li>
                        </ul>
                        <span>(50 reviews)</span>
                      </div>
                    </a>
                  </div>
                  <div className="content-and-btn text-animation">
                    <p>
                      Axleo is a business that provides services related to online{" "}
                      <span>marketing, web development, design,</span> and other
                      digital solutions clients.
                    </p>
                    <div className="banner-btn">
                      <a href="tel:+990737621432">
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                          </svg>
                        </span>
                        <span className="content">Schedule a Call</span>
                        <span className="icon two">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-5 d-lg-flex d-none">
              <div className="banner-img magnetic-item">
                <img src="assets/img/home2/banner-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-slider-section two mb-130">
        <div className="marquee">
          <div className="marquee__group">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>{" "}
              DIGITAL PRODUCT
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              UI/UX DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              DIGITAL STUDIO
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>
              BRANDING DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              UI/UX DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              EMAIL MARKETING
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>
              BRANDING DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              UI/UX DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              EMAIL MARKETING
            </span>
          </div>
          <div className="marquee__group">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>{" "}
              DIGITAL PRODUCT
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              UI/UX DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              DIGITAL STUDIO
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>
              BRANDING DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              UI/UX DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              EMAIL MARKETING
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>
              BRANDING DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              UI/UX DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              EMAIL MARKETING
            </span>
          </div>
        </div>
      </div>
      <div className="home2-about-section mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-60">
            <div className="col-lg-12">
              <div className="section-title three text-animation">
                <h2>
                  ABOUT OUR
                  <br />
                  <span>COMPANY</span>
                </h2>
                <div className="dash-and-paragraph three">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477 65">
                    <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM475 3L475.255 3.42984L476.82 2.5H475V3ZM438.668 65L441.872 60.197L436.111 59.8239L438.668 65ZM3 3.5H475V2.5H3V3.5ZM474.745 2.57016C459.928 11.3742 441.341 27.8789 438.461 60.47L439.457 60.5581C442.3 28.3895 460.613 12.1303 475.255 3.42984L474.745 2.57016Z" />
                  </svg>
                  <div className="btn-and-paragraph">
                    <p>
                      Digital agencies can vary in size and specialization. Some may
                      focus on specific niches, such as healthcare or e-commerce,
                      while others may offer a comprehensive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-5">
              <div className="counter-and-btn">
                <ul className="counter-wrap">
                  <li className="single-counter">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={70}
                        height={70}
                        viewBox="0 0 70 70"
                      >
                        <path d="M58.3331 63C58.3331 50.1144 47.8856 39.6669 35 39.6669C22.1144 39.6669 11.6669 50.1144 11.6669 63H7C7 47.537 19.537 35 35 35C50.463 35 63 47.537 63 63H58.3331ZM39.6669 7C39.6669 19.8856 50.1144 30.3338 63 30.3338V35C47.537 35 35 22.463 35 7H39.6669Z" />
                        <path d="M56 21C59.866 21 63 17.866 63 14C63 10.134 59.866 7 56 7C52.134 7 49 10.134 49 14C49 17.866 52.134 21 56 21Z" />
                        <path
                          d="M35.0001 63.0007C40.1546 63.0007 44.3332 58.8221 44.3332 53.6676C44.3332 48.513 40.1546 44.3345 35.0001 44.3345C29.8456 44.3345 25.667 48.513 25.667 53.6676C25.667 58.8221 29.8456 63.0007 35.0001 63.0007Z"
                          fill="#F5BEBE"
                        />
                        <path
                          d="M18.6669 30.3338C25.1104 30.3338 30.3338 25.1104 30.3338 18.6669C30.3338 12.2234 25.1104 7 18.6669 7C12.2234 7 7 12.2234 7 18.6669C7 25.1104 12.2234 30.3338 18.6669 30.3338Z"
                          fill="#F5BEBE"
                        />
                      </svg>
                    </div>
                    <div className="content">
                      <div className="number">
                        <h3 className="counter">145</h3>
                        <span>+</span>
                      </div>
                      <p>Delivered Software Projects.</p>
                    </div>
                  </li>
                  <li className="single-counter">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={70}
                        height={70}
                        viewBox="0 0 70 70"
                      >
                        <path d="M64.3529 46.3883L60.521 44.9041C59.9731 46.3175 59.3088 47.683 58.5349 48.9865L62.0681 51.0853C62.9586 49.5856 63.7228 48.0146 64.3529 46.3883ZM51.1152 62.079L49.0036 58.553C47.7033 59.3319 46.3405 60.0012 44.9292 60.5541L46.4277 64.3812C48.0511 63.7445 49.619 62.9746 51.1152 62.079ZM59.0406 55.3386L55.9009 52.6869C54.9218 53.8456 53.8493 54.9221 52.6944 55.9057L55.3568 59.0359C56.6839 57.9064 57.916 56.6698 59.0406 55.3386ZM64.3235 23.5375C63.6889 21.9136 62.9208 20.3451 62.0271 18.8481L58.4991 20.9553C59.276 22.2566 59.9435 23.6202 60.4949 25.0319L64.3235 23.5375ZM55.2969 10.9151L52.6415 14.0521C53.7992 15.0323 54.8743 16.106 55.8561 17.2623L58.9899 14.6034C57.8619 13.275 56.6267 12.0415 55.2969 10.9151ZM46.3545 5.59211L44.8656 9.42297C46.2783 9.97264 47.6428 10.6386 48.9453 11.4139L51.0485 7.8827C49.5499 6.9906 47.9798 6.22444 46.3545 5.59211ZM23.5895 5.55957C21.9504 6.19188 20.367 6.96019 18.856 7.85645L20.9533 11.3909C22.2666 10.6117 23.6429 9.94378 25.0677 9.39412L23.5895 5.55957ZM17.226 14.0452L14.5723 10.9071C13.2319 12.0413 11.9878 13.2845 10.8526 14.6242L13.988 17.2806C14.9761 16.1145 16.0591 15.0323 17.226 14.0452ZM5.49707 23.638L9.33066 25.119C9.88163 23.6946 10.5506 22.3187 11.3306 21.0056L7.79777 18.9062C6.9004 20.4166 6.13082 21.9994 5.49707 23.638ZM14.644 59.155L17.2885 56.0093C16.1183 55.0251 15.0317 53.9457 14.0398 52.782L10.9115 55.4477C12.0512 56.7844 13.2996 58.0243 14.644 59.155ZM25.1482 60.6385C23.7209 60.0931 22.3417 59.4291 21.0253 58.6533L18.9393 62.1944C20.4538 63.0865 22.0404 63.8503 23.6823 64.4778L25.1482 60.6385ZM11.3706 49.0629C10.5865 47.7515 9.91332 46.3768 9.35828 44.9532L5.52906 46.4454C6.16754 48.0828 6.94179 49.664 7.84371 51.1724L11.3706 49.0629Z" />
                        <rect x={29} width={12} height={11} fill="#8FBEF5" />
                        <rect x={58} y={29} width={12} height={11} fill="#8FBEF5" />
                        <rect y={29} width={12} height={11} fill="#8FBEF5" />
                        <rect x={29} y={59} width={12} height={11} fill="#8FBEF5" />
                      </svg>
                    </div>
                    <div className="content">
                      <div className="number">
                        <h3 className="counter">100</h3>
                        <span>%</span>
                      </div>
                      <p>Service Satisfaction Guarentee.</p>
                    </div>
                  </li>
                  <li className="single-counter">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={70}
                        height={70}
                        viewBox="0 0 70 70"
                      >
                        <path
                          d="M27.1432 57.7834L21.1707 57.8162C24.3661 59.2642 26.5889 61.1645 27.7981 63.4905C28.5755 64.9858 28.729 66.3076 28.7304 67.1132L37.1813 67.1174C37.0198 64.6878 35.9943 62.4288 34.2525 60.6956C32.3503 58.803 29.8283 57.7641 27.1432 57.7834ZM2.92324 32.8344L2.91162 41.3931C3.71348 41.3931 5.02775 41.5449 6.51484 42.3203C8.83264 43.5288 10.7274 45.7559 12.1728 48.9612L12.2222 42.8783C12.244 40.1935 11.215 37.6659 9.32455 35.7608C7.59752 34.0204 5.34549 32.9958 2.92324 32.8344Z"
                          fill="#F5BEBE"
                        />
                        <path d="M12.1414 52.8312C10.7623 48.2083 8.62963 45.0097 5.96977 43.5788C4.6816 42.8859 3.54984 42.7621 2.90986 42.7613L2.87842 66.1298L12.1084 56.8931L12.1414 52.8312ZM17.286 57.8376L13.0745 57.8607L3.84119 67.1008L27.3623 67.1126C27.3597 66.467 27.2334 65.3291 26.5395 64.035C25.1051 61.3596 21.9061 59.218 17.286 57.8376ZM27.1063 37.8548C25.7273 33.2322 23.5945 30.0335 20.9347 28.6027C19.6464 27.9097 18.5149 27.7861 17.8748 27.7853L17.8434 51.1541L27.0734 41.9173L27.1063 37.8548Z" />
                        <path d="M27.1874 27.9024C27.2092 25.2177 26.1802 22.69 24.2897 20.785C22.5627 19.0446 20.3107 18.0199 17.8886 17.8584L17.877 26.4171C18.6788 26.4171 19.9932 26.569 21.48 27.3442C23.7977 28.5527 25.6926 30.7797 27.138 33.9849L27.1874 27.9024ZM32.0237 42.8629L28.0397 42.8848L18.8064 52.1249L42.3035 52.1365C42.2796 51.4875 42.1165 50.3554 41.3933 49.0681C39.8878 46.3889 36.6487 44.2446 32.0237 42.8629Z" />
                        <path
                          d="M42.1085 42.8075L35.9161 42.8415C39.1209 44.2869 41.3765 46.1821 42.6415 48.5006C43.4631 50.0062 43.65 51.3361 43.6723 52.1373L52.1465 52.1415C51.985 49.712 50.9595 47.4528 49.2176 45.7196C47.3153 43.827 44.7878 42.7893 42.1085 42.8075ZM35.8999 13.6268C34.6115 12.9337 33.48 12.8101 32.84 12.8094L32.8086 36.1781L42.0386 26.9414L42.0716 22.8792C40.6923 18.2565 38.5598 15.0575 35.8999 13.6268Z"
                          fill="#F5BEBE"
                        />
                        <path
                          d="M42.1522 12.9264C42.1741 10.2416 41.145 7.71396 39.2546 5.80893C37.5276 4.0685 35.2755 3.04379 32.8534 2.88232L32.8418 11.4412C33.6437 11.4412 34.9579 11.5929 36.445 12.3683C38.7627 13.5767 40.6576 15.8038 42.1028 19.0091L42.1522 12.9264ZM47.1243 27.886L43.0046 27.9086L33.7713 37.1487L57.2825 37.1604C57.2712 36.513 57.1296 35.378 56.4248 34.0876C54.9619 31.4098 51.7464 29.2669 47.1243 27.886Z"
                          fill="#F5BEBE"
                        />
                        <path d="M57.1298 27.8314L51.0124 27.8649C54.2117 29.312 56.4476 31.2106 57.6793 33.5342C58.4735 35.0326 58.6408 36.3573 58.6509 37.1613L67.1115 37.1656C66.95 34.7359 65.9245 32.4769 64.1826 30.7437C62.2938 28.8644 59.791 27.8315 57.1298 27.8315V27.8314ZM47.189 19.8186C47.189 21.4491 48.5143 22.7756 50.1435 22.7756C51.7726 22.7756 53.0979 21.4491 53.0979 19.8186C53.0979 18.188 51.7726 16.8613 50.1435 16.8613C48.5143 16.8613 47.189 18.1879 47.189 19.8186Z" />
                        <path d="M59.3815 14.9502C60.4745 14.9502 61.3606 14.0641 61.3606 12.9711C61.3606 11.878 60.4745 10.9919 59.3815 10.9919C58.2884 10.9919 57.4023 11.878 57.4023 12.9711C57.4023 14.0641 58.2884 14.9502 59.3815 14.9502Z" />
                      </svg>
                    </div>
                    <div className="content">
                      <div className="number">
                        <h3 className="counter">100</h3>
                        <span>%</span>
                      </div>
                      <p>Highly Accredited Security.</p>
                    </div>
                  </li>
                </ul>
                <a href="about.html">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                    </svg>
                  </span>
                  <span className="content">About Axleo</span>
                  <span className="icon two">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row g-4">
                <div className="col-sm-5">
                  <div className="about-left">
                    <div className="about-img magnetic-item">
                      <img src="assets/img/home2/about-02.jpg" alt="" />
                    </div>
                    <p className="text-animation2">
                      Some may focus on specific niches, such as healthcare or
                      e-commerce, while others may offer a comprehensive.
                    </p>
                  </div>
                </div>
                <div className="col-sm-7 d-sm-flex  d-none">
                  <div className="about-right-img animet-images magnetic-item">
                    <img src="assets/img/home2/about-01.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home2-services-section mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-60">
            <div className="col-lg-12">
              <div className="section-title four text-animation">
                <h2>
                  TO PROVIDE SMART <br />
                  <span>SOLUTION</span>
                </h2>
                <div className="dash-and-paragraph three">
                  <div className="btn-and-paragraph">
                    <a href="services1.html">
                      Explore More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                    </a>
                    <p>
                      Offer a wide range of services to help businesses establish
                      and enhance their online presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-wrapper">
            <div className="service-card">
              <h3>1. UI/UX Design</h3>
              <p>
                Conducting research to understand the target audience, behaviors.
              </p>
              <ul>
                <li>
                  <a href="#">Color</a>
                </li>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Typography</a>
                </li>
                <li>
                  <a href="#">Wireframe</a>
                </li>
                <li>
                  <a href="#">Visual</a>
                </li>
              </ul>
              <a className="primary-btn2 btn-hover" href="service-details.html">
                Explore More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span />
              </a>
            </div>
            <div className="service-card">
              <h3>2. App Development</h3>
              <p>
                The process of creating software applications for mobile devices,
                such as smartphones.
              </p>
              <ul>
                <li>
                  <a href="#">Color</a>
                </li>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Typography</a>
                </li>
                <li>
                  <a href="#">Wireframe</a>
                </li>
                <li>
                  <a href="#">Visual</a>
                </li>
              </ul>
              <a className="primary-btn2 btn-hover" href="service-details.html">
                Explore More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span />
              </a>
            </div>
            <div className="service-card">
              <h3>3. Block-Chain</h3>
              <p>
                Conducting research to understand the target audience, behaviors.
              </p>
              <ul>
                <li>
                  <a href="#">Color</a>
                </li>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Typography</a>
                </li>
                <li>
                  <a href="#">Wireframe</a>
                </li>
                <li>
                  <a href="#">Visual</a>
                </li>
              </ul>
              <a className="primary-btn2 btn-hover" href="service-details.html">
                Explore More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span />
              </a>
            </div>
            <div className="service-card">
              <h3>4. Web Development</h3>
              <p>
                Web development is the process of building and maintaining websites
                or web applications.
              </p>
              <ul>
                <li>
                  <a href="#">Color</a>
                </li>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Typography</a>
                </li>
                <li>
                  <a href="#">Wireframe</a>
                </li>
                <li>
                  <a href="#">Visual</a>
                </li>
              </ul>
              <a className="primary-btn2 btn-hover" href="service-details.html">
                Explore More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span />
              </a>
            </div>
            <div className="service-card">
              <h3>5. Cloud Service</h3>
              <p>
                Conducting research to understand the target audience, behaviors.
              </p>
              <ul>
                <li>
                  <a href="#">Color</a>
                </li>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Typography</a>
                </li>
                <li>
                  <a href="#">Wireframe</a>
                </li>
                <li>
                  <a href="#">Visual</a>
                </li>
              </ul>
              <a className="primary-btn2 btn-hover" href="service-details.html">
                Explore More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span />
              </a>
            </div>
            <div className="service-card">
              <h3>6. Cyber Security</h3>
              <p>
                Conducting research to understand the target audience, behaviors.
              </p>
              <ul>
                <li>
                  <a href="#">Color</a>
                </li>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Typography</a>
                </li>
                <li>
                  <a href="#">Wireframe</a>
                </li>
                <li>
                  <a href="#">Visual</a>
                </li>
              </ul>
              <a className="primary-btn2 btn-hover" href="service-details.html">
                Explore More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home2-counter-area mb-130">
        <div className="container-lg container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-4">
                <div className="col-lg-4">
                  <div className="single-counter">
                    <div className="content">
                      <div className="number">
                        <h2 className="counter">34</h2>
                      </div>
                      <p>Professional Experts</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-counter two">
                    <div className="content">
                      <div className="number">
                        <h2 className="counter">145</h2>
                      </div>
                      <p>Completed Projects</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-counter">
                    <div className="content">
                      <div className="number">
                        <h2 className="counter">05</h2>
                      </div>
                      <p>Year of Experienece</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="home2-inner-banner"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%), url(assets/img/home2/inner-baner-bg.jpg)"
        }}
      >
        <div className="clutch-logo btn_wrapper">
          <img src="assets/img/home2/clitch-big.png" alt="" />
        </div>
        <div className="container-lg container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-content text-animation">
                <h6>
                  <span />
                  Innovative Idea
                </h6>
                <h2>
                  “ Drawing on the technical expertise of IT professionals to assess
                  and address complex technical.”
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home2-process-section mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-60">
            <div className="col-lg-12">
              <div className="section-title three text-animation">
                <h2>
                  Our Solution
                  <br />
                  <span>Proccess</span>
                </h2>
                <div className="dash-and-paragraph three">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477 65">
                    <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM475 3L475.255 3.42984L476.82 2.5H475V3ZM438.668 65L441.872 60.197L436.111 59.8239L438.668 65ZM3 3.5H475V2.5H3V3.5ZM474.745 2.57016C459.928 11.3742 441.341 27.8789 438.461 60.47L439.457 60.5581C442.3 28.3895 460.613 12.1303 475.255 3.42984L474.745 2.57016Z" />
                  </svg>
                  <div className="btn-and-paragraph">
                    <p>
                      Digital agencies can vary in size and specialization. Some may
                      focus on specific niches, such as healthcare or e-commerce,
                      while others may offer a comprehensive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-lg-4" id="scroll-progress">
            <div className="col-lg-6">
              <div className="progress-wrapper">
                <p className="pct">0%</p>
                <div className="counter-wrap">
                  <p className="steps">Step</p>
                  <p id="pageIndicator">01/04</p>
                </div>
                <svg className="complete" width={340} height={340}>
                  <defs>
                    <linearGradient id="grad">
                      <stop offset="0%" />
                      <stop offset="100%" />
                    </linearGradient>
                  </defs>
                  <circle cx={168} cy={168} r={150} />
                  <circle className="progress-bar" cx={168} cy={168} r={150} />
                </svg>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home2-process-wrapper">
                <div className="single-process-static">
                  <div className="single-process">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={70}
                        height={70}
                        viewBox="0 0 70 70"
                      >
                        <g>
                          <path d="M67.6527 16.0958C68.7855 14.6144 67.827 11.5646 65.5614 12.436C60.246 14.5273 54.7564 19.1456 51.1838 23.6767C47.4368 28.4693 46.7397 34.5689 48.4825 40.3199C51.0095 48.6851 58.4161 54.1748 65.5614 58.6188C68.8726 60.7101 71.8353 55.4818 68.6112 53.3905C63.383 50.1665 57.5448 46.071 54.9307 40.3199C52.9265 35.7888 52.9265 30.6477 56.2377 26.6394C59.5489 22.7182 64.4286 20.1041 67.6527 16.0958ZM1.42836 53.3905C-1.88286 55.3947 1.16694 60.6229 4.47816 58.6188C11.6234 54.1748 18.943 48.6851 21.5571 40.3199C23.2998 34.7432 22.6899 28.6435 19.1172 24.0253C15.6317 19.407 9.96781 14.6144 4.5653 12.5231C2.29973 11.6518 1.25408 14.7016 2.474 16.1829C5.61095 20.1041 10.3164 22.7182 13.6276 26.4651C17.1131 30.4734 17.2873 35.7017 15.196 40.4942C12.4948 46.071 6.56946 50.1665 1.42836 53.3905ZM53.3622 1.36957C50.1381 6.59781 46.0426 12.436 40.2916 15.0501C35.7604 17.0543 30.6193 17.0543 26.611 13.7431C22.6027 10.4319 19.9886 5.55216 15.9803 2.32808C14.5861 1.1953 11.5363 2.24094 12.4077 4.50651C14.499 9.82189 19.1172 15.3115 23.6484 18.8842C28.4409 22.6311 34.5405 23.3282 40.2916 21.5854C48.6568 19.0584 54.1464 11.6518 58.5904 4.50651C60.5946 1.1953 55.4535 -1.85451 53.3622 1.36957ZM58.5904 65.5898C54.1464 58.4445 48.6568 51.125 40.2916 48.5108C34.7148 46.7681 28.6152 47.3781 23.9969 50.9507C19.3786 54.4362 14.5861 60.1001 12.4948 65.5026C11.6234 67.7682 14.6732 68.8138 16.1546 67.5939C20.0757 64.457 22.6899 59.7516 26.4368 56.4403C30.4451 52.9548 35.6733 52.7806 40.4659 54.8719C46.2169 57.486 50.2252 63.3242 53.5365 68.5524C55.4535 71.8636 60.5946 68.901 58.5904 65.5898Z" />
                        </g>
                      </svg>
                    </div>
                    <div className="content">
                      <h3>Discovery and Consultation.</h3>
                      <p>
                        Understand the client's goals, challenges, and requirements
                        through initial meetings and consultations.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-plus" /> Client Meeting.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Needs Assessment
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Strategic Planning.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-process-static">
                  <div className="single-process">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={70}
                        height={70}
                        viewBox="0 0 70 70"
                      >
                        <path d="M58.3331 63C58.3331 50.1144 47.8856 39.6669 35 39.6669C22.1144 39.6669 11.6669 50.1144 11.6669 63H7C7 47.537 19.537 35 35 35C50.463 35 63 47.537 63 63H58.3331ZM39.6669 7C39.6669 19.8856 50.1144 30.3338 63 30.3338V35C47.537 35 35 22.463 35 7H39.6669Z" />
                        <path d="M56 21C59.866 21 63 17.866 63 14C63 10.134 59.866 7 56 7C52.134 7 49 10.134 49 14C49 17.866 52.134 21 56 21Z" />
                        <path
                          d="M35.0001 63.0007C40.1546 63.0007 44.3332 58.8221 44.3332 53.6676C44.3332 48.513 40.1546 44.3345 35.0001 44.3345C29.8456 44.3345 25.667 48.513 25.667 53.6676C25.667 58.8221 29.8456 63.0007 35.0001 63.0007Z"
                          fill="#F5BEBE"
                        />
                        <path
                          d="M18.6669 30.3338C25.1104 30.3338 30.3338 25.1104 30.3338 18.6669C30.3338 12.2234 25.1104 7 18.6669 7C12.2234 7 7 12.2234 7 18.6669C7 25.1104 12.2234 30.3338 18.6669 30.3338Z"
                          fill="#F5BEBE"
                        />
                      </svg>
                    </div>
                    <div className="content">
                      <h3>Design and Architecture.</h3>
                      <p>
                        If applicable, create a user-centric design for software
                        interfaces, websites, or applications.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-plus" /> Wireframing
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Design Mockups.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Implementation.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-process-static">
                  <div className="single-process">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={70}
                        height={70}
                        viewBox="0 0 70 70"
                      >
                        <path d="M60.9 25.69H44.31V9.1C44.31 7.91 45.22 7 46.41 7H60.9C62.09 7 63 7.91 63 9.1V23.59C63 24.71 62.09 25.69 60.9 25.69ZM44.31 44.31H25.69V27.79C25.69 26.6 26.6 25.69 27.79 25.69H44.38V44.31H44.31ZM23.59 63H9.1C7.91 63 7 62.09 7 60.9V46.41C7 45.22 7.91 44.31 9.1 44.31H25.69V60.9C25.69 62.09 24.71 63 23.59 63ZM9.1 7H22.54C23.73 7 24.29 8.4 23.45 9.24L9.24 23.45C8.4 24.29 7 23.66 7 22.54V9.1C7 7.91 7.91 7 9.1 7Z" />
                        <path d="M60.9001 63.0001H46.4101C45.2201 63.0001 44.3101 62.0901 44.3101 60.9001V44.3101H60.9001C62.0901 44.3101 63.0001 45.2201 63.0001 46.4101V60.9001C63.0001 62.0901 62.0901 63.0001 60.9001 63.0001Z" />
                      </svg>
                    </div>
                    <div className="content">
                      <h3>Development</h3>
                      <p>
                        Begin the development process, following coding standards
                        and best practices.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-plus" /> Testing Plans.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Bug Fixing.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Agile Development.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Agile Development.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-process-static">
                  <div className="single-process">
                    <div className="icon">
                      <svg
                        width={70}
                        height={52}
                        viewBox="0 0 70 52"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.87109 17.9175H15.6444V51.0733H8.87109V17.9175ZM20.5935 17.9175H27.3668V51.0733H20.5935V17.9175ZM31.8339 17.9175H38.6072V51.0733H31.8339V17.9175Z" />
                        <path
                          d="M60.0751 26.3969C60.0751 34.3723 53.7819 40.9057 45.8989 41.2947V45.5129C56.1078 45.1203 64.2926 36.6968 64.2926 26.3967C64.2926 15.8472 55.7071 7.26465 45.1542 7.26465H16.0967V11.4804H45.1544C53.3817 11.4804 60.0752 18.1718 60.0752 26.3968L60.0751 26.3969Z"
                          fill="#F5BEBE"
                        />
                        <path
                          d="M45.1548 1.55981H16.0971V5.77558H45.1548C56.5291 5.77558 65.7826 15.0263 65.7826 26.3969C65.7826 37.5183 56.9301 46.6101 45.8995 47.0034V51.2229C59.2561 50.8279 70 39.843 70 26.3969C70 12.7017 58.8545 1.55981 45.1548 1.55981ZM11.0506 5.52314C11.0506 2.4777 8.572 0 5.52537 0C2.47874 0 0 2.4777 0 5.52314C0 8.56858 2.47874 11.0463 5.52537 11.0463C8.572 11.0463 11.0506 8.56858 11.0506 5.52314Z"
                          fill="#F5BEBE"
                        />
                      </svg>
                    </div>
                    <div className="content">
                      <h3>Documentation &amp; Launch.</h3>
                      <p>
                        Create comprehensive technical documentation, including
                        manuals, guides, and code documentation.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-plus" /> Testing Plans.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Bug Fixing.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Agile Development.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Agile Development.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home2-portfolio-section mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-60">
            <div className="col-lg-12">
              <div className="section-title text-animation">
                <h2>
                  Work <span>22</span>
                </h2>
                <div className="dash-and-paragraph three">
                  <div className="dash" />
                  <div className="btn-and-paragraph">
                    <a href="portfolio-manonery.html">
                      Explore More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                    </a>
                    <p>
                      Offer a wide range of services to help businesses establish
                      and enhance their online presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-lg-5 g-4 justify-content-between">
            <div className="col-lg-6 col-md-6">
              <div className="portfolio-card magnetic-item">
                <div className="image-and-tag">
                  <ul className="tag">
                    <li>
                      <a href="portfolio-manonery.html">Logo</a>
                    </li>
                    <li>
                      <a href="portfolio-manonery.html">Color</a>
                    </li>
                    <li>
                      <a href="portfolio-manonery.html">Typography</a>
                    </li>
                  </ul>
                  <div className="portfolio-img">
                    <img src="assets/img/home2/portfolio-01.jpg" alt="" />
                    <a className="details-btn" href="portfolio-details.html">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h4>
                    <a href="portfolio-details.html">
                      Smart Design, Smarter Solutions.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="portfolio-card magnetic-item">
                <div className="image-and-tag">
                  <ul className="tag">
                    <li>
                      <a href="portfolio-manonery.html">Logo</a>
                    </li>
                    <li>
                      <a href="portfolio-manonery.html">Color</a>
                    </li>
                    <li>
                      <a href="portfolio-manonery.html">Typography</a>
                    </li>
                  </ul>
                  <div className="portfolio-img">
                    <img src="assets/img/home2/portfolio-02.jpg" alt="" />
                    <a className="details-btn" href="portfolio-details.html">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h4>
                    <a href="portfolio-details.html">
                      Where Vision Meets Technology.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="portfolio-card magnetic-item">
                <div className="image-and-tag">
                  <ul className="tag">
                    <li>
                      <a href="portfolio-manonery.html">Logo</a>
                    </li>
                    <li>
                      <a href="portfolio-manonery.html">Color</a>
                    </li>
                    <li>
                      <a href="portfolio-manonery.html">Typography</a>
                    </li>
                  </ul>
                  <div className="portfolio-img">
                    <img src="assets/img/home2/portfolio-03.jpg" alt="" />
                    <a className="details-btn" href="portfolio-details.html">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h4>
                    <a href="portfolio-details.html">
                      Studio Navigating the Digital Wave.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="portfolio-card magnetic-item">
                <div className="image-and-tag">
                  <ul className="tag">
                    <li>
                      <a href="portfolio-manonery.html">Logo</a>
                    </li>
                    <li>
                      <a href="portfolio-manonery.html">Color</a>
                    </li>
                    <li>
                      <a href="portfolio-manonery.html">Typography</a>
                    </li>
                  </ul>
                  <div className="portfolio-img">
                    <img src="assets/img/home2/portfolio-04.jpg" alt="" />
                    <a className="details-btn" href="portfolio-details.html">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h4>
                    <a href="portfolio-details.html">
                      NexGen Pioneering Digital Solutions.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home2-testimonial-section mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-40">
            <div className="col-lg-12">
              <div className="swiper home2-testimonial-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="row g-md-4 gy-5">
                      <div className="col-md-5 d-flex justify-content-md-center">
                        <div className="author-img magnetic-item">
                          <img
                            src="assets/img/home2/testimonial-img-01.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="testimonal-content">
                          <span>Great Agency!</span>
                          <p>
                            By actively seeking, analyzing, and acting upon
                            feedback, a digital agency can continuously refine its
                            processes, enhance client satisfaction, and foster a
                            culture of continuous.
                          </p>
                          <div className="author-area">
                            <div className="content">
                              <h6>Mr. Daniel Scoot</h6>
                              <span>Catch, CEO</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="row g-lg-4 gy-5">
                      <div className="col-md-5 d-flex justify-content-md-center">
                        <div className="author-img magnetic-item">
                          <img
                            src="assets/img/home2/testimonial-img-02.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="testimonal-content">
                          <span>Great Agency!</span>
                          <p>
                            Seeking, analyzing, and acting on feedback allows
                            continual refinement, enhancing client satisfaction and
                            fostering a culture of ongoing improvement in a digital
                            agency.
                          </p>
                          <div className="author-area">
                            <div className="content">
                              <h6>Luka Moris</h6>
                              <span>Catch, CEO</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="row g-lg-4 gy-5">
                      <div className="col-md-5 d-flex justify-content-md-center">
                        <div className="author-img magnetic-item">
                          <img
                            src="assets/img/home2/testimonial-img-03.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="testimonal-content">
                          <span>Great Agency!</span>
                          <p>
                            Proactively engaging with feedback enables a digital
                            agency to iteratively refine processes, ensuring client
                            satisfaction and maintaining a culture of continual
                            enhancement.
                          </p>
                          <div className="author-area">
                            <div className="content">
                              <h6>Flurance Miyagi</h6>
                              <span>Catch, CEO</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5" />
            <div className="col-md-7">
              <div className="slider-btn-area">
                <div className="slider-btn-group w-100">
                  <div className="slider-btn prev-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={11}
                      viewBox="0 0 15 11"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z"
                      />
                    </svg>
                  </div>
                  <div className="slider-btn next-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={11}
                      viewBox="0 0 15 11"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.5833 5.9668H0V4.7168H14.5833V5.9668Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9589 4.7168C11.0189 4.7168 8.61719 7.3018 8.61719 10.0585V10.6835H9.86719V10.0585C9.86719 7.96596 11.7355 5.9668 13.9589 5.9668H14.583V4.7168H13.9589Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z"
                      />
                    </svg>
                  </div>
                </div>
                <span className="dash" />
                <div className="franctional-pagi2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partner-area two mb-130">
        <div className="container-lg container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="partner-wrap two">
                <div className="title1">
                  <h6>Our Trusted Partner</h6>
                </div>
                <div className="marquee light">
                  <div className="marquee__group">
                    <a href="#">
                      <img src="assets/img/home1/partner-01.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/home1/partner-02.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/home1/partner-03.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/home1/partner-04.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/home1/partner-05.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/home1/partner-06.png" alt="" />
                    </a>
                  </div>
                  <div aria-hidden="true" className="marquee__group">
                    <a href="#">
                      <img src="assets/img/home1/partner-01.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/home1/partner-02.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/home1/partner-03.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/home1/partner-04.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/home1/partner-05.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/home1/partner-06.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="marquee dark">
                  <div className="marquee__group">
                    <a href="#">
                      <img src="assets/img/home1/partner-light-01.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/home1/partner-light-02.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/home1/partner-light-03.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/home1/partner-light-04.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/home1/partner-light-05.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/home1/partner-light-06.png" alt="" />
                    </a>
                  </div>
                  <div aria-hidden="true" className="marquee__group">
                    <a href="#">
                      <img src="assets/img/home1/partner-light-01.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/home1/partner-light-02.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/home1/partner-light-03.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/home1/partner-light-04.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/home1/partner-light-05.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="assets/img/home1/partner-light-06.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="title2">
                  <h6>Almost 20+ Partner we have</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home2-technology-section mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-60">
            <div className="section-title four white text-animation">
              <h2>
                We Used Advance <br />
                <span>TECHNOLOGY</span>
              </h2>
              <div className="dash-and-paragraph three">
                <div className="btn-and-paragraph">
                  <p>
                    Offer a wide range of services to help businesses establish and
                    enhance their online presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="technology-tab-wrap">
                <ul className="nav nav-tabs" id="technologyTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="front-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#front"
                      type="button"
                      role="tab"
                      aria-controls="front"
                      aria-selected="true"
                    >
                      Front-end
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="back-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#back"
                      type="button"
                      role="tab"
                      aria-controls="back"
                      aria-selected="false"
                    >
                      Back-end
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="mobile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#mobile"
                      type="button"
                      role="tab"
                      aria-controls="mobile"
                      aria-selected="false"
                    >
                      Mobile
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="technologyTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="front"
                    role="tabpanel"
                    aria-labelledby="front-tab"
                  >
                    <div className="row g-4 align-items-end">
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology big btn_wrapper">
                          <div className="icon">
                            <img src="assets/img/home2/icon/html.svg" alt="" />
                          </div>
                          <span>HTML</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology  btn_wrapper">
                          <div className="icon">
                            <img src="assets/img/home2/icon/css.svg" alt="" />
                          </div>
                          <span>CSS</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology btn_wrapper">
                          <div className="icon">
                            <img
                              src="assets/img/home2/icon/javascript.svg"
                              alt=""
                            />
                          </div>
                          <span>JavaScript</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology btn_wrapper">
                          <div className="icon">
                            <img src="assets/img/home2/icon/vue.svg" alt="" />
                          </div>
                          <span>Vue Js</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology btn_wrapper">
                          <div className="icon">
                            <img src="assets/img/home2/icon/react.svg" alt="" />
                          </div>
                          <span>React Js</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology big  btn_wrapper">
                          <div className="icon">
                            <img src="assets/img/home2/icon/angular.svg" alt="" />
                          </div>
                          <span>Angular Js</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology empty btn_wrapper">
                          <img src="assets/img/home2/empty-technology.png" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology btn_wrapper">
                          <div className="icon">
                            <img src="assets/img/home2/icon/d3.svg" alt="" />
                          </div>
                          <span>D3 Js</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology btn_wrapper">
                          <div className="icon">
                            <img src="assets/img/home2/icon/jquery.svg" alt="" />
                          </div>
                          <span>JQuery</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology btn_wrapper">
                          <div className="icon">
                            <img
                              src="assets/img/home2/icon/typescript.svg"
                              alt=""
                            />
                          </div>
                          <span>TypeScript</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology btn_wrapper">
                          <div className="icon">
                            <img src="assets/img/home2/icon/graphql.svg" alt="" />
                          </div>
                          <span>GraphQL</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology empty btn_wrapper">
                          <img src="assets/img/home2/empty-technology.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="back"
                    role="tabpanel"
                    aria-labelledby="back-tab"
                  >
                    <div className="row g-4 align-items-end">
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology big">
                          <div className="icon">
                            <img src="assets/img/home2/icon/node-js.svg" alt="" />
                          </div>
                          <span>Node Js</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology">
                          <div className="icon">
                            <img src="assets/img/home2/icon/ruby.svg" alt="" />
                          </div>
                          <span>Ruby</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology">
                          <div className="icon">
                            <img src="assets/img/home2/icon/django.svg" alt="" />
                          </div>
                          <span>Django</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology">
                          <div className="icon">
                            <img
                              src="assets/img/home2/icon/express-js.svg"
                              alt=""
                            />
                          </div>
                          <span>Express Js</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology">
                          <div className="icon">
                            <img src="assets/img/home2/icon/asp.svg" alt="" />
                          </div>
                          <span>ASP.net</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology big">
                          <div className="icon">
                            <img src="assets/img/home2/icon/laravel.svg" alt="" />
                          </div>
                          <span>Laravel</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology empty">
                          <img src="assets/img/home2/empty-technology.png" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology empty">
                          <img src="assets/img/home2/empty-technology.png" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology">
                          <div className="icon">
                            <img src="assets/img/home2/icon/firebase.svg " alt="" />
                          </div>
                          <span>Firebase</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology empty">
                          <img src="assets/img/home2/empty-technology.png" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology empty">
                          <img src="assets/img/home2/empty-technology.png" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology empty">
                          <img src="assets/img/home2/empty-technology.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="mobile"
                    role="tabpanel"
                    aria-labelledby="mobile-tab"
                  >
                    <div className="row g-4 align-items-end">
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology big">
                          <div className="icon">
                            <img src="assets/img/home2/icon/flutter.svg" alt="" />
                          </div>
                          <span>Flutter</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology">
                          <div className="icon">
                            <img src="assets/img/home2/icon/android.svg" alt="" />
                          </div>
                          <span>Android</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology">
                          <div className="icon">
                            <img src="assets/img/home2/icon/ios.svg" alt="" />
                          </div>
                          <span>IOS App</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology">
                          <div className="icon">
                            <img src="assets/img/home2/icon/firebase.svg" alt="" />
                          </div>
                          <span>Firebase</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology">
                          <div className="icon">
                            <img src="assets/img/home2/icon/react.svg" alt="" />
                          </div>
                          <span>React Native</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology big">
                          <div className="icon">
                            <img src="assets/img/home2/icon/swift.svg" alt="" />
                          </div>
                          <span>Swift</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology empty">
                          <img src="assets/img/home2/empty-technology.png" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology empty">
                          <img src="assets/img/home2/empty-technology.png" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology">
                          <div className="icon">
                            <img src="assets/img/home2/icon/java.svg" alt="" />
                          </div>
                          <span>Java</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology">
                          <div className="icon">
                            <img src="assets/img/home2/icon/kotlin.svg" alt="" />
                          </div>
                          <span>Kotlin</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology empty">
                          <img src="assets/img/home2/empty-technology.png" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="single-technology empty">
                          <img src="assets/img/home2/empty-technology.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home2-blog-section mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-60">
            <div className="col-lg-12">
              <div className="section-title four text-animation">
                <h2>
                  Our Latest <br />
                  <span>ARTICLE</span>
                </h2>
                <div className="dash-and-paragraph three">
                  <div className="btn-and-paragraph">
                    <a href="blog-grid.html">
                      Explore More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                    </a>
                    <p>
                      Services to help businesses establish and enhance their online
                      presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="blog-card2 magnetic-item">
                <a href="blog-details.html" className="blog-img">
                  <img src="assets/img/home2/blog-01.jpg" alt="" />
                </a>
                <div className="blog-content">
                  <ul className="tags">
                    <li>
                      <a href="blog-grid.html">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                        >
                          <path d="M7.58455 3.09152C7.58455 3.4429 7.72414 3.7799 7.9726 4.02837C8.22107 4.27684 8.55807 4.41643 8.90946 4.41643C9.26085 4.41643 9.59785 4.27684 9.84632 4.02837C10.0948 3.7799 10.2344 3.4429 10.2344 3.09152C10.2344 2.74013 10.0948 2.40313 9.84632 2.15466C9.59785 1.90619 9.26085 1.7666 8.90946 1.7666C8.55807 1.7666 8.22107 1.90619 7.9726 2.15466C7.72414 2.40313 7.58455 2.74013 7.58455 3.09152ZM8.46782 3.09152C8.46782 2.97439 8.51435 2.86205 8.59718 2.77923C8.68 2.69641 8.79233 2.64988 8.90946 2.64988C9.02659 2.64988 9.13892 2.69641 9.22175 2.77923C9.30457 2.86205 9.3511 2.97439 9.3511 3.09152C9.3511 3.20865 9.30457 3.32098 9.22175 3.4038C9.13892 3.48662 9.02659 3.53315 8.90946 3.53315C8.79233 3.53315 8.68 3.48662 8.59718 3.4038C8.51435 3.32098 8.46782 3.20865 8.46782 3.09152Z"></path>
                          <path d="M11.1167 0H7.06602C6.83178 5.00265e-05 6.60715 0.093142 6.44154 0.2588L0.258612 6.44173C0.0930223 6.60737 0 6.832 0 7.06621C0 7.30042 0.0930223 7.52505 0.258612 7.69068L4.30932 11.7414C4.47495 11.907 4.69958 12 4.93379 12C5.168 12 5.39263 11.907 5.55827 11.7414L11.7412 5.55846C11.9069 5.39285 11.9999 5.16822 12 4.93398V0.883276C12 0.649017 11.9069 0.424352 11.7413 0.258706C11.5756 0.0930591 11.351 0 11.1167 0ZM11.1167 4.93398L4.93379 11.1169L0.883087 7.06621L7.06602 0.883276H11.1167V4.93398Z"></path>
                        </svg>{" "}
                        Application
                      </a>
                    </li>
                    <li>
                      <a href="blog-grid.html">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                        >
                          <g>
                            <path d="M6 5.25C6.09946 5.25 6.19484 5.28951 6.26517 5.35984C6.33549 5.43016 6.375 5.52554 6.375 5.625V6.75H7.5C7.59946 6.75 7.69484 6.78951 7.76517 6.85983C7.83549 6.93016 7.875 7.02554 7.875 7.125C7.875 7.22446 7.83549 7.31984 7.76517 7.39017C7.69484 7.46049 7.59946 7.5 7.5 7.5H6.375V8.625C6.375 8.72446 6.33549 8.81984 6.26517 8.89017C6.19484 8.96049 6.09946 9 6 9C5.90054 9 5.80516 8.96049 5.73484 8.89017C5.66451 8.81984 5.625 8.72446 5.625 8.625V7.5H4.5C4.40054 7.5 4.30516 7.46049 4.23484 7.39017C4.16451 7.31984 4.125 7.22446 4.125 7.125C4.125 7.02554 4.16451 6.93016 4.23484 6.85983C4.30516 6.78951 4.40054 6.75 4.5 6.75H5.625V5.625C5.625 5.52554 5.66451 5.43016 5.73484 5.35984C5.80516 5.28951 5.90054 5.25 6 5.25Z"></path>
                            <path d="M2.625 0C2.72446 0 2.81984 0.0395088 2.89016 0.109835C2.96049 0.180161 3 0.275544 3 0.375V0.75H9V0.375C9 0.275544 9.03951 0.180161 9.10983 0.109835C9.18016 0.0395088 9.27554 0 9.375 0C9.47446 0 9.56984 0.0395088 9.64017 0.109835C9.71049 0.180161 9.75 0.275544 9.75 0.375V0.75H10.5C10.8978 0.75 11.2794 0.908035 11.5607 1.18934C11.842 1.47064 12 1.85218 12 2.25V10.5C12 10.8978 11.842 11.2794 11.5607 11.5607C11.2794 11.842 10.8978 12 10.5 12H1.5C1.10218 12 0.720644 11.842 0.43934 11.5607C0.158035 11.2794 0 10.8978 0 10.5V2.25C0 1.85218 0.158035 1.47064 0.43934 1.18934C0.720644 0.908035 1.10218 0.75 1.5 0.75H2.25V0.375C2.25 0.275544 2.28951 0.180161 2.35984 0.109835C2.43016 0.0395088 2.52554 0 2.625 0ZM0.75 3V10.5C0.75 10.6989 0.829018 10.8897 0.96967 11.0303C1.11032 11.171 1.30109 11.25 1.5 11.25H10.5C10.6989 11.25 10.8897 11.171 11.0303 11.0303C11.171 10.8897 11.25 10.6989 11.25 10.5V3H0.75Z"></path>
                          </g>
                        </svg>{" "}
                        03 April, 2023
                      </a>
                    </li>
                  </ul>
                  <h4>
                    <a href="blog-details.html">
                      Consulting evolves amid business changes.
                    </a>
                  </h4>
                  <a className="explore-btn" href="blog-details.html">
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card2 magnetic-item">
                <a href="blog-details.html" className="blog-img">
                  <img src="assets/img/home2/blog-02.jpg" alt="" />
                </a>
                <div className="blog-content">
                  <ul className="tags">
                    <li>
                      <a href="blog-grid.html">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                        >
                          <path d="M7.58455 3.09152C7.58455 3.4429 7.72414 3.7799 7.9726 4.02837C8.22107 4.27684 8.55807 4.41643 8.90946 4.41643C9.26085 4.41643 9.59785 4.27684 9.84632 4.02837C10.0948 3.7799 10.2344 3.4429 10.2344 3.09152C10.2344 2.74013 10.0948 2.40313 9.84632 2.15466C9.59785 1.90619 9.26085 1.7666 8.90946 1.7666C8.55807 1.7666 8.22107 1.90619 7.9726 2.15466C7.72414 2.40313 7.58455 2.74013 7.58455 3.09152ZM8.46782 3.09152C8.46782 2.97439 8.51435 2.86205 8.59718 2.77923C8.68 2.69641 8.79233 2.64988 8.90946 2.64988C9.02659 2.64988 9.13892 2.69641 9.22175 2.77923C9.30457 2.86205 9.3511 2.97439 9.3511 3.09152C9.3511 3.20865 9.30457 3.32098 9.22175 3.4038C9.13892 3.48662 9.02659 3.53315 8.90946 3.53315C8.79233 3.53315 8.68 3.48662 8.59718 3.4038C8.51435 3.32098 8.46782 3.20865 8.46782 3.09152Z"></path>
                          <path d="M11.1167 0H7.06602C6.83178 5.00265e-05 6.60715 0.093142 6.44154 0.2588L0.258612 6.44173C0.0930223 6.60737 0 6.832 0 7.06621C0 7.30042 0.0930223 7.52505 0.258612 7.69068L4.30932 11.7414C4.47495 11.907 4.69958 12 4.93379 12C5.168 12 5.39263 11.907 5.55827 11.7414L11.7412 5.55846C11.9069 5.39285 11.9999 5.16822 12 4.93398V0.883276C12 0.649017 11.9069 0.424352 11.7413 0.258706C11.5756 0.0930591 11.351 0 11.1167 0ZM11.1167 4.93398L4.93379 11.1169L0.883087 7.06621L7.06602 0.883276H11.1167V4.93398Z"></path>
                        </svg>{" "}
                        IT Consulting
                      </a>
                    </li>
                    <li>
                      <a href="blog-grid.html">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                        >
                          <g>
                            <path d="M6 5.25C6.09946 5.25 6.19484 5.28951 6.26517 5.35984C6.33549 5.43016 6.375 5.52554 6.375 5.625V6.75H7.5C7.59946 6.75 7.69484 6.78951 7.76517 6.85983C7.83549 6.93016 7.875 7.02554 7.875 7.125C7.875 7.22446 7.83549 7.31984 7.76517 7.39017C7.69484 7.46049 7.59946 7.5 7.5 7.5H6.375V8.625C6.375 8.72446 6.33549 8.81984 6.26517 8.89017C6.19484 8.96049 6.09946 9 6 9C5.90054 9 5.80516 8.96049 5.73484 8.89017C5.66451 8.81984 5.625 8.72446 5.625 8.625V7.5H4.5C4.40054 7.5 4.30516 7.46049 4.23484 7.39017C4.16451 7.31984 4.125 7.22446 4.125 7.125C4.125 7.02554 4.16451 6.93016 4.23484 6.85983C4.30516 6.78951 4.40054 6.75 4.5 6.75H5.625V5.625C5.625 5.52554 5.66451 5.43016 5.73484 5.35984C5.80516 5.28951 5.90054 5.25 6 5.25Z"></path>
                            <path d="M2.625 0C2.72446 0 2.81984 0.0395088 2.89016 0.109835C2.96049 0.180161 3 0.275544 3 0.375V0.75H9V0.375C9 0.275544 9.03951 0.180161 9.10983 0.109835C9.18016 0.0395088 9.27554 0 9.375 0C9.47446 0 9.56984 0.0395088 9.64017 0.109835C9.71049 0.180161 9.75 0.275544 9.75 0.375V0.75H10.5C10.8978 0.75 11.2794 0.908035 11.5607 1.18934C11.842 1.47064 12 1.85218 12 2.25V10.5C12 10.8978 11.842 11.2794 11.5607 11.5607C11.2794 11.842 10.8978 12 10.5 12H1.5C1.10218 12 0.720644 11.842 0.43934 11.5607C0.158035 11.2794 0 10.8978 0 10.5V2.25C0 1.85218 0.158035 1.47064 0.43934 1.18934C0.720644 0.908035 1.10218 0.75 1.5 0.75H2.25V0.375C2.25 0.275544 2.28951 0.180161 2.35984 0.109835C2.43016 0.0395088 2.52554 0 2.625 0ZM0.75 3V10.5C0.75 10.6989 0.829018 10.8897 0.96967 11.0303C1.11032 11.171 1.30109 11.25 1.5 11.25H10.5C10.6989 11.25 10.8897 11.171 11.0303 11.0303C11.171 10.8897 11.25 10.6989 11.25 10.5V3H0.75Z"></path>
                          </g>
                        </svg>{" "}
                        03 April, 2023
                      </a>
                    </li>
                  </ul>
                  <h4>
                    <a href="blog-details.html">
                      FutureForge Tech: Forging the Future of Innovation.
                    </a>
                  </h4>
                  <a className="explore-btn" href="blog-details.html">
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card2 magnetic-item">
                <a href="blog-details.html" className="blog-img">
                  <img src="assets/img/home2/blog-03.jpg" alt="" />
                </a>
                <div className="blog-content">
                  <ul className="tags">
                    <li>
                      <a href="blog-grid.html">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                        >
                          <path d="M7.58455 3.09152C7.58455 3.4429 7.72414 3.7799 7.9726 4.02837C8.22107 4.27684 8.55807 4.41643 8.90946 4.41643C9.26085 4.41643 9.59785 4.27684 9.84632 4.02837C10.0948 3.7799 10.2344 3.4429 10.2344 3.09152C10.2344 2.74013 10.0948 2.40313 9.84632 2.15466C9.59785 1.90619 9.26085 1.7666 8.90946 1.7666C8.55807 1.7666 8.22107 1.90619 7.9726 2.15466C7.72414 2.40313 7.58455 2.74013 7.58455 3.09152ZM8.46782 3.09152C8.46782 2.97439 8.51435 2.86205 8.59718 2.77923C8.68 2.69641 8.79233 2.64988 8.90946 2.64988C9.02659 2.64988 9.13892 2.69641 9.22175 2.77923C9.30457 2.86205 9.3511 2.97439 9.3511 3.09152C9.3511 3.20865 9.30457 3.32098 9.22175 3.4038C9.13892 3.48662 9.02659 3.53315 8.90946 3.53315C8.79233 3.53315 8.68 3.48662 8.59718 3.4038C8.51435 3.32098 8.46782 3.20865 8.46782 3.09152Z"></path>
                          <path d="M11.1167 0H7.06602C6.83178 5.00265e-05 6.60715 0.093142 6.44154 0.2588L0.258612 6.44173C0.0930223 6.60737 0 6.832 0 7.06621C0 7.30042 0.0930223 7.52505 0.258612 7.69068L4.30932 11.7414C4.47495 11.907 4.69958 12 4.93379 12C5.168 12 5.39263 11.907 5.55827 11.7414L11.7412 5.55846C11.9069 5.39285 11.9999 5.16822 12 4.93398V0.883276C12 0.649017 11.9069 0.424352 11.7413 0.258706C11.5756 0.0930591 11.351 0 11.1167 0ZM11.1167 4.93398L4.93379 11.1169L0.883087 7.06621L7.06602 0.883276H11.1167V4.93398Z"></path>
                        </svg>{" "}
                        WordPress
                      </a>
                    </li>
                    <li>
                      <a href="blog-grid.html">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                        >
                          <g>
                            <path d="M6 5.25C6.09946 5.25 6.19484 5.28951 6.26517 5.35984C6.33549 5.43016 6.375 5.52554 6.375 5.625V6.75H7.5C7.59946 6.75 7.69484 6.78951 7.76517 6.85983C7.83549 6.93016 7.875 7.02554 7.875 7.125C7.875 7.22446 7.83549 7.31984 7.76517 7.39017C7.69484 7.46049 7.59946 7.5 7.5 7.5H6.375V8.625C6.375 8.72446 6.33549 8.81984 6.26517 8.89017C6.19484 8.96049 6.09946 9 6 9C5.90054 9 5.80516 8.96049 5.73484 8.89017C5.66451 8.81984 5.625 8.72446 5.625 8.625V7.5H4.5C4.40054 7.5 4.30516 7.46049 4.23484 7.39017C4.16451 7.31984 4.125 7.22446 4.125 7.125C4.125 7.02554 4.16451 6.93016 4.23484 6.85983C4.30516 6.78951 4.40054 6.75 4.5 6.75H5.625V5.625C5.625 5.52554 5.66451 5.43016 5.73484 5.35984C5.80516 5.28951 5.90054 5.25 6 5.25Z"></path>
                            <path d="M2.625 0C2.72446 0 2.81984 0.0395088 2.89016 0.109835C2.96049 0.180161 3 0.275544 3 0.375V0.75H9V0.375C9 0.275544 9.03951 0.180161 9.10983 0.109835C9.18016 0.0395088 9.27554 0 9.375 0C9.47446 0 9.56984 0.0395088 9.64017 0.109835C9.71049 0.180161 9.75 0.275544 9.75 0.375V0.75H10.5C10.8978 0.75 11.2794 0.908035 11.5607 1.18934C11.842 1.47064 12 1.85218 12 2.25V10.5C12 10.8978 11.842 11.2794 11.5607 11.5607C11.2794 11.842 10.8978 12 10.5 12H1.5C1.10218 12 0.720644 11.842 0.43934 11.5607C0.158035 11.2794 0 10.8978 0 10.5V2.25C0 1.85218 0.158035 1.47064 0.43934 1.18934C0.720644 0.908035 1.10218 0.75 1.5 0.75H2.25V0.375C2.25 0.275544 2.28951 0.180161 2.35984 0.109835C2.43016 0.0395088 2.52554 0 2.625 0ZM0.75 3V10.5C0.75 10.6989 0.829018 10.8897 0.96967 11.0303C1.11032 11.171 1.30109 11.25 1.5 11.25H10.5C10.6989 11.25 10.8897 11.171 11.0303 11.0303C11.171 10.8897 11.25 10.6989 11.25 10.5V3H0.75Z"></path>
                          </g>
                        </svg>{" "}
                        03 April, 2023
                      </a>
                    </li>
                  </ul>
                  <h4>
                    <a href="blog-details.html">
                      CodeMosaic Showcase: Weaving Digital Brilliance
                    </a>
                  </h4>
                  <a className="explore-btn" href="blog-details.html">
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section two">
        <div className="container-lg container-fluid">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="section-title text-animation">
                <h2>
                  Let’s <span>TALK</span>
                </h2>
                <div className="dash-and-paragraph">
                  <div className="dash" />
                  <div className="content-and-social">
                    <p>
                      Crafting a contact text for a digital agency involves
                      providing essential information for potential clients or
                      collaborators to reach out.
                    </p>
                    <div className="social-area">
                      <h6>Connect Us</h6>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={6}
                        viewBox="0 0 50 6"
                      >
                        <path d="M50 3L45 0.113249V5.88675L50 3ZM0 3.5H45.5V2.5H0V3.5Z" />
                      </svg>
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/">
                            <i className="bi bi-twitter-x" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/">
                            <i className="bx bxl-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="bx bxl-instagram-alt" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-lg-flex justify-content-end align-items-center">
              <div className="btn_wrapper">
                <a className="circle-btn btn-hover two" href="contact.html">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                  </svg>{" "}
                  Contact <strong>Now</strong>
                  <span />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>


  );
}
