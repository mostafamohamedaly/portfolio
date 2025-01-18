import React from "react";
import html2pdf from "html2pdf.js";

const ResumePage = () => {
  const downloadPDF = () => {
    const element = document.getElementById("contentToDownload");
    const options = {
      margin: 1,
      filename: "download.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 4 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <div style={{cursor: "default"}} className="bg-gray-100 p-6 sm:p-12 font-sans h-[1150px]">
      <div
        id="contentToDownload"
        className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8"
        style={{
          transform: "scale(0.6)", // Scale down the content
          transformOrigin: "top center", // Ensure it scales from the top left
          width: "100%", // Ensure the width is 100% of the container
        }}
      >
        {/* Header Section */}
        <header className="border-b pb-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Mostafa Sharaf</h1>
          <p className="text-lg text-gray-600">SOFTWARE ENGINEER</p>
        </header>

        {/* Details Section */}
        <div className="grid sm:grid-cols-2 gap-6 border-b pb-6 mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Details</h2>
            <p className="text-gray-600">Al Qudra Road, Town Square, Reem, Unit 270</p>
            <p className="text-gray-600">Dubai, United Arab Emirates</p>
            <p className="text-gray-600">+971 58 564 0935</p>
            <p className="text-gray-600">mostafamuhamedaly@gmail.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Nationality</h2>
            <p className="text-gray-600">Egyptian</p>
            <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Links</h2>
            <p className="text-blue-600 hover:underline cursor-pointer">Github</p>
            <p className="text-blue-600 hover:underline cursor-pointer">Linkedin</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid sm:grid-cols-2 gap-6 border-b pb-6 mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills</h2>
            <p className="text-gray-600">React, JavaScript, Git, Python, HTML, CSS</p>
            <p className="text-gray-600">Java, Node.js, MongoDB, C#</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Languages</h2>
            <p className="text-gray-600">Arabic</p>
            <p className="text-gray-600">English</p>
          </div>
        </div>

        {/* Profile Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Profile</h2>
          <p className="text-gray-600">
            Frontend developer who is solution-focused and skilled at working in a team atmosphere. Demonstrated expertise with HTML, CSS, ReactJS, Figma Design and JavaScript to create consumer-focused websites. Good knowledge of the best practices for web design, user experience, and speed.
          </p>
        </section>

        {/* Work Experience Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Work Experience</h2>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Frontend Developer, Carbon Glance
            </h3>
            <p className="text-gray-500">United Kingdom (Remotely) — December 2023 - Present</p>
            <p className="text-gray-600 mt-2">
              Carbon Glance is a dynamic startup dedicated to simplifying the compliance process for industrial companies in Europe by generating CBAM (Carbon Border Adjustment Mechanism) reports. Developed and maintained the user interface for the CBAM report generation platform. Created clean, intuitive, and user-friendly designs to enhance the overall user experience (UX/UI). Ensured high performance and responsiveness of the web application. Implemented form validations, handled some backend tasks, and applied CI/CD pipelines for repositories.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Frontend Developer, Venu.ai</h3>
            <p className="text-gray-500">Cairo — September 2022 - October 2023</p>
            <p className="text-gray-600 mt-2">
              Worked as a frontend developer using React and a UX/UI designer using Figma. Was responsible for developing the client-side functionalities of a venue booking web application while also designing visually appealing and user-friendly interfaces. Collaborated with a multidisciplinary team, integrated backend APIs, conducted research, created wireframes, and iteratively refined designs through feedback.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Frontend Developer Intern, Tutoruu</h3>
            <p className="text-gray-500">Cairo — April 2022 - July 2022</p>
            <p className="text-gray-600 mt-2">
              Had the opportunity to gain valuable hands-on experience in web development while working with cutting-edge technologies. Played a pivotal role in crafting user-friendly and visually appealing interfaces using Vue.js and Tailwind CSS. Took on the additional responsibility of enhancing the user experience (UX).
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Education</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">B.S. Computer Engineering</h3>
            <p className="text-gray-500">German University in Cairo, New Cairo — September 2018 - July 2023</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">IGCSE</h3>
            <p className="text-gray-500">Egypt British International School, New Cairo — September 2015 - July 2018</p>
          </div>
        </section>

        {/* Freelance Projects Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Freelance Projects</h2>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Linked Website</h3>
            <p className="text-gray-500">United States of America (Remotely) — October 2023 - Present</p>
            <p className="text-gray-600 mt-2">
              The hub showcases their projects, facilitates remote collaboration, and simplifies talent recruitment. With a user-friendly dashboard and an interactive blog, it's a dynamic space for creative collaboration and talent acquisition.
            </p>
          </div>
        </section>
      </div>
      <button
        onClick={downloadPDF}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Download PDF
      </button>
    </div>
  );
};

export default ResumePage;
