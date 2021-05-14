import axios from 'axios'

export default axios.create({
	baseURL: 'https://quiz-builder-4ddde-default-rtdb.europe-west1.firebasedatabase.app/'
})