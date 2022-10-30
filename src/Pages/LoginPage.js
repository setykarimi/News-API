import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { useAuth, useAuthActions } from "../Provider/AuthProvider";
import { toast } from 'react-toastify';
import Input from "../Components/Input/Input";

const LoginPage = () => {
    const auth = useAuth()
    const setAuth = useAuthActions();
    const navigate = useNavigate();
    const initialValues = {
        name: '',
        password: ''
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        password: Yup.string().required('Password is required')
    })

    const onSubmit = (values) => {
        if (values.name == "sety" && values.password == "123456") {
            setAuth(values);
            toast.success("Welcome Sety")
            navigate('/news/add')
        } else {
            toast.error("Username or Password is incorrect!")
        }
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true
    })

    if (auth) return (<p>You are already logged in</p>)

    return (
        <div className="box">
            <div className="box-title"><h1>Login</h1></div>
            <form onSubmit={formik.handleSubmit}>
                <Input formik={formik} name="name" label="Name" />
                <Input formik={formik} name="password" label="Password" type="password" />
                <div className="box-submit">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;