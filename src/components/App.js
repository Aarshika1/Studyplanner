import React from 'react';
import './App.scss';
import BoardContainer from './board/BoardContainer';

function App() {
  return (
    <>
      <BoardContainer />
      <div className='footer d-flex justify-content-center'>
        <a target='_blank' rel="noopener noreferrer"  href='https://aarshikasingh.netlify.app/'>
          © Aarshika Singh, Studyboard
        </a>
      </div>
    </>
  );
}

export default App;
