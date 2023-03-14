import "./App.css";
import profil from "./Inumaki.jpg";

function App() {
  const links = [
    {
      name: "Portofolio",
      url: "#",
    },
    {
      name: "Personal Website",
      url: "#",
    },
  ];

  const socialLink = [
    {
      name: "Twitter",
      url: "https://twitter.com/dhityadwi",
      image: "https://cdn.simpleicons.org/twitter",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/dhityadwi/",
      image: "https://cdn.simpleicons.org/instagram",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@empalbumbu",
      image: "https://cdn.simpleicons.org/tiktok",
    },
    {
      name: "Github",
      image: "https://cdn.simpleicons.org/github",
      url: "https://github.com/dhityadwi",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/adityadwimaryanto/",
      image: "https://cdn.simpleicons.org/linkedin",
    },
  ];
  return (
    <main
      className="max-w-md bg-gradient-to-b from-sky-400 sky-800 w-screen h-screen min-h-screen 
    mx-auto shadow-lg py-20 px-5 flex flex-col items-strech justify-center "
    >
      <div className="kotak rounded-lg w-[200px] h-[200px] self-center">
        <img
          className="w-full h-full rounded-full"
          src={profil}
          alt="Aditya Dwi Maryanto"
        />
      </div>

      <div className="flex flex-col items-center mt-8 text-slate-800">
        <h1 className="text-2xl font-semibold">Aditya Dwi Maryanto</h1>
        <p>Newbie React Javascript Dev</p>
      </div>

      <ul className="mt-10 space-y-3">
        {links.map((link) => (
          <li className="hover:-translate-y-1 transition duration-100 ">
            <a href={link.url}>
              <div
                className="kotak w-full bg-slate-500 hover:bg-slate-700 text-center
              duration-100 font-semibold rounded-lg px-10 py-6 text-white tracking-wide "
              >
                {link.name}
              </div>
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex mt-10 justify-center space-x-4">
        {socialLink.map((socialLinks) => (
          <li className="hover:-translate-y-1 transition duration-100">
            <a href={socialLinks.url}>
              <div
                className="rounded-full w-[60px] h-[60px] bg-white hover:bg-slate-400 
               duration-100 border-slate-700 border-1 p-4"
              >
                <img src={socialLinks.image} alt="icon" />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
