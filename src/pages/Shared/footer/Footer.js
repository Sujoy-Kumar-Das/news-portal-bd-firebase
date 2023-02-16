import React from "react";
import {  FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="mt-5 text-center bg-light p-3">
        <div>
            Contact with us 
            <p className="fs-5">
                <span className="me-3"><FaFacebook></FaFacebook></span>
                <span className="me-3"><FaTwitter></FaTwitter></span>
                <span className="me-3"><FaYoutube></FaYoutube></span>
                <span className="me-3"><FaLinkedin></FaLinkedin></span>
                <span className="me-3"><FaWhatsapp></FaWhatsapp></span>
            </p>
        </div>
        <p>Coppyright by Sujoy Kumar Das</p>
    </div>
  );
};

export default Footer;
