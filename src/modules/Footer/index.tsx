import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div>Terms</div>
            <div>Privacy</div>
            <div>Security</div>
            <div>Contact us</div>
        </div>
    );
};

export default Footer;
