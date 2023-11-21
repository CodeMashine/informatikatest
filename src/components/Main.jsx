/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import EventRenderer from './parts/EventRenderer';
import eventsStore from '../data/eventsStore';
import Slider from './parts/Slider';
import '../styles/main.css';
import '../styles/oponents.css';
import { observer } from 'mobx-react-lite';
import counter from '../store/counter';
import datas from '../data/consts';
import OponentConstructor from './parts/oponentConstructor';
import offSetHandler from './handlers/offsetHandler';

const Main = observer(() => {
  const events = eventsStore.map((event, index) => {
    return <EventRenderer key={event.dateDay + event.dateMonth} event={event} index={index} />;
  });

  useEffect(() => {
    offSetHandler();
  }, [counter.count]);

  const wheelHandler = (event) => {
    let delta = event.deltaY;
    if (delta > 0) {
      if (counter.count >= datas.eventsMiddle) return;
      counter.increment();
    } else {
      if (counter.count <= -datas.eventsMiddle) return;
      counter.decrement();
    }
  };

  return (
    <main className='app_main' onWheel={wheelHandler}>
      <div className='main_content'>
        {OponentConstructor('left')}
        <Slider content={events} />
        {OponentConstructor('right')}
      </div>
    </main>
  );
});

export default Main;
