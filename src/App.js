import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Question1 from './Level1/question1';
import Question2 from './Level1/question2';
import Question3 from './Level1/question3';
import Question4 from './Level1/question4';
import Question5 from './Level1/question5';
import Question6 from './Level1/question6';
import Question7 from './Level1/question7';
import Question8 from './Level1/question8';
import Question9 from './Level1/question9';
import Question10 from './Level1/question10';


function App() {
  const [openLevel, setOpenLevel] = useState(null);

  const toggleDropdown = (level) => {
    if (openLevel === level) {
      setOpenLevel(null);
    } else {
      setOpenLevel(level);
    }
  };

  const closeDropdown = () => {
    setOpenLevel(null);
  };

  return (
      <Router>
        <div className="bg-gray-100 min-h-screen">
          <div className="bg-blue-500 p-4 text-white">
            <img src="/fullstackfactoid-github-narrow.png" alt="Banner" className="w-full" />
          </div>

          <nav className="bg-gray-200 p-4 flex justify-between">
            {[1, 2, 3, 4, 5, 6].map((level) => (
                <div className="relative inline-block text-left" key={level}>
                  <button onClick={() => toggleDropdown(level)} className="text-blue-500 hover:underline">
                    Level {level}
                  </button>
                  {openLevel === level && (
                      <div className={`origin-top-${level === 1 ? 'left' : 'right'} absolute ${level === 1 ? 'left-0' : 'right-0'} mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          <Link onClick={closeDropdown} to={`/level${level}/question1`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Question 1</Link>
                          <Link onClick={closeDropdown} to={`/level${level}/question2`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Question 2</Link>
                          <Link onClick={closeDropdown} to={`/level${level}/question3`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Question 3</Link>
                          <Link onClick={closeDropdown} to={`/level${level}/question4`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Question 4</Link>
                          <Link onClick={closeDropdown} to={`/level${level}/question5`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Question 5</Link>
                          <Link onClick={closeDropdown} to={`/level${level}/question6`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Question 6</Link>
                          <Link onClick={closeDropdown} to={`/level${level}/question7`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Question 7</Link>
                          <Link onClick={closeDropdown} to={`/level${level}/question8`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Question 8</Link>
                          <Link onClick={closeDropdown} to={`/level${level}/question9`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Question 9</Link>
                          <Link onClick={closeDropdown} to={`/level${level}/question10`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Question10</Link>


                          {/* ... add other questions */}
                        </div>
                      </div>
                  )}
                </div>
            ))}
          </nav>

          <div className="p-4">
            <Routes>
              <Route path="/level1/question1" element={<Question1 />} />
              <Route path="/level1/question2" element={<Question2 />} />
              <Route path="/level1/question3" element={<Question3 />} />
              <Route path="/level1/question4" element={<Question4 />} />
              <Route path="/level1/question5" element={<Question5 />} />
              <Route path="/level1/question6" element={<Question6 />} />
              <Route path="/level1/question7" element={<Question7 />} />
              <Route path="/level1/question8" element={<Question8 />} />
              <Route path="/level1/question9" element={<Question9 />} />
              <Route path="/level1/question10" element={<Question10 />} />

              {/* ... add other questions */}
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
