import React from 'react';

function TabSelector({ id, handleChangeTab, activeId, tab }) {
  return (
    <div>
      <button id={id} onClick={handleChangeTab} className={activeId}>
        {tab}
      </button>
    </div>
  );
}

export default TabSelector;