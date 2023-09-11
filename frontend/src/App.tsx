import React, { FC } from 'react';
import { LoginForm } from './components/LoginForm';
import { UserStoreProvider } from './hooks/user-auth';
import { Header } from './components/Header/Header';
import { ArticleBoard } from './components/ArticleBoard/ArticleBoard';
import { Article } from './types/article';

const article = {
  title: 'Example Article',
  tags: ['demo', 'test'],
  articleId: '1a2b3c4d',
  author: 'James Langen',
  description: 'The red dog jumped over a house. He ran away. The parents were sad. They ran away. Everyone ran away.'
}

const articles: Article[] = []
for (let i = 50; i > 0; i--) {
  articles.push(article)
}
const App: FC = () => {
  return (
    <UserStoreProvider value={null}>
      <Header />
      <div>
        <ArticleBoard articles={articles} />
      </div>
    </UserStoreProvider>
  );
}

export default App;
