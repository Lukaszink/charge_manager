import './Mp.css';
import { useEffect } from 'react'

function Mp() {
  useEffect(() => {
    const placement = document.querySelector("body");
    const script = document.createElement('script');

    script.src = "/scripts/simulation.js";
    
    placement.appendChild(script);

    return () => {
      placement.removeChild(script);
    };
  });

  const createCar = (type) => {
    return () => {
      window.interaction.incoming_cars.push({type});
    }
  }

  const changeSpeed = (speed) => {
    return () => {
      window.interaction.speed = speed;
    }
  }
  return (
      <div>
         <div className='animation-settings'>
           <h1 className='inheader'>Simulation</h1>
           <button id= "startstopp" onClick={changeSpeed(0)} >Stopp</button>
           <button id= "speedone" onClick={changeSpeed(3)} >1</button>
           <button id= "speedtwo" onClick={changeSpeed(2)} >2</button>
           <button id= "speedthree" onClick={changeSpeed(1)} >3</button>
         </div>

         <div className ='add-cars'>
           <h1 className='inheader'>Add car</h1>
           <button id= "addold" onClick={createCar(1)}  >Pre CCS Tesla</button>
           <button id= "adnew"  onClick={createCar(2)}  >New Tesla</button>
           <br></br>
           <button id= "addslow" onClick={createCar(3)}>small non-Tesla</button>
           <button id= "addfast" onClick={createCar(4)}>large non-Tesla</button>
         </div>

         <div className='custom-add'>
           <form>
               <h1 className='inheader'>Add custom car</h1>
               <h3 className='inputfield'>Energy Needed (in kw/h)</h3>
               <input className='infld' type="number" id="energy"></input>
               <h3 className='inputfield'>Peak Charge Power</h3>
               <input className='infld' type="number" id="peakpw"></input>
               <h3 className="inputfield" >End Charge Power</h3>
               <input className='infld' type="number" id="endpw"></input>
               <br></br>
               <input type="submit" value="Submit"></input>
           </form>
         </div>


    
      </div>

  );
}




export default Mp;


