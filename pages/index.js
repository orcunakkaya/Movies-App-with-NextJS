import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MovieCard from '../components/MovieCard.js';

export default function Home({ movies }) {

  return (
    <div className={styles.movies}>
      <Head>
        <title>Movies</title>
        <meta name="description" content="trending movies" />
        <link rel="icon" href="/movieIcon.svg" />
      </Head>
      <h3 className={styles.header}>Weekly Trending Movies</h3>
      <div className={styles.moviesContainer}>
        {
          movies?.map((movie, index) => (
            <MovieCard props={movie} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const movies = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}`)
                  .then(res => res.json())
                  .then(data => data.results)
  return {
    props:{
      movies: movies
    }
  }
}