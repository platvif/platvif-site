import styles from './index.module.scss';
import Image from 'next/image';
import Profile from '../../assets/images/profile.png';
import { Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';
import AboutUs from '../AboutUs/AboutUs';
import OurMission from '../OurMission/OurMission';
ButtonGroup

export default function About() {

    const [selectedComponent, setSelectedComponent] = useState('AboutUs');

    return (
        <div className={styles.background}>
            <div className={styles.navbar}>
            <ButtonGroup variant="outlined" aria-label="Basic button group">
                <Button 
                    variant={selectedComponent == 'AboutUs' ? 'contained' : 'outlined'}
                    className={styles.section_btns}
                    onClick={() => setSelectedComponent('AboutUs')}
                >About Us</Button>
                <Button
                    variant={selectedComponent == 'OurMission' ? 'contained' : 'outlined'}
                    className={styles.section_btns}
                    onClick={() => setSelectedComponent('OurMission')}
                >Our Mission</Button>
            </ButtonGroup>
            </div>
            <div className={styles.content}>
                {selectedComponent === 'AboutUs' && <AboutUs/>}
                {selectedComponent === 'OurMission' && <OurMission/>}
            </div>
        </div>
    )
}