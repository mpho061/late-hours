import { async } from '@firebase/util';
import { Button, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { auth, db } from '../FireBase/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async (data) => {
        const{email, password} = data
        try{
            const res = await signInWithEmailAndPassword(auth, email, password).then(()=>{
                alert("Welcome Back")

            })
        }catch(error){
            console.log(error);
            alert(error.message)
        }
        
    }

    

    return (
        <Container maxwidth="sm">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <h2> Sign in</h2>
                <TextField
                    id="standard-basic"
                    label="Email"
                    name="email"
                    variant="standard"
                    required
                    fullWidth
                    autoFocus
                    {...register("email", { required: { value: true, message: "Please enter your email" } })}
                />
                {errors.email && <p>{errors.email.message}</p>}

                <TextField
                    id="standard-basic"
                    label="Password"
                    name="password"
                    variant="standard"
                    required
                    fullWidth
                    autoFocus
                    type="password"
                    {...register("password", { required: { value: true, message: "Please enter your password" } })}
                />
                {errors.password && <p>{errors.password.message}</p>}
                <Button type="submit" variant="contained" color="warning">Sign In</Button>
                <Link to="signIn" className='Link-nav'>Don't have an account? Sign in</Link>
            </form>
        </Container>

    );
};

export default SignIn;