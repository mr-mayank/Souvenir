import React, { useEffect } from "react";

import { Pagination, Stack, PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/posts";
// const Paginate = ({ page, setPage, numPages }) => {
//     const handlePageChange = (page) => {
//         setPage(page);
//         window.scroll(0, 0);
//     };
const Paginate = ({page}) => {
    const dispatch = useDispatch();
    const { numberOfPages } = useSelector((state) => state.posts);
    useEffect(() => {
        if (page) {
            dispatch(getPosts(page));
        }
    }, [page]);
    return (
        <Stack spacing={2} sx={{ my: 5 }}>
        <Pagination
            count={numberOfPages}
            page={Number(page) || 1}
            variant="outlined"
            color="primary"
            renderItem={(item) => (
            <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
            )}
        />
        </Stack>
        );
        };
        

export default Paginate;

/* </Stack> 
         <Stack spacing={2} sx={{ my: 5 }}>
        <Pagination
            count={numPages}
            page={page}
            color="primary"
            onChange={(e) => handlePageChange(e.target.textContent)}
            renderItem={(item) => (
            <PaginationItem {...item} component={Link} to={`/posts?page=${1}`} />
            )}
        />
        </Stack> */