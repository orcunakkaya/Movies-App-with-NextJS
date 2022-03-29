import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/MovieCard.module.css';

const imageLoader = ({ src }) => {
    return `https://image.tmdb.org/t/p/w500${src}`
}

function MovieCard({props}) {

    return (
        <Link href={`/movie/${props.id}`} passHref>
            <a title={props.original_title} className={styles.movieCard}>
                <Image
                loader={imageLoader}
                src={props.poster_path}
                alt={props.original_title}
                width='250'
                height='400'
                />
            </a>
        </Link>
    );
}

export default MovieCard;