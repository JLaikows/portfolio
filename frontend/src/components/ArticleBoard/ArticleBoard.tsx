import React, { FC } from "react";
import { ArticleSizes, Article as ArticleType } from "../../types/article";
import { Box } from "@mui/material";
import { Article } from "../Article";

const ARTICLE_COLORS: string[] = ['#221D23', '#4F3824', '#D1603D', '#DDB967', '#D0E37F', '#534359']
// const SIZES: ArticleSizes[] = [ArticleSizes.medium, ArticleSizes.small, ArticleSizes.large, ArticleSizes.xlarge];
const SIZES: ArticleSizes[] = [ArticleSizes.xsmall, ArticleSizes.small, ArticleSizes.medium, ArticleSizes.large, ArticleSizes.xlarge];
type IWheelProps = {
    articles: ArticleType[]
}

export const ArticleBoard: FC<IWheelProps> = ({ articles }) => {
    return (
        <Box >
            <Box sx={{ ...styles.articleBoardInnerContainer, ...styles.articleBoardContainer }}>
                {articles.map((a, i) => (
                    <Article
                        article={a}
                        color={ARTICLE_COLORS[i % ARTICLE_COLORS.length]}
                        size={SIZES[Math.floor(Math.random() * SIZES.length)]}
                        index={i}
                    />
                ))}
            </Box>
        </Box>
    )
}

const styles = {
    articleBoardContainer: { position: 'relative', left: '50%' },
    articleBoardInnerContainer: {
        display: 'grid',
        gridTemplateColumns:
            'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        transform: "translateX(-50%)"
    }
}