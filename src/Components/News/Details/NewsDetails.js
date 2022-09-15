import { CgCalendarDates } from 'react-icons/cg';
import { MdModeEdit } from 'react-icons/md'

const NewsDetails = ({ urlToImage, title, name, description, publishedAt, author, content }) => {
    return (<div className="news-detail__box">
        <div className="news-detail__box-title-section">
            <img src={urlToImage} alt="" />
            <div>
                <div>
                    <h3 className="title">{title} (<small>{name}</small>)</h3>
                    <p>{description}</p>

                    <div className='news-detail__box-details'>
                        <div className="date">
                            <CgCalendarDates />
                            <span> {publishedAt}</span>
                        </div>

                        {author && <div className='author'>
                            <MdModeEdit />
                            <span>{author}</span>
                        </div>}   
                    </div>
                </div>
            </div>
        </div>

        <div className="news-detail__box-content">
            <p>{content}</p>
        </div>
    </div>);
}

export default NewsDetails;