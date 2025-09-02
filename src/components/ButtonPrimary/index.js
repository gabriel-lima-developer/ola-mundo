import styles from './ButtonPrimary.module.css';

export default function ButtonPrimary({ text, size }) {
    return (
        <button className={`${styles.buttonPrimary} ${styles[size]}`}>
            {text}
        </button>
    )
}