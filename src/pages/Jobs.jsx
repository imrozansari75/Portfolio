
const Jobs = () => {

  const jobExperiences = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "AppX Studio",
      duration: "December 2024 – January 2025",
      responsibilities: [
        "Enhanced and optimized React components based on Figma designs provided by mentor at AppX Studio.",
        "Maintained clean, reusable code with consistent styling using React.js and Tailwind CSS.",
        "Contributed remotely, dedicating 12 hours/week while meeting deadlines and quality standards."
      ]
    },
    {
      id: 2,
      title: "Frontend Developer Intern",
      company: "Fukui Accent Pvt. Ltd. & Tozai Safety Pvt. Ltd.",
      duration: "July 2024 – September 2024",
      responsibilities: [
        "Developed responsive websites for Fukui Accent Trading and Tozai Safety Pvt. Ltd. in a shared office setup.",
        "Built and optimized UIs using HTML, CSS, JavaScript, Tailwind CSS, React, and Figma designs.",
        "Ensured cross-device compatibility with reusable and consistently styled components."
      ]

    },
    {
      id: 3,
      title: "Data Cleaning",
      company: "Goalkeep",
      duration: "April 2024 – May 2024",
      responsibilities: [
        "Responsible for the meticulous cleaning of a client's dataset including compiling rows requiring cleaning, cross-referencing inaccurate data with master lists, and conducting manual checks to ensure data integrity.",
        "Successfully cleaned over 13,000 rows of data on the Google Sheets platform, consistently maintaining high standards of quality and providing regular updates about progress."
      ]
    }
  ];

  return (
    <section
      id="jobs"
      className="flex flex-col py-2 px-0 md:px-4 text-white max-w-6xl mx-auto">
      <div className="sm:mt-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:px-0">My Job</h2>

        {/* Outer container */}
        <div className="bg-black/40 px-6 py-6 md:px-8 rounded-3xl shadow-lg space-y-8">
          {jobExperiences.map((job) => (
            <div key={job.id}>
              {/* Title and Duration */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                <h3 className="text-xl font-bold">
                  {job.title}{' '}
                  <span className="font-medium text-sm text-gray-300">
                    | {job.company}
                  </span>
                </h3>
                <p className="text-sm text-gray-400 mt-2 md:mt-0">
                  {job.duration}
                </p>
              </div>

              {/* Responsibilities List */}
              <ul className="list-disc ml-5 space-y-2 text-base">
                {job.responsibilities.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
