import { async } from '@firebase/util';
import { Button, Grid, Typography, Paper } from '@mui/material';
import { onSnapshot, where, get } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth } from '../FireBase/Firebase';
import { db } from '../FireBase/Firebase';
import { collection } from 'firebase/firestore';
import { query } from 'firebase/firestore';

const Cart = () => {

    let user = auth.currentUSer
    const [cartList, setCartList] = useState([])

    const fetchCartItems = async () => {
        const q = query(collection(db, 'cart'))
        onSnapshot(q, (querySnapshot) => {
            setCartList(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }
    useEffect(() => {
        fetchCartItems()
    }, [])
    return (
        <div>
            <Paper>
                <Grid>
                    <Grid item>
                        <img />
                    </Grid>
                    <Grid container xm={12}>
                        <Grid container xs item direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography>

                                </Typography>
                                <Typography>

                                </Typography>
                            </Grid>
                        </Grid>
                        <Button>Remove</Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Cart;