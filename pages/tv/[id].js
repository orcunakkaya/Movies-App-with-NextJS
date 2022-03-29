import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/TvDetail.module.css';

const imageLoader = ({ src }) => {
    return `https://image.tmdb.org/t/p/w500${src}`;
}

function TvDetail({ tv }) {
    return (
        <div className={styles.tvDetail}>
            <h3 className={styles.head}>{tv.original_name}</h3>
            <Image
            loader={imageLoader}
            src={tv.backdrop_path}
            width='500'
            height='281'
            />
            <div className={styles.container}>
                <div className={styles.overview}>
                    {tv.overview}
                </div>
                <div className={styles.companies}>
                    <div>Genre: </div>
                    {
                        tv.genres.map((genre, index) => (
                            <span key={index}>{genre.name}</span>
                        ))
                    }
                </div>
                <div className={styles.companies}>
                    <div>Production Companies: </div>
                    {
                        tv.production_companies.map((company, index) => (
                            <span key={index}>{company.name}</span>
                        ))
                    }
                </div>
                <div className={styles.companies}>
                    <div>Production Countries: </div>
                    {
                        tv.production_countries.map((country, index) => (
                            <span key={index}>{country.name}</span>
                        ))
                    }
                </div>
                <div className={styles.tagline}>Tagline: <span>{tv.tagline}</span></div>
                <div className={styles.episode}>Number of Episodes: <span>{tv.number_of_episodes}</span></div>
                <div className={styles.season}>Number of Seasons: <span>{tv.number_of_seasons}</span></div>
                <div className={styles.vote}>Vote Average:  <span>{tv.vote_average}</span></div>
                <div className={styles.urlContainer}>
                    <div>For more information</div>
                    <Link href={tv.homepage} passHref>
                        {tv.homepage}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export async function getStaticPaths() {

    const items = await fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.API_KEY}`)
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
    const tv = await fetch(`https://api.themoviedb.org/3/tv/${params.id}?api_key=${process.env.API_KEY}`)
        .then(res => res.json());
    return {
        props: {
            tv,
        }
    }
}

export default TvDetail;