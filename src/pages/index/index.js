import styles from './Index.module.css';
import Banner from "components/Banner";
import Post from 'components/Post';

import posts from 'json/posts.json';

export default function Index() {
    return (
        <main>
            <Banner/>
            
            <ul className={styles.posts}>
                {posts.map(post => {
                    return <li key={post.id}><Post post={post}/></li>
                })}
            </ul>
        </main>
    )
}