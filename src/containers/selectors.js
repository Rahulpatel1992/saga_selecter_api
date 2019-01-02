import {createSelector} from 'reselect';

const selector =(state)=>state.news

export const getNewsSelector = createSelector(selector,getcheck=>getcheck)