import React from 'react';

// import scss 
import css from './box.scss';

// import media
import logo from './images/logo.svg';

// import form components
import Button from 'src/components/form_components/button';
import Input from 'src/components/form_components/input';
import Social from 'src/components/form_components/social';

const LoginBox = () => ( 
    <div className={css.body}>
        <img src={logo} alt={'Oktopus Logo'} />
        <Input type={"email"} placeholder={"username"} />
        <Input type={"password"} placeholder={"password"} />  
        <Social />
        <Button text={'Login'} />
        <div className={css.bottomLinks}>
        <Button text={'Sign up'} anchor={true} />
        <Button text={'Forgot?'} anchor={true} />

        </div>
    </div>
);

export default LoginBox
