import React from 'react'
import { shallow } from 'enzyme'

import { Error } from './index'

describe('Error Component test', () => {
  test('Component Snapshot Testing', () => {
    const component = shallow(<Error />)
    expect(component).toMatchSnapshot()
  })

  test('Callback function to be called', () => {
    const props = {
      retryAction: jest.fn()
    }
    const component = shallow(<Error {...props} />)

    component.find('[data-test-id="retry-action"]').last().simulate('click')
    expect(props.retryAction).toBeCalled()
  })
})