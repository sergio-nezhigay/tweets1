import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FollowButtonStyled } from './FollowButton.styled';

export default function FollowButton({ amIFollow, onClick }) {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
    onClick();
  };

  return (
    <FollowButtonStyled
      amIFollow={amIFollow}
      animate={animate}
      onClick={handleClick}
    >
      {amIFollow ? 'Following' : 'Follow'}
    </FollowButtonStyled>
  );
}

FollowButton.propTypes = {
  amIFollow: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
