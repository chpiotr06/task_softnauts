import css from './LoginForm.module.scss';
import Panel from "../../components/Panel";
import PropTypes from "prop-types";

function LoginForm({onLoginAttempt}) {

  // TODO: Your code.
  //       When user clicks "log in" in the form below, You should call function onLoginAttempt(username,password)
  //       which is provided here as a prop.

  return (
    <Panel className={css.LoginForm}>

      // TODO: Modify this as needed

      <form>
        <fieldset>
          <legend>Log in</legend>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <input type="submit" id="submit" value="Log in" />
        </fieldset>
      </form>
    </Panel>
  )
}

LoginForm.propTypes = {
  onLoginAttempt: PropTypes.func.isRequired
}

export default LoginForm;
