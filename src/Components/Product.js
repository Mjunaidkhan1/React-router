import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Data } from '.././Data';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '100px',
        justifyContent:"center",
        maxWidth: '90%',
        margin: '0 auto',

        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(40),
            height: theme.spacing(40),
        },
    },
    nav: {
        textDecoration: 'none',
        color: "gray",
        '&:hover': {
            fontSize: '1.5rem',
            color: 'rgb(96, 0, 0)'
        },
    },
    image: {
        height: '80%',
        width: "100%",
    },
    discrption: {
        fontSize: '1.3rem',
        textAlign: "center",
        textTransform: 'capitalize',
        margin: '10px 0px'
    }
}));

export default function Product() {
    const classes = useStyles();
    // console.log(Data, 'data')

    return (
        <div className={classes.root}>
            {Data.map((data) => {
                return (

                    <Paper elevation={3} key={data.id} >
                        <Link className={classes.nav} to={`/productDetail/${data.id}`}>
                            <img className={classes.image} src={data.img} alt='note' />

                            <h6 className={classes.discrption}>{data.discrption}</h6>
                        </Link>
                    </Paper>

                )
            })}

        </div>
    );
}
