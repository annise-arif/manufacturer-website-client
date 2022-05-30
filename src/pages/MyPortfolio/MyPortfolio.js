import React from "react";
import me from "../../images/1ME.jpg";
import skillIcon from "../../images/skill.png";

const MyPortfolio = () => {
  return (
    <div className="lg:flex my-20">
      <div className="max-w-md card lg:w-96 sm:w-full bg-base-100 shadow-xl p-6 mx-auto">
        <h1 className="text-3xl font-bold text-teal-700">
        EDUCATION AND INTRODUCING MYSELF
        </h1>
        <ol>
          <li>
            <strong>Student of School</strong>
            <br />
            01/02/2009 _ 12/30/2015-16 <br />
            <b>School:</b> Sreepur Pilot High School <br />
            <b>Address:</b> Dhaka, Sreepur, Gazipur ( Bangladesh) <br />
            <a className=" text-blue-400" target="_blank" href="https://www.youtube.com/channel/UCAVndfkblprqNVhoKvr4Wgw">
              Subscribe my youTube channel
            </a>
          </li>
          <hr className="my-3" />
          <li>
            <strong>Student of Diploma In Electronics Engineering</strong>{" "}
            <br />
            02/24/2017 _ 12/30/2021 <br />
           <b>College:</b> Model institute of science & technology. Gazipur (MIST)
            <br />
           <b>Address:</b> Gazipur, shibbari, DUET, (1700)  ( Bangladesh) <br />
           <b>WebSite:</b> <a className=" text-blue-400" target="_blank" href="https://mistte.org/">
              Model Institute Of....
            </a>
          </li>
          <hr className="my-3"/>
          <li>
            <strong>Studying Web Development</strong> <br />
            01/06/2018 _ 05/30/2022... <br />
            I was learning and following W3schools YouTube and I google search <br />
            <b>Address</b> Dhaka, Sreepur, Gazipur ( Bangladesh) <br />
          </li>
          <hr className="my-3"/>
          <li>
            <strong> Complete Web Development Course with Jhankar Mahbub brother</strong> <br />
            12/30/2011 _ 05/30/2022... <br />
            Complete Web Development Course with Jhankar Mahbub 
            <br />
            <b>Address:</b> Level-4, 34, Awal Centre, Banani, Dhaka
            <br />
            <b>WebSite: </b> <a className="text-blue-400" href="https://youtu.be/JjQYJFyEckE">
               Complete Web Dev..
            </a>
            <br />
            <br />
          </li>
          <li className="mt-8">
            <b className="text-teal-900">My Own Live Project-1:</b>
            <a
              target="_blank"
              href="https://transcendent-parfait-1e0274.netlify.app/"
              className="text-teal-400"
            >
              {" "}
              https://transcendent
            </a>
          </li>
        </ol>
      </div>

      <div className="about-me card lg:w-96 sm:w-full my-6 bg-base-100 shadow-xl p-8 mx-auto">
        <div className="about-me">
          <h2 className="text-teal-800 text-center font-bold my-2">ABOUT ME</h2>
          <hr className="dotted-hr" />
          <div className="aboutme-image col-lg-6 cal-sm-12">
            <img className="rounded-lg" src={me} alt="img" />
          </div>
          <div className="aboutme-desc col-lg-6 cal-sm-12">
            <p className="text-teal-700 font-bold mt-2 text-center">
              I like to call myself ``a passionate computer science learner &
              Web Developer.
            </p>
            <p>
            I made a lot of projects on different subjects. My first priority is making the Project more interesting and giving user experience understanding so you can feel it and don't get bore.
            </p>

            <hr className="aboutme-hr my-3" />
            <p><b>Name: </b> Anis hossain arif</p>
            <hr className="aboutme-hr" />
            <p><b>Address: </b> Dhaka, Sreepur, Gazipur</p>
            <hr className="aboutme-hr" />
            <p>
              <b>Email: </b>{" "}
              <a href="mailto:arifhasan.neon@gmail.com" className="text-blue-400">
                arifhasan.neon@gmail.com
              </a>
            </p>
            <hr className="aboutme-hr" />
            <p>
              <b>Phone: </b> <a href="tel:+8801861449772">+8801303477672</a>
            </p>
            <hr className="aboutme-hr" />
            <p>
              <b>Page: </b>
              <a className="text-blue-400" href="https://www.facebook.com/Annisecom-2443686335648691/" target="blank">
                https//www.anis.com
              </a>
            </p>
            <hr className="aboutme-hr" />

            <p>
              <a href="https://docs.google.com/document/d/12E_CVD3e71gwSnd8xCRDfNs36z9yDHABvV7l8IdiOTE/edit" target="blank" download="">
                <button className="cv-button mt-2 btn bg-teal-300 border-0 btn-sm">Download CV</button>
              </a>
            </p>
            <ol>
              <li className="mt-8">
              <b className="text-teal-900">My Own Live Project-2:</b>
                <a
                  target="_blank"
                  href="https://suspicious-davinci-d7d641.netlify.app/"
                  className="text-teal-400"
                >
                  {" "}
                  https://suspicious
                </a>
              </li>
              <li className="mt-8">
              <b className="text-teal-900">My Own Live Project-3:</b>
                <a
                  target="_blank"
                  href="https://elastic-perlman-b7e6a4.netlify.app/"
                  className="text-teal-400"
                >
                  {" "}
                  https://elastic
                </a>
              </li>

              <li className="mt-8">
              <b className="text-teal-900">My Own Live Project-4:</b>
            <a
              target="_blank"
              href="https://zesty-kulfi-cd8e9c.netlify.app/"
              className="text-teal-400"
            >
              {" "}
              https://zesty-kulfi
            </a>
          </li>
          <li className="mt-8">
          <b className="text-teal-900">My Own Live Project-5:</b>
            <a
              target="_blank"
              href="https://warehouse-of-car.web.app/"
              className="text-teal-300"
            >
              {" "}
              https://mystifying
            </a>
          </li>
          
            </ol>
          </div>
        </div>
      </div>
      <div className="my-skills lg:mx-auto mt-8">
        <div className="skills col-lg-4 col-sm-12 card lg:w-96 sm:w-full bg-base-100 shadow-xl p-5">
          <div className="card">
            <div className="card-icon text-center">
              <img className="rounded-img" src={skillIcon} alt="work icon" />
            </div>
            <div className="card-title text-center">
              <h2 className="text-teal-700 text-center font-bold my-2">
                SKILLS
              </h2>
            </div>
            <div className="card-desc">
              <div className="skills-container">
                <ul>
                  <li className="html">HTML </li>
                  <progress
                    className="progress progress-accent w-56"
                    value="92"
                    max="100"
                  ></progress>
                  <li className="css">CSS </li>{" "}
                  <progress
                    className="progress progress-accent w-56"
                    value="82"
                    max="100"
                  ></progress>
                  <li className="bootstrap">Bootstrap</li>{" "}
                  <progress
                    className="progress progress-accent w-56"
                    value="80"
                    max="100"
                  ></progress>
                  <li className="github">Tailwind Css</li>{" "}
                  <progress
                    className="progress progress-accent w-56"
                    value="76"
                    max="100"
                  ></progress>
                  <li className="github">Daisy Ui</li>{" "}
                  <progress
                    className="progress progress-accent w-56"
                    value="67"
                    max="100"
                  ></progress>
                  <li className="js">JavaScript</li>{" "}
                  <progress
                    className="progress progress-accent w-56"
                    value="90"
                    max="100"
                  ></progress>
                  <li className="react">React.js</li>
                  <progress
                    className="progress progress-accent w-56"
                    value="90"
                    max="100"
                  ></progress>
                  <li className="node">Node.js</li>{" "}
                  <progress
                    className="progress progress-accent w-56"
                    value="65"
                    max="100"
                  ></progress>
                  <li className="express">Express.js</li>{" "}
                  <progress
                    className="progress progress-accent w-56"
                    value="74"
                    max="100"
                  ></progress>
                  <li className="github">Mongodb</li>{" "}
                  <progress
                    className="progress progress-accent w-56"
                    value="75"
                    max="100"
                  ></progress>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
