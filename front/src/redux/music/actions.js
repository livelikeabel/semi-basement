import * as types from "./ActionType"

export const NAME = "MUSIC"
export const LOAD_SONG_INFO = "LOAD_SONG_INFO"
export const LOAD_SONG_INFO_REQUEST = "LOAD_SONG_INFO_REQUEST"
export const LOAD_SONG_INFO_SUCCESS = "LOAD_SONG_INFO_SUCCESS"
export const LOAD_SONG_INFO_FAILURE = "LOAD_SONG_INFO_FAILURE"

//new action
export function loadSongsInfo(songUrlArr) {
  return {
    type: LOAD_SONG_INFO,
    songUrlArr
  }
}

export function loadSongInfoRequest() {
  return {
    type: LOAD_SONG_INFO_REQUEST
  }
}

export function loadSongInfoSuccess(data) {
  return {
    type: LOAD_SONG_INFO_SUCCESS,
    data
  }
}

export function loadSongInfoFailure(err) {
  return {
    type: LOAD_SONG_INFO_FAILURE,
    err
  }
}

//Legacy actions
export function selectSong(song) {
  return {
    type: types.SELECT_SONG,
    song
  }
}
export function addHistory(historySong) {
  return {
    type: types.HISTORY_SONG,
    historySong
  }
}

export const LOAD_SONG_DETAIL = `${NAME}/LOAD_SONG_DETAIL`
export const LOAD_SONG_DETAIL_REQUEST = `${NAME}/LOAD_SONG_DETAIL_REQUEST`
export const LOAD_SONG_DETAIL_SUCCESS = `${NAME}/LOAD_SONG_DETAIL_SUCCESS`
export const LOAD_SONG_DETAIL_FAILURE = `${NAME}/LOAD_SONG_DETAIL_FAILURE`

export function loadSongDetail(songId) {
  return {
    type: LOAD_SONG_DETAIL,
    songId
  }
}

export function loadSongDetailRequest() {
  return {
    type: LOAD_SONG_DETAIL_REQUEST
  }
}

export function loadSongDetailSuccess(data) {
  return {
    type: LOAD_SONG_DETAIL_SUCCESS,
    data
  }
}

export function loadSongDetailFailure(err) {
  return {
    type: LOAD_SONG_DETAIL_FAILURE,
    err
  }
}