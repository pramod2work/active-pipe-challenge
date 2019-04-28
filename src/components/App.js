import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import './App.css';
import { listPropertiesFetch } from '../reducers/listProperties';
import { PropertyInfo } from './PropertyInfo'
import { Filter } from './Filter'
import { Spinner } from './Spinner';
import { Error } from './Alert';

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: ''
    }

    this.filterProperty = this.filterProperty.bind(this)
    this.getData = this.getData.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  filterProperty(filter) {
    this.setState({ filter })
  }

  getData() {
    this.props.listPropertiesFetch()
  }

  render() {
    return (
      <div className="App">
        {
          this.props.listPropertiesData.inProgress ?
            <Spinner />
          : ''
        }

        {
          this.props.listPropertiesData.error ?
            <Error retryAction={this.getData}/>
          : ''
        }

        {
          this.props.listPropertiesData.data ?
            <div>
              <Filter updateData={this.filterProperty} />
              <div className="container">
                {
                  this.props.listPropertiesData.data &&
                  this.props.listPropertiesData.data.map((property) => {
                    if (!this.state.filter || this.state.filter === property.status) {
                      return(
                        <PropertyInfo {...property} key={property.id} />
                      )
                    }

                    return null
                  })
                }
              </div>
            </div>
          : ''
        }
      </div>
    );
  }
}

App.defaultProps = {
  listPropertiesData: {
    data: false,
    inProgress: false,
    error: false
  },
  listPropertiesFetch: () => {}
}

PropertyInfo.propTypes = {
  listPropertiesData: PropTypes.shape({
    data: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.any
    ]),
    error: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.any
    ]),
    inProgress: PropTypes.bool,
  }),
  listPropertiesFetch: PropTypes.func,
}

export const mapStateToProps = ({
  listPropertiesData = {},
}) => ({
  listPropertiesData,
})

export const mapDispatchToProps = dispatch => (
  {
    listPropertiesFetch: () => {
      dispatch(listPropertiesFetch())
    },
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
