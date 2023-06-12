import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Slide>
      <footer className='footer p-10 bg-base-200 text-base-content'>
        <div className='text-center'>
          <Link className='mx-auto' to='/'>
            <button className='btn text-lg btn-ghost'>TalkTrove</button>
          </Link>
          <p>mdmasumraihan1@gmail.com</p>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div>
          <span className='footer-title'>Services</span>
          <a className='link link-hover'>Branding</a>
          <a className='link link-hover'>Design</a>
          <a className='link link-hover'>Marketing</a>
          <a className='link link-hover'>Advertisement</a>
        </div>
        <div>
          <span className='footer-title'>Company</span>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>Press kit</a>
        </div>
        <div>
          <span className='footer-title'>Legal</span>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </div>
      </footer>
    </Slide>
  );
};

export default Footer;
