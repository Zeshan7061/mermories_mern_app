import types from '../constants/types'
import axios from 'axios'

export const getPosts = () => async dispatch => {
	try {
		const { data } = await axios.get('/')

		dispatch({ type: types.FETCH_ALL, payload: data })
	} catch (error) {
		console.log(error.message)
	}
}

export const createPost = post => async dispatch => {
	try {
		const { data } = await axios.post('/', post)

		dispatch({ type: types.CREATE, payload: data })
	} catch (error) {
		console.log(error.message)
	}
}

export const updatePost = (id, post) => async dispatch => {
	try {
		const { data } = await axios.patch(`/${id}`, post)

		dispatch({ type: types.UPDATE, payload: data })
	} catch (error) {
		console.log(error.message)
	}
}

export const likePost = id => async dispatch => {
	try {
		const { data } = await axios.patch(`/${id}/likePost`)

		dispatch({ type: types.LIKE, payload: data })
	} catch (error) {
		console.log(error.message)
	}
}

export const deletePost = id => async dispatch => {
	try {
		await axios.delete(`/${id}`)

		dispatch({ type: types.DELETE, payload: id })
	} catch (error) {
		console.log(error.message)
	}
}
