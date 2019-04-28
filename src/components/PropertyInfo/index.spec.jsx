import React from 'react'
import { shallow, mount } from 'enzyme'

import { PropertyInfo } from './index'

describe('PropertyInfo Component test', () => {
  test('Component Snapshot Testing', () => {
    const props = {
      "id": 1,
      "status": "current",
      "street": "1 Fake Street",
      "suburb": "Glen Iris",
      "state": "VIC",
      "postcode": "3146",
      "price": 1230500,
      "image": "https://code-challenge.activepipe.com/property-images/frontage/01.jpg"
    }
    const component = shallow(<PropertyInfo {...props} />)
    expect(component).toMatchSnapshot()
  })

  test('Component Snapshot Testing for invalid status', () => {
    const props = {
      "id": 1,
      "status": "not_listed",
      "street": "1 Fake Street",
      "suburb": "Glen Iris",
      "state": "VIC",
      "postcode": "3146",
      "price": 1230500,
      "image": "https://code-challenge.activepipe.com/property-images/frontage/01.jpg"
    }
    const component = mount(<PropertyInfo {...props} />)
    expect(component).toMatchSnapshot()
  })
})