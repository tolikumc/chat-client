import React, { useState, useEffect } from 'react';
import { Sidebar } from '../sidebar';
import { connect } from 'react-redux';
import dialogsActions from '../../../redux/actions/dialogs';

const SidebarContainer = ({ fetchDialogs, items, setCurrentDialogId }) => {
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

  return (
    <Sidebar
      items={filtered}
      onSearch={getChangeInput}
      inputValue={searchValue}
      onSelectDialog={setCurrentDialogId}
    />
  );
};

export default connect(
  ({ dialogs }) => dialogs,
  dialogsActions
)(SidebarContainer);
