import css from './index.module.scss';
import PropTypes from "prop-types";
import classNames from "classnames";

function Panel({className, children}) {
  return (
    <div className={classNames(css.Panel, className)}>
      {children}
    </div>
  )
}

Panel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired
}

Panel.defaultProps = {
  className: null
}

export default Panel;
