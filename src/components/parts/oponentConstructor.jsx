import React from 'react';

import counter from '../../store/counter';
import datas from '../../data/consts';

import eventsStore from '../../data/eventsStore';

function OponentConstructor(position) {
  const index = datas.eventsMiddle + counter.count;

  const active = eventsStore[index];

  if (position === 'left') {
    return (
      <div className='main_oponent-left'>
        <div className='main_oponent-left-content'>
          <div className='oponent-left_name'>{active.rival1}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='main_oponent-right'>
        <div className='main_oponent-right-content'>
          <div className='oponent-right_name'>{active.rival2}</div>
        </div>
      </div>
    );
  }
}

export default OponentConstructor;
