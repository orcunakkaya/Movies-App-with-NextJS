import Head from 'next/head';
import styles from '../styles/TV.module.css';
import TvCard from '../components/TvCard';

function TV({ tv }) {

    return (
        <div className={styles.tv}>
            <Head>
                <title>TV Shows</title>
                <meta name="description" content="trending tv shows" />
                <link rel="icon" href="/movieIcon.svg" />
            </Head>
            <h3 className={styles.header}>Weekly Trending TV Shows</h3>
            <div className={styles.tvContainer}>
                {
                tv?.map((tv, index) => (
                    <TvCard props={tv} key={index} />
                ))
                }
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const tv = await fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.API_KEY}`)
                    .then(res => res.json())
                    .then(data => data.results)
    return {
      props:{
        tv: tv,
      }
    }
  }

export default TV;