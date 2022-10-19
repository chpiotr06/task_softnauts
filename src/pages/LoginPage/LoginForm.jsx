import { useRef, useState }  from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import css from './LoginForm.module.scss';
import errorSVG from '../../assets/shape.svg';
import Panel from "../../components/Panel";

function LoginForm({onLoginAttempt, errorMessage}) {

  const passwordElement = useRef(null);
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');

  const error = (
    <div className={css.errorWrapper}>
      <img src={errorSVG} alt="Exclamation sign"></img>
      <div>{errorMessage}</div>
    </div>
    )

  const sendAttempt = () => {
    onLoginAttempt(email, password)
    setPassword('');
    setEmail('');
  }

  const handleMail = event => {
    if(event.key === 'Enter'){
      passwordElement.current.focus();
    }
  }
  const handlePassword = (event) => {
    if(event.key === 'Enter'){
      sendAttempt();
    }
  }

  return (
    <Panel className={css.LoginForm}>
      <form>
        <fieldset>
          <legend>Log in</legend>
          <label className={css.emailLabel} htmlFor="email">Email</label>

          <input 
            type="text" 
            id="email" 
            placeholder='Enter email...' 
            value={email} 
            onChange={event => setEmail(event.target.value)}
            onKeyDown={handleMail} 
            style={ errorMessage ? {borderColor: "#C94F4F"} : null}
          />
          {errorMessage ? error : null}
          
          <div className={css.flexRowSpaceBetween}>
            <label htmlFor="password">Password</label>
            <div className={css.blueUnderline}>
              <Link to="/password-recovery" className={css.blueUnderline}>Forgot your password?</Link>
            </div>
          </div>

          <input 
            type="password" 
            id="password" 
            placeholder='Enter password...' 
            ref={passwordElement} 
            value={password} 
            onChange={event => setPassword(event.target.value)} 
            onKeyDown={handlePassword}
            style={ errorMessage ? {borderColor: "#C94F4F"} : null}
          />
          {errorMessage ? error : null}

          <input 
            type="submit" 
            id="submit" 
            value="Log in" 
            onClick={event => event.preventDefault()} 
            onMouseDown={sendAttempt}
          />

        </fieldset>
      </form>
      <div className={css.newAccountSugestion}>
        <div className={css.noAccount}>Don't have an account yet?</div>
        <div className={css.blueUnderline}><Link to="/new-account" className={css.blueUnderline}>Create an account</Link></div>
      </div>
    </Panel>
  )
}

LoginForm.propTypes = {
  onLoginAttempt: PropTypes.func.isRequired
}

export default LoginForm;
