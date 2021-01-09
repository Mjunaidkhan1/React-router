import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useParams } from 'react-router-dom';
import { Data } from '.././Data';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // flexWrap: 'wrap',
        justifyContent: "center",
        marginTop: "100px",
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(60),
            height: theme.spacing(80),
        },
    },
    image: {
        height: '100%',
        width: "100%",
    },
    discrption: {
        fontSize: '1.5rem',
        marginLeft: '20px',
        textTransform: 'capitalize',
        margin: '10px 0px',
        textAlign:"center"
    },
    detdiv:{
// backgroundColor:"red",
// width:"100px"
    },
    detval: {
        marginTop:'30px',
        // backgroundColor: "green",
        fontSize:'2rem'
    

    }
}));

export default function ProductDetail() {
    const classes = useStyles();
    const { id } = useParams()
    const data = Data[id - 1]
    console.log(data, 'data')


    return (
        <div className={classes.root}>

            <Paper elevation={3} >
                <img className={classes.image} src={data.img} />
                <h6 className={classes.discrption}>{data.discrption}</h6>
            </Paper>
            <ul className={classes.detdiv}>
            {data.detail.map((det) => {
                return (

                        <li className={classes.detval}>{det.detval}</li>

                        )
                    })}
                    </ul>
        </div>
    );
}
