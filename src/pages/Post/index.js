import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModel from "components/PostModel";
import ReactMarkdown from 'react-markdown';
import styles from './Post.module.css';
import NotFound from "pages/NotFound";
import PageDefault from "components/PageDefault";
import PostCard from "components/PostCard";
import ScrollToTop from "react-scroll-to-top";

export default function Post() {

    const params = useParams();

    const post = posts.find((x) => {
        return x.id === Number(params.id)
    });

    if (!post) {
        return <NotFound />
    }

    const postsRecomendados = posts.filter((p) => p.id !== post.id).slice(0, 4);

    return (
        <PageDefault>
            <PostModel
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className={styles.post_markdown_container}>
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>

                <h1>
                    Outros posts que você pode gostar:
                </h1>

                <ul className={styles.postsRecomendados}>
                    {postsRecomendados.map((p) => {
                        return (
                            <li key={p.id}>
                                <PostCard post={p}/>
                            </li>
                        )
                    })}
                </ul>
            </PostModel>
        </PageDefault>
    )
}