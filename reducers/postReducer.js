import types from 'constants/types'

export default (posts = [], action) => {
	switch (action.type) {
		case types.FETCH_ALL:
			return action.payload
		case types.LIKE:
			return posts.map(post => (post._id === action.payload._id ? action.payload : post))
		case types.CREATE:
			return [...posts, action.payload]
		case types.UPDATE:
			return posts.map(post => (post._id === action.payload._id ? action.payload : post))
		case types.DELETE:
			return posts.filter(post => post._id !== action.payload)
		default:
			return posts
	}
}
