import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import { clearNotification } from '../../redux/order/orderActions';
import { StyledNotification } from './Notification.styles';

const Notification = () => {
  const dispatch = useDispatch();
  const { notification } = useSelector((state) => state.order);

  const handleClose = () => {
    dispatch(clearNotification());
  };

  return (
    <StyledNotification data-testid="notification">
      <div className="content">
        <h2>{notification}</h2>
        <Button onClick={handleClose}>Ok</Button>
      </div>
    </StyledNotification>
  );
};

export default Notification;
