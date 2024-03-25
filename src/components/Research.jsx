import PropTypes from "prop-types";
import absorpBlur1 from "../images/absorpBlur1.jpg";
import projectImage1 from "../images/project1.jpg";
import projectImage2 from "../images/project2.jpg";
import projectImage3 from "../images/project3.jpg";
import projectImage4 from "../images/project4.jpg";
import projectImage5 from "../images/project5.jpg";
import projectImage6 from "../images/project6.jpg";
import projectImage7 from "../images/project7.jpg";
import { useState, useEffect } from "react";

const sectionsData = [
  {
    title: "Opto-Microfluidics",
    description:
      "Opto-Fluidics is the synergistic combination of optics and microfluidics to yield novel functionalities. It offers a unique platform which enables rapid, high-throughput single-cell manipulation and analysis in a controlled micro-environment. It has also enabled the creation of adaptive optical elements like tunable lenses etc., which cannot easily be fabricated using conventional techniques.",
    imageSrc: absorpBlur1,
  },
  {
    title: "Microfluidics Organoid-on-a-chip",
    description:
      "On-chip modelling entwined with microfluidics platform simply powerful assay advantages like control media flow, create complex gradients, requisition of cell and reagents in minute level during culture. OBMS lab works on the development of Organoid-on-a-chip platform for controlled study of normal and diseased organoid on single platform for the characterization.",
    imageSrc: projectImage1,
  },
  {
    title: "Signal and Image analysis",
    description:
      "The combination of signal acquisition and Image analysis system enhance better characteristic of biological entities. OBMS lab works on the development of such phase lock system for findings the opto-chemical and morphological features of the same bio-cells. Further, our team working on adoption of AI and ML technique for real time analysis.",
    imageSrc: projectImage2,
  },
  {
    title: "Point-of-Care Instruments",
    description:
      "Point of care / bedside testing is the advancement in the technology which takes felicity to the actual needy. OBMS lab deals with development of Point of care diagnostic tools using Optics, Microfluidics and simple electronics for Biomedical applications.",
    imageSrc: projectImage3,
  },
  {
    title: "Drug screening and testing",
    description:
      "The field of drug discovery and development is a complex and time-consuming process that requires the identification and testing of potential therapeutic compounds. In recent years, microfluidic platforms have emerged as promising tools for high-throughput drug screening, offering advantages such as enhanced control over fluid flow, reduced sample and reagent consumption, and improved experimental reproducibility. This research statement outlines the objectives and significance of our proposed investigation on microfluidic drug screening. Design and Fabrication, Integration of Assay Components, Real-time Monitoring and Analysis, and Automation and High-Throughput Screening. our research aims to advance the field of microfluidic drug screening by developing innovative platforms for efficient, reliable, and high-throughput screening of potential therapeutic compounds. Through the integration of advanced fabrication techniques, real-time monitoring, automation, and physiologically relevant models, we seek to contribute to the development of safer, more effective drugs and personalized treatment approaches.",
    imageSrc: projectImage4,
  },
  {
    title: "Microfluidics Microfabrication",
    description:
      "Opto-Fluidics is the synergistic combination of optics and microfluidics to yield novel functionalities. It offers a unique platform which enables rapid, high-throughput single-cell manipulation and analysis in a controlled micro-environment. It has also enabled the creation of adaptive optical elements like tunable lenses etc., which cannot easily be fabricated using conventional techniques.",
    imageSrc: projectImage5,
  },
  {
    title: "Organ/Lab-on-a-Chip",
    description:
      "The field of Lab on a Chip (LOC) has emerged as a revolutionary approach to miniaturize and integrate laboratory processes onto a single microfluidic device. This technology offers tremendous potential for diverse applications, ranging from healthcare diagnostics and environmental monitoring to chemical analysis and drug discovery. This research statement outlines the objectives and significance of our proposed investigation on Lab on a Chip. our research aims to advance the field of microfluidic drug screening by developing innovative platforms for efficient, reliable, and high-throughput screening of potential therapeutic compounds. Through the integration of advanced fabrication techniques, real-time monitoring, automation, and physiologically relevant models, we seek to contribute to the development of safer, more effective drugs and personalized treatment approaches.",
    imageSrc: projectImage6,
  },
  {
    title: "Nondestructive Testing",
    description:
      "Optical metrology has been at the backbone of the measurement applications in a wide range of fields such as experimental mechanics, non-destructive testing, MEMS characterization, art preservation, quality control, etc. Over the years, various optical measurement techniques including various microscopic, flow-cytometry, imaging flow-cytometry and detection based analysis have been developed for a wide range of applications in biomedical research and clinical pathology. Our lab works on the such development of such systems.",
    imageSrc: projectImage7,
  },
];

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowRight") {
        setActiveTab((prevTab) =>
          prevTab === sectionsData.length - 1 ? 0 : prevTab + 1
        );
      } else if (event.key === "ArrowLeft") {
        setActiveTab((prevTab) =>
          prevTab === 0 ? sectionsData.length - 1 : prevTab - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="w-full md:w-[80%] m-auto mb-4">
      <div
        className="flex bg-[#e6e0de] border-b border-gray-200 overflow-x-auto"
        style={{ overflowY: "hidden" }}
      >
        {sectionsData.map((section, index) => (
          <button
            key={index}
            className={`${
              activeTab === index
                ? "bg-[#b2beb0] text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            } py-4 px-6 md:px-8 text-lg md:text-2xl block focus:outline-none flex-1 whitespace-nowrap`}
            onClick={() => handleTabClick(index)}
          >
            {section.title}
          </button>
        ))}
      </div>
      <div className="py-8 bg-[#b2beb0]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 px-6">
          <p className="text-lg md:text-2xl text-justify md:w-[60%]">
            {sectionsData[activeTab].description}
          </p>
          <img
            className="w-full md:w-[40%]"
            src={sectionsData[activeTab].imageSrc}
            alt="sample"
          />
        </div>
      </div>
    </div>
  );
};

const Research = () => (
  <div className="text-center">
    <h1 className="text-3xl md:text-4xl uppercase font-bold my-4">
      Research Projects
    </h1>
    <div className="w-full m-auto px-4 md:p-0">
      {sectionsData.map((section, index) => (
        <ProjectCard
          key={index}
          title={section.title}
          description={section.description}
          imageSrc={section.imageSrc}
        />
      ))}
    </div>

    {/* Tab Section */}
    <TabSection />
  </div>
);

const ProjectCard = ({ title, description, imageSrc }) => (
  <div className="w-full md:w-4/5 m-auto flex flex-col md:flex-row justify-center md:justify-between border-2 border-slate-950 rounded-lg p-4 bg-slate-100 mb-6">
    <img
      className="w-full md:w-1/4 md:h-auto object-cover border-2 border-slate-800 rounded-md mb-4 md:mb-0"
      src={imageSrc}
      alt={title}
    />
    <div className="w-full md:w-3/4 m-auto md:px-4">
      <h1 className="text-lg md:text-2xl font-semibold text-left mb-2">
        {title}
      </h1>
      <p className="text-gray-700 text-base md:text-lg italic text-justify">
        {description}
      </p>
    </div>
  </div>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Research;
