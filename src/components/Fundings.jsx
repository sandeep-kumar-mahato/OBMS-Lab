export default function Fundings() {
  const fundingData = [
    {
      projectTitle: "Implantable Closed-loop Diabetes Management Device. ",
      piCoPi: "Prof. Khalid Mirza, Prof. Earu Banoth",
      fundingAgency: "Department of Science and Technology (DST)",
      fundingAmount: "32",
      timeline: "2020-2021",
      status: "Ongoing",
    },
    {
      projectTitle:
        "Custom Development of Microfluidic Multi-Dimensional Imaging Flow-Cytometer for Bio-applications.",
      piCoPi: "Prof. Earu Banoth",
      fundingAgency: "National Institution of Technology, Rourkela (NIT-R)",
      fundingAmount: "2",
      timeline: "2020-2021",
      status: "Ongoing",
    },
    {
      projectTitle:
        "Development of Multi-Phase Microfluidic Imaging Flow-Cytometer for Biological Cell Characterization.",
      piCoPi: "Prof. Earu Banoth",
      fundingAgency: "Science and Engineering Research Board (SERB)",
      fundingAmount: "28.25",
      timeline: "2020-2021",
      status: "Ongoing",
    },
  ];

  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-8">FUNDINGS</h1>
      <div className="mx-auto max-w-5xl mb-8">
        <table className="table-auto mx-auto border-2 border-slate-900">
          <thead className="bg-slate-700 text-slate-50">
            <tr>
              <th className="border border-slate-900 px-4 py-2">
                Project Title
              </th>
              <th className="border border-slate-900 px-8 py-2">PI/Co-PI</th>
              <th className="border border-slate-900 px-4 py-2">
                Funding Agency
              </th>
              <th className="border border-slate-900 px-4 py-2">
                Funding Amount [in Lakhs]
              </th>
              <th className="border border-slate-900 px-8 py-2">Time line</th>
              <th className="border border-slate-900 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {fundingData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="border border-slate-800 px-4 py-2">
                  {row.projectTitle}
                </td>
                <td className="border border-slate-800 px-4 py-2">
                  {row.piCoPi}
                </td>
                <td className="border border-slate-800 px-4 py-2">
                  {row.fundingAgency}
                </td>
                <td className="border border-slate-800 px-4 py-2">
                  {row.fundingAmount}
                </td>
                <td className="border border-slate-800 px-4 py-2">
                  {row.timeline}
                </td>
                <td className="border border-slate-800 px-4 py-2">
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
