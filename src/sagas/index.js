import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {
 const requestApi = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=4dbc17e007ab436fb66416009dfb59a8'
  const json = yield fetch(requestApi)
    .then(response => response.json());
    yield put({ type: "NEWS_RECEIVED", json:json.articles,});
}

function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews) 
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
} 
 