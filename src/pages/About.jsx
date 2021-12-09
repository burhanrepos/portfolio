import Menu from "./Menu";
// import image from "../images/img-2.png";
import image from "../images/img-2222.jpg";
import Footer from "./Footer";
import "../pages/About.css";
import cv from "../images/BurhanCV.pdf";
const About = () => {
  return (
    <>
      <div className="menu">
        <Menu page="about" />
      </div>
      <div className="about__page" id="about">
        <div>
          <figure>
            <img src={image} alt="Error" />
          </figure>
        </div>
        <div>
          <h1 className="section__title">
            About <span>me</span>
          </h1>
          <p>
            My name is <b>Burhan Shaheen</b>.A young & ambitious Coder pursuing
            Bachelor's in Computer Sciences from International Islamic
            University Islamabad.I have knowledge of C++, JAVA, JavaScript, and
            Software Development.Extremely motivated to constantly develop my
            skills and grow professionally. I am confident in my ability to come
            up with interesting ideas for unforgettable programming techniques
            and designs. I need internship in an organization and an atmosphere
            where I improve my knowledge, skills and professional attitude. 
          </p>
          <p>
            <span style={{ fontWeight: "bold",
                fontSize:'120%',
                textDecoration:'underline' }}>EDUCATION</span>
            <br />
            <ul style={{ marginLeft: "5%" }}>
              <li style={{ fontWeight: "bold" }}>Bachelor</li>
              <p style={{ fontSize: "100%", textAlign: "justify" }}>
                2018- Pursuing Bachelor's in Computer Sciences from <b>IIUI</b>
                (7th Semester with CGPA: 3.89).
              </p>
              <li style={{ fontWeight: "bold" }}>Intermediate(ICS)</li>
              <p style={{ fontSize: "100%", textAlign: "justify" }}>
                2018- from <b>ICB G-6/3 Islamabad </b>
                with 70% marks.
              </p>
              <li style={{ fontWeight: "bold" }}>Matriculation</li>
              <p style={{ fontSize: "100%", textAlign: "justify" }}>
                2016- from <b>IMSB G-6/4 Islamabad </b>
                with 79% marks.
              </p>
            </ul>
          </p>
          <p>
            <span
              style={{
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: "2.5%",
                fontSize:'120%',
                textDecoration:'underline'
              }}
            >
              Certification
            </span>
            <br />
            <ul style={{ marginLeft: "5%" }}>
              <li style={{ marginBottom: "2.5%" }}>
                Programming for Everybody (Getting Started with Python) by
                University of Michigan and offered through Coursera
              </li>
              <li style={{ marginBottom: "2.5%" }}>
                Two months computer typing course from NADRA
              </li>
              <li style={{ marginBottom: "2.5%" }}>
                Graphic Designing Course From DigiSkills
              </li>
              <li style={{ marginBottom: "2.5%" }}>
                MS Office Certified (Word, PowerPoint,Excel)
              </li>
            </ul>
          </p>
          <p>
            <span
              style={{
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: "2.5%",
                fontSize:'120%',
                textDecoration:'underline'
              }}
            >
              Technical Skills
            </span>
            <br />
            <ul style={{ marginLeft: "5%" }}>
            <li style={{ fontWeight: "bold" }}>Coding Languages</li>
              <p style={{ fontSize: "100%", textAlign: "justify" }}>
              C++,JAVA, HTML/CSS, PHP,JavaScript
              </p>
              <li style={{ fontWeight: "bold" }}>DataBases</li>
              <p style={{ fontSize: "100%", textAlign: "justify" }}>
              MYSQL,ORACLE, FIREBASE
              </p>
              <li style={{ fontWeight: "bold" }}>MicroSoft Office</li>
              <p style={{ fontSize: "100%", textAlign: "justify" }}>
              MS Word, MS Excel, MS Powerpoint, MS Access
              </p>
              <li style={{ fontWeight: "bold" }}>Tools & Technologies</li>
              <p style={{ fontSize: "100%", textAlign: "justify" }}>
              NetBeans,Eclipse,Visual Studio2017,Dev C++,VS Code<br/>
              Git,GitHub,
              </p>
            </ul>
          </p>
          <a href={cv} target="_blank">
            <button class="button">Download Resume</button>
          </a>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default About;
