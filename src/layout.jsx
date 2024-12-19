export function TrialNavigation() {
  return (
    <header className="fixed w-screen h-[65px] bg-white bg-opacity-45 backdrop-blur flex items-center justify-around overflow-hidden shadow-lg p-2 z-50">
      <img
        className="w-auto h-full"
        src="https://i.imgur.com/seKxkbh.png"
        alt="Logo"
      />
    </header>
  )
}export function FooterApp({ language, translations }) {
  return (
    <footer className="flex flex-col justify-start w-screen bg-[#1a1a1a] px-5 py-5">
      <img
        className="w-[60vw] self-start lg:w-[40vw]"
        src="https://i.imgur.com/3HGP1ZP.png"
        alt="Larzai image"
      />
      <p className="font-ptsans text-[3vw] text-gray-200 m-0.5 text-left lg:text-[1.5vw]">
        {translations[language].noteFooter}
      </p>
      <article className="">
        <button>Credit</button>
      </article>
    </footer>
  )
}
