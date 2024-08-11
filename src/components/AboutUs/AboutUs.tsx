import Image from 'next/image';
import styles from './index.module.scss';
import ProfileImage from '@/assets/images/profile.png';
import { Button, IconButton } from '@mui/material';
import { languages } from '@/constants';
import { useRouter } from 'next/router';
import { GitHub, LinkedIn } from '@mui/icons-material';


export default function AboutUs() {

    const router = useRouter();

    const handleClick = (route:any) => {
        router.push(route);
    } 

    return (
        <>
        <div className={styles.container}>
            <div className={styles.profile_img}>
            <Image src={ProfileImage} alt='HomeImage' className={styles.img} />
            </div>
            <div className={styles.text_content}>
                <h1 className={styles.title}>Me as a Dev...</h1>
                <br />
                <h3 className={styles.text}>
                For many years, I have been committed to finding ways to solve problems safely,
                efficiently, and quickly. As a result of this pursuit, I decided to start my career as
                a <strong>Software Developer 👨‍💻</strong>, in order to apply these skills in the workplace. Currently,
                my goal is to continue improving my skills and furthering my professional
                development in this field. I am motivated by the idea of facing new challenges
                and continuing to learn in the future. 🙌 
                </h3>
                <div className={styles.languages}>
                    {languages.map((item) => (
                        <IconButton className={styles.language_item} onClick={() => handleClick(item.href)}>
                            <Image src={item.url} alt="languages" width={40} height={40}/>
                        </IconButton>
                    ))}
                </div>
                <div className={styles.social_media}>
                <Button className={styles.social_buttons} variant="outlined" startIcon={<GitHub />}>
                    GitHub
                </Button>
                <Button className={styles.social_buttons} variant="outlined" startIcon={<LinkedIn />}>
                    LinkedIn
                </Button>
                </div>
            </div>
        </div>
        </>
    )
}