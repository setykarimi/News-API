import axios from 'axios';
import { useEffect, useState } from 'react';
import News from '@/components/News/News';
import '../news.scss';
import { VscLoading } from 'react-icons/vsc';

const NewsList = () => {
    const [news, setNews] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:3001/articles")
            .then((res) => {
                setNews(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    const renderNews = () => {

        let resultNews = <div className='loading-container'><VscLoading /> <p>Loading News ...</p></div>
        if (news) {
            {
                resultNews = news.map((n) => (
                    <News
                        key={n.id}
                        img={n.urlToImage}
                        title={n.title}
                        author={n.author}
                        content={n.content}
                        publishedDate={n.publishedAt}
                        id={n.id}
                    />
                ))
            }
        }

        return resultNews

    }

    return (
        <div className='news-row'>
            {renderNews()}
        </div>

    );
}

export default NewsList;