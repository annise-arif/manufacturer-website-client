import React from "react";

const Footer = () => {
  return (
    <footer class="footer p-10 bg-teal-500 text-neutral-content">
      <div>
        <span class="footer-title text-neutral">Services</span>
        <a class="link link-hover">Hammer Drill</a>
        <a class="link link-hover">Drill Rotor</a>
        <a class="link link-hover">Digital Auto Drill</a>
        <a class="link link-hover">Drill parts</a>
      </div>
      <div>
        <span class="footer-title text-neutral">Company</span>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </div>
      <div>
        <span class="footer-title text-neutral">Legal</span>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
