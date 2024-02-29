import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import RestaurentContext from './contexts/restaurent';

setupIonicReact();

const App: React.FC = () => {


  return (<IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <RestaurentContext >
            <>
          <Route exact path="/list-restaurent">
            <Tab1 />
          </Route>
          <Route exact path="/create-restaurent">
            <Tab2 />
          </Route>
          <Route exact path="/">
            <Redirect to="/list-restaurent" />
          </Route>
          </>
          </RestaurentContext>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/list-restaurent">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>List</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/create-restaurent">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Add to List</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
)};

export default App;
