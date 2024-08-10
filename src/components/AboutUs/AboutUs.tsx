import Image from 'next/image';
import styles from './index.module.scss';
import ProfileImage from '@/assets/images/profile.png';


export default function AboutUs() {
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
                a software developer 👨‍💻, in order to apply these skills in the workplace. Currently,
                my goal is to continue improving my skills and furthering my professional
                development in this field. I am motivated by the idea of facing new challenges
                and continuing to learn in the future. 🙌 
                </h3>
                <div className={styles.languages}>
                    
                </div>
            </div>
        </div>
        </>
    )
}