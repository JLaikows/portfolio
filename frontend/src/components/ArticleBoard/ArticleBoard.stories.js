import { ArticleBoard } from "./ArticleBoard";

const article = {
    title: 'Example Article',
    tags: ['demo', 'test'],
    articleId: '1a2b3c4d',
    author: 'James Langen',
    description: 'The red dog jumped over a house. He ran away. The parents were sad. They ran away. Everyone ran away.'
}

const articles = []
for (let i = 50; i > 0; i--) {
    articles.push(article)
}

export default {
    title: 'Article Board',
    component: ArticleBoard,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['components'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

export const Default = {
    args: {
        articles: articles
    }
}