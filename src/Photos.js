import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos && props.photos.length > 0) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map((photos, index) => (
            <div className="col" key={index}>
              <a href={photos.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photos.src.landscape}
                  key={index}
                  alt={photos.src.photographer || "Photo by photographer"}
                />
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
