import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as Yup from 'yup'
import Input from "../../Input/Input";
import Textarea from "../../Input/textarea";
import { useAuth } from "../../../Provider/AuthProvider";
import { useEffect } from "react";
import { toast } from 'react-toastify';



const NewsAdd = () => {
    const navigate = useNavigate();
    const auth = useAuth();

    const initialValues = {
        title: "",
        name: "",
        author: "",
        description: "",
        urlToImage: "",
        content: "",
    }

    const onSubmit = (values) => {
        console.log(values);
        axios
            .post('http://localhost:3001/articles',
                { ...values, publishedAt: new Date().toLocaleString(), id: Math.floor(Math.random() * 200) })
            .then(function (response) {
                navigate("/");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required').min(4, 'Title length is not valid'),
        name: Yup.string().required('Name is required'),
        author: Yup.string().required('Author is required'),
        description: Yup.string().required('Description is required'),
        urlToImage: Yup.string().required('urlToImage is required'),
        content: Yup.string().required('Content is required'),
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validateOnMount: true,
        validationSchema,
        enableReinitialize: true
    })

   
        if (!auth) {
            toast.error( "You are not logged in")
            navigate('/')
        }
   

    return (
        <div className="add-news__box">
            <div className="add-news__box-title"><h1>Add News</h1></div>
            <form onSubmit={formik.handleSubmit}>

                <div className="form-row">
                    <Input formik={formik} name="title" label="Title" />
                    <Input formik={formik} name="name" label="Name" />
                    <Input formik={formik} name="author" label="Author" />
                    <Input formik={formik} name="urlToImage" label="Image" type="file" />
                </div>


                <div className="form-row-desc">
                    <Textarea formik={formik} name="description" label="Description" />
                    <Textarea formik={formik} name="content" label="Content" />
                </div>

                <div className="add-news__box-submit">
                    <button type="submit" disabled={!formik.isValid}>Submit</button>
                </div>
            </form>
        </div>);
}

export default NewsAdd;