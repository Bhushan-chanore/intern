import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slidebar from './components/Slidebar';
import Dashboard from './pages/Dashboard';
import Doubts from './pages/Doubts';
// import Teach from './pages/Teach';
import Test from './pages/Test';
import TakeClass from './pages/TakeClass.js';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Tep from './pages/Tep.js';
import Worksheet from './pages/Worksheet.js';
import Mindmap from './pages/Mindmap.js';

const App = () => {
  return (
    <Router>
      <div>
        <div class="shopp">
          <div class="row">
            {/* <div class="col-md-12 col-12 mx-auto"> */}
              <div class="row">

                {/* <!-- left header --> */}
                <div class="part1 col-md-2 md-12 mx-auto">

                  <Slidebar />
                </div>
                  <h2 className='part11'>Chaudhary Chottu Ram Public School</h2>

                {/* <!-- right headerr --> */}
                <div class="part2 col-md-10 md-12 mx-auto">
                  {/* Add your routes here */}
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/Tep" element={<Tep />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/take-class" element={<TakeClass />} />
                    <Route path="/doubts" element={<Doubts />} />

                    <Route path="/Tep" element={<Tep/>}/>
            <Route path="/Worksheet" element={<Worksheet/>}/>
            <Route path="/Mindmap" element={<Mindmap/>}/>
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>



      {/* </div> */}
    </Router>
  );
};

export default App;
