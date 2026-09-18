import { useState } from "react";
import api from '~/axios'
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {

    // const [about, setAbout] = useState({})

    const [formData, setFormData] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const handleAlert = (showError) => {
        Swal.fire({
            title: 'Error',
            text: showError,
            icon: 'error',
            confirmButtonText: 'Okay'
        });
    }

    const onChangeInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const postData = async () => {

        await api.get('/sanctum/csrf-cookie');

        try {
            await api.post(
                `/api/login`,
                {
                    email: formData.email,
                    password: formData.password
                }
            );
            navigate('/dashboard')

        } catch (error) {
            // console.log("RESPONSE:", error.response);
            // console.log("RESPONSE DATA:", error.response?.data);
            if (error.response && error.response.status === 422) {
                setErrors(error.response?.data.errors)
            }
            if (error.response && error.response.status === 401) {
                handleAlert(error.response?.data.message)
            }
        }
    }


    return (
        <>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 col-lg-5">
                            <div className="login-wrap p-4 p-md-5">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-user-o"></span>
                                </div>
                                <h3 className="text-center mb-4">Sign In</h3>
                                <form onSubmit={onSubmit} className="login-form">

                                    <div className="form-group">
                                        <input type="text" id="email" name="email" className="form-control rounded-left" placeholder="Email" onChange={onChangeInput} />
                                        <p className="text-danger">
                                            {errors.email}
                                        </p>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" id="password" name="password" className="form-control rounded-left" placeholder="Password" onChange={onChangeInput} />
                                        <p className="text-danger">
                                            {errors.password}
                                        </p>
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="form-control btn btn-primary rounded submit px-3" onClick={postData}>Login</button>
                                    </div>
                                    <div className="form-group d-md-flex">
                                        <div className="w-50">
                                            {/* <label className="checkbox-wrap checkbox-primary">Remember Me
                                                <input type="checkbox" checked />
                                                <span className="checkmark"></span>
                                            </label> */}
                                        </div>
                                        <div className="w-50 text-md-right">
                                            <a href="#">Forgot Password</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}