import React from 'react';
import { render } from '@testing-library/react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
import App from './App';
it('renders without crashing', () => {
  shallow(<App />);
});

it('renders VideoUpload text', () => {
  const { getByText } = render(<App />);
  expect(getByText('VideoUpload')).toBeInTheDocument();
});
//test('should renders header', () => {
  //const { getByText } = render(<App />);
  //const linkElement = getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
//});
