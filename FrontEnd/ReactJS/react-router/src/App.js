/*import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Appointment from './Component/Appointment';
import Patients from './Component/Patients';
import Doctors from './Component/Doctors';

function App() {
  // Shared state
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route 
              exact path="/" 
              element={
                <Home 
                  patients={patients} 
                  doctors={doctors} 
                  appointments={appointments} 
                />
              } 
            />
            <Route 
              exact path="/home" 
              element={
                <Home 
                  patients={patients} 
                  doctors={doctors} 
                  appointments={appointments} 
                />
              } 
            />
            <Route 
              path="/patient" 
              element={<Patients patients={patients} setPatients={setPatients} />} 
            />
            <Route 
              path="/doctor" 
              element={<Doctors doctors={doctors} setDoctors={setDoctors} />} 
            />
            <Route 
              path="/appointment" 
              element={<Appointment appointments={appointments} setAppointments={setAppointments} />} 
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
*/

import React from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlainForm from './PlainForm';
import FormikForm from './FormicForm';
import SimpleFormikYupForm from './SimpleFormikYupForm';
//import GetData from './GetData';
import HocComponent from './HOC';
function App(){
    return(
       
       
    //     <BrowserRouter>
    //   <div className="App">
    //     <Navbar />
    //     <div className="content">
    //       <Routes>
    //         <Route exact path="/" element={<Home/>} />
    //         <Route  path="/home" element={<Home/>} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/contactt" element={<Contact />} />
    //       </Routes>
    //     </div>
    //   </div>
    // </BrowserRouter>
   <div>
     {/* < PlainForm />
     <FormikForm />
     <SimpleFormikYupForm /> */}
 
     <HocComponent/>
   </div>
       
    )
}
export default App