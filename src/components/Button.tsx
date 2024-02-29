import { IonButton } from '@ionic/react';

interface ButtonProps {
    buttonText:string;
    handleClick? : ()=>void;
    type?: 'button' | 'submit';
    disabled?: boolean;
}

const Button = ({buttonText, handleClick, type='button', disabled = false}:ButtonProps)=> {
    
  return (
      <IonButton onClick={handleClick} type={type} disabled={disabled}>{buttonText}</IonButton>
  );
}
export default Button;