import selectedKeg from '../../reducers/selected-keg-reducer';

describe("selectedKegReducer", () => {

  

  test('Should return default state if no action type is recognized', () => {
    expect(selectedKeg(undefined, { type: null })).toEqual(null);
  });

  
});