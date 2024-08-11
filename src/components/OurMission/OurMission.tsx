import Image from 'next/image';
import styles from './index.module.scss';
import ProfileImage from '@/assets/images/profile.png';
import { Button } from '@mui/material';
import AppPhoto from '@/assets/images/app.png'; 

export default function OurMission() {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.profile_img}>
            <Image src={AppPhoto} alt='HomeImage' className={styles.img} />
            </div>
            <div className={styles.text_content}>
                <h1 className={styles.title}>Our Mission in PlatVif...</h1>
                <br />
                <h3 className={styles.text}>
                    At <strong>PlatVif</strong>, our mission is to connect people with unique culinary experiences anywhere in the world 👨‍🍳. We understand that every meal is an opportunity to create memories, which is why we've developed a platform that allows our users to book a table at their favorite restaurant, no matter where they are. With just a few steps, you can discover and reserve at the best restaurants around the globe 🌎, ensuring that your next dining experience is as effortless as it is memorable . We are committed to making global culinary exploration accessible, efficient, and enjoyable for everyone. 🙌 
                </h3>
                <div className={styles.social_media}>
                <Button className={styles.social_buttons} variant="outlined">
                    Try it your self! {/* Here is gonna be the platvif website...*/}
                </Button>
                </div>
            </div>
        </div>
        </>
    )
}