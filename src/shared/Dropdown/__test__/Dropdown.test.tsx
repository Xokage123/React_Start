import * as React from 'react';
import { shallow, configure } from 'enzyme'
import { Dropdown } from '../Dropdown';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('Dropdown', () => { 
  test('should render', () => {
      const wrapper = shallow(<Dropdown button={<button />}><div /></Dropdown>)
      expect(wrapper).toBeDefined();
      expect(wrapper.find('div.container').isEmptyRender).toBeFalsy;
  })

  test('should render (snapshot)', () => {
    const wrapper = shallow(<Dropdown button={<button />}><div /></Dropdown>)
    expect(wrapper).toMatchSnapshot()
  })
})
