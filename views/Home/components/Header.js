import React from 'react'
import SlideOne from './SlideOne'
import SlideThree from './SlideThree'
import SlideTwo from './SlideTwo'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const styles = {
  slide: {
    margin: 0,
    padding: 0,
    color: 'white',
    height: 450,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },
  slide1: {
    backgroundImage: "url('/static/img/plateHeaderMain-min.png')"
  },
  slide2: {
    background: 'linear-gradient(-90deg, rgb(141, 95, 115), #343f53)'
  },
  slide3: {
    background: 'linear-gradient(-90deg, rgb(141, 95, 115), #343f53)'
  }
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

export default function Header() {
  return (
    <AutoPlaySwipeableViews enableMouseEvents resistance interval={4000}>
      <div style={Object.assign({}, styles.slide, styles.slide1)}>
        <SlideOne />
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide2)}>
        <SlideTwo />
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide3)}>
        <SlideThree />
      </div>
    </AutoPlaySwipeableViews>
  )
}
