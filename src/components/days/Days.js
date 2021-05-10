import React from "react";
import useWindowDimensions from "../dimensions/useWindowDimensions";


function Days({ DateList, callback, selected_date }) {

  const { width } = useWindowDimensions();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  function date_click(date) {
    callback(date)
  }

  return (
    <div style={{ display: 'flex', fontSize: 16 }}>
      {
        DateList.map((date, i) => {

          //initial states
          var d = new Date(date); 
          var td = new Date();
          var dd = String(d.getDate()).padStart(2, '0');
          var mmm = monthNames[d.getMonth()]
          let opacity = 0.6
          let day = ''
          let date_font = 18
          let day_font = 10

          //set weekname
          if (td.toLocaleDateString() === d.toLocaleDateString()) { day = 'today' }
          else { day = d.toLocaleDateString('en-IN', { weekday: 'long' }) }

          //set focus
          if (new Date(selected_date).toLocaleDateString() === d.toLocaleDateString()) { opacity = 1 }


          //change font for small screen
          if (width < 500) {
            date_font = 12
            day_font = 8
            day = d.toLocaleDateString('en-IN', { weekday: 'short' })
          }
          else {
            date_font = 18
            day_font = 10
          }

          return (
            <div data-testid="date-card" key={i} className="date_container" style={{ opacity: opacity }} onClick={() => { date_click(date) }}>
              {/* date in DD-MMM Format */}
              <div data-testid="date" style={{ fontSize: date_font }}> {dd + " " + mmm} </div>
              {/* Wekname */}
              <span style={{ fontSize: day_font }}>{day}</span>
            </div>
          )
        })
      }


    </div>

  );
}

export default Days;

