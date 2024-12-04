import React, { useRef, useState } from "react";
import Page1Bottom from "../components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TiltText from "../components/TiltText";

const Page1 = () => {
  const tiltRef = useRef(null);

  const [xVal, setXval] = useState(0);
  const [yVal, setYval] = useState(0);

  const mouseMoving = (e) => {
    const rect = tiltRef.current.getBoundingClientRect();
    setXval((e.clientX - rect.x - rect.width / 2) / 20);
    setYval(-(e.clientY - rect.y - rect.height / 2) / 5);
  };

  useGSAP(() => {
    gsap.to(tiltRef.current, {
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 3,
      ease: "power4.out",
    });
  }, [xVal, yVal]);

  return (
<div id="page1" onMouseMove={mouseMoving} className="h-screen p-4 bg-white">

    <div className="main-image shadow-xl p-20 shadow-gray-700 h-screen bg-cover rounded-[40px] bg-[url(../src/assets/mainbg2.jpg)]">

    <img className="logo h-14 ml-" src="https://github.com/NavneetPrasad1709/Portfolio/blob/main/src/assets/logo.png" alt="" />

    <TiltText abc={tiltRef} />
    <Page1Bottom />


    </div>
</div>
  );
};

export default Page1;
