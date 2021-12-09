import MediaQuery from "react-responsive";
import Menu from "./Menu";
import calGif from "../images/calGif.gif";
import todoGif from "../images/todoGif.gif";
import ticGif from "../images/ticGif.gif";
import flapGif from "../images/flapGif.gif";
import movieGif from "../images/movieGif.gif";
import whatsappGif from "../images/whatGif.gif";
import "../pages/Projects.css";
const Projects = () => {
  const media = {
    width: "85vw",
  };
  return (
    <div>
      <MediaQuery query="(max-width:600px)">
        {(matche) => {
          return matche ? (
            <div>
              <div className="menu">
                <Menu page="projects" />
              </div>
              <div className="project__page" id="project">
                <h1 className="section__title">
                  Recent<span>Projects</span>
                </h1>
                <div className="projectPage__body">
                  <a
                    style={{ color: "green" }}
                    href="https://burhanrepos.github.io/ReactJS-Calculator/"
                    target="_blank"
                  >
                    <img className="p__item" style={media} src={calGif} />
                  </a>
                  <a
                    style={{ color: "green" }}
                    href="https://burhanrepos.github.io/to-do-list-ReactJS/"
                    target="_blank"
                  >
                    <img className="p__item" style={media} src={todoGif} />
                  </a>
                  <a
                    style={{ color: "green" }}
                    href="https://burhanrepos.github.io/Tic-Tac-Toe-Website-Game/"
                    target="_blank"
                  >
                    <img className="p__item" style={media} src={ticGif} />
                  </a>
                  <a
                    href="https://burhanrepos.github.io/WhatsAppWeb-Clone/"
                    target="_blank"
                  >
                    <img className="p__item" style={media} src={whatsappGif} />
                  </a>
                  <a
                    href="https://burhanrepos.github.io/Flappy-Bird/"
                    target="_blank"
                  >
                    <img className="p__item" style={media} src={flapGif} />
                  </a>
                  <a
                    href="https://burhanrepos.github.io/movieslistwithreact/"
                    target="_blank"
                  >
                    <img className="p__item" style={media} src={movieGif} />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="menu">
                <Menu page="projects" />
              </div>
              <div className="project__page" id="project">
                <h1 className="section__title">
                  Recent<span>Projects</span>
                </h1>
                <div className="projectPage__body">
                  <a
                    style={{ color: "green" }}
                    href="https://burhanrepos.github.io/ReactJS-Calculator/"
                    target="_blank"
                  >
                    <img className="p__item" src={calGif} />
                  </a>
                  <a
                    style={{ color: "green" }}
                    href="https://burhanrepos.github.io/to-do-list-ReactJS/"
                    target="_blank"
                  >
                    <img className="p__item" src={todoGif} />
                  </a>
                  <a
                    style={{ color: "green" }}
                    href="https://burhanrepos.github.io/Tic-Tac-Toe-Website-Game/"
                    target="_blank"
                  >
                    <img className="p__item" src={ticGif} />
                  </a>
                  <a
                    href="https://burhanrepos.github.io/WhatsAppWeb-Clone/"
                    target="_blank"
                  >
                    <img className="p__item" src={whatsappGif} />
                  </a>
                  <a
                    href="https://burhanrepos.github.io/Flappy-Bird/"
                    target="_blank"
                  >
                    <img className="p__item" src={flapGif} />
                  </a>
                  <a
                    href="https://burhanrepos.github.io/movieslistwithreact/"
                    target="_blank"
                  >
                    <img className="p__item" src={movieGif} />
                  </a>
                </div>
              </div>
            </div>
          );
        }}
      </MediaQuery>
    </div>
  );
};
export default Projects;
const styles = {
  container: (isRowBased) => ({
    display: "flex",
    flexDirection: isRowBased ? "row" : "column",
    justifyContent: "space-around",
  }),
};
