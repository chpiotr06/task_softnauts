import css from './LoginForm.module.scss';
import Panel from "../../components/Panel";
import PropTypes from "prop-types";

function LoginForm({onLoginAttempt}) {

  const clickHandler = event => {
    event.preventDefault();
  }

  /**
   * TODO: implement valid focusing, implement design for smaller devices 
   * TODO: add routes for new account and forgotten password
   * TODO: add code for displaying login errors
   */

  return (
    <Panel className={css.LoginForm}>
      <form>
        <fieldset>
          <legend>Log in</legend>
          <label className={css.emailLabel} htmlFor="email">Email</label>
          <input type="text" id="email" placeholder='Enter email...'/>
          <div className={css.flexRowSpaceBetween}>
            <label htmlFor="password">Password</label>
            <span className={css.blueUnderline}>Forgot your password?</span>
          </div>
          <input type="password" id="password" placeholder='Enter password...'/>
          <input type="submit" id="submit" value="Log in" onClick={clickHandler}/>
        </fieldset>
      </form>
      <div className={css.newAccountSugestion}>
        <span className={css.noAccount}>Don't have an account yet?</span>
        <span className={css.blueUnderline}>Create an account</span>
      </div>
    </Panel>
  )
}

LoginForm.propTypes = {
  onLoginAttempt: PropTypes.func.isRequired
}

export default LoginForm;
