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