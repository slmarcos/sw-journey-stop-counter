import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Fade from '@material-ui/core/Fade'
import CircularProgress from '@material-ui/core/CircularProgress'

import { initUseRest } from '../../hooks'

type Starships = {
  name: string
  stops: string | number
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      marginBottom: theme.spacing(5)
    }
  },
  contentList: {
    overflow: 'auto',
    height: '60vh',
    width: '100%',
    padding: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

const { useGet } = initUseRest('http://localhost:3010/api')

const HomePage = () => {
  const [distance, setDistance] = React.useState(0)
  const [starships, setStarships] = React.useState<Starships[]>([])
  const [inputError, setInputError] = React.useState(false)

  const [reqData, get] = useGet('/journey/starships/')

  const classes = useStyles()

  React.useEffect(() => {
    if (reqData?.payload?.status === 200) {
      setStarships(reqData.payload.data)
    }
  }, [reqData])

  const submitRequest = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (distance > 0) {
      get(distance)
    } else {
      setInputError(true)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (Number(event.target.value) > 0 && inputError) {
      setInputError(false)
    }
    setDistance(Number(event.target.value))
  }

  return (
    <Grid item container spacing={1} direction="row" justify="center" alignContent="center" alignItems="center" xs={12}>
      <Grid item xs={12}>
        <h1>Star Wars - Starship stop counter</h1>
        <h3>Put in the field below the distance in MGLT</h3>
      </Grid>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={submitRequest}>
        <Grid item container spacing={2} direction="row" justify="center" alignContent="center" alignItems="center" xs={12}>
          <Grid item xs={2}>
            <TextField label="Distance" type="number" fullWidth onChange={handleChange} error={inputError} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">Send</Button>
          </Grid>
        </Grid>
      </form>
      <Grid container spacing={1} direction="row" justify="center" alignContent="center" alignItems="center">
        <div className={classes.contentList}>
          {reqData.loading && <>
            <Grid item xs={12}>
              <CircularProgress />
            </Grid>
          </>}
          {!reqData.loading && starships.map((item, index) => <Fade key={index} in timeout={1500}>
            <Grid item container spacing={1} direction="row" justify="center" alignContent="center" alignItems="center" xs={12}>
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <span>{item.name}</span>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>
                  <span>{item.stops}</span>
                </Paper>
              </Grid>
            </Grid>
          </Fade>)}
        </div>
      </Grid>
    </Grid>
  )
}

export default HomePage
