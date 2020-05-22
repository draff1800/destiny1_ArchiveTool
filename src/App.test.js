// Link.react.test.js
import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

test('Check that the page renders', () => {
  const component = renderer.create(
    <App></App>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
