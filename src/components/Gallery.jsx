import absorpBlur1 from "../images/absorpBlur1.jpg";
import projectImage1 from "../images/project1.jpg";
import projectImage2 from "../images/project2.jpg";
import projectImage3 from "../images/project3.jpg";
import projectImage4 from "../images/project4.jpg";
import projectImage5 from "../images/project5.jpg";
import projectImage6 from "../images/project6.jpg";
import projectImage7 from "../images/project7.jpg";

export default function Gallery() {
  const images = [
    absorpBlur1,
    projectImage1,
    projectImage2,
    projectImage3,
    projectImage4,
    projectImage5,
    projectImage6,
    projectImage7,
  ];

  return (
    <div className="text-center">
      <h1 className="text-xl md:text-4xl font-bold underline p-4">
        OBMS LAB GLIMPSE
      </h1>
      <div className="md:w-1/2 m-auto flex flex-wrap justify-center gap-4 p-4">
        {images.map((src, index) => (
          <div key={index} className="relative">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover border-2 border-slate-400 rounded-tl-3xl rounded-br-3xl justify-self-center align-self-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
