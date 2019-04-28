import React from 'react'
import { shallow } from 'enzyme'

import { Filter } from './index'

describe('Filter Component test', () => {
  test('Component Snapshot Testing', () => {
    const component = shallow(<Filter />)
    expect(component).toMatchSnapshot()
  })
})