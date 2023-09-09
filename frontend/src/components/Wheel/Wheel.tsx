import React, { FC } from "react";
import { Article as ArticleType } from "../../types/article";
import { Box } from "@mui/material";
import { Article } from "../Article";

const ARTICLE_COLORS: string[] = ['#221D23', '#4F3824', '#D1603D', '#DDB967', '#D0E37F', '#534359']

type IWheelProps = {
    articles: ArticleType[]
}

export const Wheel: FC<IWheelProps> = ({ articles }) => {
    return <Box display='flex' flexDirection='row'>
        {articles.map((a, i) => {
            const color = ARTICLE_COLORS[i % ARTICLE_COLORS.length];
            return <Box sx={{ margin: '10px' }}>
                <Article article={a} color={color} />
            </Box>
        })}
    </Box>
}