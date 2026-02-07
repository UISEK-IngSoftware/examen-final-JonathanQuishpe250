import CharacterListItem from '../components/CharacterListItem';
import { useState } from 'react';
import { Character, getCharacters } from '../data/characters';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  IonLoading,
  IonToast,
  IonText,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const loadCharacters = async () => {
    setLoading(true);
    setError('');
    try {
      const charactersData = await getCharacters();
      setCharacters(charactersData);
    } catch (err) {
      setError('Error al cargar los personajes de Futurama');
      console.error('Error loading characters:', err);
    } finally {
      setLoading(false);
    }
  };

  useIonViewWillEnter(() => {
    loadCharacters();
  });

  const refresh = async (e: CustomEvent) => {
    await loadCharacters();
    e.detail.complete();
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Personajes de Futurama</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Personajes de Futurama
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonLoading isOpen={loading} message="Cargando personajes..." />

        <IonToast
          isOpen={!!error}
          message={error}
          duration={3000}
          color="danger"
          onDidDismiss={() => setError('')}
        />

        {!loading && characters.length === 0 && !error && (
          <div className="empty-state">
            <IonText color="medium">
              <p>No se encontraron personajes</p>
            </IonText>
          </div>
        )}

        {characters.length > 0 && (
          <IonList>
            {characters.map(character => (
              <CharacterListItem key={character.id} character={character} />
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
