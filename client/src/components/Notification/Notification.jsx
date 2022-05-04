import { NotificationContainer } from './NotificationStyles';

const Notification = (props) => {
  return (
    <NotificationContainer isVisible={props.isVisible}>
      {props.children}
    </NotificationContainer>
  );
};

export default Notification;
