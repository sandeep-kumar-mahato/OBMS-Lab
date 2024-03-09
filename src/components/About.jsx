import { Parallax } from "react-parallax";
import nit from "../images/NIT2.jpg";
import about2 from "../images/about-2.jpg";

export default function About() {
  return (
    <div className="w-3/4 m-auto text-center">
      <img
        className="w-[79rem] h-[20rem] object-cover object-top m-auto"
        src={nit}
        alt="NIT Rourkela"
      />
      <h1 className="text-3xl font-bold p-4">
        <u>NIT ROURKELA</u>
      </h1>
      <p className="text-lg pb-8 text-justify">
        National Institute of Technology, Rourkela (NIT Rourkela or NITR),
        formerly Regional Engineering College, Rourkela is a publicly funded
        institute of higher learning for engineering, science and technology
        located in the steel city of Rourkela, Odisha, India. It is one of the
        31 National Institutes of Technology in India and has been recognized as
        an Institute of National Importance by the National Institutes of
        Technology Act, 2007. It is ranked 16 in the NIRF Rankings 2020 of
        Indian engineering universities. Adding to its glory, Opto-Biomedical
        Microsystem laboratory was setup in the year 2020 as an integral part of
        the department of Biotechnology and Medical Engineering (BM). Followed
        by commencement of Post Graduation (M.Tech) and Ph.D. programme in the
        field of biotechnology and medical engineering field subsequently. The
        key objective of this department is providing a multidisciplinary
        research and teaching program in Biotechnology and Medical Engineering
        that advances fundamental understanding of how biological systems
        operate and to develop effective biology-based technologies for
        applications across a wide spectrum of societal needs including
        innovations in diagnosis, therapy of human diseases, design of novel
        biomaterials, biomedical devices, and in solving environmental hazard.
      </p>
      <Parallax bgImage={about2} strength={300}>
        <div style={{ height: "20rem" }} />
      </Parallax>
      <h1 className="text-3xl font-bold p-4">
        <u>OBMS LABORATORY</u>
      </h1>
      <p className="text-lg pb-8 text-justify">
        Opto-Biomedical Microsystem (OBMS) Laboratory was setup in the year 2021
        as an integral part of the department of Biotechnology and Medical
        Engineering (BM). Followed by commencement of Post Graduation (M.Tech)
        and Ph.D. programme in the field of biotechnology and medical
        engineering field subsequently. The main objective of this department is
        providing a multidisciplinary research and teaching program in
        Biotechnology and Medical Engineering that advances fundamental
        understanding of how biological systems operate and to develop effective
        biology-based technologies for applications across a wide spectrum of
        societal needs including innovations in diagnosis, therapy of human
        diseases, design of novel biomaterials, biomedical devices, and in
        solving environmental hazard. Major research focus of the OBMS lab
        integration of optics, microfluidics and simple electronics to develop
        an instrument for biomedical applications such as screening, diagnosis,
        monitoring and development of point-of-care diagnostics.
      </p>
    </div>
  );
}
