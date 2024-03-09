import { useState } from "react";

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const toggleDetails = (course) => {
    setSelectedCourse(course === selectedCourse ? null : course);
  };

  const hideDetails = () => {
    setSelectedCourse(null);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center underline p-6">Courses</h1>
      {!selectedCourse && (
        <>
          <div className="w-4/5 m-auto flex justify-between items-center p-4 mb-4 bg-gray-200 rounded-lg">
            <h1 className="text-3xl font-semibold">
              Analogue and Digital Electronics for Bio-Engineers
            </h1>
            <button
              onClick={() =>
                toggleDetails(
                  "Analogue and Digital Electronics for Bio-Engineers"
                )
              }
              className="bg-slate-900 text-slate-200 py-4 px-8 text-lg rounded-lg"
            >
              View Details
            </button>
          </div>
          <div className="w-4/5 m-auto flex justify-between items-center p-4 mb-4 bg-gray-200 rounded-lg">
            <h1 className="text-3xl font-semibold">
              Biomedical Instrumentation Laboratory
            </h1>
            <button
              onClick={() =>
                toggleDetails("Biomedical Instrumentation Laboratory")
              }
              className="bg-slate-900 text-slate-200 py-4 px-8 text-lg rounded-lg"
            >
              View Details
            </button>
          </div>
          <div className="w-4/5 m-auto flex justify-between items-center p-4 mb-4 bg-gray-200 rounded-lg">
            <h1 className="text-3xl font-semibold">Laser and fiber optics</h1>
            <button
              onClick={() => toggleDetails("Laser and fiber optics")}
              className="bg-slate-900 text-slate-200 py-4 px-8 text-lg rounded-lg"
            >
              View Details
            </button>
          </div>
        </>
      )}
      {selectedCourse && (
        <div className="w-4/5 m-auto p-4 mb-4 bg-gray-200 rounded-lg text-center">
          {/* Details Section */}
          <div className="text-left">
            <h1 className="text-3xl text-center pb-4 underline font-semibold">
              {selectedCourse}
            </h1>
            {selectedCourse ===
              "Analogue and Digital Electronics for Bio-Engineers" && (
              <>
                <li>
                  Subject {`{L - T - P / C}`} : BM2601 : Analog and Digital
                  Electronics for Bioengineers {`{3 - 1 - 0 / 4}`}
                </li>
                <li>Subject Nature : Theory</li>
                <li>Theory Coordinator : Dr. Earu Banoth</li>
                <h2 className="text-xl font-bold my-4">SYLLABUS</h2>
                <li>
                  Introduction to amplifier, Need of amplifier and types of
                  amplifiers, Bio potential amplifier block diagram
                </li>
                <li>TYPES OF BIOPOTENTIAL AMPLIFIERS</li>
                <li>Basic requirements of Bio-potential Amplifiers.</li>
                <li>
                  Problems encountered in Bio amplifiers- Frequency distortion,
                  Artifacts from electric transients, Interference from electric
                  devices.
                </li>
                <li>Right Leg driven amplifiers-and its need.</li>
                <li>
                  Bio-potential amplifiers-Instrumentation and Differential,
                  Common Mode Rejection Ratio
                </li>
                <li>
                  Problems: Gain, Slew Rate. Amplifiers for Medical
                  applications.
                </li>
                <li>
                  Analog active filters- Low pass, High pass, Band pass, Notch
                  Filter. Filter applications-Anti-aliasing, SNR Improvement.
                </li>
                <li>
                  Basic digital logic circuits, Combinational logic circuit,
                  Half and Full adder, Comparator, Code Converters, Multiplexers
                  and Demultiplexers, Encoders and Decoders.
                </li>
                <li>
                  Basic Architectural Distinctions between Combinational and
                  Sequential circuits, Sequential logic circuits, Flip-Flops
                </li>
                <li>
                  Conversion from one type of Flipflop to another, Timing.
                </li>
                <li>
                  Digital Interfaces- ADC types-Tracking and Successive
                  Approximation, Flash ADC.
                </li>
                <h2 className="text-xl font-bold my-4">COURSE OBJECTIVES</h2>
                <li>
                  To introduce fundamental principles of analog and digital
                  electronics commonly used in biomedical research.
                </li>
                <li>
                  To familiarize the basic electronic circuits, techniques and
                  considerations for the development of biomedical devices.
                </li>
                <li>
                  To understand the role of Electronics in Bio medical
                  instrument development.
                </li>
                <li>
                  To impart familiarity with the design and implementation of
                  different types of practically used sequential circuits.
                </li>
                <h3 className="text-xl font-bold my-4">COURSE OUTCOMES</h3>
                <li>
                  Have a thorough understanding of the fundamental concepts and
                  techniques used in analog and digital electronics.
                </li>
                <li>
                  The ability to understand, analyze and design various
                  combinational and sequential circuits.
                </li>
                <li>
                  Ability to identify basic requirements for a design
                  application related to biomedical systems.
                </li>
                <li>
                  To develop skill to realize, build, and troubleshoot
                  biomedical circuits
                </li>
                <li>
                  To understand the practical circumstance of biomedical devices
                  circuits importance
                </li>
                <h3 className="text-xl font-bold my-4">ESSENTIAL READING</h3>
                <li>
                  Robert B. Northrop, Analysis and Application of Analog
                  Electronic Circuits to Biomedical Instrumentation, CRC Press,
                  Taylor & Francis Group , 2nd Edition
                </li>
                <li>
                  John G. Webster, Medical Instrumentation: Application and
                  Design, John Wiley & Sons Inc. , 4th Edition
                </li>
                <h3 className="text-xl font-bold my-4">
                  SUPPLEMENTARY READING
                </h3>
                <li>
                  Robert L. Boylestad, Louis Nashelsky, Electronic Devices and
                  Circuit, , Pearson Education, India , 11th Edition
                </li>
                <li>
                  David. A. Bell, 3. Electronic Devices and Circuits, Oxford
                  University Press , 5th Edition
                </li>
              </>
            )}
            {selectedCourse === "Biomedical Instrumentation Laboratory" && (
              <>
                <li>
                  Subject {`{L - T - P / C}`} : BM3701 : Biomedical
                  Instrumentation Laboratory {`{0 - 0 - 3 / 2}`}
                </li>
                <li>Subject Nature : Practical</li>
                <li>Coordinator : Dr. Earu Banoth</li>
                <h2 className="text-xl font-bold my-4">SYLLABUS</h2>
                <li>
                  Design inverting and non-inverting amplifiers using OPAMP
                </li>
                <li>Design of OPAMP based differential amplifier</li>
                <li>
                  Design of an instrumentation amplifier for the acquisition of
                  bio signals
                </li>
                <li>Temperature measurement using a thermistor</li>
                <li>
                  Measurement of temperature and humidity using digital sensor
                  DHT 11
                </li>
                <li>Measurement of distance using an ultrasonic sensor</li>
                <li>Design of an intelligent LED light controller</li>
                <li>LCD display controlling system using Arduino</li>
                <li>Control of a stepper motor</li>
                <li>
                  Measurement of heart rate using hand grip heart rate
                  monitoring system
                </li>
                <h2 className="text-xl font-bold my-4">COURSE OBJECTIVES</h2>
                <li>
                  The students will be able to design op amp-based circuits
                </li>
                <li>
                  The students will learn to calibrate different sensor circuits
                  for measuring physical quantities
                </li>
                <li>
                  To familiarize the basic electronic circuits, techniques, and
                  considerations for the development of biomedical instruments
                  using simulation tool
                </li>
                <li>
                  To understand and design various building blocks of health
                  monitoring system
                </li>
                <h3 className="text-xl font-bold my-4">COURSE OUTCOMES</h3>
                <li>
                  The ability to design and operate biopotential amplifiers
                </li>
                <li>
                  The ability to understand the working of various physiological
                  systems
                </li>
                <li>
                  Ability to identify basic requirements of electronic
                  components in the biomedical instrument development
                </li>
                <li>
                  To differentiate and analyze the biomedical signal sources
                </li>
                <li>
                  To acquire the knowledge for measuring and interpreting data
                  from different transducers
                </li>
                <h3 className="text-xl font-bold my-4">ESSENTIAL READING</h3>
                <li>
                  Robert B. Northrop, Analysis and Application of Analog
                  Electronic Circuits to Biomedical Instrumentation, CRC Press,
                  Taylor & Francis Group , 2nd Edition
                </li>
                <li>
                  John G. Webster, Medical Instrumentation: Application and
                  Design, John Wiley & Sons Inc. , 4th Edition
                </li>
                <h3 className="text-xl font-bold my-4">
                  SUPPLEMENTARY READING
                </h3>
                <li>................</li>
                <li>................</li>
              </>
            )}
            {selectedCourse === "Laser and fiber optics" && (
              <>
                <li>
                  Subject {`{L - T - P / C}`} : BM3606 : Laser and fiber optics{" "}
                  {`{3 - 0 - 0 / 3}`}
                </li>
                <li>Subject Nature : Theory</li>
                <li>Coordinator : Dr. Earu Banoth</li>
                <h2 className="text-xl font-bold my-4">SYLLABUS</h2>
                <li>
                  Module-I: Introduction to Optics, Laser, Photonics,
                  Biophotonics, Fiber Optics. The Laser source, design, and
                  development, types of lasers. Spontaneous and stimulated
                  emission, Population inversion Pumping methods and levels of
                  pumping Characteristics-Monochromaticity, Coherence,
                  Directionality Polarization of Light and Laser emission.
                </li>
                <li>
                  Module-II: Laser Types- Solid state, Ruby, Nd:YAG, Gas lasers:
                  Helium-Neon, Argon and Co2. Lasers in ophthalmology,
                  Dermatology, Dentistry, Urology, Otolaryngology, Tissue
                  welding, Laser in Biomedical Applications.
                </li>
                <li>
                  Module-III: Introduction to Photonics, Biophotonics, Principle
                  and propagation of light in optical fibers, Numerical aperture
                  and Acceptance angle, Active and passive fiber sensors-
                  Endoscope.
                </li>
                <li>
                  Module-IV: Optical Properties of Tissues-Scattering,
                  Absorption, Refractive Index, Light transport inside the
                  tissue, Light interaction with tissues, Optothermal
                  interaction.
                </li>
                <li>
                  Module-V: Interferometry, Types of Interferometry, Michelson
                  Interferometry, Mach-Zehnder Interferometry, Optical
                  Holography-Wave fronts, interference patterns, the principle
                  of the hologram, optical hologram,applications.
                </li>
                <h2 className="text-xl font-bold my-4">COURSE OBJECTIVES</h2>
                <li>
                  To introduce fundamental principles of Optics, Lasers, and
                  Fiber Optics commonly used in biomedical research.
                </li>
                <li>
                  To familiarize the basic Optoelectronic systems, techniques,
                  and considerations for the development of biomedical devices.
                </li>
                <li>
                  To understand the role of Light and Lens in Bio-medical
                  instrument development.
                </li>
                <li>
                  To get hands-on experience in various Opto-Biomedical
                  Instrumentations for familiarity with the implementation and
                  working principles of the instruments.
                </li>
                <h3 className="text-xl font-bold my-4">COURSE OUTCOMES</h3>
                <li>
                  After completing the course, the students will be able to:
                </li>
                <li>
                  Have a thorough understanding of the fundamental concepts and
                  techniques used in Optics, Lasers, and Fiber Optics.
                </li>
                <li>
                  The ability to understand, Optoelectronic systems, techniques,
                  and considerations for the development of biomedical devices.
                </li>
                <li>
                  Ability to identify the role of Light and Lens in Bio-medical
                  instruments.
                </li>
                <li>
                  To develop skills to realize, build, and troubleshoot
                  Biomedical Instruments and get hands-on experience in various
                  Opto-Biomedical Instrumentations for familiarity with the
                  implementation and working principles of the instruments.
                </li>
                <li>
                  To understand the practical circumstance of Laser and Fiber
                  Optics in Biomedical devices.
                </li>
                <h3 className="text-xl font-bold my-4">ESSENTIAL READING</h3>
                <li>
                  Markolf H.Niemz, Laser-Tissue Interaction Fundamentals and
                  Applications, Springer
                </li>
                <li>Leon Goldman, Lasers in Medicine, Springer-Verlag</li>
                <h3 className="text-xl font-bold my-4">
                  SUPPLEMENTARY READING
                </h3>
                <li>
                  Leon Goldman, The Biomedical laser Technology and Clinical
                  Applications, Springer-Verlag
                </li>
                <li>
                  Paras N. Prasad, Introduction to Biophotonics, John Wiley and
                  Sons
                </li>
              </>
            )}
            {/* Add syllabus items for other courses here */}
          </div>
          <button
            onClick={hideDetails}
            className="bg-slate-900 text-slate-200 py-3 px-8 text-lg rounded-lg"
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
}
