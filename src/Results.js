import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results && props.results.meanings) {
    return (
      <div className="Result">
        <h1>{props.results.word}</h1>
        {props.results.phonetic && (
          <p className="phonetic">{props.results.phonetic}</p>
        )}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null; 
  }
}
