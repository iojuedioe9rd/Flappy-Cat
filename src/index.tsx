import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div style={{ background: "#252525"}}>
      <App />
    </div>
    
    <div>
      <div style={{visibility: 'hidden'}}>joe mama</div>
    </div>
    
  </React.StrictMode>
);
