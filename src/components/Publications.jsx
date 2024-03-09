import { useState } from "react";
import "./style.css";

const Publications = () => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const patents = [
    {
      title: "2020",
      description: `Parama Pal & Earu Banoth, " System and Method for imaging of Localized and Heterogeneous Dynamics Using Laser Speckle", Patent Application No. CTO1-Patent, IDF-1391083-015-IN, (2020).`,
    },
    {
      title: "2019",
      description: `Parama Pal & Earu Banoth, “Method for automating the detection of the contours of features on any arbitrary surface using structured illumination”, Patent Application No. CTO1-Patent, IDF-1391083-004, (2019).`,
    },
    { title: ".......", description: "........" },
  ];

  const journals = [
    {
      title: "2021",
      description: `R Kulkarni, P Pal, E Banoth, "Spatio-temporal analysis of dynamic speckle patterns using singular value decomposition",Optics and Lasers in Engineering 142, 106588`,
    },
    {
      title: "2019",
      description: `R Kulkarni; E Banoth; P Pal, "Automated surface feature detection using fringe projection: An autoregressive modeling-based approach", Optics and Lasers in Engineering 121, 506-511 (2019).`,
    },
    {
      title: "2018",
      description: `E Banoth, "Absorption Flow-Cytometry for Point-of-Care Diagnostics", G28446`,
    },
    {
      title: "2016",
      description: `1. E Banoth, VK Kasula, VK Jagannadh, SS Gorthi; "Optofluidic single‐cell absorption flow analyzer for point‐of‐care diagnosis of malaria", Journal of biophotonics 9 (6), 610-618. 2. E Banoth, VK Kasula, SS Gorthi;"Portable optofluidic absorption flow analyzer for quantitative malaria diagnosis from whole blood", Applied optics 55 (30), 8637-8643`,
    },
    {
      title: "2015",
      description: `E. Banoth, V. J. Kalyan; S. S. Gorthi; "Single-cell optical absorbance characterization with high-throughput microfluidic microscopy", IEEE Journal of Selected Topics in Quantum Electronics, 22, 3, 111-116 (2015).`,
    },
    {
      title: "2014",
      description: `1. W. G. Rahul, M. Deepak, S. R. K. Gorthi; E. Banoth, S. S. Gorthi, "Signal tracking approach for phase estimation in digital holographic interferometry", Applied optics 53 (19), 4150-4157, (2014). 2.  E Banoth, J Veerendra Kalyan, R Srinivasan, SS Gorthi;"Single-cell Transmittance Measurements on a Blood-smear for the Detection of Malaria",Technology Letters 1 (9), 29-33`,
    },
  ];

  const conferences = [
    {
      title: "#1",
      description: `Banoth, Earu; Jagannadh, Veerendra Kalyan; Gorthi, Sai S; "Single Cell Optical Transmittance Based Label-free Malaria Detection at the Point-of-care", International Conference on Fibre Optics and Photonics T3A. 5, (2014). Optical Society of America`,
    },
    {
      title: "#2",
      description: `R Kulkarni, E Banoth, P Pal; "Automatic Surface Defect Detection Using Autoregressive Modeling-based Fringe Analysis", Frontiers in Optics, JTu2A. 23`,
    },
    {
      title: "#3",
      description: `R Kulkarni, E Banoth, P Pal; "Dynamic Laser Speckle Contrast Imaging using Singular Value Decomposition", Digital Holography and Three-Dimensional Imaging, JW2A. 44`,
    },
  ];

  const publications = {
    All: [...patents, ...journals, ...conferences],
    Patent: patents,
    Journals: journals,
    Conferences: conferences,
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl md:text-4xl font-semibold my-4">Publications</h1>

      <div className="flex justify-center">
        <nav className="flex">
          <button
            className={`${
              activeTab === "All" ? "bg-blue-500 text-white" : "text-blue-500"
            } px-4 py-2 rounded-l-md`}
            onClick={() => handleTabChange("All")}
          >
            All
          </button>
          <button
            className={`${
              activeTab === "Patent"
                ? "bg-blue-500 text-white"
                : "text-blue-500"
            } px-4 py-2`}
            onClick={() => handleTabChange("Patent")}
          >
            Patent
          </button>
          <button
            className={`${
              activeTab === "Journals"
                ? "bg-blue-500 text-white"
                : "text-blue-500"
            } px-4 py-2`}
            onClick={() => handleTabChange("Journals")}
          >
            Journals
          </button>
          <button
            className={`${
              activeTab === "Conferences"
                ? "bg-blue-500 text-white"
                : "text-blue-500"
            } px-4 py-2 rounded-r-md`}
            onClick={() => handleTabChange("Conferences")}
          >
            Conferences
          </button>
        </nav>
      </div>

      <div className="w-4/5 m-auto">
        {activeTab === "All" && (
          <>
            <h1 className="text-2xl md:text-3xl font-semibold mt-8 mb-4">
              Patents
            </h1>
            <div className="flex flex-wrap justify-center">
              {patents.map((patent, index) => (
                <div
                  key={index}
                  className="neumorphism-profile-card flex flex-col items-center mx-auto mb-6 w-96"
                >
                  <h1 className="font-semibold text-lg mb-2">{patent.title}</h1>
                  <p className="text-gray-700 text-base italic">
                    {patent.description}
                  </p>
                </div>
              ))}
            </div>

            <h1 className="text-2xl md:text-3xl font-semibold mt-8 mb-4">
              Journals
            </h1>
            <div className="flex flex-wrap justify-center">
              {journals.map((journal, index) => (
                <div
                  key={index}
                  className="neumorphism-profile-card flex flex-col items-center mx-auto mb-6 w-96"
                >
                  <h1 className="font-semibold text-lg mb-2">
                    {journal.title}
                  </h1>
                  <p className="text-gray-700 text-base italic">
                    {journal.description}
                  </p>
                </div>
              ))}
            </div>

            <h1 className="text-2xl md:text-3xl font-semibold mt-8 mb-4">
              Conferences
            </h1>
            <div className="flex flex-wrap justify-center">
              {conferences.map((conference, index) => (
                <div
                  key={index}
                  className="neumorphism-profile-card flex flex-col items-center mx-auto mb-6 w-96"
                >
                  <h1 className="font-semibold text-lg mb-2">
                    {conference.title}
                  </h1>
                  <p className="text-gray-700 text-base italic">
                    {conference.description}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab !== "All" && (
          <>
            <h1 className="text-2xl md:text-3xl font-semibold mt-8 mb-4">
              {activeTab}
            </h1>
            <div className="flex flex-wrap justify-center">
              {publications[activeTab].map((publication, index) => (
                <div
                  key={index}
                  className="neumorphism-profile-card flex flex-col items-center mx-auto mb-6 w-96"
                >
                  <h1 className="font-semibold text-lg mb-2">
                    {publication.title}
                  </h1>
                  <p className="text-gray-700 text-base italic">
                    {publication.description}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Publications;
