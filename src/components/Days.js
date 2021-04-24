import React, { useState, useEffect } from "react";
import useWindowDimensions from "./useWindowDimensions";


function Days({ date,opacity,callback }) {

  const [day,set_day] = useState('')
  const [dd_mmm,set_dd_mmm] = useState('')
  const { width } = useWindowDimensions();
  const [date_font,set_date_font] = useState()
  const [day_font,set_day_font] = useState()


  useEffect(() => {
    var d = new Date(date);
    var td = new Date();

    var today = new Date(date);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    var dd = String(today.getDate()).padStart(2, '0');
    var mmm = monthNames[today.getMonth()]

    set_dd_mmm(dd + " " + mmm)

    if(td.toLocaleDateString() === d.toLocaleDateString() )
    {
      set_day("Today")
    }
    else{
      set_day(d.toLocaleDateString('en-IN', { weekday: 'long' }))

    }

    if(width<500)
    {
      set_date_font(12)
      set_day_font(8)
      set_day(d.toLocaleDateString('en-IN', { weekday: 'short' }))

    }
    else
    {
      set_date_font(18)
      set_day_font(10)
    }

  }, [width,date])

  function click(date){

    callback(date)

  }

  return (
    <div  className="date_container" style={{opacity: opacity}} onClick={()=>{click(date)}}>
    <div  style={{fontSize:date_font}}> {dd_mmm} </div>
    <span style={{fontSize:day_font}}>{day}</span>       


    </div>
  );
}

export default Days;
