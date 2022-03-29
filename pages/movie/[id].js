import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Movie.module.css';

const imageLoader = ({ src }) => {
    return `https://image.tmdb.org/t/p/w500${src}`;
}

function MovieDetail({ movie }) {
    const date = new Date(movie.release_date).toLocaleDateString();

    return (
        <div className={styles.movieDetail}>
            <h3 className={styles.head}>{movie.original_title}</h3>
            <Image
            loader={imageLoader}
            src={movie.backdrop_path}
            width='500'
            height='281'
            />
            <div className={styles.container}>
                <div className={styles.overview}>
                    {movie.overview}
                </div>
                <div className={styles.companies}>
                    <div>Genre: </div>
                    {
                        movie.genres.map((genre, index) => (
                            <span key={index}>{genre.name}</span>
                        ))
                    }
                </div>
                <div className={styles.companies}>
                    <div>Production Companies: </div>
                    {
                        movie.production_companies.map((company, index) => (
                            <span key={index}>{company.name}</span>
                        ))
                    }
                </div>
                <div className={styles.companies}>
                    <div>Production Countries: </div>
                    {
                        movie.production_countries.map((country, index) => (
                            <span key={index}>{country.name}</span>
                        ))
                    }
                </div>
                <div className={styles.date}>Release Date: <span>{date}</span></div>
                <div className={styles.movieDuration}>Movie Duration: <span>{`${movie.runtime} min`}</span></div>
                <div className={styles.vote}>Vote Average:  <span>{movie.vote_average}</span></div>
                <div className={styles.urlContainer}>
                    <div>For more information</div>
                    <Link href={movie.homepage} passHref>
                        {movie.homepage}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export async function getStaticPaths() {

    const items = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}`)
        .then(res => res.json());

    const paths = await items.results.map(item => {
        return {
            params: { id: item.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const movie = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}`)
        .then(res => res.json());
    return {
        props: {
            movie,
        }
    }
}

export default MovieDetail;