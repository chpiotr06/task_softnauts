import css from './index.module.scss';
import DefaultLayout from "../../layouts/DefaultLayout";
import LoginForm from "./LoginForm";
import { useState, useEffect } from "react";
import useAxios from "../../api/useAxios";
import useDatastore from "../../datastore/useDatastore";
import {useNavigate} from "react-router-dom";

function LoginPage() {
  const axios = useAxios();
  const {setAccessToken, setUser} = useDatastore();
  const navigate = useNavigate();
  const [ errorMessage, setErrorMessage ] = useState('') ;
  const [ errorValue, setErrorValue ] = useState(0);

  const {addMessage} = useDatastore();
  useEffect(() => {
    if(errorValue >= 500){
      addMessage('error','Server is offline, try again later'); 
    } 
    if(errorValue === 400){
      setErrorMessage("Something went wrong, try again")
    }
    if(errorValue === 401){
      setErrorMessage("Incorect user name or password");
    }

  }, [errorValue])

  function onLoginAttempt(username, password) {
    axios.post('/api/users/login', {
      username,
      password
    }).then((response) => {

      if (response.status === 200) {
        setAccessToken(response.data.token);
        setUser(response.data.user);
        navigate('/')
      }
      
    }).catch((error) => {
      setErrorValue(error.response.status);
    });
  }

  return (
    <DefaultLayout>
      <div className={css.alignmentWrapper}>
        <LoginForm
          onLoginAttempt={onLoginAttempt}
          errorMessage={errorMessage}
        />
      </div>
    </DefaultLayout>
  )
}

export default LoginPage;
