import axios from 'axios';
import { useEffect, useState } from 'react';
import News from './News';
import './news.scss'

const NewsList = () => {
    const [news, setNews] = useState(null)

    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-08-13&sortBy=publishedAt&apiKey=7670e7d98e774bffb612208090a1b4dd")
            .then((res) => {
                console.log(res.data.articles)
                setNews(res.data.articles.slice(1, 15))
            })
            .catch((err) => console.log(err))
    }, [])

    const renderComments = () => {

        let resultComments = <p>loading ...</p>
        if (news) {
           
            { resultComments = news.map((n, index) => (
                <News
                    key={index}
                    img={n.urlToImage}
                    title={n.title}
                    author={n.author}
                    content={n.content}
                    publishedDate={n.publishedAt}
                    id={index}
                />
            ))}
           
        }

        return resultComments

    }

    return (
        <div className="news-row">
            {renderComments()}
        </div>
    );
}

export default NewsList;