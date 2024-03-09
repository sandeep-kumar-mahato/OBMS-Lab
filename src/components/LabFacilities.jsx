import DPAPP from "../images/DPAPP.jpg";
import printer from "../images/printer.jpeg";
import laserCutter from "../images/laserCutter.jpeg";
import heading from "../images/heading.jpeg";

export default function LabFacilities() {
  return (
    <div className="text-center">
      <h1 className="text-2xl md:text-4xl font-bold underline p-4">
        Lab Facilities & Instruments
      </h1>
      <div className="md:w-3/4 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pb-8">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="border-2 border-slate-900 rounded-lg p-4 bg-slate-100"
          >
            <img
              className="w-full h-[227px] object-contain border-2 border-slate-800 rounded-lg"
              src={facility.image}
              alt={facility.title}
            />
            <h2 className="text-xl font-semibold py-4">{facility.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

const facilities = [
  { title: "AI-Powered App for Diseases Prediction", image: DPAPP },
  { title: "3D Printer (2)", image: printer },
  { title: "LASER cutter", image: laserCutter },
  { title: "Heading 6", image: heading },
];
