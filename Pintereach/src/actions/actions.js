import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

//login
export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"

export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
    .post("login", `https://https://pintereach1api.herokuapp.com/api/auth/login`, credentials)
    .then(res => {
        console.log(res)
        localStorage.setItem( "token", res.data.token);
        localStorage.setItem( "user", res.data.id)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: LOGIN_FAIL, payload: err })
    });
}

// register
export const REGISTER_START = "REGISTER_START"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAIL = "REGISTER_FAIL"

export const register = credentials => dispatch => {
  dispatch({ type: REGISTER_START })
  axiosWithAuth()
    .post("register", `https://https://pintereach1api.herokuapp.com/api/auth/register`, credentials)
    .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("user id", res.data.id)
        console.log(res.data.id)
        dispatch({ type: REGISTER_SUCCESS, payload: res.data.token })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: REGISTER_FAIL, payload: err })
    });
}

// Fetch article lists
export const FETCH_ARTICLESLIST_START = "FETCH_ARTICLESLIST_START"
export const FETCH_ARTICLESLIST_SUCCESS = "FETCH_ARTICLESLIST_SUCCESS"
export const FETCH_ARTICLESLIST_FAIL = "FETCH_ARTICLESLIST_FAIL"

export const getArticles = id => dispatch => {
  dispatch({ type: FETCH_ARTICLESLIST_START })
  axiosWithAuth()
  .get(`https://https://pintereach1api.herokuapp.com/api/authusers/articles/${id}`)
  .then(res => {
      console.log(res)
      dispatch({ type: FETCH_ARTICLESLIST_SUCCESS, payload: res.data.token })
  })
    .catch(err => {
        console.log(err)
        dispatch({ type: FETCH_ARTICLESLIST_FAIL, payload: err })
    })
}

// fetch article card
export const FETCH_MYARTICLE_START = "FETCH_MYARTICLE_START"
export const FETCH_MYARTICLE_SUCCESS = "FETCH_MYARTICLE_SUCCESS"
export const FETCH_MYARTICLE_FAIL = "FETCH_MYARTICLE_FAIL"

export const getMyList = article_id => dispatch => {
  dispatch({ type: FETCH_MYARTICLE_START })
  axiosWithAuth()
  .get(`https://https://pintereach1api.herokuapp.com/api/users/:id/articles${article_id}`)
  .then(res => {
      console.log(res)
      dispatch({ type: FETCH_MYARTICLE_SUCCESS, payLoad: res.data.token })
  })
  .catch(err => {
      console.log(err)
      dispatch({ type: FETCH_MYARTICLE_FAIL, payload: err })
  })
}



/*export const POST_ARTICLE_START = "POST_ARTICLE_START"
export const POST_ARTICLE_SUCCESS = "POST_ARTICLE_SUCCESS"
export const POST_ARTICLE_FAIL ="POST_ARTICLE_FAIL"

export const postArticle = (article) => dispatch => {
  dispatch({ type: POST_ARTICLES_START })
  axiosWithAuth()
  .post(`https://https://pintereach1api.herokuapp.com/api/users/:id/articles`, articles)
  .then(res => {
      console.log(res)
      dispatch({ type: POST_ARTICLE_SUCCESS, payload: res.data.token })
  })
  .catch(err => {
      console.log(err)
      dispatch({ type: POST_ARTICLE_FAIL })
  })
}*/

// fetch category
export const FETCH_CATEGORY_START = "FETCH_CATEGORY_LIST"
export const FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS"
export const FETCH_CATEGORY_FAIL = "FETCH_CATEGORY_FAIL"

export const changeCategory = id => dispatch => {
  dispatch({ type: FETCH_CATEGORY_START })
  axiosWithAuth()
  .get(`https://https://pintereach1api.herokuapp.com/api/authusers/categories/${id}`)
  .then(res => {
      console.log(res)
      dispatch({ type: FETCH_CATEGORY_SUCCESS})
  })
  .catch(err => {
      console.log(err)
      dispatch({ type: FETCH_CATEGORY_FAIL, payload: err })
  })
}

// assign category to article
export const UPDATE_ARTICLE_START = "UPDATE_ARTICLE_START"
export const UPDATE_ARTICLE_SUCCESS = "UPDATE_ARTICLE_SUCCESS"
export const UPDATE_ARTICLE_FAIL = "UPDATE_ARTICLE_FAIL"

export const editArticle = article => dispatch => {
  dispatch({ type: UPDATE_ARTICLE_START })
  axiosWithAuth()
  .put(`https://https://pintereach1api.herokuapp.com/api/articles/:id`, article)
  .then(res => {
      console.log(res)
      dispatch({ type: UPDATE_ARTICLE_SUCCESS, payload: res.data.token })
  })
  .catch(err => {
      console.log(err)
      dispatch({ type: UPDATE_ARTICLE_FAIL, payload: err })
  })
}

// delete article
export const REMOVE_ARTICLE = "REMOVE_ARTICLE"
export const REMOVE_ARTICLE_FAIL = "REMOVE_ARTICLE_FAIL"

export const removeArticle = id => dispatch => {
    axiosWithAuth()
    .delete(`https://https://pintereach1api.herokuapp.com//api/articles/:id/${id}`)
    .then(console.log(id))
    .then(res => {
       dispatch({ type: REMOVE_ARTICLE, payload: id })
    })   
    .catch(err => {
        console.log(err);
        dispatch({ type: REMOVE_ARTICLE_FAIL, payload: err })
    })
}