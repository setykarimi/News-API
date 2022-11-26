import { Link } from "react-router-dom";
import { MdModeEditOutline } from 'react-icons/md';

const News = ({ title, img, author, content, publishedDate, id }) => {
    return (<div className="news-box">
        {img && <div className="img"><img src={img} alt="" /></div>}
        <div className="news-box__content">
            <div>
                <h3 className="news-box__title">{title}</h3>
                {author && <span className="news-box__author"><MdModeEditOutline /> <b>{author}</b></span>}

                <p className="news-box__desc">{content}</p>
                <div className="news-box__details">
                    <span className="date">{publishedDate}</span>
                    <Link to={`/details/${id}`}>ReadMore</Link>
                </div>
            </div>
        </div>
    </div>);
}

export default News;