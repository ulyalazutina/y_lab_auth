import styles from './Input.module.css';

export default function Input({type, name, id, placeholder, children, required}) {
    return (
    <label className={styles.label} htmlFor={name}>
        {children}
        <input className={styles.input} type={type} name={name} id={id} placeholder={placeholder} required={required}/>
    </label>
    );
}