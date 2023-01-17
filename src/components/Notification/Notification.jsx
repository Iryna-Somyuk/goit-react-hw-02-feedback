import PropTypes from 'prop-types';
import { VscFeedback } from "react-icons/vsc";
import { Message } from './Notification.styled';

export const Notification = ({ message }) => {
  return <Message>{message} <VscFeedback/></Message>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
