import { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Services from "./services";
import { useLocation } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTopButton";



function App() {
      const [menuOpen, setMenuOpen] = useState(false);
      const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // Use setTimeout to ensure the element is rendered
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, [location]);

  return (
    
    <Switch>
      <Route exact path="/">
    <div id="home">
      <div style= {{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/Modern%20Architecture%20in%20Black%20and%20White.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
      }}
          className="hero h-screen max-w-full flex flex-col items-center"
      >
        <header className="md:h-1/4 bg-black bg-opacity-60 md:bg-transparent w-full px-8 md:px-20">
          <div className="w-full flex md:justify-center justify-between py-1 pt-4 md:pt-6">
            <div className="flex items-end">
            <img
                src={process.env.PUBLIC_URL + "/img/transparent-Photoroom.png"}
                className="h-10 md:h-16"
                alt="logo"
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
              <a href="#home" onClick={() => setMenuOpen(false)}>HOME</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a>
              <Link to="/services">SERVICES</Link>
              <Link to="/services#contact">CONTACT</Link>
            </div>
  
              {/* Menu open */}
            {menuOpen && (
              <div className="md:hidden w-screen flex flex-col items-center justify-center text-center py-4 gap-3 text-white font-light text-sm"
                  >
                <a href="#home" onClick={() => setMenuOpen(false)} >HOME</a>
                <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a>
                <Link to="/services#services" onClick={() => setMenuOpen(false)}>SERVICES</Link>
                <Link to="/services#contact"  onClick={() => setMenuOpen(false)}>CONTACT</Link>
              </div>
            )}
        </header>
    
        <div className="h-3/4 flex-1 flex flex-col justify-center items-center font-sans">
            <h1 className="text-white font-semibold text-2xl md:text-5xl text-center pb-1 md:pb-4">ARCHITECTURE WITH INTENT</h1>
            <p className="text-white font-light text-sm italic text-center">Modern spaces rooted in simplicity, functionality and timeless elegence.</p>
            <Link to="/services"><button className="bg-white bg-opacity-90 p-2 rounded-full w-36 md:w-48 md:h-14 mt-10 hover:bg-text duration-300 hover:text-white">EXPLORE</button></Link>
        </div>
        
      </div>
        
      <div id="about" className="about h-screen max-w-full flex flex-col justify-center items-center md:pt-10 text-text">
          <h1 className="text-3xl md:text-5xl text-center  pb-8 md:pb-10">Why Choose Us</h1>
          <div className="w-80 md:w-1/2 flex flex-row gap-4 justify-center items-center pb-4">
                <div className="md:w-full flex flex-col gap-4 justify-center items-center">
                  <p className="text-center text-xs">Human-centered</p>
                  <img src={process.env.PUBLIC_URL + "/img/small-black-dot-png-2.png"}
                        className="h-5 opacity-80"
                        alt="interior"/>
                </div> 
                <div className="md:w-full flex flex-col gap-4 justify-center items-center">
                  <p className="text-center text-xs">Sustainable materials</p>
                  <img src={process.env.PUBLIC_URL + "/img/small-black-dot-png-2.png"}
                        className="h-5 opacity-80"
                        alt="interior"/>
                </div>
                <div className="md:w-full flex flex-col gap-4 justify-center items-center">
                  <p className="text-center text-xs">Full project management</p>
                  <img src={process.env.PUBLIC_URL + "/img/small-black-dot-png-2.png"}
                        className="h-5 opacity-80"
                        alt="interior"/>
                </div>
          </div>
          
          <div className="w-3/4 flex flex-col gap-10 justify-center items-center md:grid md:grid-cols-2 md:gap-20 p-10">
            <div className="relative h-32 w-52 md:h-52 md:w-80 md:ml-24 mb-10 -ml-28">
              <img src={process.env.PUBLIC_URL + "/img/Minimalist Interior with Monochromatic Tones.png"}
                   className="absolute shadow-lg rounded-lg top-10 left-0 w-full h-full object-cover transform transition-transform duration-300 hover:scale-125"
                   alt="interior" 
                   />
              <img src={process.env.PUBLIC_URL + "/img/Architectural Silhouette.png"}
                   className="absolute shadow-lg rounded-lg top-0 left-14 w-full h-full object-cover transform transition-transform duration-300 hover:scale-125"
                    alt="interior"
              />
              <img src={process.env.PUBLIC_URL + "/img/Architectural Display Photo.png"}
                   className="absolute shadow-lg rounded-lg top-20 left-28 w-full h-full object-cover transform transition-transform duration-300 hover:scale-125"
                    alt="interior"
              />
            </div>
            <p className="text-xs md:text-base font-light w-96 mt-10 md:ml-10 md:pb-20 leading-normal md:leading-relaxed">We craft architecture and interiors that embrace simplicity and natural beauty. With careful attention to materials and proportions, our spaces age gracefully, reflecting quiet elegance and timeless character.
We believe great design is collaborative. Through clear communication, transparent timelines, and careful budgeting, we make the process smooth and enjoyable — delivering spaces that exceed expectations without surprises.</p>
          </div>
      </div>

      <div className="content h-screen px-4 md:py-20 md:px-20 pb-10 bg-text bg-opacity-5 text-text flex flex-col justify-center items-center md:grid grid-cols-2 md:gap-8">
        
        <div className="h-full flex flex-col justify-center md:justify-start items-start gap-6 md:gap-8 md:pt-10">
          <h1 className="text-3xl md:text-5xl font-normal">From Concept to Concrete</h1>
            <div className="text-text flex flex-col gap-2">
              <p className="text-xs md:text-base font-light leading-normal md:leading-relaxed">Merging creativity with functionality, shaping homes and interiors that reflect personality, craft, and a forward-looking approach to design.
                <br></br>
                 Every project is a journey — from the first sketch to the finished space. We bring clarity, creativity, and precision to deliver architecture and interiors that stand out.
                </p>
              <p className="text-xs md:text-base font-light"><strong>LINEA</strong> Team</p>
            </div>
          </div>

        <div className="w-full h-full grid grid-cols-2 md:justify-center gap-4 md:gap-8 text-text">
          <Link to="/services#personal"><div className="flex flex-col h-full items-center justify-center">
              <img src={process.env.PUBLIC_URL + "/img/Minimalist-Interior-with-Light-and-Shadow.png"}
                   className="h-full w-full mb-2 md:mb-4 rounded-lg shadow-md transform duration-300 hover:scale-105"
                   alt="interior"/>
            <div className="">
              <h2 className="text-lg font-medium">Residential & Interiors</h2>
              <p className="text-xs md:text-sm font-light leading-normal">Spaces that carry life, and quiet elegance through material and light, leaving a lasting impression without saying a word.</p>
            </div>
          </div>
          </Link>

          <Link to="/services#commercial"><div className="flex flex-col h-full items-start justify-start">
              <img src={process.env.PUBLIC_URL + "/img/Minimalist Interior with Geometric Light.png"}
                  className="h-full w-full mb-2 md:mb-4 rounded-lg shadow-md transform duration-300 hover:scale-105"
                  alt="interior"
                />
            <div>
              <h2 className="text-lg font-medium">Commercial</h2>
              <p className="text-xs md:text-sm font-light leading-normal">Spaces that inspire and endure, turning offices and public areas into immersive experiences where design meets purpose.</p>
            </div>
          </div>
          </Link>
        </div>
      </div>

      <div className="services h-screen px-8 md:px-20 py-20 md:py-28 bg-text text-white text-opacity-80 bg-opacity-90 grid grid-cols-2 md:grid-cols-3 gap-10">
            <div className="h-40 w-auto p-0">
              <h1 className="text-3xl font-normal md:text-5xl">Defined By Craft. Driven By Excellence</h1>
            </div>
            <div className="h-40 md:h-48 w-auto transform duration-300 hover:scale-110 p-4 md:p-8 flex flex-col justify-center items-start gap-2 border-2 border-opacity-60 rounded-md">
              <h3 className="text-left text-sm md:text-xl font-semibold">Architectural Design</h3>
              <p className="text-xs md:text-sm font-light">Concept-driven architecture shaped by context, function, and form — from early studies to detailed design.</p>
            </div>
            <div className="h-40 md:h-48 w-auto transform duration-300 hover:scale-110 p-4 md:p-8 flex flex-col justify-center items-start gap-2 border-2 border-opacity-60 rounded-md">
              <h3 className="text-left text-sm md:text-xl font-semibold">Interior Design</h3>
              <p className="text-xs md:text-sm font-light">Thoughtful interiors focused on material, light, creating spaces that feel refined and lasting.</p>
            </div>
            <div className="h-40 md:h-48 w-auto transform duration-300 hover:scale-110 p-4 md:p-8 flex flex-col justify-center items-start gap-2 border-2 border-opacity-60 rounded-md">
              <h3 className="text-left text-sm md:text-xl font-semibold">Residential Projects</h3>
              <p className="text-xs md:text-sm font-light">Custom homes and living spaces designed with care, precision, and a strong sense of identity.</p>
            </div>
            <div className="h-40 md:h-48 w-auto transform duration-300 hover:scale-110 p-4 md:p-8 flex flex-col justify-center items-start gap-2 border-2 border-opacity-60 rounded-md">
              <h3 className="text-left text-sm md:text-xl font-semibold">Commercial Projects</h3>
              <p className="text-xs md:text-sm font-light">Workplaces, retail, and public environments shaped for performance, and visual impact.</p>
            </div>
            <div className="h-40 md:h-48 w-auto transform duration-300 hover:scale-110 p-4 md:p-8 flex flex-col justify-center items-start gap-2 border-2 border-opacity-60 rounded-md">
              <h3 className="text-left text-sm md:text-xl font-semibold">Space Planning</h3>
              <p className="text-xs md:text-sm font-light">Efficient layouts that balance movement, usability, and comfort, tailored to how spaces are truly used</p>
            </div>
      </div>

      <footer className="h-full w-full md:h-80 bg-black bg-opacity-95 flex flex-col justify-center items-start p-10 md:pl-40 md:flex-row md:justify-between md:items-center md:gap-14 md:p-20">
        <div className="flex flex-col gap-1">
            <div className="flex flex-row justify-start items-center gap-1">
              <img src={process.env.PUBLIC_URL + "/img/transparent-Photoroom.png"}
                    alt="logo"
                    className="h-10 md:h-14"
                  />
              <p className="text-white text-opacity-80 font-light text-sm"><strong>LINEA</strong> Artelier</p>
            </div>
            <div className="text-white text-opacity-50 font-light text-xs pb-4">
              <p>Thoughtful spaces shaped by craft, clarity, and intention.</p>
              <p>© 2025 LINEA Atelier</p>
              <p>All rights reserved.</p>
            </div>
        </div>
       
        {/*footer section 2: contact + service + input form*/}  
          <div className="md:w-1/2 md:flex-col md:gap-20 md:px-20">
            <div className="w-full flex gap-20 md:gap-10 pb-4">
        
        <div className="text-white text-opacity-80 service flex flex-col gap-1 pb-2">
          <h4 className="text-sm font-normal">SERVICES</h4>
          <ul className="text-xs text-white text-opacity-50 font-light list-disc list-inside">
            <li>Residential</li>
            <li>Commercial</li>
            <li>Interior</li>
            <li>Landscape</li>
            <li>Furniture</li>
          </ul>
        </div>

        <div className="contact text-white text-opacity-80 flex flex-col gap-1">
          <h4 className="text-sm font-normal">CONTACT</h4>
          <div className="text-xs font-light text-white text-opacity-50">
            <p>contact@linea-atelier.com</p>
            <p>123 Minimal Lane, City, Country</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        </div>
                <div className="submit-form w-full flex gap-4">
                    <input 
                      type="text"
                      placeholder="Your email"
                      className="w-8/12 h-8 md:h-11 text-xs md:text-sm bg-white bg-opacity-90 rounded-sm md:rounded-md px-2"></input>
                    <button className="w-4/12 h-8 md:h-11 text-white md:text-lg font-light bg-black border-2 border-white rounded-sm md:rounded-md hover:bg-text duration-300">Submit</button>
                </div>
              <p className="text-xs font-light text-white text-opacity-50 pt-4">© 2026 V.Le — Personal Project. 
Not a real product or business.
</p>
            </div>
      </footer>

              <ScrollToTopButton />
    </div>
    </Route>

    <Route path="/services">
      <Services />
    </Route>

      </Switch>
    
  );
}

export default App;




