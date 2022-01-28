import React, { useState } from 'react';
import { AiOutlineSound } from 'react-icons/ai';
import s from './Phonetic.module.css';

const Phonetic = (props: { audio: string }): JSX.Element | null => {
  const [audio] = useState(props.audio);

  const playAudio = (): void => {
    const newAudio = new Audio(audio);
    newAudio.play();
  };
  return (
    props.audio ?  <div className={s.audio}>
      <AiOutlineSound onClick={playAudio} />
    </div> : null
  );
};
export default Phonetic;
