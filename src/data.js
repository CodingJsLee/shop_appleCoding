import jsImg from "./img/js.png";
import html5Img from "./img/html.png";
import cssImg from "./img/css.png";
import { useState } from "react";

let mainData = [
  {
    id: 3,
    title: "혼자공부하는 자바스크립트",
    content: "JavaScript",
    price: 67000,
    imges: jsImg,
    count : 1
  },

  {
    id: 1,
    title: "HTML 1시간안에 끝내기",
    content: "HTML5",
    price: 35000,
    imges: html5Img,
    count : 1
  },

  {
    id: 2,
    title: "세상에서 가장 쉬운 CSS",
    content: "CSS3",
    price: 35000,
    imges: cssImg,
    count : 1
  },
];

export default mainData;

