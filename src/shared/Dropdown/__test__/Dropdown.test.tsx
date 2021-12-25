import * as React from 'react';
import { shallow} from 'enzyme'
import { Dropdown } from '../Dropdown';

describe('Dropdown', () => { 
  test('should render', () => {
      const wrapper = shallow(<Dropdown button={<button />}><div /></Dropdown>)
      expect(wrapper).toBeDefined();
      expect(wrapper.find('#button')).toBeDefined();
  })
})
