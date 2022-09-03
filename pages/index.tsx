import React, { useEffect, useState } from 'react';
import {login,register} from "../service/auth"

type Error = {
    email?:string[]|undefined
    password?:string[]|undefined
}

interface Form {
    email:string;
    password:string;
}

const Login = () => {
    const [form,setForm]=useState<Form>({email:"",password:""})
    const [error,setError]=useState<Error>({email:undefined,password:undefined})

    const handleChange = (e:any) => {
        const {name,value}=e.target
        setForm({...form,[name]:value})
        setError({...error,[name]:undefined})
    }

    const handleSubmit = (e:any) =>{
        e.preventDefault();
        login(form.email,form.password)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            setError(err.data)
            console.log(err)
        })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                    <div className="col-sm-12 col-md-6 col-lg-5">
                        <div className="card">
                            <div className="card-body">
                                <h3>Masuk</h3>
                                <p>silahkan masukkan username dan password untuk masuk</p>
                                <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                                    <div className="form-group mb-3">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" id='email' name='email' onChange={handleChange} className={`form-control ${error?.email && 'is-invalid' }`} />
                                        {error?.email && (
                                        <div className="invalid-feedback">
                                            {error?.email[0]}
                                        </div>
                                        )}
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id='password' name='password' onChange={handleChange} className={`form-control ${error?.password && 'is-invalid' }`} />
                                        {error?.password && (
                                        <div className="invalid-feedback">
                                            {error?.password[0]}
                                        </div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <button type='submit' className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;