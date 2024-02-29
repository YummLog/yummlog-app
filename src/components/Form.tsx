import React,{useContext} from 'react'
import { useForm } from "react-hook-form"
import { IonInput, IonItem, IonList,IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';
import Button from './Button';
import './form.css'
import {Context as RestaurentContext} from '../contexts/restaurent';
import { useHistory } from "react-router-dom";

interface FormData {
    restaurentName: string;
    address?: string;
    city: string;
    state: string;
    date: string;
  }

const Form = () => {
    const {restaurents,setRestaurents} = useContext(RestaurentContext)
    const history = useHistory();

    const { register, handleSubmit, formState } = useForm<FormData>({
		mode: "onTouched",
		reValidateMode: "onChange"
	})
    const onSubmit = (data: FormData) => {
        // if(setRestaurents){
        //     setRestaurents([...restaurents,data])
        //     history?.push('/list-restaurent');
        // }
        // console.error('Could not set state')
        console.log('data',data)
    }

    console.log(formState)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <IonList>
            <IonItem>
                <IonInput label="Restaurent Name" {...register("restaurentName",{ required: true, maxLength: 60 })}></IonInput>
            </IonItem>
            <IonItem>
                <IonInput label="Address" {...register("address",{ maxLength: 60 })}></IonInput>
            </IonItem>
            <IonItem>
                <IonInput label="City" {...register("city",{ required: true })}></IonInput>
            </IonItem>
            <IonItem>
                <IonInput label="State" {...register("state",{ required: true })}></IonInput>
            </IonItem>
            <IonItem>
                <IonInput label="Date" className='date-time-input'>
                    <IonDatetimeButton datetime="datetime" ></IonDatetimeButton>

                    <IonModal keepContentsMounted={true}>
                        <IonDatetime id="datetime" {...register("date")} ></IonDatetime>
                    </IonModal>
                </IonInput>
            </IonItem>
        </IonList>
        <div className='submit-button'>
            <Button buttonText='Add to List' type='submit'/>
        </div>
    </form>
  )
}

export default Form