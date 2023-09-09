import React, { FC } from 'react';
import { LoginForm } from './components/LoginForm';
import { UserStoreProvider } from './hooks/user-auth';

const App: FC = () => {
  return (
    <UserStoreProvider value={null}>
      <LoginForm />
    </UserStoreProvider>
  );
}

export default App;
