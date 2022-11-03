import React from 'react'

function Scrollbutton() {
  return (
    <div>        
      <button 
          onClick={() => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }}
          id="btn_top" 
          title="Scroll to Top">▲
      </button>
      <button 
          onClick={() => {
            window.scrollTo({top: 5000, left: 0, behavior: 'smooth'});
          }}
          id="btn_down" 
          title="Scroll to Bottom">▼
      </button>
    </div>
  )
}

export default Scrollbutton;