import React from 'react';

class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            pswd: '',
            name: ''
        }
    }

    onNamechange = (event) => {
        this.setState({name: event.target.value});
    }

    onEmailchange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordchange = (event) => {
        this.setState({pswd: event.target.value});
    }

    onSubmitReg = () => {
        fetch('https://hidden-crag-05520.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.pswd,
                name: this.state.name
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
        

    }



    render() {
        const { onRouteChange } = this.props;
        return(
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text" 
                                    name="Name"  
                                    id="Name"
                                    onChange= {this.onNamechange} />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address"
                                    onChange= {this.onEmailchange} />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password" 
                                    id="password"
                                    onChange= {this.onPasswordchange} />
                        </div>
                        
                        </fieldset>
                        <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="Register"
                                onClick={this.onSubmitReg} />
                        </div>
                       
                    </div>
                </main>
            </article>
        );
    }

    
}

export default Register;