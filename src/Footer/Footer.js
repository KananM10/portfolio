import React, {Component} from 'react';
// import { NavLink } from 'react-router-dom';
import './Footer.css';
import fb from '../assets/fb.svg';
import git from '../assets/git.svg';
import gmail from '../assets/gmail.svg';
import linkedin from '../assets/linkedin.svg';
// import Input from '../Input/Input';
// import Button from '../Button/Button';
// import { updateObject, checkValidity } from '../utility';



class Footer extends Component{

    //  state = {
    //     controls: {
    //         email: {
    //             elementType: 'input',
    //             elementConfig: {
    //                 type: 'email'
    //             },
    //             value: '',
    //             validation: {
    //                 required: true,
    //                 isEmail: true
    //             },
    //             valid: false,
    //             touched: false
    //         },
    //         text: {
    //             elementType: 'textarea',
    //             elementConfig: {
    //                 type: 'text',
    //                 rows: "5"
    //             },
    //             value: '',
    //             validation: {
    //                 required: true
    //             },
    //             valid: false,
    //             touched: false
    //         }
    //     },
    //     my_email: 'kenan.mikayilov.00@gmail.com',
    //     user_Id: 'user_5uDgPhyIV3oQJDFssrAbT'
    // }

    // submitHandler = (event) => {      

    //     event.preventDefault();

    //     const templateId = 'template_SjaHdC89';

    //     this.sendFeedback(this.state.user_Id, templateId, {message: this.state.controls.text.value, from_email: this.state.controls.email.value, reply_to: this.state.my_email})
    //   }

    //   sendFeedback (userId, templateId, variables) {
    //     window.emailjs.send(
    //         userId,
    //         templateId,
    //         variables
    //     ).then(res => {
    //         console.log('Email successfully sent!')
    //     })
    //     // Handle errors here however you like, or use a React error boundary
    //     .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    // }


    // inputChangedHandler = ( event, controlName ) => {
    //     const updatedControls = updateObject( this.state.controls, {
    //         [controlName]: updateObject( this.state.controls[controlName], {
    //             value: event.target.value,
    //             valid: checkValidity( event.target.value, this.state.controls[controlName].validation ),
    //             touched: true
    //         } )
    //     } );
    //     this.setState( { controls: updatedControls } );
    // }


    render(){

        // const formElementsArray = [];
        // for ( let key in this.state.controls ) {
        //     formElementsArray.push( {
        //         id: key,
        //         config: this.state.controls[key]
        //     } );
        // }

        // let form = formElementsArray.map( formElement => (
        //     <Input
        //         key={formElement.id}
        //         elementType={formElement.config.elementType}
        //         elementConfig={formElement.config.elementConfig}
        //         value={formElement.config.value}
        //         invalid={!formElement.config.valid}
        //         shouldValidate={formElement.config.validation}
        //         touched={formElement.config.touched}
        //         changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        // ) );


        return (
            <div className="Footer">
            	<div className="get_In_touch">Get in touch</div>
            	<div className="contact">
            		<div className="fb"><a href="https://www.facebook.com/profile.php?id=100007399969441"><img src={fb} alt="fb" className="icon" /></a></div>
            		<div className="lin"><a href="https://www.linkedin.com/in/kanan-mikayilov-9759aa160/"><img src={linkedin} alt="linkedin" className="icon" /></a></div>
            		<div className="mail"><a href="mailto:kenan.mikayilov.00@gmail.com"><img src={gmail} alt="gmail" className="icon gmail" /></a></div>
            		<div className="git"><a href="https://github.com/KananM10"><img src={git} alt="git" className="icon" /></a></div>
             	</div>
            </div>
        );

    }
}

export default Footer;

           {/* <form onSubmit={this.submitHandler} className="form" >
                {form}
                <Button btnType="send">Send</Button>
            </form>*/}