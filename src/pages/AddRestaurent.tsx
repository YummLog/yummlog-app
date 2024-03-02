import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Form from '../components/Form';

const AddRestaurent: React.FC = () => {
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

export default AddRestaurent;
