import React from "react";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div>
        <p>
          {" "}
          <strong>Synonyms: </strong>
        </p>
        <ul className="Synonyms">
          {props.synonyms.map((synonym, index) => {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
