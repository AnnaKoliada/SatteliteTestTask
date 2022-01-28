import React from 'react';
import Phonetic from '../Phonetic/Phonetic';

const Word = (props: { wordData: any[] }): JSX.Element => {
 
  let count = 0;
  let arr: any = [];
  function getProp(o: any) {
    for (const key in o) {
      count++;
      if (typeof o[key] === 'object') {
        getProp(o[key]);
      } else {
        if (key === 'audio') {
          arr = [
            ...arr,
            <tr key={count} className='table-primary'>
              <th scope='row'>{key}</th>
              <td>
                <Phonetic audio={o[key]} />
              </td>
            </tr>,
          ];
        } else
          arr = [
            ...arr,
            <tr key={count} className='table-primary'>
              <th scope='row'>{key}</th>
              <td> {o[key]}</td>
            </tr>,
          ];
      }
    }

    return arr;
  }
  return (
    <div>
      {props.wordData.map((object: any, index: number) => (
        <table key={index} className='table table-hover'>
          <tbody>{getProp(object)}</tbody>
        </table>
      ))}
    </div>
  );
};

export default Word;
