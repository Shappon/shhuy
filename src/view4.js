import { Link, useNavigate } from "react-router-dom";
import * as React from 'react';
import Typical from 'react-typical';
import Button from '@mui/material/Button';

const View4 = () => {
  const navigate = useNavigate();
  const navToview3 = () => { navigate('/') };
  const navToview4 = () => { navigate('/View4') };
  const navToview5 = () => { navigate('/View5') };
  return (<>




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
   <div className=" pccomp y" style={{ position: 'fixed', bottom: 287, left: -20 }}>
      <Typical
        
        steps={['Passionné d\'informatique ', 1500,'Passionné d\'arts martiaux', 1500,'Passionné de géopolitique', 1500]}
        loop={Infinity}
        wrapper="p"
      />
      </div> 
   </div>
   <div className="ecran2 animate__animated animate__fadeInUp " style={{ position: 'fixed', top: 70, right: 10 }} >

   <div className="container-responsive">
  <h2 className="y" ><Typical
        
        steps={['Projets : ', 500,'Projets : Une sélection de divers projets informatiques réalisés ou en cours. ', 500]}
        loop={1}
        wrapper="p"
      /></h2> 
  <br></br> 
  <br></br>        
  <table className="table">
    <thead className="yt" >
    
    </thead>
    <tbody className="yt" >
       <tr>
        <td className="yu">Création d'une application web pour la découverte de la ville de Dijon.</td>
        <td className= " pccomp " ><span className= " pccomp " class="badge bg-info badged">php/js/sql</span><span class="badge bg-info badged">Laravel</span><span class="badge bg-info badged">BTS/Ville de Dijon</span></td>
         <td className= " pccomp " ></td>
        <td className="v2"> </td>
      </tr>
      <tr>
        <td className="yu">Création/Implémentation d'un plug-in dans un site (Presse/article).</td>
        <td className= " pccomp "  ><span className= " pccomp " class="badge bg-info badged">html/css/js</span><span class="badge bg-info badged">WordPress</span><span class="badge bg-info badged">Entreprise</span></td>
         <td className= " pccomp " ><Button variant="contained" href="DocHum.pdf" download >Doc</Button></td>
        <td className="v2"></td>
      </tr>
      <tr>
        <td className="yu">Création/Implémentation d'un plug-in dans un site (soins/marchand).</td>
        <td className= " pccomp "  ><span className= " pccomp " class="badge bg-info badged">html/css/js</span><span class="badge bg-info badged">WordPress</span><span class="badge bg-info badged">Entreprise</span></td>
         <td className= " pccomp " ><Button variant="contained" href="DocSeren.pdf" download >Doc</Button></td>
        <td className="v2"></td>
      </tr>
      <tr>
        <td className="yu" >Découverte/Création d'une Application portefolio en Reactjs.</td>
        <td className= " pccomp " ><span  class="  badge bg-info badged"></span><span class="badge bg-info badged">html/css/js/json</span><span class="badge bg-info badged">Personnel</span></td>
        <td className= " pccomp " ></td>
        <td className="v2"></td>
      </tr>

      <tr>
        <td className="yu" >Création d'une application d'analyse de données débutante.</td>
        <td className= " pccomp " ><span className= " pccomp " class="badge bg-info badged">html/css/js</span><span className= " pccomp " class="badge bg-info badged">json/api</span><span className= " pccomp " class="badge bg-info badged">Personnel</span></td>
        <td className= " pccomp "  ></td>
        <td className="eca2" ></td>
      </tr>
      <tr>
        <td className="yu" >Création d'un site internet / Vente de Vétements.</td>
        <td className= " pccomp " ><span className= " pccomp " class="badge bg-info badged">html/css/js</span><span className= " pccomp " class="badge bg-info badged">nodejs</span><span className= " pccomp " class="badge bg-info badged">Personnels</span></td>
        <td className= " pccomp "  ><Button variant="contained" href="CDCv.pdf" download >CDC</Button></td>
        <td className="eca2" ></td>
      </tr>
      <tr>
        <td className="yu" >Création d'une application de simplification de tâche pour les infirmières.</td>
        <td className= " pccomp " ><span className= " pccomp " class="badge bg-info badged">html/css/js</span><span className= " pccomp " class="badge bg-info badged">Angular</span><span className= " pccomp " class="badge bg-info badged">html/css/js</span><span className= " pccomp " class="badge bg-info badged">Personnel</span></td>
        <td className= " pccomp " ><Button variant="contained" href="CDCi.pdf" download >CDC</Button></td>
        <td className="eca2" ></td>
      </tr>
    
    </tbody>
  </table>
</div>

   </div>

   <div id="borderDemo" style={{ position: 'fixed', bottom: -70,}}className="button-container ">
    
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

export default View4;
