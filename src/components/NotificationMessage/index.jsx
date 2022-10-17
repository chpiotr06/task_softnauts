import React from "react";
import css from './index.module.scss';
import classNames from "classnames";
import PropTypes from "prop-types";
import useDatastore from "../../datastore/useDatastore";

function NotificationMessage({level, message}) {
  const {removeMessage} = useDatastore();
  if (!level || !message) return null;

  function removeSelf() {
    removeMessage(level, message)
  }

  return (
    <div className={classNames(css.NotificationMessage, css[level])}>
      <div className={css.body}>{message}</div>
      <button type="button" className={css.close} onClick={removeSelf}>&#215;</button>
    </div>
  )
}

NotificationMessage.propTypes = {
  level: PropTypes.oneOf([
    'error',
    'success',
    'info'
  ]),
  message: PropTypes.string
};

export default NotificationMessage;
