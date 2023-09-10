export type Article = {
    title: string,
    tags: string[],
    articleId: string,
    author: string,
    description: string
}

export type FullArtcile = Article & {
    description: string;
}

export enum ArticleSizes {
    xsmall = 'xsmall',
    small = 'small',
    medium = 'medium',
    large = 'large',
    xlarge = 'xlarge'
}