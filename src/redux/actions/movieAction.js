import axios from 'axios'

export const getTrending = ()=> async dispatch => {
    dispatch({type:"LOADING"})
    await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=7b749f64cfd15e987d060bd54157eb68`)
        .then(res =>{
            dispatch({
                type:"GET_MOVIES",
                payload:res.data.results
            })
        })
        .catch(err =>{
            console.log(err)
        })
}