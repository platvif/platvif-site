import styles from './index.module.scss'
import { NAV_LINKS } from "@/constants"
import Image from 'next/image'
import Link from "next/link"
import logo from '@/assets/images/platvif.png';

export default function Navbar() {
    
    return (
        <>
            <nav className={styles.nav}>
                {   
                NAV_LINKS.map((link) => (
                    link.type === 'link' ? (
                   <Link className={styles.link} href={link.href} key={link.key} >
                    {link.label}
                   </Link> 
                    ) : (
                        <Image className={styles.logo_main} alt={link.href} src={logo} key={link.key} width={link.width} height={link.height}/>
                    )
                ))
                }
            </nav>
        </>
    )
}