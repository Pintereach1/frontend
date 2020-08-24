import React from 'react'
import { useParams } from "react-router-dom"

function ArticleList() {
    const [articles, setArticles] = useState(null);
    const params = useParams();

    const fetchArticle = (id) => {
        axios
          .get(`https://pintereach1api.herokuapp.com/api/authusers/articles/${id}`)
          .then((res) => setArticles(res.data))
          .catch((err) => console.log(err.response))
    };
    
    
    useEffect(() => {
        fetchArticle(params.id);
    }, [params.id]);
    
    if (!articles) {
        return <div>Loading article information....</div>
    }

    return (
        <div>
            
        </div>
    )
}

export default ArticleList

