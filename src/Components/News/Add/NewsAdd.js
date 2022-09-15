import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const NewsAdd = () => {
    let navigate = useNavigate();

    const [news, setNews] = useState({
        id: Math.floor(Math.random() * 200),
        title: "",
        name: "",
        author: "",
        description: "",
        urlToImage: "",
        content: "",
        publishedAt: ""
    })

    const initialState = {
        id: Math.floor(Math.random() * 200),
        title: "",
        name: "",
        author: "",
        description: "",
        urlToImage: "",
        content: "",
        publishedAt: ""
    }

    const AddNewsHandler = (e) => {

        axios.post('http://localhost:3001/articles', { ...news })
            .then(function (response) {
                console.log(response);
                setNews(initialState)
                navigate("/");
            })
            .catch(function (error) {
                console.log(error);
            });

        e.preventDefault()

    }

    const changeInputHandler = (e) => {
        setNews({ ...news, [e.target.name]: e.target.value, publishedAt: new Date().toLocaleString() })
    }

    return (<div className="add-news__box">
        <div className="add-news__box-title"><h1>Add News</h1></div>
        <form>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" value={news.title} onChange={changeInputHandler} required />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={news.name} onChange={changeInputHandler} required />
                </div>

                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <input type="text" name="author" value={news.author} onChange={changeInputHandler} required />
                </div>

                <div className="form-group">
                    <label htmlFor="urlToImage">Image:</label>
                    <input type="file" name="urlToImage" value={news.urlToImage} onChange={changeInputHandler} required />
                </div>
            </div>

            <div className="form-row-desc">
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea type="text" name="description" value={news.description} onChange={changeInputHandler} required />
                </div>

                <div className="form-group">
                    <label htmlFor="content">Content:</label>
                    <textarea type="text" name="content" value={news.content} onChange={changeInputHandler} required />
                </div>
            </div>
            <div className="add-news__box-submit">
                <button type="submit" onClick={AddNewsHandler}>Submit</button>
            </div>
        </form>
    </div>);
}

export default NewsAdd;