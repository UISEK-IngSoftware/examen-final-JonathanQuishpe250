import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Home from './Home';

vi.mock('@ionic/react', () => ({
  IonPage: ({ children }: any) => <div>{children}</div>,
  IonHeader: ({ children }: any) => <div>{children}</div>,
  IonContent: ({ children }: any) => <div>{children}</div>,
  IonToolbar: ({ children }: any) => <div>{children}</div>, 
  IonTitle: ({ children }: any) => <h1>{children}</h1>,
  IonRefresher: () => <div />,
  IonRefresherContent: () => <div />,
  IonLoading: () => <div />,
  IonToast: () => <div />,
  IonText: ({ children }: any) => <span>{children}</span>,
  IonList: ({ children }: any) => <div>{children}</div>,
  useIonViewWillEnter: () => {}
}));

vi.mock('../components/CharacterListItem', () => ({
  default: () => <div>Character</div>
}));

vi.mock('../data/characters', () => ({
  getCharacters: vi.fn().mockResolvedValue([])
}));

describe('Home', () => {
  it('renders without crashing', () => {
    const { baseElement } = render(<Home />);
    expect(baseElement).toBeDefined();
  });
});