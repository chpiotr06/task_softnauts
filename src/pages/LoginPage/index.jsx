import css from './index.module.scss';
import DefaultLayout from "../../layouts/DefaultLayout";
import LoginForm from "./LoginForm";
import useAxios from "../../api/useAxios";
import useDatastore from "../../datastore/useDatastore";
import {useNavigate} from "react-router-dom";

function LoginPage() {
  const axios = useAxios();
  const {setAccessToken, setUser} = useDatastore();
  const navigate = useNavigate();

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

      /**
       * TODO: catch errors and pass appropriate feedback to user.
       * TODO: whole part 2
      */


    });
  }

  return (
    <DefaultLayout>
      <div className={css.alignmentWrapper}>
        <LoginForm
          onLoginAttempt={onLoginAttempt}
        />
      </div>
    </DefaultLayout>
  )
}

export default LoginPage;
