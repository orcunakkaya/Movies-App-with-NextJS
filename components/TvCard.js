import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/TvCard.module.css';

const imageLoader = ({ src }) => {
    return `https://image.tmdb.org/t/p/w500${src}`
}

function TvCard({ props }) {

    return (
        <Link href={`/tv/${props.id}`} passHref>
            <a title={props.original_name} className={styles.tvCard}>
                <Image
                loader={imageLoader}
                src={props.poster_path}
                alt={props.original_name}
                width='250'
                height='400'
                />
            </a>
        </Link>
    );
}

export default TvCard;
