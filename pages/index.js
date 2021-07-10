import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import Head from 'next/head'
import Image from 'next/image'

import Posts from 'components/Posts/Posts'
import Form from 'components/Form/Form'
import { getPosts } from 'actions/posts'
import useStyles from 'utils/styles'

export default function Home({ title, message }) {
	const [currentId, setCurrentId] = useState(0)
	const dispatch = useDispatch()
	const classes = useStyles()

	useEffect(() => {
		dispatch(getPosts())
	}, [currentId, dispatch])

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>

			<Container maxWidth='lg'>
				<AppBar className={classes.appBar} position='static' color='inherit'>
					<Typography className={classes.heading} variant='h2' align='center'>
						Memories
					</Typography>

					<Image
						className={classes.image}
						src={`/images/memories.png`}
						alt='icon'
						width='60'
						height='60'
					/>
				</AppBar>
				<Grow in>
					<Container>
						<Grid
							container
							justifyContent='space-between'
							alignItems='stretch'
							spacing={3}
							className={classes.mainContainer}
						>
							<Grid item xs={12} sm={7}>
								<Posts setCurrentId={setCurrentId} />
							</Grid>
							<Grid item xs={12} sm={4}>
								<Form currentId={currentId} setCurrentId={setCurrentId} />
							</Grid>
						</Grid>
					</Container>
				</Grow>
			</Container>
		</>
	)
}

// Home.getInitialProps = props => {
// 	console.log(props)
// }

export async function getStaticProps({}) {
	// const res = await fetch('http://localhost:8000/')
	// const data = await res.json()

	// console.log(data)

	return {
		props: {
			title: 'Home',
			message: 'data.message',
		},
	}
}
