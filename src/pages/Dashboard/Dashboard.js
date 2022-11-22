import styles from "./Dashboard.css"

import { Link } from 'react-router-dom'

import { useAuthValue } from "../../context/AuthContext"
import { useFetchDocument } from "../../hooks/useFetchDocument"
import { useDeleteDocument } from "../../hooks/useDeleteDocument"


const Dashboard = () => {
  const {user} = useAuthValue()
  const uid = user.uid

  const {documents: posts, loading} = useFetchDocument("posts", null, uid)

  const {deleteDocument} = useDeleteDocument("posts")
    if (loading) {
      return <p>Carregando...</p>
    }

  return (
    <div className="dashboard">
        <h2>Dashboard</h2>
        <p>Gerencie os seus posts</p>
        {posts && posts.length === 0 ? (
          <div className="noposts">
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">Criar primeiro post</Link>
          </div>
        ) : (
          <>
            <div className="post_header">
              <span>Título</span>
              <span>Ações</span>
            </div>

            {posts && posts.map((post) => <div key={post.id} className='post_row'>
              <p>{post.title}</p>
              <div>
                <Link to={`/posts/${post.id}`} className='btn btn-outline'>Ver</Link>
                <Link to={`/posts/edit/${post.id}`} className='btn btn-outline'>Editar</Link>
                <button onClick={() => deleteDocument(post.id)} className='btn btn-outline btn-danger'>Excluir</button>
              </div>
            </div>
            )}
          </>
        )}

    </div>

  )
}

export default Dashboard