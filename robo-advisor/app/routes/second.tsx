import React from 'react'
import { Link } from 'react-router'

function Second(props = {}) {
  return (
    <>
    <Link to="/">Index</Link>;
    <div>Second</div>
    </>
  )
}

Second.propTypes = {}

export default Second
