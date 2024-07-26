/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Natembea Health Center Application",
    description:
      "Built a web application to store student, doctors and nurses information. Also the web application shows the distribution of the variety of diseases gotten by students in the school. Built the frontend with html, css and javascript. Built backend with php and used my msql database to store student information.",
    url: "https://github.com/wendytim4/school-hospital-web-application",
  },
  {
    title: "CareNest Mental Health Application",
    description:
      "A web application that stores student information and gives personalized mental health assessments for each student. The Application stores students' mental health history and uses prompt engineering to assess notes about the student inputted by the counselor, giving feedback about the student's mental health condition. The application contains the endpoint for ChatGPT 3.5. Chat GPT 3.5 uses student information in the database to assess student mental health and the current notes placed in by the counselor to give feedback about the student's mental health.",
    url: "https://github.com/wendytim5/counsellor_webapp",
  },
  {
    title: "My Resume Site",
    description: "Created a website which contains my experiences and recent projects.",
    url: "https://github.com/wendytim4/MLSA_wendytechportfolio.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
