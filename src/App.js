import { authUser } from './api/user';
import styles from './App.module.css';
import Button from './components/Button/Button';
import Circle from './components/Circle/Circle';
import Input from './components/Input/Input';
import Title from './components/Title/Title';
import Wrapper from './components/Wrapper/Wrapper';

function App() {

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    authUser({
      email: formData.get('email'),
      password: formData.get('password'),
    })
  }

  return (
    <Wrapper>
      <Circle color={'pink'} />
      <div className={styles.box}>
      <Title>Аутентификация</Title>
        <form onSubmit={handleSubmitForm} action="#" className={styles.form}>
          <Input type={'email'} name={'email'} id={'email'} placeholder={'username@mail.ru'}>Почта</Input>
          <Input type={'password'} name={'password'} id={'password'} placeholder={'*******'}>Пароль</Input>
          <Button type={'submit'}>Войти</Button>
        </form>
      </div>
      <Circle color={'blue'} />
    </Wrapper>
  );
}

export default App;
