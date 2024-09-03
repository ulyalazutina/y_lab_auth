import classNames from 'classnames';
import styles from './Circle.module.css';

export default function Circle({color}) {
    return (
        <div className={classNames(styles.circle, color === 'pink' ? styles.circlePink : styles.circleBlue)}></div>
    );
}
