import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-teal-500 text-neutral-content justify-around">
      <div>
        <span className="footer-title text-black">Services</span>
        <a className="link link-hover">Hammer Drill</a>
        <a className="link link-hover">Drill Rotor</a>
        <a className="link link-hover">Digital Auto Drill</a>
        <a className="link link-hover">Drill parts</a>
      </div>
      <div>
        <span className="footer-title text-black">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title text-black">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
