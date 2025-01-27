import { Formik, Field, Form, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";

const FormikFormValidation: React.FC = () => {

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().min(8, "Password must be at least 8 characters").required("Required"),
    });

    return (<Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            console.log(values);
        }}
    >
        <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />

            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />

            <button type="submit">Submit</button>
        </Form>
    </Formik>);
}

export default FormikFormValidation;