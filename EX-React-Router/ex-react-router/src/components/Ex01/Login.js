import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const formSchema = Yup.object().shape({
        username: Yup.string()
            .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please Enter Valid Email")
            .required('Required'),
        password: Yup.string()
            .required("Please fill out all the fields!!!")
            .matches(/^([A-Za-z0-9!@#$%^&+=._-])+$/, "Please enter a valid password")
            .min(6, "Minimum 6 character"),
    });
    let navigate = useNavigate();
    const sentDataToHome = (event) => {
        navigate("/Home", { state: { categoryUser: event.target.value} });
    };
    return (
        <div className="container mt-5">
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                onSubmit={(value) => sentDataToHome(value.username,value.password)}
                validationSchema={formSchema}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label for="exampleInputEmail1" class="form-label"> User Name </label>
                        <Field type='email' name='username' className='form-control' />
                        {errors.username && touched.username ? <div className="error-block"> {errors.username} </div> : null}
                        <br />
                        <label> Password  </label>
                        <Field type='password' name='password' className='form-control' />
                        {errors.password && touched.password ? <div className="error-block"> {errors.password} </div> : null}
                        <button className="btn btn-success" type="submit"> Login </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
export default Login;