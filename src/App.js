import "./App.css";
import ReposCard from "./components/ReposCard";
import SocialButton from "./components/SocialButton";
import avatar from "../src/assets/avatar2.jpeg";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSnapchat } from "@fortawesome/free-brands-svg-icons";

function App(props) {
  return (
    <div className="flex flex-1">
      <main className="bg-white-300 flex-1 p-3 overflow-auto">
        <div className="text-center flex flex-col justify-center p-2 sm:flex-row">
          <div className="p-4 text-left relative">
            <img
              className="block w-72 mb-4"
              style={{ borderRadius: "100%" }}
              src={avatar}
              alt=""
            />
            <h1 className="font-bold text-left text-3xl">M Ibrahim</h1>
            <h2 className="text-m text-left mb-3 text-gray-500">
              yaibrahim • he/him
            </h2>
            <p className="text-sm text-left">
              Software Engineer 🧑‍💻 <br />
              • Snapchat👻: ibrahimazeem41 <br />
              • Gym Freak 🔩 <br />
              • Love Challenges <br />
              • We create our own demons <br />
              Instagram:{" "}
              <span className="text-blue-500">
                <a
                  href="https://www.instagram.com/ya.xheikh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @ya.xheikh
                </a>
              </span>
            </p>
            <SocialButton
              name=" IbrahimAzeem"
              icon={faLinkedinIn}
              link="https://www.linkedin.com/in/ibrahim-cs1/"
              style={{ backgroundColor: "#0077b5" }}
            />
            <SocialButton
              name=" ya.xheikh"
              icon={faInstagram}
              link="https://www.instagram.com/ya.xheikh/"
              style={{
                background:
                  "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              }}
            />
            <SocialButton
              name=" Ibrahim Fit"
              icon={faSnapchat}
              link="https://www.snapchat.com/add/ibrahimazeem41"
              style={{ backgroundColor: "#F6F11E", color: "black" }}
              color="black"
            />
          </div>

          <div className="pt-5 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/2">
            <div className="border h-auto rounded p-2 text-left">
              <p className="text-xs p-2 text-gray-500"> yaibrahim/README.md </p>
              <p className="text-sm pb-4">
                I am a Software Developer with robust problem-solving skills and
                proven experience in creating and designing software in a Test
                driven environment. Software Engineer with 3+ years of
                experience in Ruby on rails (ROR).
              </p>
            </div>
            <div className="container mx-auto">
              <h1 className="text-m font-bold mb-4 text-left pt-3">Pinned</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-auto">
                <ReposCard
                  name={"BulkyBeastSite"}
                  link={"https://github.com/yaibrahim/BulkyBeastSIte"}
                >
                  <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                    HTML
                  </span>
                </ReposCard>

                <ReposCard
                  name={"eCommercioProject"}
                  link={"https://github.com/yaibrahim/eCommercioProject"}
                >
                  <span className="inline-block bg-red-200 text-red-800 text-xs px-2 py-1 rounded">
                    Ruby
                  </span>
                  <div className="mt-2">
                    <span className="text-gray-600 text-xs">⭐ 1</span>
                  </div>
                </ReposCard>

                <ReposCard
                  name={"at_your_doorstep-Ya_Ibrahim"}
                  link={
                    "https://github.com/atyourdoorstep/at_your_doorstep-Ya_Ibrahim"
                  }
                >
                  <p className="text-gray-700 mb-2 text-xs">
                    Its an Flutter App Named At your Doorstep
                  </p>
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Dart
                  </span>
                  <div className="mt-2 flex items-center">
                    <span className="text-gray-600 text-xs mr-4">⭐ 2</span>
                  </div>
                </ReposCard>

                <ReposCard
                  name={"work-shift-planning"}
                  link="https://github.com/yaibrahim/work-shift-planning"
                >
                  <p className="text-gray-700 mb-2 text-xs">
                    Build a REST application from scratch that could serve as a
                    work planning service. Business requirements: A worker has
                    shifts A shift is 8 hours long A worker never has two shifts
                    on the same day It is a 24 hour timetable 0-8, 8-16, 16-24.
                  </p>
                  <span className="inline-block bg-red-200 text-red-800 text-xs px-2 py-1 rounded">
                    Ruby
                  </span>
                  <div className="mt-2">
                    <span className="text-gray-600 text-xs">⭐ 1</span>
                  </div>
                </ReposCard>

                <ReposCard
                  name={"yaibrahim"}
                  link={"https://github.com/yaibrahim/yaibrahim"}
                >
                  <p className="text-gray-700 mb-2 text-xs">
                    Config files for my GitHub profile.
                  </p>
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                    JavaScript
                  </span>
                </ReposCard>

                <ReposCard
                  name={"github-clone-react"}
                  link={"https://github.com/yaibrahim/github-clone-react"}
                >
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                    JavaScript
                  </span>
                </ReposCard>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
