import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // position:'absolute',
        maxWidth: "80%",
        margin: '0 auto',
        marginTop: '100px',

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        // height:'300px',
        '&:hover': {
            backgroundColor: 'rgb(221, 221, 221)',
            color: 'rgb(96, 0, 0)'
        },
    },
    heading: {
        color: "blue",
        textTransform: 'uppercase'
    },
    peragraph: {

    },
    button: {
        fontSize: '1.2rem',
        textTransform: 'capitalize',
        padding: '20px',


    },

}));

export default function Home() {
    const [apiData, setApiData] = useState([])
    const [visible, setVisible] = useState(9)

    const loadMore = () => {
        setVisible(visible + 9)
    }

    const GoBack = () => {
        setVisible(visible - 9)
    }

    // console.log(apiData, 'apiData')

    useEffect(() => {
        async function fetchApi() {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts')
            let Data = await data.json()
            setApiData(Data)
        }
        fetchApi()

    }, [])

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                {apiData.slice(0, visible).map((Data) => {
                    return (
                        <Grid item lg={4} md={6} sm={12} key={Data.id}>
                            <Paper className={classes.paper}>
                                <h1 className={classes.heading} >{Data.title.slice(0, 10)}</h1>
                                <p className={classes.peragraph}>{Data.body.slice(0, 100)}</p>
                            </Paper>
                        </Grid>

                    )
                })}
            </Grid>

            {
                (visible === 9)
                    ?
                    <Button className={classes.button} onClick={loadMore} color="primary">
                        load more...
                    </Button>
                    :
                    (visible > apiData.length)
                        ?
                        <Button className={classes.button} onClick={GoBack} >
                            go back
                        </Button>
                        :
                        <div>
                            <Button className={classes.button} onClick={loadMore} color="primary">
                                load more...
                            </Button>
                            <Button className={classes.button} onClick={GoBack} >
                                go back
                            </Button>
                        </div>

            }
        </div>
    );
}
