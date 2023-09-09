import React, { FC } from "react";
import { Article as ArticleType } from "../../types/article";
import { Box } from "@mui/material";
import * as styles from "./styles"

type IArticleProps = {
    article: ArticleType,
    color: string;
}

export const Article: FC<IArticleProps> = ({ article, color }) => {
    const { title, author, tags, articleId, description } = article
    return (
        <Box sx={styles.articleContainer(color)} className="articleStyle">
            <Box sx={{
                width: '100%',
                height: '60%',
                backgroundColor: color,
                borderTopRightRadius: '9px',
                borderTopLeftRadius: '9px',
            }} />
            <Box sx={{ display: 'none', flexDirection: 'column', padding: '5px 10px 5px 10px' }}>
                <Box sx={{ fontSize: '20px' }}>{title}</Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', paddingLeft: '3px' }}>
                    {tags.map((t, i) => {
                        return <Box key={t} sx={{ fontSize: '10px', paddingRight: '3px', color: 'darkgray' }}>{`#${t}`}</Box>
                    })}
                </Box>
                <Box>{description}</Box>
            </Box>
            <Box className="article-default-hover">{title}</Box>
        </Box>
    )
}

