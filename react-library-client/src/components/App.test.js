/* eslint-disable no-undef */
// App.test.js
import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
test('Check render App component', () => {
    const component = renderer.create(<App />);
    let wrapper = component.toJSON();
    expect(wrapper).toMatchSnapshot();
});
