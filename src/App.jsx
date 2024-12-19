import './App.css';
import { useState, useEffect } from 'react';
import { translations } from './translationsdashboard';
import { TrialNavigation, FooterApp } from './layout.jsx';
import { Hr } from './property.jsx';
import imageDekorasi1 from './assets/images1.png';

function App() {
  const [language, setLanguage] = useState('en');
  
  useEffect(() => {
    const browserLanguage = navigator.language || navigator.languages[0];
    if (browserLanguage.startsWith('id')) {
      setLanguage('id');
    } else if (browserLanguage.startsWith('en')) {
      setLanguage('en');
    } else {
      setLanguage('en');
    }
  }, []);
  
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };
  
  return (
    <>
      <TrialNavigation />
      <section className="relative w-screen h-screen bg-[#f3f3f3]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-opacity-55 backdrop-blur-2xl z-10"></div>
          <div className="absolute top-0 left-[55vw] w-[120vw] h-[120vw] bg-[#1cab9d] rounded-full bg-opacity-55 z-0 lg:w-[80vw] lg:h-[80vw] lg:top-[-45vh] lg:left-[60vw]"></div>
          <div className="absolute top-[60vh] left-[10vw] w-[25vw] h-[25vw] bg-[#10c8b5] rounded-full bg-opacity-50 z-0 lg:top-[40vh]"></div>
        </div>
        <article className="relative w-full h-full flex flex-col items-center justify-center px-5 z-20">
          <h1 className="font-ptsans font-[600] text-[4vw] text-gray-900 m-0 text-center lg:text-[2.5vw]">
            {translations[language].greeting}
          </h1>
          <h2 className="font-ptsans font-semibold text-[6vw] text-gray-900 m-0 text-center lg:text-[4.7vw]">
            {translations[language].heading}
            <span className="text-turquoise">
              {translations[language].subHeading}
            </span>
          </h2>
          <p className="font-ptsans text-[3vw] text-gray-800 m-0.5 text-center lg:text-[1.8vw] lg:w-[78vw]">
            {translations[language].description}
          </p>
          <div className="w-full flex flex-col items-center lg:flex-row lg:justify-center lg:gap-2">
            <button className="p-1.5 bg-gray-900 text-white w-full max-w-[400px] rounded mt-1 font-ptsans text-center transition-all duration-500 hover:scale-105 lg:w-[25%]">
              {translations[language].registerButton}
            </button>
            <button className="p-1.5 bg-transparent text-gray-800 border-[1.5px] border-solid border-gray-800 w-full max-w-[400px] rounded mt-1 font-ptsans text-center transition-all duration-500 hover:scale-105 lg:w-[25%]">
              {translations[language].shoppingButton}
            </button>
          </div>
        </article>
      </section>
      <section className="w-screen bg-[#f3f3f3] px-5 py-5">
        <hr></hr>
        <h1 className="font-ptsans font-semibold text-[6.5vw] text-gray-900 m-0 text-left lg:w-[60%] lg:text-[3.5vw]">{translations[language].headerTitle}</h1>
        <p className="font-ptsans text-[4vw] text-gray-800 m-0.5 text-left lg:w-[70vw] lg:text-[2vw]">{translations[language].sectionDescription}</p>
        <button className="py-2 px-3 bg-gray-900 text-white max rounded mt-1 font-ptsans text-left transition-all duration-500 hover:translate-x-1">{translations[language].visitNowButton}</button>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-4">
          <div className="flex flex-col bg-white rounded-lg p-4">
            <i class="fi fi-tr-ranking-star bg-turquoise pt-2 pb-1 px-3.5 text-white rounded-xl w-fit text-[20px] lg:text-[25px]"></i>
            <h1 className="font-ptsans font-[600] text-[5vw] lg:text-[3vw] text-gray-900 m-0 text-left">
              {translations[language].aboutHeader1}
            </h1>
            <p className="font-ptsans text-[3.5vw] lg:text-[1.8vw] text-gray-900 m-0 text-left">
              {translations[language].aboutDescription1}
            </p>
          </div>
          <div className="flex flex-col bg-white rounded-lg p-4">
            <i class="fi fi-tr-badge-percent bg-turquoise pt-2 pb-1 px-3.5 text-white rounded-xl w-fit text-[20px] lg:text-[25px]"></i>
            <h1 className="font-ptsans font-[600] text-[5vw] lg:text-[3vw] text-gray-900 m-0 text-left">
              {translations[language].aboutHeader2}
            </h1>
            <p className="font-ptsans text-[3.5vw] lg:text-[1.8vw] text-gray-900 m-0 text-left">
              {translations[language].aboutDescription2}
            </p>
          </div>
          <div className="flex flex-col bg-white rounded-lg p-4">
            <i class="fi fi-tr-bolt bg-turquoise pt-2 pb-1 px-3.5 text-white rounded-xl w-fit text-[20px] lg:text-[25px]"></i>
            <h1 className="font-ptsans font-[600] text-[5vw] lg:text-[3vw] text-gray-900 m-0 text-left">
              {translations[language].aboutHeader3}
            </h1>
            <p className="font-ptsans text-[3.5vw] lg:text-[1.8vw] text-gray-900 m-0 text-left">
              {translations[language].aboutDescription3}
            </p>
          </div>
          <div className="flex flex-col bg-white rounded-lg p-4">
            <i class="fi fi-tr-calendar-star bg-turquoise pt-2 pb-1 px-3.5 text-white rounded-xl w-fit text-[20px] lg:text-[25px]"></i>
            <h1 className="font-ptsans font-[600] text-[5vw] lg:text-[3vw] text-gray-900 m-0 text-left">
              {translations[language].aboutHeader4}
            </h1>
            <p className="font-ptsans text-[3.5vw] lg:text-[1.8vw] text-gray-900 m-0 text-left">
              {translations[language].aboutDescription4}
            </p>
          </div>
        </div>
      </section>
      <section className="w-screen bg-[#f3f3f3] px-5 py-5">
        <hr></hr>
        <h1 className="font-ptsans font-semibold text-[6.5vw] text-gray-900 m-0 text-left lg:text-[2.5vw]">{translations[language].titleTemplateFree}</h1>
        <p className="font-ptsans text-[4vw] text-gray-800 m-0.5 text-left lg:text-[2vw]">{translations[language].descriptionTemplateFree}</p>
        <button className="py-2 px-3 bg-gray-900 text-white max rounded mt-1 font-ptsans text-left transition-all duration-500 hover:translate-x-1">{translations[language].exploreButton}</button>
      </section>
      <section className="w-screen bg-[#f3f3f3] px-5 py-5">
      <hr></hr>
        <h1 className="font-ptsans font-semibold text-[6.5vw] text-gray-900 m-0 text-left lg:text-[2.5vw]">{translations[language].titleContinueDevelop}</h1>
        <p className="font-ptsans text-[4vw] text-gray-800 m-0.5 tex77t-left lg:text-[2vw] lg:float-left">{translations[language].descriptionContinueDevelop}</p>
        <img
          className="relative left-0 w-full h-auto lg:w-[45%] lg:float-left"
          src={imageDekorasi1}
          alt="Images"
        />
      <FooterApp language={language} translations={translations} />
      </section>
      <div className="flex items-center justify-center text-white bg-turquoise border-[1.5px] border-solid border-gray-100 rounded mt-4">
        <i className="fi fi-rr-globe m-0 p-0"></i>
        <select onChange={(e) => changeLanguage(e.target.value)} value={language} className="p-2 text-white bg-transparent outline-none">
          <option value="id">Bahasa Indonesia</option>
          <option value="en">English</option>
        </select>
      </div>
    </>
  );
}

export default App;