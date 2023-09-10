import { ArticleSizes } from "../../types/article";
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

export const XSmall = {
    args: {
        article,
        // color: {
        //     options: [String('#221D23'), String('#4F3824'), String('#D1603D'), String('#DDB967'), String('#D0E37F'), String('#534359')],
        // }
        color: '#221D23',
        size: ArticleSizes.xsmall
    },
};
export const Small = {
    args: {
        article,
        // color: {
        //     options: [String('#221D23'), String('#4F3824'), String('#D1603D'), String('#DDB967'), String('#D0E37F'), String('#534359')],
        // }
        color: '#221D23',
        size: ArticleSizes.small
    },
};
export const Medium = {
    args: {
        article,
        // color: {
        //     options: [String('#221D23'), String('#4F3824'), String('#D1603D'), String('#DDB967'), String('#D0E37F'), String('#534359')],
        // }
        color: '#221D23',
        size: ArticleSizes.medium
    },
};
export const Large = {
    args: {
        article,
        // color: {
        //     options: [String('#221D23'), String('#4F3824'), String('#D1603D'), String('#DDB967'), String('#D0E37F'), String('#534359')],
        // }
        color: '#221D23',
        size: ArticleSizes.large
    },
};
export const XLarge = {
    args: {
        article,
        // color: {
        //     options: [String('#221D23'), String('#4F3824'), String('#D1603D'), String('#DDB967'), String('#D0E37F'), String('#534359')],
        // }
        color: '#221D23',
        size: ArticleSizes.xlarge
    },
};