import NavButton from "./components/NavButton";

import "./App.css";

function App() {
  return (
    <>
      <div className="mb-8 my-header">
        <h1 className="text-3xl font-bold">Numan Bashir - Portfolio</h1>
      </div>
      <div className="mb-10 nav-bar">
        <h1 className="flex flex-row justify-center items-center text-2xl font-bold">
          <NavButton link={"#about"} title={"About me"} />
          <NavButton link={"#education"} title={"Education"} />
          <NavButton link={"#intern"} title={"Internship"} />
          <NavButton link={"#projects"} title={"Projects"} />
          <NavButton link={"#contact"} title={"Contact me"} />
        </h1>
      </div>
      <hr />
      <div id="about">
        <h1 className="my-8 text-3xl font-bold flex flex-row justify-center items-center">
          About me
        </h1>
        <div className="grid grid-cols-2 mb-10 items-start">
          <img
            src="src/assets/foto-removebg-preview-new.png"
            alt="profile picture"
            className="w-3/4 my-image outline outline-4 mx-auto"
          />
          <h1 className="break-words">
            My name is Numan Bashir.
            <br />I am a Fullstack Software Engineer
          </h1>
        </div>
      </div>
      <div className="my-8 flex flex-row justify-center items-center tech-stack">
        <img src="src/assets/html-5.png" className="w-12 mr-2" />
        <img src="src/assets/css-3.png" className="w-12 mr-2" />
        <img src="src/assets/js.png" className="w-12 mr-2" />
        <img src="src/assets/typescript.png" className="w-12 mr-2" />
        <img src="src/assets/react_icon.png" className="w-12 mr-2" />
        <img src="src/assets/tailwind.png" className="w-12 mr-2" />
        <img src="src/assets/nodejs.png" className="w-12 mr-2" />
        <img src="src/assets/c-sharp.png" className="w-12 mr-2" />
        <img src="src/assets/net.png" className="w-12 mr-2" />
        <img src="src/assets/python.png" className="w-12 mr-2" />
        <img src="src/assets/sql-server.png" className="w-12 mr-2" />
      </div>
      <hr />
      <div id="education">
        <h1 className="my-8 text-3xl font-bold flex flex-row justify-center items-center">
          Education and Degree
        </h1>
        <div className="grid grid-cols-2 mb-10 items-start">
          <img
            src="src/assets/dtu.jpeg"
            alt="dtu image"
            className="w-3/4 mx-auto"
          />
          <h1 className="break-words">
            Some text about my studies and degree
            <br />I am a Fullstack Software Engineer
          </h1>
        </div>
      </div>
      <hr />
      <div id="intern">
        <h1 className="my-8 text-3xl font-bold flex flex-row justify-center items-center">
          Hejdoktor Internship
        </h1>
        <div className="grid grid-cols-2 mb-10 items-start">
          <h1 className="break-words">
            Some text about my studies and degree
            <br />I am a Fullstack Software Engineer
          </h1>
          <img
            src="src/assets/hejdoktor.jpg"
            alt="dtu image"
            className="w-3/4 mx-auto"
          />
        </div>
      </div>
      <hr />
      <div id="projects">
        <h1 className="my-8 text-3xl font-bold flex flex-row justify-center items-center">
          Projects
        </h1>
        <div className="grid grid-cols-2 mb-10 items-start">
          <img
            src="src/assets/todomern3.png"
            alt="dtu image"
            className="w-3/4 mx-auto"
          />
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-2xl">
              Advanced Todo App Using MERN Stack
            </h1>
            <p className="break-words">
              Some text about my studies and degree
              <br />I am a Fullstack Software Engineer
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div
        id="contact"
        className="my-8 inline-block align-top flex flex-col items-center"
      >
        <h1 className="my-2 text-3xl font-bold">Contact Me NETLIFY TEST</h1>
        <h1 className="text-xl">
          <strong>Email:</strong> sportybashir@gmail.com
        </h1>
        <h1 className="text-xl">
          <strong>LinkedIn:</strong>{" "}
          <u>
            <a
              href="https://www.linkedin.com/in/numan-bashir-576154165/"
              className="text-blue-500"
            >
              Numan Bashir
            </a>
          </u>
        </h1>
      </div>
    </>
  );
}

export default App;

// TODO: Create component for RightToLeftSection and LeftToRightSection
// TODO: Create inner section component (2 cols)
// TODO: Use inner section component inside of outer section component
// TODO: Make contact formular
// TODO: Fill out information
// TODO: Remove hardcoded text into JSON or .resx
