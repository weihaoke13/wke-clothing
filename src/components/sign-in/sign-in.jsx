import React from 'react';

import FormInput from '../form-input/form-input'
import CustomButton from '../cutom-button/custom-button';

import {signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password:''})
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} 
                    required label='email'
                      handleChange={this.handleChange}
                    ></FormInput>

                    <FormInput 
                        name='password' type='password' value={this.state.password} required
                        handleChange={this.handleChange}
                        label='password'
                        
                    ></FormInput>

                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn> 
                           GOOGLE SIGN IN
                        </CustomButton>

                    </div>

                

                </form>
            </div>
        )
    }
}

export default SignIn;