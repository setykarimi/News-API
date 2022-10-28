import { useFormik } from "formik";
import * as Yup from 'yup';
import { useAuthActions } from "../Provider/AuthProvider";
const LoginPage = () => {
    const setAuth = useAuthActions();
    const initialValues = {
        name: '',
        password: ''
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        password: Yup.string().required('Password is required')
    })

    const onSubmit = (values) => {
        setAuth(values)
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true
    })
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        onChange={formik.handleChange}
                        values={formik.values.name}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.name && formik.touched.name && <div className="error">{formik.errors.name}</div>}
                </div>

                <div>
                    <label>Password:</label>
                    <input
                     type="password"
                     name="password"
                     onChange={formik.handleChange}
                     values={formik.values.password}
                     onBlur={formik.handleBlur} />
                     {formik.errors.password && formik.touched.password && <div className="error">{formik.errors.password}</div>}
                </div>


                <button type="submit">Submit</button>

            </form>
        </>
    );
}

export default LoginPage;