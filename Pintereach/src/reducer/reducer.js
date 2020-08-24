import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    FETCH_ARTICLESLIST_START,
    FETCH_ARTICLESLIST_SUCCESS,
    FETCH_ARTICLESLIST_FAIL,
    FETCH_MYARTICLE_START,
    FETCH_MYARTICLE_SUCCESS,
    FETCH_MYARTICLE_FAIL,
    FETCH_CATEGORY_START,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_FAIL,
    UPDATE_ARTICLE_START,
    UPDATE_ARTICLE_SUCCESS,
    UPDATE_ARTICLE_FAIL,
    REMOVE_ARTICLE,
    REMOVE_ARTICLE_FAIL
} from "../actions/actions";

const initialState = {
    isLoggingIn: false,
    isRegistering: false,
    fetchingArticleList: false,
    fetchingMyArticle: false,
    fetchingCategory: false,
    updatingArticle: false,
    removingArticle: false,
    articles: [],
    error: "",
    user_id: "",
    user: {}
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
          return {
              ...state,
              isLoggingIn: true,
              error: ""
          };
      case LOGIN_SUCCESS:
          return {
              ...state,
              isLoggingIn: false,
              message: action.payload.message,
              user: action.payload.user
          };
      case LOGIN_FAIL:
          return {
              ...state,
              isLoggingIn: false,
              error: action.payload
          };
      case REGISTER_START:
          return {
              ...state,
              isRegistering: true,
          };
      case REGISTER_SUCCESS:
          return {
              ...state,
              isRegistering: false
          };
      case REGISTER_FAIL:
          return {
              ...state,
              isRegistering: false,
              error: action.payload
          };
      case FETCH_ARTICLESLIST_START:
          return {
              ...state,
              fetchingArticles: true
          };
      case FETCH_ARTICLESLIST_SUCCESS:
          return {
              ...state,
              fetchingArticles: false,
              articles: action.payload
          }
      case FETCH_ARTICLESLIST_FAIL:
          return {
              ...state,
              fetchingArticles: false,
              error: action.payload
          }
      case FETCH_MYARTICLE_START:
          return {
              ...state,
              fetchingMyArticle: true
          }
      case FETCH_MYARTICLE_SUCCESS:
          return {
              ...state,
              fetchingMyArticle: false,
              article: action.payload
          }
      case FETCH_MYARTICLE_FAIL:
          return {
              ...state,
              fetchingMyArticle: false,
              error: action.payload
          }
      case FETCH_CATEGORY_START:
          return {
              ...state,
              fetchingCategory: true,
          }
      case FETCH_CATEGORY_SUCCESS:
          return {
              ...state,
              fetchingCategory: false,
              category: action.payload
          }
      case FETCH_CATEGORY_FAIL:
          return {
              ...state,
              fetchingCategory: false,
              category: action.payload
          }
      case UPDATE_ARTICLE_START:
          return {
              ...state,
              updatingArticle: true,
          }
      case UPDATE_ARTICLE_SUCCESS:
          return {
              ...state,
              updatingArticle: false,
              article: action.payload,
          }
      case UPDATE_ARTICLE_FAIL:
          return {
              ...state,
              updatingArticle: false,
              error: action.payload
          }
      case REMOVE_ARTICLE:
          return {
              ...state,
              removingArticle: true,
          }
      case REMOVE_ARTICLE_FAIL:
          return {
              ...state,
              removingArticle: false,
              error: action.payload
          }
    }  
};