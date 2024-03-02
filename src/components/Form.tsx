import React,{useContext} from 'react'
import { useForm } from "react-hook-form"
import { IonInput, IonItem, IonList,IonDatetime, IonDatetimeButton, IonModal, IonSelect, IonSelectOption } from '@ionic/react';
import Button from './Button';
import './form.css'
import {Context as RestaurentContext} from '../contexts/restaurent';
import { useHistory } from "react-router-dom";
import { format } from "date-fns";
import USAstates from '../utils/USAstates';

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
		reValidateMode: "onChange",
        defaultValues: {
            date: format(new Date(),'yyyy-MM-dd'),
        },
	})
    const onSubmit = (data: FormData) => {
        if(setRestaurents){
            setRestaurents([...restaurents,data])
            history?.push('/list-restaurent');
        }
    }

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
                <IonSelect {...register("state",{ required: true })} label="State" placeholder='Select a state'>
                    {USAstates.map((state,index)=><IonSelectOption value={state.value} key={index}>{state.name}</IonSelectOption>)}
                </IonSelect>
            </IonItem>
            <IonItem>
                <IonInput label="Date" className='date-time-input'>
                    <IonDatetimeButton datetime="datetime" ></IonDatetimeButton>

                    <IonModal keepContentsMounted={true}>
                        <IonDatetime 
                            {...register("date")} 
                            id="datetime" 
                            presentation="date" 
                            showDefaultButtons={true} 
                            doneText="All set" 
                            cancelText="Never mind"
                            min={`${new Date().getFullYear()-2}`}
                            max={`${new Date().getFullYear()+2}`}
                            >
                        </IonDatetime>
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