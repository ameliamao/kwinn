import * as actionTypes from './actionTypes';


export const getArticles = (newArticle) => {
    
    return {type: actionTypes.GET_ARTICLES, newArticle:newArticle}
}
export const checkAuth = (userID, password) => {
    return {type: actionTypes.CHECK_AUTHENTICATION, userID:userID, password:password}
}
export const uploadVid = (video) => {
    return {type: actionTypes.UPLOAD_VIDEO, video:video}
}
export const uploadImg = (image) => {
    return {type: actionTypes.UPLOAD_IMAGE, image:image}
}
export const updateContent = (content) => {
    return {type: actionTypes.UPDATE_CONTENT, content:content}
}
export const updateUserInfo = (info) => {
    return {type: actionTypes.UPDATE_USERINFO, info:info}
}
export const checkComment = (comment) => {
    return {type: actionTypes.CHECK_COMMENT, comment:comment}
}
export const checkMessage = (message) => {
    return {type: actionTypes.CHECK_MESSAGE, message:message}
}
export const checkFeedback = (feedback) => {
    return {type: actionTypes.CHECK_FEEDBACK, feedback:feedback}
}
export const checkChat = (chat) => {
    return {type: actionTypes.CHECK_CHAT, chat:chat}
}
export const checkContentRating = (rating) => {
    return {type: actionTypes.CONTENT_RATING, rating:rating}
}
export const checkAccRating = (rating) => {
    return {type: actionTypes.ACCOUNT_RATING, rating:rating}
}
