import { Article } from "./Article";

export default {
    title: 'Article',
    component: Article,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['components'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
};

const article = {
    title: 'Example Article',
    tags: ['demo', 'test'],
    articleId: '1a2b3c4d',
    author: 'James Langen',
    description: 'The red dog jumped over a house. He ran away. The parents were sad. They ran away. Everyone ran away.'
}

export const Default = {
    args: {
        article,
        // color: {
        //     options: [String('#221D23'), String('#4F3824'), String('#D1603D'), String('#DDB967'), String('#D0E37F'), String('#534359')],
        // }
        color: '#221D23'

    },
};

export const Brown = {
    args: {
        article,
        color: '#4F3824'
    },
};
export const Cinnabar = {
    args: {
        article,
        color: '#D1603D'
    },
};
export const Gold = {
    args: {
        article,
        color: '#DDB967'
    },
};
export const Mindaro = {
    args: {
        article,
        color: '#D0E37F'
    },
};
export const EnglishViolet = {
    args: {
        article,
        color: '#534359'
    },
};