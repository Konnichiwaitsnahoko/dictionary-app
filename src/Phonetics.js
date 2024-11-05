import React from "react";

export default function Phonetic(props) {
  const audioRef = React.useRef(null);

  function playAudio() {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }

  return (
    <div className="Phonetic">
      {props.phonetic.audio && (
        <div>
          <button onClick={playAudio}>🔊</button>
          <audio ref={audioRef} src={props.phonetic.audio} />
          <p>{props.phonetic.text}</p>
        </div>
      )}
    </div>
  );
}
