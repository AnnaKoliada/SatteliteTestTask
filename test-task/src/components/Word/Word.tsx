import React, { useState } from 'react';
import Loader from '../Common/Loader/Loader';
import s from './Word.module.css';

const Word = (props: any) => {
  // const [data, setData] = useState<any>([]);

  // console.log(props);
  // function getFiniteValue(obj: { [x: string]: any }) {
  //   function getProp(o: { [x: string]: any }) {
  //     Object.entries(o).map((el, index) => {
  //       console.log(el);
  //       // if(!Array.isArray(el)){

  //       if (el.every((aa) => typeof aa === 'string')) {
  //         setData([...el]);
  //         console.log(el);
  //       } else
  //         el.forEach((a, i) => {
  //           if (typeof a === 'object' && a.length !== 0) {
  //             getProp(el[1]);
  //           }
  //         });

  //       // } else
  //     });
  //   }
  //   getProp(obj);
  // }
  // props.wordData.map((e: string, index: number) => {
  //   if (typeof e === 'object') {
  //     getFiniteValue(e);
  //   }
  // });
  return (
    <div>
       {JSON.stringify(props.wordData)}
    </div>
  );
};

export default Word;
