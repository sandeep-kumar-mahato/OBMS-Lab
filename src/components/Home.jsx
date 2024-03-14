import { useState, useRef, useEffect } from "react";
import Carousel from "./Carousel";
import side from "../images/side.svg";
import profile from "../images/profile.jpeg";
import bm from "../images/bm.png";
import lab from "../images/lab.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const overlayRef = useRef(null);

  const turnOnOverlay = () => {
    setOverlayVisible(true);
  };

  const turnOffOverlay = (e) => {
    if (
      overlayRef.current &&
      !overlayRef.current.contains(e.target) &&
      !e.target.closest(".overlay-content")
    ) {
      setOverlayVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", turnOffOverlay);
    return () => {
      document.removeEventListener("mousedown", turnOffOverlay);
    };
  }, []);

  const handleClick = () => {
    console.log("Button clicked!");
    turnOnOverlay();
  };

  return (
    <>
      <Carousel />
      <div className="flex flex-col md:flex-row items-center justify-evenly p-8 md:p-16">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl leading-tight mb-4">
            OPTO-
            <br />
            BIOMEDICAL
            <br /> MICROSYSTEMS
            <br /> LABORATORY
          </h1>
          <button
            onClick={handleClick}
            className="bg-slate-950 hover:bg-transparent hover:text-slate-950 border-2 border-slate-950 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0 md:mr-4"
          >
            Join Us
          </button>
          <button
            onClick={handleClick}
            className="bg-transparent hover:bg-slate-950 hover:text-slate-50 text-slate-950 border-2 border-slate-950 font-bold py-2 px-4 rounded"
          >
            Projects
          </button>
        </div>
        <img src={side} alt="" className="w-full md:w-96" />
      </div>

      {overlayVisible && (
        <div className="fixed inset-0 flex justify-center items-center z-20">
          <div
            className="bg-slate-900 p-8 overlay-content text-center"
            ref={overlayRef}
          >
            <h1 className="text-3xl text-slate-200 font-bold py-4 text-center">
              NOTICE BOARD
            </h1>
            <ul className="text-left w-3/4 m-auto p-4 text-xl text-lime-400">
              <li className="list-disc text-pink-500 pb-4">
                <p className="text-lime-400">
                  <strong>New Ph.D. Position open - </strong>One with Institute
                  fellowship and one is without fellowship. Interested students
                  can contact here
                </p>
              </li>
              <li className="list-disc text-pink-500 pb-4">
                <p className="text-lime-400">
                  <strong>Summer Internship/ Master dissertation - </strong>
                  Interested students can contact here
                </p>
              </li>
              <li className="list-disc text-pink-500">
                <p className="text-lime-400">
                  <strong>Coming Soon - </strong>Next Gen Medical Devices
                  (NGMD-2023-S2) here
                </p>
              </li>
            </ul>
            <button
              onClick={() => setOverlayVisible(false)}
              className="bg-slate-100 hover:bg-transparent hover:text-slate-100 border-2 border-slate-100 text-slate-900 font-medium py-2 px-4 mt-4 rounded"
            >
              Close Overlay
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-3/4 m-auto p-8">
        <img
          src={profile}
          alt=""
          className="w-full md:w-96 mb-8 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Dr. Earu Banoth
          </h1>
          <h2 className="text-xl md:text-3xl mb-4">Assistant Professor</h2>
          <p className="text-base md:text-xl mb-4">
            Dr. Earu Banoth is working as Assistant Professor in the Dept. of
            Biotechnology and Medical Engineering, National Institute of
            Technology Rourkela India. Before this position he was a
            Postdoctoral associate and visiting Scientist at the University of
            Rochester Medical Centre, New York, USA.
          </p>
          <button
            onClick={handleClick}
            className="bg-transparent hover:bg-slate-950 hover:text-slate-50 text-slate-950 border-2 border-slate-950 font-bold py-2 px-4 rounded"
          >
            Know More
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-3/4 m-auto p-8">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            About Our Organization
          </h1>
          <p className="text-base md:text-xl mb-4">
            The opto-biomedical microsystem lab at NIT Rourkela was established
            in the year 2020 as an integral part of the department of
            Biotechnology and Medical Engineering (BM). The department was
            founded in the year 2014. It provides a multidisciplinary forum for
            students and researchers from several disciplines to share advanced
            knowledge and develop several techniques, methodologies, and
            instruments with effective biological approach.. It contributes to a
            wide range of social demands, including advancements in human
            disease detection and therapy, the design of revolutionary
            biomaterials and biomedical devices, and environmental hazard
            mitigation. The objective of our lab is based on fabricating several
            microfluidic devices and integrate optical instruments with unique
            functional designs in a microchip platform.
          </p>
        </div>
        <img src={bm} alt="" className="w-full md:w-96 mb-8 md:mb-0 md:ml-8" />
      </div>

      <div className="w-full text-center p-8">
        <img src={lab} alt="" className="w-full pb-8" />
        <Link
          to="/gallery"
          className="bg-transparent hover:bg-slate-950 hover:text-slate-50 text-xl text-slate-950 border-2 border-slate-950 font-bold py-4 px-10 m-8 rounded"
        >
          Gallery
        </Link>
      </div>
    </>
  );
};

export default Home;
