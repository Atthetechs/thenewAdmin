import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './reducer';

axios.defaults.baseURL = 'http://localhost:5000/api/';

function* UploadImages({ payload }) {
  try {
    const Respo = yield call(axios.post('/uploadImage', payload));
    console.log(Respo.data);
  } catch (error) {
    console.log(error, 'error');
  }
}

function* Contact() {
  try {
    const Respo = yield call(axios.get, '/getAllData');
    const { getData } = Respo.data;
    console.log(getData, ';;;;;');
    yield put(actions.Contact(getData));
  } catch (error) {
    console.log(error, 'error');
  }
}

function* ContactDetail({ payload }) {
  try {
    const Respo = yield call(axios.get, `/getSingleData/${payload}`);
    console.log(Respo.data);
    const { getRecord } = Respo.data;
    yield put(actions.ContactDetails(getRecord));
  } catch (error) {
    console.log(error, 'error');
  }
}
function* ContactDelete({ payload }) {
  try {
    const Respo = yield call(axios.delete, `/deleteData/${payload}`);
    console.log(Respo.data);
  } catch (error) {
    console.log(error, 'error');
  }
}

function* homesaga() {
  yield takeLatest('UPLOAD', UploadImages);
  yield takeLatest('CONTACTS', Contact);
  yield takeLatest('CONTACT_DETAILS', ContactDetail);
  yield takeLatest('CONTACT_DELETE', ContactDelete);
}
export default homesaga;
