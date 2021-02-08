import React from 'react';
import WordProps from './Word.types';

const Word = ({ dataId, word }: WordProps) => (
  <div className="sentence__word" data-id={dataId}>
    {word}
  </div>
);

export default Word;
