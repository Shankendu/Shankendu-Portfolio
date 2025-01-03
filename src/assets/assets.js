import htmlLogo from "../assets/images/htmlLogo.png";
import cssLogo from "../assets/images/cssLogo.png";
import javascriptLogo from "../assets/images/javascriptLogo.png";
import reactLogo from "../assets/images/reactLogo.png";
import tailwindLogo from "../assets/images/tailwindLogo.png";
import bootstrapLogo from "../assets/images/bootstrapLogo.png";
import nodeLogo from "../assets/images/nodeLogo.png";
import expressLogo from "../assets/images/expressLogo.png";
import mongoLogo from "../assets/images/mongoLogo.png";
import reduxLogo from "../assets/images/reduxLogo.png";
import youth from "../assets/images/youth.jpg";
import worship from "../assets/images/worship.jpg";
import piano from "../assets/images/piano.jpg";
import githubDark from "../assets/images/github-dark.png";
import linkedinDark from "../assets/images/linkedin-dark.png";
import instaDark from "../assets/images/instagram-dark.png";
import facebookDark from "../assets/images/facebook-dark.png";
import youtubeDark from "../assets/images/youtube-dark.png";
import cryptoLogo from "../assets/images/cryptoWork.png";
import layerLogo from "../assets/images/layerLogo.png";
import weatherLogo from "../assets/images/weatherLogo.png";
import latestLogo from "../assets/images/latestLogo.png";
import textLogo from "../assets/images/textLogo.png";
import qrLogo from "../assets/images/qrLogo.png";
import cryptoHome from "../assets/video/cryptoHome.mp4";
import cryptoTrending from "../assets/video/cryptoTrending.mp4";
import layerHome from "../assets/video/layerHome.mp4";
import layerLoading from "../assets/video/layerLoading.mp4";
import breezeNowLoading from "../assets/video/breezeNowLoading.mp4";
import breezeNowHome from "../assets/video/breezeNowHome.mp4";
import textModHome from "../assets/video/textModHome.mp4";
import textModAbout from "../assets/video/textModAbout.mp4";
import qrCodeHome from "../assets/video/qrCodeHome.mp4";
import qrCodeWork from "../assets/video/qrCodeWork.mp4";
import latestHome from "../assets/video/latestHome.mp4";
import latestForm from "../assets/video/latestForm.mp4";

export const skills = [
  {
    name: "HTML",
    image: htmlLogo,
    percent: "95%"
  },
  {
    name: "CSS",
    image: cssLogo,
    percent: "90%"
  },
  {
    name: "JavaScript",
    image: javascriptLogo,
    percent: "85%"
  },
  {
    name: "React.js",
    image: reactLogo,
    percent: "85%"
  },
  {
    name: "Tailwind CSS",
    image: tailwindLogo,
    percent: "90%"
  },
  {
    name: "Bootstrap",
    image: bootstrapLogo,
    percent: "85%"
  },
  {
    name: "Node.js",
    image: nodeLogo,
    percent: "70%"
  },
  {
    name: "Express.js",
    image: expressLogo,
    percent: "80%"
  },
  {
    name: "MongoDB",
    image: mongoLogo,
    percent: "85%"
  },
  {
    name: "Redux",
    image: reduxLogo,
    percent: "60%"
  },
];

export const extraSkills = [
    {
        name:"🎹 Pianist",
        desc:"Learning since 2018 & Teaching since 2021.",
        image:piano
    },
    {
        name:"🌟 Youth Leader",
        desc:"Inspiring and guiding the next generation.",
        image:youth
    },
    {
        name:"🎤 Worship Leader",
        desc:"Leading worship sessions to uplift hearts.",
        image:worship
    },
]

export const socials = [
  {
    name: "Github",
    imageDark: githubDark,
    link: "https://github.com/Shankendu"
  },
  {
    name: "Linkedin",
    imageDark: linkedinDark,
    link: "https://www.linkedin.com/in/shankendu-kunti-201153293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Instagram",
    imageDark: instaDark,
    link: "https://www.instagram.com/shankendu.__/"
  },
  {
    name: "Facebook",
    imageDark: facebookDark,
    link: "https://www.facebook.com/shankendu"
  },
  {
    name: "YouTube",
    imageDark: youtubeDark,
    link: "https://www.youtube.com/@shankendukunti"
  },
]

export const projects = [
  {
    title: "CryptoTrackr",
    description: "CryptoTrackr is a platform for real-time crypto prices, trends, news, and currency conversion, helping users stay informed in the crypto market.",
    thumbnail: cryptoLogo,
    techStack: ["React", "Tailwind", "Chart.js", "CoinGecko API"],
    githubLink: "https://github.com/Shankendu/CryptoTrackr---Price-Tracking-and-Market-Analysis",
    liveLink: "https://crypto-trackr-price-tracking-and-market-analysis.vercel.app/",
    video1: cryptoHome,
    video2: cryptoTrending,
  },
  {
    title: "BreezeNow",
    description: "BreezeNow is a sleek weather app providing real-time forecasts, temperature updates, and weather trends, ensuring you stay prepared for any conditions.",
    thumbnail: weatherLogo,
    techStack: ["React", "Tailwind", "OpenWeather API"],
    githubLink: "https://github.com/Shankendu/BreezeNow---Weather-App",
    liveLink: "https://breeze-now-weather-app.vercel.app/",
    video1: breezeNowLoading,
    video2: breezeNowHome
  },
  {
    title: "LayerN",
    description: "DEX Aggregator based on Modular DA providing minimal fees, transaction speed & reduced blob sizes.",
    thumbnail: layerLogo,
    techStack: ["React", "Tailwind", "GSAP"],
    githubLink: "https://github.com/Shankendu/LayerN-Landing-Page",
    liveLink: "https://layer-n-landing-page.vercel.app/",
    video1: layerLoading,
    video2: layerHome,
  },
  {
    title: "TextMod",
    description: "TextMod is a user-friendly web application designed to provide comprehensive text manipulation tools.",
    thumbnail: textLogo,
    techStack: ["React", "Tailwind"],
    githubLink: "https://github.com/Shankendu/TextMod",
    liveLink: "https://shankendu.github.io/TextMod/",
    video1:textModHome,
    video2:textModAbout
  },
  {
    title: "Latest Technologies",
    description: "A sophisticated, responsive contact form built with React and Tailwind CSS, featuring comprehensive form validation using Formik and Yup.",
    thumbnail: latestLogo,
    techStack: ["React", "Tailwind", "Formik", "Yup"],
    githubLink: "https://github.com/Shankendu/Latest-Technologies",
    liveLink: "https://latest-technologies.vercel.app/",
    video1: latestHome,
    video2: latestForm
  },
  {
    title: "QR Code Generator",
    description: "QR Code Generator is a simple and efficient web-based tool that allows users to create customized QR codes.",
    thumbnail: qrLogo,
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Shankendu/qr-code-generator",
    liveLink: "https://qr-code-generator-phi-fawn.vercel.app/",
    video1: qrCodeHome,
    video2: qrCodeWork
  },
];

