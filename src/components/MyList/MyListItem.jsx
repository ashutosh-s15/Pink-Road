import React from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Typography } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { listActions } from "../../store/list-slice";

import classes from './MyListItem.module.css';

const MyListItem = (props) => {

    const { id, title, address, distance } = props;
    const dispatch = useDispatch();

    const deleteItemHandler = () => {
        dispatch(listActions.removeItemFromList(id));
    };

    return (
        <>
            <div className={classes['cart-item']}>
                <div className={classes.container}>
                    <Typography variant='h6'>{title}</Typography>
                    <Typography variant='subtitle2'>{distance} away from you</Typography>
                    <div onClick={deleteItemHandler}>
                        <IconButton edge="end" aria-label="delete" >
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyListItem;