import {Link} from "react-router-dom";
import css from './LoginForm.module.scss';
import Panel from "../../components/Panel";

function LoginForm() {
  return (
    <Panel className={css.LoginForm}>
      <form>
        <fieldset>
          <legend>Log in</legend>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
            <Link to="/forgotten-password">Forgot Your password?</Link>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div>
            <input type="submit" id="submit" value="Log in" />
          </div>
        </fieldset>
      </form>
      <hr />
      <p>Don't have an account yet?</p>
      <Link to="/register">Create an account</Link>
    </Panel>
  )
}

export default LoginForm;
