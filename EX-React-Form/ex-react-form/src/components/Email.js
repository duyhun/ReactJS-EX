import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
const EmailValidate = () => {
    const formSchema = Yup.object().shape({
        to: Yup.string()
            .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please Enter Valid Email")
            .required('Required'),
        title: Yup.string().required('Required'),
        message: Yup.string()
    });
    return (
        <div className="container pt-6 col-12">
            <Formik
                initialValues={{
                    to: '',
                    title: '',
                    message: '',
                    file: ''
                }}
                onSubmit={(values) => {
                    if (values.to === '' && values.title === '' && values.message === '' && values.file === '') {
                        alert('Fill out all the blank!')
                    }
                    else {

                        alert("Sent successfully!")
                    }
                }}
                validationSchema={formSchema}
            >
                {({ errors, touched }) => (
                    <Form className="pt-2">
                        <label for="exampleInputEmail1" class="form-label"> To  </label>
                        <Field type='text' name='to' className='form-control mb-4' ></Field>
                        {errors.to && touched.to ? <div className="error-block"> {errors.to} </div> : null}
                        <label for="exampleInputEmail1" class="form-label"> Title </label>
                        <Field type='text' name='title' className='form-control mb-4' ></Field>
                        {errors.title && touched.title ? <div className="error-block"> {errors.title} </div> : null}
                        <label for="exampleInputEmail1" class="form-label"> Message  </label>
                        <textarea className='form-control mb-4' name="message"></textarea>
                        {errors.message && touched.message ? <div className="error-block"> {errors.message} </div> : null}
                        <Field type='file' name='file' className='form-control mt-5' aria-label="Upload" ></Field>
                        <button className="btn btn-success mt-5" type="submit" > Submit </button>
                    </Form>
                )}
            </Formik>
        </div>

    )
}
export default EmailValidate;