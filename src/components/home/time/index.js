import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { uk } from 'date-fns/locale';

export const Time = ({ date }) => (
  <>
    {formatDistanceToNow(new Date(date), {
      locale: uk,
      addSuffix: true
    })}
  </>
);
