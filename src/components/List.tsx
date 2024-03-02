import { IonLabel,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { useContext } from 'react';
import {Context as RestaurentContext} from '../contexts/restaurent';
import './list.css'

const List = () => {
    const {restaurents} = useContext(RestaurentContext)

    if(restaurents.length === 0){
        return (
            <IonLabel className='empty-list'>Nothing to display. Please add restaurents</IonLabel>
        )
    }

  return (
    <>
      {restaurents.map((restaurent,index)=>{
        return (<IonCard color='light' key={index}>
        <IonCardHeader>
          <IonCardTitle>{restaurent?.restaurentName || 'No Title'}</IonCardTitle>
          <IonCardSubtitle>{restaurent?.city}, {restaurent?.state}</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>{restaurent?.address}</IonCardContent>
        </IonCard>
        )})}
    </>
  );
}
export default List;