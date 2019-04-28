import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'

import { App, mapStateToProps, mapDispatchToProps } from './App';
import * as listProperties from '../reducers/listProperties';

describe('App Component Testing', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    const props = {
      listPropertiesData: {
        data: [
          {
            "id": 1,
            "status": "current",
            "street": "1 Fake Street",
            "suburb": "Glen Iris",
            "state": "VIC",
            "postcode": "3146",
            "price": 1230500,
            "image": "https://code-challenge.activepipe.com/property-images/frontage/01.jpg"
          }
        ],
      },
      listPropertiesFetch: jest.fn()
    }
    ReactDOM.render(<App {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
    expect(props.listPropertiesFetch).toBeCalled()
  })

  test('Snapshot for Success scenario', () => {
    const props = {
      listPropertiesData: {
        data: [
          {
            "id": 1,
            "status": "current",
            "street": "1 Fake Street",
            "suburb": "Glen Iris",
            "state": "VIC",
            "postcode": "3146",
            "price": 1230500,
            "image": "https://code-challenge.activepipe.com/property-images/frontage/01.jpg"
          }
        ],
      },
      listPropertiesFetch: jest.fn()
    }
    const component = shallow(<App {...props} />)
    expect(component).toMatchSnapshot()
  })

  test('Snapshot for Error scenario', () => {
    const props = {
      listPropertiesData: {
        error: 'error',
      },
      listPropertiesFetch: jest.fn()
    }
    const component = shallow(<App {...props} />)
    expect(component).toMatchSnapshot()
  })

  test('Snapshot for Error scenario', () => {
    const props = {
      listPropertiesData: {
        inProgress: true,
      },
      listPropertiesFetch: jest.fn()
    }
    const component = shallow(<App {...props} />)
    expect(component).toMatchSnapshot()
  })

  test('on change of filter', () => {
    const props = {
      listPropertiesData: {
        data: [
          {
            "id": 1,
            "status": "current",
            "street": "1 Fake Street",
            "suburb": "Glen Iris",
            "state": "VIC",
            "postcode": "3146",
            "price": 1230500,
            "image": "https://code-challenge.activepipe.com/property-images/frontage/01.jpg"
          }
        ],
      },
      listPropertiesFetch: jest.fn()
    }
    const component = shallow(<App {...props} />)

    component.instance().filterProperty('invalid')
    expect(component.state().filter).toBe('invalid')
  })

  test('mapStateToProps for invalid state obj', () => {
    expect(mapStateToProps({})).toEqual({
      listPropertiesData: {},
    })
  })

  test('should return an object with the functions of dispatch event', () => {
    const dispatch = jest.fn()
    expect(mapDispatchToProps(dispatch)).toEqual({
      listPropertiesFetch: expect.any(Function),
    })
  })

  test('should call reducer action to fetch property data', () => {
    listProperties.listPropertiesFetch = jest.fn()
    const dispatch = jest.fn()
    const dispatchToProps = mapDispatchToProps(dispatch)

    dispatchToProps.listPropertiesFetch()
    expect(dispatch).toHaveBeenCalled()
    expect(listProperties.listPropertiesFetch).toBeCalled()
  })
})
