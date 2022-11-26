import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as Yup from 'yup';
import Input from "@/components/Input/Input";
import Textarea from "@/components/Input/textarea";
import { useAuth } from "@/provider/AuthProvider";
import { toast } from 'react-toastify';

const NewsAdd = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    
    const initialValues = {
        title: "",
        name: "",
        author: "",
        description: "",
        url: "",
        content: "",
    }

    const onSubmit = (values) => {
        axios
            .post('http://localhost:3001/articles',
                { ...values, urlToImage: values.url.replace('C:\\fakepath\\','src/assets/').split(" ").join(""), publishedAt: new Date().toLocaleString(), id: Math.floor(Math.random() * 200) })
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
        url: Yup.string().required('urlToImage is required'),
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
        toast.error("You are not logged in")
        navigate('/')
    }


    return (
        <div className="box">
            <div className="box-title"><h1>Add News</h1></div>
            <form onSubmit={formik.handleSubmit}>

                <Input formik={formik} name="title" label="Title" />
                <Input formik={formik} name="name" label="Name" />
                <Input formik={formik} name="author" label="Author" />
                <Input formik={formik} name="url" label="Image" type="file" />
                <Textarea formik={formik} name="description" label="Description" />
                <Textarea formik={formik} name="content" label="Content" />

                <div className="box-submit">
                    <button type="submit" disabled={!formik.isValid}>Submit</button>
                </div>
            </form>
        </div>);
}

export default NewsAdd;