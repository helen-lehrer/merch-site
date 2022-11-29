import merchListReducer from '../../reducers/merch-list-reducer';

describe('merchListReducer', () => {

  let action;

  const currentState = {
    1: {
      name: 'himhom',
      description: 'hat',
      quantity: 500,
      id: 1 
    }, 2: {
      name: 'boopbop',
      description: 'shoes',
      quantity: 200,
      id: 2  
    }
  }
  const merchData = {
    name: 'himhom',
    description: 'hat',
    quantity: 500,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(merchListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new ticket data to mainTicketList', () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      id: id
    };
    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

});