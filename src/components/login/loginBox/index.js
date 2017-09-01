import React from 'react';

// import scss 
import css from './box.scss'

// import media
import logo from './images/logo.png'

//import form components
import Button from '../../form_components/button';
import Input from '../../form_components/input';
import Social from '../../form_components/social';

const LoginBox = (props) => {
    return ( 
      <div className={css.body}>
        <img src={logo} />
        <Input type={"email"} placeholder={"Email Address"} />
        <Input type={"password"} placeholder={"Password"} />  
        <Social />
        <Button text={'Login'} />
        <Button text={'Forgot?'} anchor={true} />
      </div>
    );

};

export default LoginBox
