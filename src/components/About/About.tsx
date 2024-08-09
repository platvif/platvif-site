import styles from './index.module.scss';
import Image from 'next/image';
import Profile from '../../assets/images/profile.png';
import { Button, ButtonGroup } from '@mui/material';
ButtonGroup

export default function About() {

    return (
        <div className={styles.background}>
            <div className={styles.navbar}>
            <ButtonGroup variant="outlined" aria-label="Basic button group">
                <Button className={styles.section_btns}>About Us</Button>
                <Button className={styles.section_btns}>Our Mission</Button>
            </ButtonGroup>
            </div>
        </div>
    )
}