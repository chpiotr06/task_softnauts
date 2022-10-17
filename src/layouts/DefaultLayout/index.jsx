import PropTypes from 'prop-types';
import logoSoftnauts from '../../assets/logo-softnauts.svg';
import css from './index.module.scss';
import useDatastore from "../../datastore/useDatastore";
import classNames from "classnames";
import NotificationMessage from "../../components/NotificationMessage";

function DefaultLayout({children, nav}) {
  const {user, messages} = useDatastore();

  return (
    <div className={css.DefaultLayout}>
      <header className={css.header}>
        <img className={css.logo} src={logoSoftnauts} alt="Logo Softnauts"/>
        <nav className={css.nav}>{nav}</nav>
        {user && user.email &&
          <div className={css.userData}>
            {user.email}
          </div>
        }
      </header>
      <div className={css.messagesContainer}>
        {messages.map((message, idx) => (
          <NotificationMessage
            key={idx}
            level={message.level}
            message={message.message}
          />
        ))}
      </div>
      <div className={css.content}>
        {children}
      </div>
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.any.isRequired,
  nav: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}
export default DefaultLayout;
