import {Link, useNavigate} from "react-router-dom";
import Typical from 'react-typical';
import Button from '@mui/material/Button';

const View5 = () => {

  const navigate = useNavigate();
  const navToview3 = () => {navigate('/')};
  const navToview4 = () => {navigate('/View4')};
  const navToview5 = () => {navigate('/View5')};
    return (<>



    <h2 className="y pccomp ">Shuan</h2>
      <h6 className="y nom pccomp  b">[Su-anne]</h6>
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
   <div className="y pccomp " style={{ position: 'fixed', bottom: 287, left: 15 }}>
      <Typical
        
        steps={['Déterminer',  1500 ,'Ambitieux', 1500,'Travailleur', 1500]}
        loop={Infinity}
        wrapper="p"
      />
      </div> 
   </div>
   <div className="ecran3 animate__animated  animate__fadeInUp " style={{ position: 'fixed', top: 70, right: 10 }} >

   <div className="container-fluid">


   <h2 className="y" ><Typical
        
        steps={['Objectifs : ', 500, 'Objectifs : Quelques objectifs atteints ou en cours.' ,500]}
        loop={1}
        wrapper="p"
      /></h2> 
  <br></br>    

  <div>

  <table className="table">
 
    <tbody className="yt" >
   
      <tr>
        <td className="yu">Acquérir une expérience professionnelle dans le monde du textile et dans le domaine du rapport client.</td>

        <td className="v2" ></td>
      </tr>
      <tr>
        <td className="yu">Découvrir/Créer/Publier un portfolio avec reactjs</td>
 
        <td className="v2"></td>
      </tr>
      <tr>
        <td className="yu">Découvrir en surface le monde de la programmation et ses enjeux.</td>
 
        <td className="v2"></td>
      </tr>
      <tr>
        <td className="yu">Crée un projet informatique qui facilite la communication d'une entreprise.</td>
 
        <td className="v2"></td>
      </tr>
      <tr>
        <td className="yu">Trouver une alternance dans le domaine de la programmation.</td>
 
        <td className="eca2"></td>
      </tr>
      <tr>
        <td className="yu">INTEMPOREL: Développer un apprentissage constant des techniques et technologie lié à la programmation.</td>
 
        <td className="eca2"></td>
      </tr>
      <tr>
        <td className="yu">INTEMPOREL: Lecture de livres sur la programmation web/mobile et créations de projets en corrélation.</td>
 
        <td className="eca2"></td>
      </tr>
     
     
    </tbody>
  </table>

  </div>
</div>


    </div>
   
<div>
    <button  style={{ position: 'fixed', bottom: 80, left:40  ,}} className="mobcomp  "  onClick={navToview3} >PARCOURS</button>
<button style={{ position: 'fixed', bottom: 80, left:150 ,}} className="mobcomp "  onClick={navToview4} >PROJETS</button>
<button style={{ position: 'fixed', bottom: 80, left:245,}} className="mobcomp " onClick={navToview5} >OBJECTIFS</button>
  
</div>
<button style={{ position: 'fixed', bottom: 50, left: 700 }} className="button parcour pccomp g butpc" onClick={navToview3}>PARCOURS</button>
      <button style={{ position: 'fixed', bottom: 50, left: 950 }} className="button projet pccomp g butpc" onClick={navToview4}>PROJETS</button>
      <button style={{ position: 'fixed', bottom: 50, left: 1200 }} className="button objectif  pccomp g butpc" onClick={navToview5}>OBJECTIFS</button>
   
</>
 );
}
    
export default View5;
