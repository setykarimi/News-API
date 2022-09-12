import axios from 'axios';
import { useEffect, useState } from 'react';

const News = () => {
    const [news, setNews]= useState(null)

    useEffect(()=> {
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-08-12&sortBy=publishedAt&apiKey=7670e7d98e774bffb612208090a1b4dd")
        .then((res) => {console.log(res.data.articles) 
        setNews(res.data.articles.slice(1, 15))})
        .catch((err) => console.log(err))
    },[])

    const renderComments = () => {

        let resultComments = <p>loading ...</p>
        if (news) {
            resultComments = news.map((n, index) => (
           
                <div key={index}>
                    <p>{n.title}</p>
                </div>
               
            ))
        }

        return resultComments

    }

    return ( 
        <div>
            {renderComments()}
        </div>
     );
}
 
export default News;