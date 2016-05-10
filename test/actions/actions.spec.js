'use strict';

import {
  setCurrentInput,
  setWords,
  startWordFetch,
  stopWordFetch,
  endGame,
  startGame,keyPressed
} from '../../js/actions'
import R from 'ramda';
describe('setCurrentInput', () => {
  it('should create SET_CURRENT_INPUT action', () => {
    expect(setCurrentInput('Use Redux')).to.deep.eq({
      type: 'SET_CURRENT_INPUT',
      payload: { currentInput: "Use Redux" }
    })
  })
})

describe('setWords', () => {
  var clock = null;

  before(() => {
    clock = sinon.useFakeTimers(new Date(2011,9,1).getTime());
  })
  after(() => {
    clock.restore();
  })

  it('should create START_GAME action', () => {
    let now = Math.floor(Date.now() / 1000);
    expect(setWords(['Use Redux'])).to.deep.eq({
      type: 'START_GAME',
	  payload: { words: ["Use Redux"], startTime: now}
    })
  })
})

describe('startWordFetch', () => {
  it('should create START_WORD_FETCH action', () => {
    expect(startWordFetch()).to.deep.eq({
      type: 'START_WORD_FETCH'
    })
  })
})

describe('startWordFetch', () => {
  it('should create STOP_WORD_FETCH action', () => {
    expect(stopWordFetch()).to.deep.eq({
      type: 'STOP_WORD_FETCH'
    })
  })
})

let xhr, requests;
describe('startGame', () => {
  var clock = null;

  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2011,9,1).getTime());

	global.XMLHttpRequest = xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = (xhr) => requests.push(xhr)
  })
  afterEach(() => {
    clock.restore();

    xhr.restore()
  })

  it('adds words when fetched and fetching in progress', () => {
    const now = Math.floor(Date.now() / 1000);
    let dispatch = sinon.stub()
    let getState = () => {
      return { currentGame: {wordFetchInProgress: true}}
    }
    startGame()(dispatch, getState)
    requests[0].respond(200, {}, '["Server"]')

    expect(dispatch).to.have.been.calledWith({
      type: 'START_GAME',
      payload: {
      words: ["Server"],
      startTime: now
      }
    })
    expect(dispatch).to.have.been.calledWith({type: "STOP_WORD_FETCH"})
  })


  it('does not add words when fetched and fetching is not in progress', () => {
    const now = Math.floor(Date.now() / 1000);
    let dispatch = sinon.stub()
    let getState = () => {
      return { currentGame: {wordFetchInProgress: false}}
    }
    startGame()(dispatch, getState)
    requests[0].respond(200, {}, '["Server"]')

    expect(dispatch).to.not.have.been.called
    })
})

describe('endGame', () => {
  var clock = null;

  before(() => {
    clock = sinon.useFakeTimers(new Date(2011,9,1).getTime());
  })
  after(() => {
    clock.restore();
  })

  it('dispatches END_GAME action', () => {
    const now = Math.floor(Date.now() / 1000);
    const dispatch = sinon.stub();
    const getState = () => {
      return { currentGame: {words: ["a"], pastInput: ["b"], startTime: "now"} }
    };
    endGame()(dispatch, getState);
    expect(dispatch).to.have.been.calledWith({
      type: "END_GAME",
      payload: {
        words: ["a"],
        pastInput: ["b"],
        startTime: "now",
        endTime: now
      }
    })
  })
})
describe('keyPress', () => {
  var clock = null;

  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2011,9,1).getTime());

    global.XMLHttpRequest = xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = (xhr) => requests.push(xhr)
  })
  afterEach(() => {
    clock.restore();

    xhr.restore()
  })

  it('key press ', () => {
    const now = Math.floor(Date.now() / 1000);
    let dispatch = sinon.stub()
    let getState = () => {
      return { global: {input: ['a','b']},currentGame:{startTime:now}}

    }
    let data ='a';
    keyPressed(data)(dispatch, getState)

    expect(dispatch).to.have.been.calledWith({
      type: 'GLOBAL_KEY_PRESSED',
      payload: {
         key: 'a'
      }
    })
    expect(dispatch).to.have.been.calledWith({ type: "SET_CURRENT_INPUT",
      payload: { currentInput: 'aba' }})
  })

})
