import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

const Contact = () => {
    const formSchema = Yup.object().shape({
        username: Yup.string()
            .required("Please fill out all the fields!!!")
            .min(2, "Minimum 2 character")
            .matches(/^[A-Za-z]+$/, "Only contain A-Z and a-z"),
        password: Yup.string()
            .required("Please fill out all the fields!!!")
            .matches(/^([A-Za-z0-9!@#$%^&+=._-])+$/, "Please enter a valid password")
            .min(6, "Minimum 6 character"),
        phone: Yup.string()
            .required('Enter your phone number')
            .matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,"Please enter a valid phone")
            .min(10, "Valid"),

        message: Yup.string().required('')
    });
    return (
        <div className="container pt-5">
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    phone: '',
                    message: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={formSchema}
            >
                {({ errors, touched }) => (
                    <Form className="">
                        <label for="exampleInputEmail1" class="form-label"> User Name </label>
                        <Field type='email' name='username' className='form-control' />
                        {errors.username && touched.username ? <div className="error-block"> {errors.username} </div> : null}
                        <br />
                        <label> Password  </label>
                        <Field type='password' name='password' className='form-control' />
                        {errors.password && touched.password ? <div className="error-block"> {errors.password} </div> : null}
                        <br />
                        <label> Phone  </label>
                        <Field type='number' name='phone' className='form-control' />
                        {errors.phone && touched.phone ? <div className="error-block"> {errors.phone} </div> : null}
                        <br></br>
                        <label> Message </label>
                        <textarea className='form-control' />
                        <button className="btn btn-success mt-5" type="submit">  Submit  </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
export default Contact