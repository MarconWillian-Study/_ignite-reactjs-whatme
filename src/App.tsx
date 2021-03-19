import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleSelectGenreId(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar handleSelectGenreId={handleSelectGenreId} />

      <Content selectedGenreId={selectedGenreId} />
    </div>
  )
}