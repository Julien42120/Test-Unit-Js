// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import '@testing-library/jest-dom/extend-expect'
// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
// this adds jest-dom's custom assertions
// import 'jest-dom/extend-expect';
configure({ adapter: new Adapter() });