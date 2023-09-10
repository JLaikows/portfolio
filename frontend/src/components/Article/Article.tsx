import React, { CSSProperties, FC } from "react";
import { Article as ArticleType, ArticleSizes } from "../../types/article";
import { Box } from "@mui/material";

type IArticleProps = {
    article: ArticleType,
    color: string;
    size: ArticleSizes;
    index?: number
}

export const Article: FC<IArticleProps> = ({ article, color, size, index = 0 }) => {
    const { title, tags, description } = article
    console.log(size);
    return (
        <Box sx={{ ...styles.articleContainer(color), ...styles[size] }} className="articleStyle" key={index}>
            <img style={{ ...styles.imageContainer, backgroundColor: color }} src={`https://source.unsplash.com/random/500x${styles[size].height + index}?sig=${article.title + index + size}}`} />
            <Box className="pin-example" sx={{ display: 'flex', flexDirection: 'column', padding: '5px 10px 5px 10px', position: 'absolute', bottom: 0 }}>
                <Box className="hide-until-focus" sx={{ display: 'none', fontSize: '20px' }}>{title}</Box>
                <Box className="hide-until-focus" sx={{ display: 'none', flexDirection: 'row', paddingLeft: '3px' }}>
                    {tags.map((t, i) => {
                        return <Box key={t} sx={{ fontSize: '10px', paddingRight: '3px', color: 'darkgray' }}>{`#${t}`}</Box>
                    })}
                </Box>
                <Box className="hide-until-focus" sx={{ display: 'none' }}>{description}</Box>
            </Box>
        </Box>
    )
}

const styles = {
    articleContainer: (color: string) => ({
        top: '0px',
        margin: '5px',
        position: 'relative',
        backgroundColor: color,
        padding: '0%',
        border: `1px solid ${color}`,
        borderRadius: '15px',
        overflow: 'hidden',
        width: '225px',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#F6F6F6',
            "& .pin-example": {
                backgroundColor: '#F6F6F6'
            },
            "& .hide-until-focus": {
                display: 'flex'
            }
        }
    }),
    imageContainer: {
        width: '100%',
        height: '100%',
        borderTopRightRadius: '9px',
        borderTopLeftRadius: '9px',
        objectFit: 'fill'
    } as CSSProperties, //temporary typecasting unti; CSSProperties is updated to include objectFit
    [ArticleSizes.xsmall]: {
        height: '150px',
        gridRowEnd: 'span 17'
    },
    [ArticleSizes.small]: {
        height: '200px',
        gridRowEnd: 'span 22'
    },
    [ArticleSizes.medium]: {
        height: '300px',
        gridRowEnd: 'span 32'
    },
    [ArticleSizes.large]: {
        height: '350px',
        gridRowEnd: 'span 37'
    },
    [ArticleSizes.xlarge]: {
        height: '400px',
        gridRowEnd: 'span 42'
    },
}

