import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTopButton";
import emailjs from "@emailjs/browser";


function useImageSlider(images) {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(
    window.innerWidth < 768 ? 3 : 5
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 768 ? 3 : 5);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setIndex((prev) =>
      prev + visibleCount >= images.length ? 0 : prev + 1
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - visibleCount : prev - 1
    );
  };

  return { index, visibleCount, next, prev };
}


export default function Services() { 
  const [menuOpen, setMenuOpen] = useState(false);
  
  const [activeImage, setActiveImage] = useState(null);

  const location = useLocation();

  const personalImages = [
  "/img/Minimalist Interior with Light and Shadow.png",
  "/img/Minimalist Interior with Modern Furniture.png",
  "/img/Minimalist Interior with Abstract Art.png",
  "/img/Minimalist Interior with Monochromatic Tones.png",
  "/img/Minimalist Interior with Geometric Light.png",
  "/img/Elegant Interior Decor with Art Focal Point.png",
  "/img/Serene Modern Interior.png",
];

const commercialImages = [
  "/img/Modern Architectural Structure with Geometric Design.png",
  "/img/Modern Architectural Interior.png",
  "/img/Modern Minimalist Dining Area.png",
  "/img/Modern Architectural Structure.png",
  "/img/Modern Architectural Interior with Natural Motifs.png",
  "/img/Sunlit Arcadia_ A Modern Symphony in Concrete and Light.png",
  "/img/Serene Minimalism_ Concrete Interior with Nature View.png"
];
const personalSlider = useImageSlider(personalImages);
const commercialSlider = useImageSlider(commercialImages);


  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

    useEffect(() => {
  if (activeImage) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}, [activeImage]);
    useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === "Escape") {
      setActiveImage(null);
    }
  };

  window.addEventListener("keydown", handleEsc);
  return () => window.removeEventListener("keydown", handleEsc);
}, []);

