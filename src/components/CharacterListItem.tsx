import {
  IonItem,
  IonLabel,
  IonAvatar,
  IonNote,
  IonBadge
} from '@ionic/react';
import { Character } from '../data/characters';
import './CharacterListItem.css';

interface CharacterListItemProps {
  character: Character;
}

const CharacterListItem: React.FC<CharacterListItemProps> = ({ character }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ALIVE':
        return 'success';
      case 'DEAD':
        return 'danger';
      default:
        return 'medium';
    }
  };

  const getGenderIcon = (gender: string) => {
    switch (gender) {
      case 'MALE':
        return '♂️';
      case 'FEMALE':
        return '♀️';
      default:
        return '⚧️';
    }
  };

  return (
    <IonItem id="character-list-item" detail={false}>
      <IonAvatar slot="start">
        <img 
          alt={character.name} 
          src={character.image}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/80x80?text=No+Image';
          }}
        />
      </IonAvatar>
      
      <IonLabel className="ion-text-wrap">
        <h2>
          {character.name}
          <span className="character-species">
            <IonNote className="species-note"> - {character.species}</IonNote>
          </span>
        </h2>
        
        <div className="character-details">
          <p className="character-info">
            <span className="gender-info">
              {getGenderIcon(character.gender)} Género: {character.gender}
            </span>
          </p>
          <p className="character-info">
            <IonBadge color={getStatusColor(character.status)} className="status-badge">
              Estado: {character.status}
            </IonBadge>
          </p>
        </div>
      </IonLabel>
    </IonItem>
  );
};

export default CharacterListItem;