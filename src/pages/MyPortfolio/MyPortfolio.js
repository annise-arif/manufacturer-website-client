import React from "react";
import me from "../../images/1ME.jpg";
import skillIcon from "../../images/skill.png";

const MyPortfolio = () => {
  return (
    <div className="lg:flex my-20">
      <div className="max-w-md card lg:w-96 sm:w-full bg-base-100 shadow-xl p-6 mx-auto">
        <h1 className="text-3xl font-bold text-teal-700">
          EDUCATION AND TRAINING
        </h1>
        <ol>
          <li>
            <strong>Student of Science technology</strong>
            <br />
            01/06/2016-01/08/2017 <br />
            Sreepur Pilot High School <br />
            Dhaka, Sreepur, Gazipur ( Bangladesh) <br />
            <a className="" href="https://youtu.be/JjQYJFyEckE">
              Subscribe my channel
            </a>
          </li>
          <hr className="" />
          <li>
            <strong>Student of Electronics Engineering & Web Designing</strong>{" "}
            <br />
            10/11/2017-03/12/2018 <br />
            Model institute of science & technology. Gazipur (MIST
            <br />
            Gazipur, shibbari, DUET, ( Bangladesh) <br />
          </li>
          <hr />
          <li>
            <strong>Student of Science technology</strong> <br />
            01/06/2016-01/08/2017 <br />
            Sreepur Pilot High School <br />
            Dhaka, Sreepur, Gazipur ( Bangladesh) <br />
          </li>
          <hr />
          <li>
            <strong> Web Designer & Developer</strong> <br />
            19/05/2018-03/02/2012 <br />
            Model institute of science & technology. Gazipur (MIST
            <br />
            <a className="text-teal-300" href="https://youtu.be/JjQYJFyEckE">
              Subscribe my channel
            </a>{" "}
            <br />
          </li>

          <li className="mt-8">
            Live Project-1:
            <a
              target="_blank"
              href="https://jade-lolly-f84cb6.netlify.app/"
              className="text-teal-300"
            >
              {" "}
              https://jade-lolly
            </a>
          </li>
          <li className="mt-8">
            Live Project-2:
            <a
              target="_blank"
              href="https://zesty-kulfi-cd8e9c.netlify.app/"
              className="text-teal-300"
            >
              {" "}
              https://zesty-kulfi
            </a>
          </li>
          <li className="mt-8">
            Live Project-3:
            <a
              target="_blank"
              href="https://mystifying-nightingale-6f858c.netlify.app/"
              className="text-teal-300"
            >
              {" "}
              https://mystifying
            </a>
          </li>
          <li className="mt-8">
            Live Project-4:
            <a
              target="_blank"
              href="https://transcendent-parfait-1e0274.netlify.app/"
              className="text-teal-300"
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
            <p>
              I like to call myself ``a passionate computer science learner &
              Web designer".
            </p>
            <p>
              I made lot of videos on different subjects. My first priority is
              making the subject more interesting and give you a clear
              understanding so you can feel it and don't get bore.
            </p>

            <hr className="aboutme-hr" />
            <p>Name: Anis hossain arif</p>
            <hr className="aboutme-hr" />
            <p>Address: Dhaka, Sreepur, Gazipur</p>
            <hr className="aboutme-hr" />
            <p>
              Email:{" "}
              <a href="mailto:arifhasan.neon@gmail.com">
                arifhasan.neon@gmail.com
              </a>
            </p>
            <hr className="aboutme-hr" />
            <p>
              Phone: <a href="tel:+8801861449772">+8801861449772</a>
            </p>
            <hr className="aboutme-hr" />
            <p>
              Page:{" "}
              <a href="https//www.anis.com" target="blank">
                https//www.anis.com
              </a>
            </p>
            <hr className="aboutme-hr" />

            <p>
              <a href="#" target="blank" download="">
                <button className="cv-button">Download CV</button>
              </a>
            </p>
            <ol>
              <li className="mt-8">
                Live Project-5:
                <a
                  target="_blank"
                  href="https://suspicious-davinci-d7d641.netlify.app/"
                  className="text-teal-300"
                >
                  {" "}
                  https://suspicious
                </a>
              </li>
              <li className="mt-8">
                Live Project-6:
                <a
                  target="_blank"
                  href="https://elastic-perlman-b7e6a4.netlify.app/"
                  className="text-teal-300"
                >
                  {" "}
                  https://elastic
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
