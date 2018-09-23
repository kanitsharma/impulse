import React from 'react'
import { connect } from 'react-redux'
import actionSpreader from '../../futils/actionSpreader'

const Home = props => (
  <div>
    <div onClick={props.toggleText}>Toggle Text</div>
    {
      props.showText &&
      <div>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</div>
    }
  </div>
)

const mapStateToProps = state => ({
  showText: state.home.showText
})

const mapDispatchToProps = dispatch => ({
  toggleText: () => dispatch(actionSpreader('TOGGLE_TEXT'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
