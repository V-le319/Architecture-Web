import { useState } from "react";

function App() {
      const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div style= {{
              backgroundImage: "url('/img/Modern Architecture in Black and White.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
      }}
          className="hero h-screen max-w-full flex flex-col items-center"
      >
        <header className="md:h-1/4 bg-black bg-opacity-60 md:bg-transparent w-full px-8 md:px-20">
          <div className="w-full flex md:justify-center justify-between py-1 pt-4 md:pt-6">
            <div className="flex items-end">
            <img
                src="/img/transparent-Photoroom.png"
                className="h-10 md:h-16"
            />
            <p className="text-white pl-2 md:pb-1 md:text-lg">LINEA Atelier</p>
          </div>

           {/* Hamburger (mobile only) */}
    <button
      className="md:hidden text-white text-2xl"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
    </button>
     </div>
  

          <div className="h-0.5 mb-4 w-full bg-white"></div>
            
            <div className="hidden md:flex items-center justify-center gap-10 md:gap-20 text-white text-xs md:text-sm font-light">
              <p>HOME</p>
              <p>ABOUT</p>
              <p>SERVICES</p>
              <p>CONTACT</p>
            </div>

              {/* Menu open */}
            {menuOpen && (
              <div className="md:hidden w-screen flex flex-col items-center py-4 gap-3 text-white font-light text-sm"
                  >
                <p onClick={() => setMenuOpen(false)} >HOME</p>
                <p onClick={() => setMenuOpen(false)}>ABOUT</p>
                <p onClick={() => setMenuOpen(false)}>SERVICES</p>
                <p onClick={() => setMenuOpen(false)}>CONTACT</p>
              </div>
            )}
        </header>
    
        <div className="h-3/4 flex-1 flex flex-col justify-center items-center font-sans">
            <h1 className="text-white font-semibold text-2xl md:text-5xl text-center pb-1 md:pb-4">ARCHITECTURE WITH INTENT</h1>
            <p className="text-white font-light text-sm italic text-center">Modern spaces rooted in simplicity, functionality and timeless elegence.</p>
            <button className="bg-white bg-opacity-90 p-2 rounded-full w-36 md:w-48 mt-10 hover:bg-text duration-300 hover:text-white">EXPLORE</button>
        </div>
      </div>
        
      <div className="about h-screen max-w-full flex flex-col justify-center items-center text-text">
          <h1 className="text-3xl md:text-5xl text-center  pb-8 md:pb-10">Why Choose Us</h1>
          <div className="w-80 flex flex-row gap-4 md:gap-36 justify-center items-center pb-10">
                <div className="flex flex-col gap-4 justify-center items-center">
                  <p className="text-center text-xs">Human-centered</p>
                  <img src="/img/small-black-dot-png-2.png"
                        className="h-5 opacity-80"/>
                </div> 
                <div className="flex flex-col gap-4 justify-center items-center">
                  <p className="text-center text-xs">Sustainable materials</p>
                  <img src="/img/small-black-dot-png-2.png"
                        className="h-5 opacity-80"/>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                  <p className="text-center text-xs">Full project management</p>
                  <img src="/img/small-black-dot-png-2.png"
                        className="h-5 opacity-80"/>
                </div>
          </div>
          
          <div className="w-3/4 flex flex-col gap-10 justify-center items-center md:grid md:grid-cols-2 md:gap-20 p-10">
            <div className="relative h-32 w-52 md:h-52 md:w-80 md:ml-24 mb-10 -ml-28">
              <img src="/img/Minimalist Interior with Monochromatic Tones.png"
                   className="absolute shadow-lg rounded-lg top-10 left-0 w-full h-full object-cover transform transition-transform duration-300 hover:scale-125"
                    />
              <img src="/img/Architectural Silhouette.png"
                   className="absolute shadow-lg rounded-lg top-0 left-14 w-full h-full object-cover transform transition-transform duration-300 hover:scale-125"
              />
              <img src="/img/Architectural Display Photo.png"
                   className="absolute shadow-lg rounded-lg top-20 left-28 w-full h-full object-cover transform transition-transform duration-300 hover:scale-125"
              />
            </div>
            <p className="text-xs md:text-sm w-96 mt-10 md:ml-10 md:pb-20">We craft architecture and interiors that embrace simplicity and natural beauty. With careful attention to materials and proportions, our spaces age gracefully, reflecting quiet elegance and timeless character.



We believe great design is collaborative. Through clear communication, transparent timelines, and careful budgeting, we make the process smooth and enjoyable — delivering spaces that exceed expectations without surprises.</p>
          </div>
      </div>

      <div className="h-screen bg-text bg-opacity-5">content</div>

      <div>products</div>

      <footer></footer>


    </div>
  );
}

export default App;




