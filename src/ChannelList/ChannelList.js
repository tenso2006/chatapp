import React, {Component} from 'react';

const selected =2;

const Channel = ({name, isSelected, onClick}) => {
  console.log(isSelected)
  const className = isSelected ? 'channelList-item ChannelList-item-selected' : 'channelList-item';
  return (
    <div className={className} onClick={onClick}>{name}</div>
  )
};

const ChannelList = ({channels, selectedChannelId, onSelect}) => {
  return (
    <div className="ChannelList">
      {
        channels.map(({id, name}) => {
          const is_Selected = selectedChannelId === id
          const onChannelSelect = () => onSelect(id);
          return <Channel key={id} name={name} isSelected={is_Selected} onClick={onChannelSelect} />
        })
      }
    </div>
  );
};

export default ChannelList
