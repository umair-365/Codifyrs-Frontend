import React, { useRef, useState } from "react";

const HiringForm: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFileName(file.name);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-6 py-12 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-[#38DC8F] dark:text-[#38DC8F] mb-8 text-center">
  Join Our Team of Innovators!
</h2>

<div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
  {/* Left Section - Job Description */}
  <div>
    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Open Positions</h3>
    <p className="text-gray-700 dark:text-gray-300 mb-4">
      CODIFYRS is on the lookout for passionate and talented professionals to join our growing team. Whether you specialize in <strong>development, design, project management, or marketing</strong>, we value creativity, collaboration, and a drive for excellence.
    </p>

    <h4 className="font-semibold dark:text-white mb-1">We’re Looking For:</h4>
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
      <li>Frontend &amp; Backend Developers (React, Django, Node.js, etc.)</li>
      <li>Fresh graduates with strong portfolios are also encouraged to apply</li>
    </ul>

    <h4 className="font-semibold dark:text-white mt-4 mb-1">General Requirements:</h4>
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
      <li>1 to 5 years of relevant experience (or exceptional fresh grads)</li>
      <li>Strong problem-solving and communication skills</li>
      <li>Ability to work in a fast-paced, team-oriented environment</li>
      <li>Willingness to learn and grow with modern tools and frameworks</li>
    </ul>
  </div>


        {/* Right Section - Apply Form */}
        <div className="border-l border-gray-300 dark:border-gray-700 md:pl-10">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Apply Now</h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded focus:border-[#38DC8F]"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded focus:border-[#38DC8F]"
            />

            {/* Field Dropdown */}
            <select
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200 px-4 py-2 rounded focus:border-[#38DC8F] hover:border-[#38DC8F] cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled>Select Your Field</option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">Full Stack Developer</option>
              <option value="datascience">Data Scientist</option>
              <option value="devops">DevOps Engineer</option>
              <option value="mobile">Mobile App Developer</option>
            </select>

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded focus:border-[#38DC8F]"
            />
            <textarea
              placeholder="Message"
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded h-32 resize-none focus:border-[#38DC8F]"
            />

          {/* Attach Resume - Professional Design */}
<div>
  <label
    htmlFor="resume-upload"
    className="flex items-center justify-between px-4 py-2 border border-dashed border-[#38DC8F] rounded cursor-pointer text-[#38DC8F] hover:bg-[#38DC8F] hover:text-white transition duration-200"
  >
    <span>📎 Attach Resume</span>
    <span className="text-sm italic">
      {selectedFileName ? selectedFileName : "PDF, DOC, DOCX"}
    </span>
  </label>
  <input
    type="file"
    id="resume-upload"
    accept=".pdf,.doc,.docx"
    className="hidden"
    ref={fileInputRef}
    onChange={handleFileChange}
  />
</div>


            <button
              type="submit"
              className="w-full border border-[#38DC8F] text-[#38DC8F] font-semibold py-2 rounded hover:bg-[#38DC8F] hover:text-white transition"
            >
              SUBMIT APPLICATION
            </button>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HiringForm;
