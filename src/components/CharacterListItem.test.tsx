import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CharacterListItem from './CharacterListItem';

vi.mock('@ionic/react', () => ({
  IonItem: ({ children }: any) => <div>{children}</div>,
  IonLabel: ({ children }: any) => <div>{children}</div>,
  IonAvatar: ({ children }: any) => <div>{children}</div>,
  IonNote: ({ children }: any) => <span>{children}</span>,
  IonBadge: ({ children }: any) => <div>{children}</div>,
}));

const mockCharacter = {
  id: 1,
  name: "Fry",
  gender: "MALE",
  status: "ALIVE",
  species: "HUMAN",
  createdAt: "2023-12-02T18:32:33.122015Z",
  image: "https://futuramaapi.com/static/img/human/philip-j_-fry.webp"
};

describe('CharacterListItem', () => {
  it('renders character name', () => {
    render(<CharacterListItem character={mockCharacter} />);
    expect(screen.getByText('Fry')).toBeDefined();
  });
});