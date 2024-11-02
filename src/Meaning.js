import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <ol>
        {props.meaning.definitions
          .slice(0, 3)
          .map(function (definition, index) {
            return (
              <li key={index}>
                <strong>Definition: </strong>
                {definition.definition}
                {definition.example && (
                  <p>
                    <strong>Example: </strong> {definition.example}
                  </p>
                )}
              </li>
            );
          })}
      </ol>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
