import tapListReducer from '../../reducers/tap-list-reducer';


describe('tap-list-reducer', () => {

  test('1 Should return default state if no action is triggered', () => {    
    expect(tapListReducer(undefined, {type: null})).toEqual([])
  })
});