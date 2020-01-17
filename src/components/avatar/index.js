import React from 'react';
import './index.scss';
import generateAvatar from '../../utils/helpers/generateAvatar';

export const Avatar = ({ user }) => {
  if (user.avatar) {
    return <img className="avatar" src={`${user.avatar}`} alt={`avatar`} />;
  } else {
    const { color, colorLighten } = generateAvatar(user._id);
    const name = user.fullName[0].toUpperCase();
    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`
        }}
        className="avatar avatar--symbol"
      >
        {name}
      </div>
    );
  }
};
