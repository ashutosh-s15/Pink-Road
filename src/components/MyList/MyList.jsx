import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from './MyList.module.css';
import { Grid, Button } from "@material-ui/core";

import MyListItem from "./MyListItem";
import Modal from './Modal';

const MyList = () => {
    const myList = useSelector(state => state.list.list);
    console.log(myList);
    const dispatch = useDispatch();

    const closeListHandler = () => {
        dispatch(uiActions.toggle());
    };
    return (
        <>
            <Modal>
                <div className={classes.list}>
                    <div className={classes['list-items']}>
                        {myList?.map(item => (
                            <MyListItem key={item.id} id={item.id} title={item.name} address={item.address} distance={item.distance} />
                        ))}
                    </div>
                </div>
                <Button variant='contained' onClick={closeListHandler} >Close</Button>
            </Modal>
        </>
    );
};

export default MyList;