import React from 'react'

interface CircleProps {
  readonly fill?: string
  readonly width?: number
  readonly height?: number
}

const Circle: React.FC<CircleProps> = ({fill, width = 22, height = 22}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 21.5C5.201 21.5.5 16.799.5 11S5.201.5 11 .5 21.5 5.201 21.5 11 16.799 21.5 11 21.5zm0-1a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19z"
      fill={fill}
    />
  </svg>
)
export default Circle