//Form submit logic
          const [formData, setFormData] = useState({
            name: "",
            phone: "",
            email: "",
            message: "",
            projectTypes: [], // for checkboxes
            propertyType: "",
            budget: "",
            timeline: "",
          });
      
          //handle change for checkbox and dropdown
       const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        if (type === "checkbox") {
    setFormData((prev) => {
      const newProjectTypes = checked
        ? [...prev.projectTypes, value]
        : prev.projectTypes.filter((v) => v !== value);
      return { ...prev, projectTypes: newProjectTypes };
    });
  } else {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
};
       const handleSubmit = (e) => {
          e.preventDefault(); //prevent page reloads

          // basic validation
  if (
    !formData.name ||
    !formData.email ||
    !formData.phone ||
    formData.projectTypes.length === 0 ||
    !formData.propertyType ||
    !formData.budget ||
    !formData.timeline ||
    !formData.message
  ) {
    alert("Please fill up the form before submitting.");
    return; 
  }

          emailjs.send(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    projectTypes: formData.projectTypes.join(", "), // join array into string
    propertyType: formData.propertyType,
    budget: formData.budget,
    timeline: formData.timeline,
    message: formData.message,
  },
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
)
.then(
  () => {
    alert("Message sent successfully!");
    setFormData({
      name: "",
      phone: "",
      email: "",
      projectTypes: [],
      propertyType: "",
      budget: "",
      timeline: "",
      message: "",
    });
  },
  (error) => {
    console.error("EmailJS error:", error);
    alert("Failed to send message.");
  }
);

          console.log("Form submitted:", formData);
          alert("Form submitted successfully!");
       };

       const [footerEmail, setFooterEmail] = useState("");
       const handleFooterSubmit = () => {
          if(!footerEmail) {
            alert("Please enter your email!");
            return
          };
          emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // optional - can use a separate template for subscriptions
    {
      email: footerEmail,
    },
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  )
  .then(
    () => {
      alert("Thanks for subscribing!");
      setFooterEmail("");
    },
    (error) => {
      console.error("EmailJS error:", error);
      alert("Failed to subscribe. Try again.");
    }
  );
};


   return ( 
   <div className="main"> 
    <div 
          style={{ backgroundImage: "url('/img/Architectural Display Photo.png')", 
                   backgroundSize: "cover", 
                    backgroundPosition: "center",
                }} 
          className="hero h-screen max-w-full flex flex-col items-center" > 
    
      <header className="md:h-1/5 bg-black bg-opacity-60 w-full md:pb-3 px-8 md:px-20"> <div className="w-full flex md:justify-center justify-between py-1 pt-4 md:pt-6"> 
        <Link to="/"><div className="flex items-end"> 
          <img src="/img/transparent-Photoroom.png" 
                className="h-10 md:h-16" /> 
          <p className="text-white pl-2 md:pb-1 md:text-lg">LINEA Atelier</p> 
        </div> 
        </Link>
          <button 
              className="md:hidden text-white text-2xl" 
              onClick={() => setMenuOpen(!menuOpen)} > ☰ 
          </button> 
        </div> 
        
        <div className=" h-0.5 mb-4 w-full bg-white"></div> 

        <nav className="hidden md:flex items-center justify-center gap-10 md:gap-20 text-white text-xs md:text-sm font-light"> 
          <Link to="/" className=" hover:text-black duration-300">HOME</Link> 
          <Link to="/#about" className=" hover:text-black duration-300">ABOUT</Link> 
          <Link to="/services" className=" hover:text-black duration-300">SERVICES</Link> 
          <Link to="/services#contact" className=" hover:text-black duration-300">CONTACT</Link> </nav> 
          
          {menuOpen && ( <div className="md:hidden w-screen flex flex-col items-center gap-3 text-white font-light text-sm"> 
            <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link> 
            <Link to="/#about" onClick={() => setMenuOpen(false)}>ABOUT</Link> 
            <Link to="#services" onClick={() => setMenuOpen(false)}>SERVICES</Link> 
            <Link to="/services#contact" onClick={() => setMenuOpen(false)}>CONTACT</Link> 
          </div>
         )}  
          </header> 
          <div className="h-full flex justify-center items-center">
            <h1 className="text-xl md:text-4xl font-bold shadow-sm md:font-normal text-white">“Where form, function, and feeling meet.”</h1>
            </div>

            </div> 
            
            <div id="services" className="services-content min-h-screen max-w-screen flex flex-col md:py-10 my-10 "> 
              <div className="h-full">
              <div id="personal" className="personal md:h-screen p-10 md:px-20 py-16 md:flex-row gap-10 md:gap-20 flex flex-col">
                <img src="/img/Minimalist Interior with Geometric Light.png"
                      className="w-1/2 h-72 md:h-full rounded-sm"/> 
                  <div className="md:w-1/2 flex flex-col justify-center items-start gap-4 md:gap-10">
                    <h1 className="text-3xl md:text-6xl text-text font-normal self-end md:self-auto">Personal Space</h1>
                    <p className="text-text font-light text-xs md:text-lg leading-normal md:leading-relaxed">A quiet collection shaped by light, texture, and restraint.<br></br>
These interiors embrace imperfection and natural materials, creating spaces that feel calm, lived-in, and deeply personal — where simplicity becomes comfort.<br></br>
Natural materials, soft shadows, and honest forms come together to create interiors that feel grounded and timeless.</p>
                  </div>
                </div>
                
                <div className="roll-collection h-32 py-2 md:py-4 md:h-48 w-full md:my-8 bg-text bg-opacity-20 flex justify-center items-center">
                  
                    <div className="w-12 flex-none pl-4 flex items-center justify-center">
                  <button className="previous relative group w-10 h-10 justify-center"
                          onClick={personalSlider.prev}>
                    <img src="/img/back-black.png"
                          className="absolute w-6 h-6 inset-0 transition-opacity duration-300 group-hover:opacity-0"
                        />
                    <img src="/img/back=white.png"
                        className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                          />
                        </button>
                        </div>
                    
                       <div className="flex-1 h-full py-2 w-full flex justify-center items-center">
                        <div className=" flex h-full w-full justify-center gap-4 md:gap-16 overflow">
                            {personalImages
                              .slice(
                              personalSlider.index,
                              personalSlider.index + personalSlider.visibleCount
                            )
                              .map((src, i) => (
                                    <img
                                      key={i}
                                      src={src}
                                      className="w-28 md:w-48 flex-none object-cover rounded-sm cursor-pointer transform hover:scale-150 duration-300"
                                      onClick={() => setActiveImage(src)} // ✅ KEEP
                                      />
                                ))}
                        </div>
                         </div>
                        

                    
                    <div className="w-12 flex-none flex items-center justify-center">
                  <button className="next relative group w-10 h-10 flex items-center justify-center"
                          onClick={personalSlider.next}>
                    <img src="/img/next black.png"
                          className="absolute w-6 h-6 inset-0 transition-opacity duration-300 group-hover:opacity-0"
                        />
                    <img src="/img/next-white.png"
                        className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                          />
                        </button>
                        </div>
                </div>
                </div>

              <div className="h-full">
              <div id="commercial" className="commercial md:h-screen p-10 md:px-20 py-16 md:flex-row-reverse gap-10 md:gap-20 flex flex-col">
                <img src="/img/Architectural Silhouette.png"
                      className="w-1/2 h-72 md:h-full rounded-sm self-end md:self-auto"/> 
                  <div className="md:w-1/2 flex flex-col justify-center items-start gap-4 md:gap-10">
                    <h1 className="text-3xl md:text-6xl text-text font-normal">Commercial Projects</h1>
                    <p className="text-text font-light text-xs md:text-lg leading-normal md:leading-relaxed">Thoughtfully designed workplaces, retail, and mixed-use spaces that balance performance and aesthetics. Each project responds to functional needs while expressing a clear architectural identity. Our designs are created to deliver long-term value and adaptability.</p>
                  </div>
                </div>
                <div className="roll-collection h-32 py-2 md:py-4 md:h-48 w-full md:my-8 bg-text bg-opacity-20 flex flex-row gap-4 justify-center items-center">
                  
                  <div className="w-full h-full pl-4 flex items-center justify-center">
                  <button className="previous relative group w-10 h-10 flex items-center justify-center"
                          onClick={commercialSlider.prev}>
                    <img src="/img/back-black.png"
                          className="absolute w-6 h-6 inset-0 transition-opacity duration-300 group-hover:opacity-0"
                        />
                    <img src="/img/back=white.png"
                        className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                          />
                        </button>
                        </div>
                    
                       <div className="flex-1 flex h-full w-full py-2 justify-center items-center">
                        <div className=" flex h-full justify-center gap-4 md:gap-16 overflow">
                            {commercialImages
                                .slice(
                                commercialSlider.index,
                                commercialSlider.index + commercialSlider.visibleCount
                                    )
                                  .map((src, i) => (
                                  <img
                                      key={i}
                                      src={src}
                                      className="w-28 md:w-48 flex-none object-cover rounded-sm cursor-pointer transform hover:scale-150 duration-300"
                                      onClick={() => setActiveImage(src)} // ✅ SAME modal
                                              />
                                       ))}
                        </div>
                         </div>
                        

                    
                    <div className="w-full h-full flex items-center justify-center">
                  <button className="previous relative group w-10 h-10 flex items-center justify-center"
                          onClick={commercialSlider.next}>
                    <img src="/img/next black.png"
                          className="absolute w-6 h-6 inset-0 transition-opacity duration-300 group-hover:opacity-0"
                        />
                    <img src="/img/next-white.png"
                        className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                          />
                        </button>
                        </div>
                  </div>
                </div>
            
            </div> 

            {activeImage && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
    onClick={() => setActiveImage(null)}
  >
    <div
      className="relative flex items-center justify-center max-h-screen p-4 overflow-auto"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image container
    >
      {/* Close button */}
      <button
        onClick={() => setActiveImage(null)}
        className="absolute top-2 right-2 w-8 h-8 md:w-10 md:h-10 bg-white text-black rounded-full flex items-center justify-center text-xl md:text-2xl z-10"
      >
        ×
      </button>

      {/* Image */}
      <img
        src={activeImage}
        alt=""
        className="object-contain max-w-full max-h-[calc(100vh-2rem)] md:max-w-[70vw] md:max-h-[calc(100vh-4rem)] rounded-md shadow-lg"
      />
    </div>
             
  </div>
)}

           
                <form id="contact" 
                      onSubmit={handleSubmit}
                      className="request-form px-10 py-10 h-screen justify-center items-center gap-6 flex flex-col bg-text bg-opacity-90 text-white">
                    <h1 className="self-center text-3xl md:text-6xl md:mb-10">Request Form</h1>
                  
                 <div className="form flex flex-col py-8 md:py-10 justify-center items-start md:gap-10 gap-6"> 
                  <div className="personal-infos flex flex-col justify-center items-start md:flex-row md:gap-10 gap-6">
                    <div className="flex gap-4">
                      <label>Name:</label>
                      <input 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="rounded-md w-60 text-xs px-2 text-black" 
                          placeholder="Your Name" 
                          type="text"/>
                        </div>
                      <div className="flex gap-4">
                        <label>Phone:</label>
                        <input 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="rounded-md w-60 text-xs px-2  text-black" 
                            placeholder="Phone Number" 
                            type="number"/>
                          </div>
                        <div className="flex gap-4">
                          <label>Email:</label>
                          <input 
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="rounded-md w-60 text-xs px-2  text-black" 
                              placeholder="Your Email" 
                              type="email"/>
                            </div>
                    </div>

                    <div className="project-check flex gap-10 md:gap-20">
                      <p>Project Type:</p>
                        <div className="flex flex-col justify-items-start md:flex-row gap-4">
                          <div className="flex gap-2 items-center">
                            <input type="checkbox" 
                                    name="projectTypes"
                                    value="Architecture"
                                    onChange={handleChange}
                                    className="h-4 w-4"/>
                            <label>Architecture</label>
                              </div>
                            <div className="flex gap-2 items-center">
                                <input 
                                      type="checkbox"
                                      name="projectTypes"
                                      value="Interior"
                                      onChange={handleChange} 
                                      className="h-4 w-4"/>
                                <label>Interior</label>
                                  </div>
                              <div className="flex gap-2 items-center">
                                  <input 
                                        type="checkbox"
                                        name="projectTypes"
                                        value="Architecture & Interior"
                                        onChange={handleChange}
                                        className="h-4 w-4"/>
                                  <label>Architecture & Interior</label>
                                    </div>
                          </div>
                      </div>
                
                      <div className="property-type flex gap-7 md:gap-16">
                        <label>Property Type:</label>
                          <select 
                                  name="propertyType" 
                                  value={formData.propertyType} 
                                  onChange={handleChange}
                                  className="block rounded-md px-2 text-black text-xs md:text-sm ">
                            <option value="">Select a property type</option>
                            <option value="house">Residential (House / Apartment / Villa)</option>
                            <option value="apartment">Commercial (Office / Retail / Hospitality)</option>
                            <option value="commercial">Other</option>
                          </select>
                            </div>

                      <div className="budget flex gap-20 md:gap-28">
                          <label>Budget:</label>
                            <select 
                                  name="budget"
                                  value={formData.budget}
                                  onChange={handleChange}
                                  className="block rounded-md px-2 text-black text-xs md:text-sm">
                                <option value="">Select your budget</option>
                                <option value="lt-50000">&lt; 50,000$</option>
                                <option value="50000-100000">50,000$ - 100,000$</option>
                                <option value="gt-100000">100,000$+</option>
                            </select>
                              </div>
                      
                        <div className="timeline flex gap-20 md:gap-28">
                            <label>Timeline:</label>
                              <select 
                                    name="timeline"
                                    value={formData.timeline}
                                    onChange={handleChange}
                                    className="block rounded-md px-2 text-black text-xs md:text-sm">
                                <option value="">Select timeline</option>
                                <option value="immediate">Immediate</option>
                                <option value="1-3months">1-3 months</option>
                                <option value="3-6months">3-6 months</option>
                              </select>
                                </div>

                         <div className="timeline  flex gap-4 md:gap-24">
                            <label>Message:</label>
                              <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="rounded-md w-72 h-auto  md:w-96 p-2 text-xs md:text-sm  text-black" 
                                    placeholder="Your message here..."/>
                          </div>      
                </div>

                        <button 
                            type="submit"
                            className="h-12  md:h-14 md:text-2xl bg-text hover:bg-white hover:shadow-md duration-300 hover:text-text border-2 text-center md:px-20 border-white px-8 rounded-xl text-xl">
                          Submit
                        </button>
                
                </form>

                <footer className="h-full w-full md:h-80 bg-black bg-opacity-95 flex flex-col justify-center items-start p-10 md:pl-40 md:flex-row md:justify-between md:items-center md:gap-14 md:p-20">
                    <div className="flex flex-col gap-1">
                    <div className="flex flex-row justify-start items-center gap-1">
                    <img src="/img/transparent-Photoroom.png"
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
                      value={footerEmail}
                      onChange={(e) => setFooterEmail(e.target.value)}
                      type="text"
                      placeholder="Your email"
                      className="w-8/12 h-8 md:h-11 text-xs md:text-sm bg-white bg-opacity-90 rounded-sm md:rounded-md px-2"></input>
                    <button 
                        onClick={handleFooterSubmit}
                        className="w-4/12 h-8 md:h-11 text-white md:text-lg font-light bg-black border-2 border-white rounded-sm md:rounded-md hover:bg-text duration-300">Submit</button>
                </div>
              <p className="text-xs font-light text-white text-opacity-50 pt-4">© 2026 V.Le — Personal Project. 
Not a real product or business.
</p>
            </div>
      </footer>
              
          <ScrollToTopButton />
          
          </div> 
            ); 
          }

