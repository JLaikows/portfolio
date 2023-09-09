import React, { FC } from 'react';
import { LoginForm } from './components/LoginForm';
import { UserStoreProvider } from './hooks/user-auth';

const App: FC = () => {
  return (
    <div>
      <UserStoreProvider value={null}>
        <LoginForm />
      </UserStoreProvider>
    </div>
  );
}

export default App;
