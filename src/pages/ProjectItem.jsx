import cal from "../images/calculator.png";
import todo from "../images/todo.png";
import tictac from "../images/tictac.png";
import web from "../images/wweb.png";
import React from "react";

const ProjectItem = (props) => {

  const itemAfter = {
    content: "",
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.2)",
    zIndex: -1,
  };
  const image=props.image;
  console.log(image, "Hello");
  const imageURL=()=>{
      
  }
  console.log(image, "Hello");
  const item = {
    backgroundImage: `url(${cal})`,
    backgroundSize: "cover",
    backgroundPosition: `top center`,
    position: "relative",
    zIndex: 1,
  };
  const item1 = {
    backgroundImage: `url(${todo})`,
    backgroundSize: "cover",
    backgroundPosition: `top center`,
    position: "relative",
    zIndex: 1,
  };
  return (
    <>
      <div className="p__item" style={item1}>
        <a style={{ color: "green" }} href={props.src} target="_blank">
          <h3>{props.title}</h3>
          <br />
        </a>
        <p>{props.subTitle}</p>
        <br />
        <p>{props.desc}</p>
        <div style={itemAfter}></div>
      </div>
    </>
  );
};
export default ProjectItem;
/* .item{
    background-image: url("./images/img-1.png");
    background-size: cover;
    background-position: top center;
    position: relative;
    z-index: 1;
  }
  .item::after{
    content: '';
    position:absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
    z-index: -1;
  
  } */
