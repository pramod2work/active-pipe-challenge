import React from 'react'
import { shallow } from 'enzyme'

import { Spinner } from './index'

describe('Spinner Component test', () => {
  test('Component Snapshot Testing', () => {
    const component = shallow(<Spinner />)
    expect(component).toMatchSnapshot()
  })
})