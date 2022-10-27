import { useFormik, validateYupSchema } from "formik";
import * as Yup from 'yup';
const LoginPage = () => {

    const initialValues = {
        name: '',
        password: ''
    }

    const validateYupSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        password: Yup.string().required('Password is required'),
    }) 

    const formik = useFormik(() => {
        initialValues,
        validateYupSchema
    })
    return (
        <>
            <h1>Login</h1>
            <form>

                <div>
                    <label>Name:</label>
                    <input type="text" />
                    {formik.errors.name && formik.touched.name && <div className="error">{formik.errors.name}</div>}
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" />
                </div>


                <button type="submit">Submit</button>

            </form>
        </>
    );
}

export default LoginPage;