import PropTypes from 'prop-types';
import logoSoftnauts from '../../assets/logo-softnauts.svg';
import css from './index.module.scss';

function DefaultLayout({children, nav}) {
  return (
    <div className={css.DefaultLayout}>
      <header className={css.header}>
        <img className={css.logo} src={logoSoftnauts} alt="Logo Softnauts"/>
        <nav className={css.nav}>{nav}</nav>
      </header>
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
