import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { VscLoading } from 'react-icons/vsc'
import NewsDetails from "@/components/News/Details/NewsDetails";

const DetailsPage = () => {
    const [news, setNews] = useState(null)
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3001/articles/${id}`)
            .then((res) => {
                setNews(res.data)
            })
            .catch((err) => console.log(err))
    }, [news])

    const renderNews = () => {

        let resultNews = <div className='loading-container'><VscLoading /> <p>Loading News ...</p></div>
        if (news) {
            {
                resultNews = <NewsDetails {...news}/>
            }
        }

        return resultNews

    }

    return (
    <>
        {renderNews()}
    </>);
}

export default DetailsPage;