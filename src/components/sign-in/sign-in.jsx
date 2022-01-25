import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input'
import CustomButton from '../cutom-button/custom-button';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;

        emailSignInStart(email, password);

        // try{
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({email: '', password:''})

        // }catch(error){
        //     console.log(error);
        // }

    }

    handleChange = event => {
        const {value, name} = event.target;



        this.setState({[name]:value})
    }

    render(){
        const {googleSignInStart} = this.props; 
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
                        <CustomButton  
                            type='button' 
                            onClick = {googleSignInStart} isGoogleSignIn> 
                           GOOGLE SIGN IN
                        </CustomButton>

                    </div>

                

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart:(email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn) ;