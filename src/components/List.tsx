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
        return (<IonCard color="danger" key={index}>
        <IonCardHeader>
          <IonCardTitle>{restaurent?.restaurentName || 'No Title'}</IonCardTitle>
          <IonCardSubtitle>{restaurent?.city}, {restaurent?.state}</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>{restaurent?.address}</IonCardContent>
        </IonCard>
        )})}
      {/* <IonItem>
        <IonLabel>Mega Man X</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>The Legend of Zelda</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pac-Man</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Super Mario World</IonLabel>
      </IonItem> */}
    </>
  );
}
export default List;