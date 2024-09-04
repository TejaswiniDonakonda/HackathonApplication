// import './App.css';
// import { HashRouter,Route,Routes,Link } from 'react-router-dom';
// import DashBoard from './dashboard';
// import HackathonForm from './hackathonForm';
// import DetailsForm from './detailsForm';
// import EditForm from './editForm';

// function App() {
//   return (
//     <HashRouter>
//       <ul className='bg-dark m-0'>
//         <li><h3 className='text-info text-center'><i className='fa fa-book fa-l text-warning'></i>Hackathon <br/>EduTech</h3></li>
//         <li><Link to="/hackathonForm" className='text-decoration-none text-white  ms-5'>Create Challenge </Link></li>
//         <li><Link to="/detailsForm" className='text-decoration-none text-white ms-5'> Overview</Link></li>
//         {/* <li><Link to="/editForm" className='text-decoration-none text-white ms-5'></Link></li> */}
        
//       </ul>
//       <Routes>
      
//         <Route exact path='/' element={<DashBoard/>}/>
//         <Route exact path='/hackathonForm' element={<HackathonForm/>}/>
//         <Route exact path='/detailsForm' element={<DetailsForm/>}/>
//         <Route path="/edit/:id" element={<EditForm/>} />
//       </Routes>
//     </HashRouter>
    
//   );
// }

// export default App;


import React from 'react';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import DashBoard from './dashboard';
import HackathonForm from './hackathonForm';
import DetailsForm from './detailsForm';
import EditForm from './editForm';

function App() {
  return (
    <HashRouter>
      <ul className='bg-dark m-0'>
        <li><h3 className='text-info text-center'><i className='fa fa-book fa-l text-warning'></i>Hackathon <br/>EduTech</h3></li>
        <li><Link to="/hackathonForm" className='text-decoration-none text-white ms-5'>Create Challenge </Link></li>
        <li><Link to="/detailsForm" className='text-decoration-none text-white ms-5'>Overview</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path='/hackathonForm/:id?' element={<HackathonForm />} />
        <Route path='/detailsForm' element={<DetailsForm />} />
        <Route path='/edit/:id' element={<EditForm />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

