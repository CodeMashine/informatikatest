/* eslint-disable react/prop-types */
import React from 'react';
import '../../styles/hexagon.css';
import counter from '../../store/counter';
import datas from '../../data/consts';

function EventRenderer({ event, index }) {
  const test = () => {
    counter.setCounter(index - datas.eventsMiddle);
    console.log(event.place);
  };

  const active = counter.count + datas.eventsMiddle;

  let output;

  let nameClass = 'main_hexagon';

  if (index === datas.eventsMiddle) {
    nameClass += ' middle';
  }

  if (index === active) {
    nameClass += ' active';
  }

  if (index === active + 1) {
    nameClass += ' slave';
  }

  if (index === active - 1) {
    nameClass += ' slave';
  }

  if (index === datas.eventFirst + 1) {
    nameClass += ' upper';
  }

  if (index === datas.eventLast - 1) {
    nameClass += ' lower';
  }

  if (index === datas.eventFirst) {
    nameClass += ' first';
  }

  if (index === datas.eventLast) {
    nameClass += ' last';
  }

  if (index >= datas.eventsMiddle + 1 + active || index <= active - datas.eventsMiddle - 1) {
    nameClass += ' hide';
  }

  if (index === active) {
    output = (
      <div className={nameClass} onClick={test}>
        <div className='hexagon_content'>
          <div className='hexagon_place'>{event.place}</div>
          <div className='hexagon_date'>
            {event.dateDay} {event.dateMonth}
          </div>
          <div className='hexagon_time'>{event.time}</div>
          <button className='hexagon_buy-btn'>Купить билет</button>
        </div>
      </div>
    );
  } else {
    output = (
      <div className={nameClass} onClick={test}>
        <div className='hexagon_content'>
          <div className='hexagon_day'>{event.dateDay}</div>
          <div className='hexagon_month'>{event.dateMonth}</div>
        </div>
      </div>
    );
  }

  return output;
}

export default EventRenderer;
