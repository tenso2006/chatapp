import React, {Component} from 'react';

const Channels = [
    {id:1, name: 'General Room'},
    {id:2, name: 'Birthday celebration'},
    {id:3, name: 'Phayul'}
];

const Channel = ({name}) => (
  <div className="channelList-item">{name}</div>
);

const ChannelList = () => {
  return (
    <div className="ChannelList">
      {
        Channels.map(({id, name}) => {
          return <Channel key={id} name={name} />
        })
      }
    </div>
  );
};

export default ChannelList
