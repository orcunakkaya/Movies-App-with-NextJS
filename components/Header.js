import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <Link href="/" >
                <a className={styles.head}>
                    <div className={styles.icon}>
                        <Image 
                            src="/movieIcon.svg"
                            alt='movie icon'
                            width='36'
                            height='36'
                            objectFit='contain'
                        />
                    </div>
                    <h1> 
                        THE MOVIES
                    </h1>
                </a>
            </Link>
            
            <div className={styles.mediaType}>
                <Link href='/'><a>Movie</a></Link>
                <Link href='/tv'>TV</Link>
            </div>
        </div>
    );
}

export default Header;