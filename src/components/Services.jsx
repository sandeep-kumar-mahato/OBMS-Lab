import NGMD1 from "../images/NGMD1.jpg";
import NGMD2 from "../images/NGMD2.jpg";
import table from "../images/table.jpeg";

export default function Services() {
  return (
    <div className="text-center">
      <div className="w-full md:w-1/2 m-auto">
        <img
          className="p-4 w-full md:w-auto transform transition duration-300 hover:scale-105"
          src={NGMD1}
          alt="NGMD1"
        />
        <img
          className="p-4 w-full md:w-auto transform transition duration-300 hover:scale-105"
          src={NGMD2}
          alt="NGMD2"
        />
        <img
          className="p-4 w-full md:w-auto transform transition duration-300 hover:scale-105"
          src={table}
          alt="table"
        />
        <div className="py-2 md:py-8">
          <a
            className="bg-slate-900 text-slate-100 hover:text-slate-50 rounded-lg px-6 py-2 md:px-8 md:py-3 inline-block transform transition duration-300 hover:scale-105"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfIRtYrhFVuyUayGCSSDpHSGfSWBmWhNe0ilkGoTWrmXnchzw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
