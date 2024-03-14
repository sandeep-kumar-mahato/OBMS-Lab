import { useState, useRef, useEffect } from "react";
import title from "../images/title.svg";

export default function Footer() {
  const [overlayVisible, setOverlayVisible] = useState(true);
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

  return (
    <footer className="text-center py-4 md:py-8 bg-slate-900 text-slate-50 text-sm relative">
      <iframe
        className="w-full md:w-3/5 mx-auto pt-4"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d759.6900732492575!2d84.9037582695248!3d22.252564198732575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201fd3aa4e8ca7%3A0x29b2d4d9a59691b9!2sOBMS%20LAB!5e1!3m2!1sen!2sin!4v1709542881670!5m2!1sen!2sin"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <div className="flex flex-col md:flex-row justify-center items-center px-4 m-4">
        <img className="invert mb-4 md:mb-0 md:mr-4" src={title} alt="" />
        <button
          onClick={turnOnOverlay}
          className="bg-slate-100 hover:bg-transparent hover:text-slate-100 border-2 border-slate-100 text-slate-900 font-semibold py-2 px-4 rounded mb-2 md:mb-0"
        >
          Notice Board
        </button>
        {overlayVisible && (
          <div
            id="overlay"
            ref={overlayRef}
            className="fixed inset-0 bg-black bg-opacity-50 z-10 cursor-pointer"
          />
        )}
        {overlayVisible && (
          <div className="fixed inset-0 flex justify-center items-center z-20">
            <div className="bg-slate-900 p-8 overlay-content">
              <h1 className="text-3xl font-bold py-4 text-center">
                NOTICE BOARD
              </h1>
              <ul className="text-left w-3/4 m-auto p-4 text-2xl text-lime-400">
                <li className="list-disc pb-4">
                  <strong>New Ph.D. Position open - </strong>One with Institute
                  fellowship and one is without fellowship. Interested students
                  can contact here
                </li>
                <li className="list-disc pb-4">
                  <strong>Summer Internship/ Master dissertation - </strong>
                  Interested students can contact here
                </li>
                <li className="list-disc">
                  <strong>Coming Soon - </strong>Next Gen Medical Devices
                  (NGMD-2023-S2) here
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
      </div>
      <hr className="w-3/4 mx-auto" />
      <p className="pt-4 text-sm">
        &copy; {new Date().getFullYear()} Opto-Biomedical Microsystems
        Laboratory. All rights reserved.
      </p>
    </footer>
  );
}
