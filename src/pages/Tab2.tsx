import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import Form from '../components/Form';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add to List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Form/> 
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
