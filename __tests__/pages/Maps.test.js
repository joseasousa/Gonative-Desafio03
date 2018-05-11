import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Maps from 'pages/maps';

const mockStore = configureStore([]);

const initialState = {
  mapMarkers: [
    {
      id: 3739175,
      avatar: 'https://avatars1.githubusercontent.com/u/3739175?v=4',
      user: 'joseasousa',
      description: 'Full Stack developer Mobile - Android Native, React Native',
      cordinate: {
        latitude: -27.216986465963565,
        longitude: -49.64545760303736,
      },
    },
  ],
  loading: false,
  errorOnAdd: null,
  loaded: false,
};


describe('<Maps />', () => {
  const store = mockStore(initialState);

  function createWrapper() {
    return shallow(<Maps />, {
      context: {
        store,
      },
    });
  }
  it('Maps render', () => {
    const wrapper = createWrapper();
    expect(wrapper.prop('todos')).toEqual(initialState.todos);
    expect(wrapper.dive().find(Text)).toHaveLength(initialState.todos.length);
  });
});
