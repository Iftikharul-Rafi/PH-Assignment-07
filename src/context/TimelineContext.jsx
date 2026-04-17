import React, { createContext, useState, useEffect } from 'react';
import initialEvents from '../data/timelineEvents.json';

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('timelineEvents');
    return saved ? JSON.parse(saved) : initialEvents;
  });

  useEffect(() => {
    localStorage.setItem('timelineEvents', JSON.stringify(events));
  }, [events]);

  const addEvent = (type, friendName) => {
    const newEvent = {
      id: Date.now(),
      type: type.toLowerCase(),
      friendName,
      date: new Date().toISOString().slice(0, 10)
    };
    setEvents(prev => [newEvent, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ events, addEvent }}>
      {children}
    </TimelineContext.Provider>
  );
};