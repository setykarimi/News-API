const Textarea =  ({formik, label, type = "text", name}) => {
    return (
        <div className="form-group">
            <label htmlFor={label}>{label}:</label>
            <div>
                <textarea
                    type={type}
                    name={name}
                    {...formik.getFieldProps({name})}
                >
                </textarea>
                {formik.errors[name] && formik.touched[name] && <div className="error">{formik.errors[name]}</div>}
            </div>
        </div>
    );
}
 
export default Textarea;