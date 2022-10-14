import css from './index.module.scss';
import DefaultLayout from "../../layouts/DefaultLayout";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <DefaultLayout>
      <div className={css.alignmentWrapper}>
        <LoginForm />
      </div>
    </DefaultLayout>
  )
}

export default LoginPage;
