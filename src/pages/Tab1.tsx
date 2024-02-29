import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import List from '../components/List';
import Button from '../components/Button';
import { useHistory } from "react-router-dom";

const Tab1: React.FC = () => {
  const history = useHistory();

    const handleClick = ()=>{
        history?.push('/create-restaurent');
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List of Restaurents</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='create-button-container'>
          <Button buttonText='Add to List' handleClick={handleClick}/>
        </div>
        <List/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
