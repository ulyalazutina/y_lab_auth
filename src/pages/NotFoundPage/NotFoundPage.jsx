import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";
import Title from "../../components/Title/Title";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
    return (
        <Wrapper>
            <div className={styles.box}> 
                <Title>404</Title>
                <p>Страница не найдена</p>
                <Link to={"/y_lab_auth"}>Вернуться на главную</Link>
            </div>
        </Wrapper>
    );
}