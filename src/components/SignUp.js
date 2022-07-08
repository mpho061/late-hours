import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { auth, createUserWithEmailAndPassword, db } from '../FireBase/Firebase';
import { addDoc, collection } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    

    const onSubmit = async (data) => {
        const { name, email, password, contact } = data
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password).then(
                
                alert("thank you for signing in")
            )
            const user = res.user;
            await addDoc(collection(db,"users"),{
                uid:user.uid,
                name,
                email,
                contact,
            }).then(
                console.log("profile set")
            ).catch((error)=>{
                console.error(error.message);
            })
        } catch (error) {
            console.error(error)
            alert(error.message)
        }  
    }

    return (
        <Container maxWidth="sm">
            <div>
                <h1> Sign up</h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <TextField
                        id="standard-basic"
                        label="Name"
                        name="name"
                        variant="standard"
                        required
                        fullWidth
                        autoFocus
                        {...register("name", { required: { value: true, message: "Please enter your name" } })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}

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
                    <TextField
                        id="standard-basic"
                        label="Contact"
                        name="contact"
                        variant="standard"
                        required
                        fullWidth
                        autoFocus
                        {...register("contact", { required: { value: true, message: "Please enter your contact" } })}
                    />
                    {errors.contact && <p>{errors.contact.message}</p>}
                    <Button type="submit" variant="contained" color="warning">SignUp</Button>
                    <Link to="signIn" className='Link-nav'>Sign in</Link>
                </form>

            </div>
        </Container>


    );
};

export default SignUp;