"use client"

import { useState } from "react"

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios";
import Link from "next/link";
import TextError from "@/components/TextError";

const Login = () => {
    const initialValues = {
        username: "",
        password: "",
    }

    const handleSubmitForm = (values) => {
        console.log("Form data", values);
        axios.post("/api/login", { values }).then(res => console.log(res)).catch(error => console.error(error))
    }

    const validationSchema = Yup.object({
        username: Yup.string().required("Required"),
        password: Yup.string()
            .min(8, "Password is too short - should be 8 characters minimum.")
            .required("Required"),
    });

    // state to store if the password is showing or not
    const [isShowingPassword, setIsShowingPassword] = useState(false);
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmitForm} validationSchema={validationSchema}>
            <Form className="w-[90%] md:w-3/5 mx-auto my-[10vh]">
                <h1 className="mb-8">Login to leave a review</h1>
                <div className="formgroup">
                    <label htmlFor="username">Username</label>
                    <Field type="text" id="username" name="username" required />
                    <ErrorMessage name="username" component={TextError} />
                </div>
                <div className="formgroup">
                    <div className="relative">
                        <label htmlFor="password">Password</label>
                        <Field
                            className="w-full"
                            type={isShowingPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="********"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setIsShowingPassword((prev) => !prev)}
                            className="absolute right-4 bottom-3 text-xs font-bold text-gray-400"
                        >
                            {isShowingPassword ? "HIDE" : "SHOW"}
                        </button>
                    </div>
                    <ErrorMessage name="password" component={TextError} />
                </div>
                <button type="submit" className="btn btn-pri-dark p-4 mt-4 w-full text-2xl">Log in</button>
                <p className="mt-4 text-xl text-center">Haven't signed up yet? <Link href="/signup" className="font-bold underline">Sign up here</Link></p>
            </Form>
        </Formik>
    )
}

export default Login