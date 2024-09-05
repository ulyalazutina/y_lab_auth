import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useUser } from "../../hooks/useUser";
import styles from "./HomePage.module.css";

export default function HomePage() {
    const { userData } = useUser();
    return (
        <Wrapper>
            <div className={styles.box}>
            <Title>Добро пожаловать, {Object.keys(userData).length === 0 ? <Link to={'/y_lab_auth/auth'}>Авторизоваться</Link> : userData.user.email}</Title>
            </div>
        </Wrapper>
    );
}
