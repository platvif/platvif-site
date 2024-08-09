import Image from 'next/image';
import styles from './index.module.scss';
import HomeImage from '../../assets/images/home-image.jpg';
import { Button, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Init() { 

    return (
        <>
            <div className={styles.background}>
                <div className={styles.content}>
                    <div className={styles.text_content}>
                        <div className={styles.text}>
                            <h3 className={styles.title}>Your Gateway to the Best Restaurants in the World!</h3>
                            <p>At <strong>Platvif</strong>, we transform the way you book and enjoy culinary experiences. Discover, book, and enjoy the best restaurants around the world, all from the comfort of your phone.</p>
                        </div>
                        <div className={styles.action_btns}>
                        <Button variant='outlined' className={styles.mission}>Our Mission</Button>
                        <IconButton className={styles.social_icons}>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton className={styles.social_icons}>
                            <InstagramIcon />
                        </IconButton>
                        </div>
                    </div>
                    <div className={styles.img_content}>
                        <Image src={HomeImage} alt='HomeImage' className={styles.img} />
                    </div>

                </div>
                <div className={styles.circle}></div>
                {/* <Image src={} /> */}
            </div>
        </>
    )
}