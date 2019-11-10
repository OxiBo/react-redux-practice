/*
1. Create context in a separate file of the same file 
(import React from 'react';

export default React.createContext(--DEFAULT VALUES GO HERE IF YOU NEED----); // in this call you can put default values 
different context for different values (set of values)
)

2. import the context or just call it in the component which is a parent component for the nested components
3. Use -  <ResultContext.Provider value={res}> to wrap the component and pass the value you need

4. import the context or just call it in the component which needs the data (your nested component)

 if you only need to pass only one value and you need only one context use 
static contextType = LanguageContext; => example context
and then access it in the component which needs the value like this - const text = this.context === "english" ? "Name" : "Naam" (you use this.context to get the values)

OR if you need a few different contexts use
 <ResultContext.Consumer>{-----HERE SHOULD BE A FUNCTION CALL----
(value) => {
    do something
}
}</ResultContext.Consumer>
  
*/

import React from "react";
import ResultContext from "./contexts/ResultContext";

const Message = props => {
  return (
    <div className="ui icon message">
      <i className="inbox icon"></i>
      <div className="content">
        <div className="header">The result is bigger then 10 now</div>
        <p>Some text.</p>
      </div>

      <ResultContext.Consumer>
        {value => {
          const styles = value.res > 10 ? "change-color" : "";
          return (
            <div className="ui compact menu">
              <a className={`item ${styles}`}>
                <i className="icon mail"></i> Result
                <div className="floating ui red label">Mult by {value.by}</div>
              </a>
              <a className={`item ${styles}`}>
                <i className="icon users"></i> Action
                <div className="floating ui teal label">{value.res}</div>
              </a>
            </div>
          );
        }}
      </ResultContext.Consumer>
    </div>
  );
};

export default Message;
