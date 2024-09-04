import { Link } from "react-router-dom";
import Circle from "../../components/Circle/Circle";
import Title from "../../components/Title/Title";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useUser } from "../../hooks/useUser";
import styles from "./HomePage.module.css";

export default function HomePage() {
    const { userData } = useUser();
    return (
        <Wrapper>
            <div className={styles.box}>
            {/* <Circle color={"pink"} /> */}
            {/* <Circle color={"blue"} /> */}
            <Title>Добро пожаловать, {Object.keys(userData).length === 0 ? <Link to={'/auth'}>Авторизоваться</Link> : userData.user.email}</Title>
            </div>
        </Wrapper>
    );
}
