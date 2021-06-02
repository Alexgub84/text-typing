import React, { useState, useEffect, useRef } from "react";

export function TextTyping({ text, seconds }) {
  const [currIndex, setCurrIndex] = useState(0);
  const [textToDisplay, setTextToDisplay] = useState("");
  const interval = useRef();

  useEffect(() => {
    reStartTimerAndState()
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  useEffect(() => {
    
    if (currIndex === text.length) {
        
        reStartTimerAndState()
    }else{
        setTextToDisplay((prevText) => prevText + text.charAt(currIndex));
    }
  }, [currIndex]);

  function nextCount() {
    setCurrIndex((prevIndex) => prevIndex + 1)
  }
  function reStartTimerAndState(){
    setCurrIndex(0)
    setTextToDisplay("")
    clearInterval(interval.current);
    interval.current = setInterval(nextCount, seconds);
  }

  return (
    <div className="text">
      {textToDisplay}
    </div>
  );
}
