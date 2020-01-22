import React, { useState, useEffect } from 'react';
import { Sidebar } from '../sidebar';
import { connect } from 'react-redux';
import dialogsActions from '../../../redux/actions/dialogs';

const SidebarContainer = ({ fetchDialogs, items }) => {
  const [searchValue, setSearchValue] = useState('');
  const [filtered, setFiltered] = useState(items);

  useEffect(() => {
    if (!items.length) {
      fetchDialogs();
    } else {
      setFiltered(items);
    }
  }, [fetchDialogs, items]);

  const getChangeInput = value => {
    setFiltered(
      items.filter(
        dialog =>
          dialog.user.fullName.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setSearchValue(value);
  };


  const onSelectTest = (id) =>{
    if(id){
      console.log(id)
    }

    console.log('AAAA')

  };

  return (
    <Sidebar
      items={filtered}
      onSearch={getChangeInput}
      inputValue={searchValue}
      onTest={onSelectTest}
    />
  );
};

export default connect(
  ({ dialogs }) => dialogs,
  dialogsActions
)(SidebarContainer);
