import styles from './Post.css'

import {useParams} from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const Post = () => {
    const { id } = useParams()
    const {document: post, loading} = useFetchDocument("posts", id)
  return (
    <div className='post_container'>
        {loading && <p>Carregando post...</p>}
        {post && (
            <>
                <h1>{post.tittle}</h1>
                <img src={post.image} alt={post.tittle}></img>
                <p>{post.body}</p>
                <h3>Este post trata sobre:</h3>
                <div className='tags'>
                    {post.tagsArray.map((tag) => (
                        <p key={tag}><span>#</span>{tag}</p>
                    ))}
                </div>
            </>
        )}
    </div>
  )
}

export default Post