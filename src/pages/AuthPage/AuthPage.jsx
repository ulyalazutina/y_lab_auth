import styles from './AuthPage.module.css';
import Circle from "../../components/Circle/Circle";
import Wrapper from "../../components/Wrapper/Wrapper";
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { authUser } from '../../api/user';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

export default function AuthPage() {
    let navigate = useNavigate();
    const { loginUser } = useUser();


    const handleSubmitForm = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        authUser({
            email: formData.get('email'),
            password: formData.get('password'),
        })
            .then((result) => {
                loginUser(result);
            })
            .then( ()=> {
                navigate('/')
            })
    }

    return (
        <Wrapper>
            <Circle color={'pink'} />
            <div className={styles.box}>
                <Title>Аутентификация</Title>
                <form onSubmit={handleSubmitForm} action="#" className={styles.form}>
                    <Input type={'email'} name={'email'} id={'email'} placeholder={'test@mail.ru'} required={true}>Почта</Input>
                    <Input type={'password'} name={'password'} id={'password'} placeholder={'test'} required={true}>Пароль</Input>
                    <Button type={'submit'}>Войти</Button>
                </form>
            </div>
            <Circle color={'blue'} />
        </Wrapper>
    );
}