'use client';

import { useReducer } from 'react';
import uiState from '@/lib/config';
import PageNav from '@/components/PageNav';
import Chat from '@/components/Chat';

type CornerType = 'chat' | 'nav';

interface CornerState {
  corner: CornerType;
}

const initialState: CornerState = {
  corner: uiState.corner as CornerType,
};

function cornerReducer(state: CornerState = initialState): CornerState {
  return state;
}

export default function Corner() {
  const [state] = useReducer(cornerReducer, initialState);

  return (
    <div>
      {state.corner === 'chat' && <Chat />}
      {state.corner === 'nav' && <PageNav />}
    </div>
  );
}
