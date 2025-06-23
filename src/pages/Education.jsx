// EducationSection.jsx
export default function Education() {

  const education = [
    {
      institution: "Nagindas Khandwala College",
      degree: "B.Sc. in Information Technology",
      result: "CGPA: 8.64",
      year: "2023 - 2026",
    },
    {
      institution: "Ismail Yusuf Junior College",
      degree: "HSC - Science",
      result: "Percentage: 70%",
      year: "2022 - 2023",
    },
  ];

  return (
    <section id="education" className="md:p-4 pb-8 text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Education</h2>
      <div className="space-y-4 p-8 bg-black/40 rounded-3xl shadow-md">
        {education.map((edu, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold">{edu.institution}</h3>
            <p className="text-sm">{edu.degree}</p>
            <p className="text-sm">{edu.result}</p>
            <p className="text-xs">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
