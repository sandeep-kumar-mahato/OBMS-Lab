import { useState } from "react";
import profile from "../images/profile.jpeg";
import cardimg1 from "../images/cardimg1.jpeg";
import Oindrila from "../images/Oindrila.jpg";
import Abhishek from "../images/Abhishek.jpg";
import Pratika from "../images/Pratika.jpg";
import Satwik from "../images/Satwik.jpg";
import Shreenandan from "../images/Shreenandan.jpg";
import alumni1 from "../images/alumni1.jpg";
import alumni2 from "../images/alumni2.jpg";
import intern from "../images/intern.jpeg";
import "./style.css";

// eslint-disable-next-line react/prop-types
const TeamMember = ({ name, image, role, email }) => (
  <div className="neumorphism-profile-card flex flex-col items-center mx-auto mb-6 w-64 md:w-72">
    <img
      className="w-36 h-36 rounded-full object-cover mb-4"
      src={image}
      alt={name}
    />
    <div className="px-6 py-4 text-center">
      <h1 className="font-semibold text-lg mb-2">{name}</h1>
      <p className="text-gray-700 text-base italic">{role}</p>
      <a className="text-blue-500 hover:underline" href={`mailto:${email}`}>
        {email}
      </a>
    </div>
  </div>
);

const Team = () => {
  const [filter, setFilter] = useState("all");

  const members = [
    {
      name: "Shaik Ahmadsaidulu",
      image: cardimg1,
      role: "Ph.D. Scholar",
      email: "ahmed0474@gmail.com",
    },
    {
      name: "Oindrila Banik",
      image: Oindrila,
      role: "Ph.D. Scholar",
      email: "banikoindrila6@gmail.com",
    },
    {
      name: "Abhishek Tiwari",
      image: Abhishek,
      role: "PG Student",
      email: "221bm2170@nitrkl.ac.in",
    },
    {
      name: "Pratika Mishra",
      image: Pratika,
      role: "UG Student",
      email: "pratikmishra222002@gmail.com",
    },
    {
      name: "Satwik Sahu",
      image: Satwik,
      role: "UG Student",
      email: "satwik08.ss@gmail.com",
    },
    {
      name: "Shreenandan Sahu",
      image: Shreenandan,
      role: "UG Student",
      email: "shreenandansahu123@gmail.com",
    },
  ];

  const alumni = [
    {
      name: "Mr. Pabitraa Madurima",
      image: alumni1,
      role: "220BM1139",
      email: "pabitraa.madhurima@gmail.com",
    },
    {
      name: "Mr. Joydip Sarkar",
      image: alumni2,
      role: "220BM1141",
      email: "joydip.sarkar.1995@gmail.com",
    },
  ];

  const interns = [
    {
      name: "Ms. Malla Swetha",
      image: intern,
      role: "Summer Intern 2023",
      email: "mallaswetha2611@gmail.com",
    },
    {
      name: "Ms. Chinmayee Giri",
      image: intern,
      role: "Summer Intern 2023",
      email: "chinmayeegiri2001@gmail.com",
    },
  ];

  const filteredMembers =
    filter === "all"
      ? members
      : members.filter((member) =>
          member.role.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div className="text-center bg-slate-100">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4 pt-4">
        Research Team Lead
      </h1>
      <div className="flex flex-col md:flex-row justify-center w-full md:w-3/4 m-auto">
        <div className="p-4">
          <img
            src={profile}
            alt="Dr. Earu Banoth"
            className="w-full md:w-[300px] mx-auto mb-8 md:mb-0 rounded-md"
          />
          <h1 className="text-3xl md:text-3xl m-0 font-semibold">
            Dr. Earu Banoth
          </h1>
        </div>
        <p className="md:w-[80%] m-auto md:text-lg text-justify px-4 md:px-8 md:pt-2">
          Dr. Earu Banoth is working as Assistant Professor in the Dept. of
          Biotechnology and Medical Engineering, National Institute of
          Technology Rourkela India. Before this position he was a Postdoctoral
          associate and visiting Scientist at the University of Rochester
          Medical Centre, New York, USA. He also worked as a Scientist in
          Corporate Research and Innovation at TATA Consultancy Services Ltd.,
          India. Dr. Earu is passionate about building the systems for
          Biomedical Application which would work at Point-of-Care diagnostics.
          His Doctoral work focused on the development of cytology-based
          optofluidic biomedical instruments to use at the point-of-care. His
          research cuts across various optofluidic detection techniques,
          Microfluidic device fabrication, microfluidics microscopy, digital
          holographic microscopy, and interferometry for biomedical applications
          and non-destructive testing. Dr. Banoth is a recipient of prestige’s
          Indo-USA Fulbright-Nehru Postdoctoral Fellowship.
        </p>
      </div>
      <hr className="mt-8" />
      <div className="flex flex-col items-center my-8">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">Team</h1>
        <p className="text-lg mb-8 italic">
          <u>Dedication</u> <u>Expertise</u> <u> Passion</u>
        </p>
        <div className="flex items-center justify-center">
          <label htmlFor="filter" className="mr-2">
            Filter:
          </label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 rounded-md border-gray-300 border"
          >
            <option value="all">All</option>
            <option value="Ph.D. Scholar">Ph.D. Scholar</option>
            <option value="PG Student">PG Student</option>
            <option value="UG Student">UG Student</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 w-full md:w-3/4 m-auto">
        {filteredMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>

      <hr className="my-8" />

      <h1 className="text-3xl md:text-4xl font-semibold my-8">Alumni</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 w-full md:w-3/4 m-auto">
        {alumni.map((alumnus, index) => (
          <TeamMember key={index} {...alumnus} />
        ))}
      </div>

      <hr className="my-8" />

      <h1 className="text-3xl md:text-4xl font-semibold my-8">
        Research Intern
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 w-full md:w-3/4 m-auto">
        {interns.map((intern, index) => (
          <TeamMember key={index} {...intern} />
        ))}
      </div>
    </div>
  );
};

export default Team;
