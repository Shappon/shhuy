import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Typical from 'react-typical';

const View3 = () => {
  const [text, setText] = useState("");
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const navigate = useNavigate();
  const navToview3 = () => { navigate('/') };
  const navToview4 = () => { navigate('/View4') };
  const navToview5 = () => { navigate('/View5') };

  // Function to handle background image change
  const handleClick = () => {
    setBackgroundIndex((backgroundIndex + 1) % 4);
  }

  return (
    <>
      <h2 className="y pccomp ">Shuan</h2>
      <h5 className="y nom pccomp  b">[Su-anne]</h5>
      <h2 className="y nom pccomp b">Huynh</h2>
      <h2 className="y  age  pccomp c">24 ans</h2>
      <div className="photo pccomp" style={{ position: 'fixed', bottom: 355, left: 8 }} > </div>
      <div style={{ position: 'fixed', bottom: 0, left: -10 }}  >
      <a id="popup-button" href="cvsite.pdf" download>
          <button className="buttony pccomp bfond g">CV</button>
        </a>
        <br></br>
        <Link to="https://linktr.ee/sthpro">
          <button className="buttony pccomp afond g">Contact</button>
        </Link>
        <div className=" pccomp y" style={{ position: 'fixed', bottom: 287, left: -10 }}>
      <Typical
        
        steps={['Un ', 1000, 'Un Développeur', 500]}
        loop={1}
        wrapper="p"
      />
      </div> 
      </div>
      
      <div className={`ecran animate__animated animate__fadeInUp image${backgroundIndex + 1}`} style={{
    position: 'absolute',
    top: 30,
    right: 10,
}}>
       
        {/* <h2 className="y" style={{ display: backgroundIndex === 0 ? "" : "none" }}> Mon Parcour : 1/4</h2>
        <h2 className="y" style={{ display: backgroundIndex === 1 ? "" : "none" }}> Mon Parcour : 2/4</h2>
        <h2 className="y" style={{ display: backgroundIndex === 2 ? "" : "none" }}> Mon Parcour : 3/4</h2>
        <h2 className="y" style={{ display: backgroundIndex === 3 ? "" : "none" }}> Mon Parcour : 4/4</h2> */}

        <h4 className="par animate__animated  animate__fadeIn m " style={{ position: 'fixed', bottom: 10, left:150 }}>
          Objectif Global : Je souhaite intégrer une entreprise afin de progresser dans le domaine de la programmation.
        
        </h4> <button style={{ position: 'fixed', bottom: 10, right:240 }} className="p buttons" onClick={handleClick}> Suite</button>
       
        <h2 className="yt animate__animated animate__fadeIn"></h2>
      </div>

      <div>
        <button style={{ position: 'fixed', bottom: 80, left: 40 }} className="mobcomp" onClick={navToview3}>PARCOURS</button>
        <button style={{ position: 'fixed', bottom: 80, left: 150 }} className="mobcomp" onClick={navToview4}>PROJETS</button>
        <button style={{ position: 'fixed', bottom: 80, left: 245 }} className="mobcomp" onClick={navToview5}>OBJECTIFS</button>
      </div>

      <button style={{ position: 'fixed', bottom: 50, left: 700 }} className="button parcour pccomp g butpc" onClick={navToview3}>PARCOURS</button>
      <button style={{ position: 'fixed', bottom: 50, left: 950 }} className="button projet pccomp g butpc" onClick={navToview4}>PROJETS</button>
      <button style={{ position: 'fixed', bottom: 50, left: 1200 }} className="button objectif  pccomp g butpc" onClick={navToview5}>OBJECTIFS</button>
    </>
  );
}

export default View3;
