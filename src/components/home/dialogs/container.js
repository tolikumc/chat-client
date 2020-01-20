import React, { useState } from 'react';
import { Sidebar } from '../sidebar';

const items = [
  {
    _id: Math.random(),

    text:
      'Consequuntur dolorem expedita in, ipsam ipsum maiores molestias nulla porro rem soluta, suscipit!',
    created_at: 'Thu Jan 16 2020 21:59:37',
    user: {
      _id: '3rwea',
      fullName: 'Artem Maslov',
      avatar: ''
    }
  },
  {
    _id: Math.random(),

    text: 'tias nulla porro rem soluta, suscipit!',
    created_at: 'Thu Jan 16 2020 21:59:37',
    user: {
      _id: 'bdfksaj',
      fullName: 'Петро Штахета',
      avatar: ''
    }
  },
  {
    _id: Math.random(),

    text: 'tias nulla porro rem soluta, suscipit!',
    created_at: 'Thu Jan 16 2020 21:59:37',
    user: {
      _id: 'asdkfhgaskdfjs',
      fullName: 'Петро Штахета',
      avatar: ''
    }
  },
  {
    _id: Math.random(),

    text: 'tias nulla porro rem soluta, suscipit!',
    created_at: 'Thu Jan 16 2020 21:59:37',
    user: {
      _id: '12khds',
      fullName: 'Петро Штахета',
      avatar: ''
    }
  },
  {
    _id: Math.random(),

    text: 'tias nulla porro rem soluta, suscipit!',
    created_at: 'Thu Jan 16 2020 21:59:37',
    user: {
      _id: 'lkjsldu',
      fullName: 'Петро Штахета',
      avatar: ''
    }
  },
  {
    _id: Math.random(),

    text: 'tias nulla porro rem soluta, suscipit!',
    created_at: 'Thu Jan 16 2020 21:59:37',
    user: {
      _id: '/,mvbc.m.',
      fullName: 'Петро Штахета',
      avatar: ''
    }
  },
  {
    _id: Math.random(),

    text: 'tias nulla porro rem soluta, suscipit!',
    created_at: 'Thu Jan 16 2020 21:59:37',
    user: {
      _id: 'qirsaj',
      fullName: 'Петро Штахета',
      avatar: ''
    }
  },
  {
    _id: Math.random(),

    text: 'tias nulla porro rem soluta, suscipit!',
    created_at: 'Thu Jan 16 2020 21:59:37',
    user: {
      _id: 'lskdlygoewpa',
      fullName: 'Петро Штахета',
      avatar: ''
    }
  },
  {
    _id: Math.random(),

    text: 'tias nulla porro rem soluta, suscipit!',
    created_at: 'Thu Jan 16 2020 21:59:37',
    user: {
      _id: 'asldajfhaj',
      fullName: 'Петро Штахета',
      avatar: ''
    }
  },
  {
    _id: Math.random(),

    text: 'tias nulla porro rem soluta, suscipit!',
    created_at: 'Thu Jan 16 2020 21:59:37',
    user: {
      _id: '0-98f-s',
      fullName: 'Петро Штахета',
      avatar: ''
    }
  },
  {
    _id: Math.random(),

    text: 'tias nulla porro rem soluta, suscipit!',
    created_at: 'Thu Jan 16 2020 21:59:37',
    user: {
      _id: 't628-98f-s',
      fullName: 'Петро Штахета',
      avatar: ''
    }
  }
];

export const SidebarContainer = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filtered, setFiltered] = useState(items);

  const getChangeInput = value => {
    setFiltered(
      items.filter(
        dialog =>
          dialog.user.fullName.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setSearchValue(value);
  };

  return (
    <Sidebar
      items={filtered}
      onSearch={getChangeInput}
      inputValue={searchValue}
    />
  );
};
