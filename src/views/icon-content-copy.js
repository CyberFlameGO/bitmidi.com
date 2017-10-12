const { h } = require('preact') /** @jsx h */

const IconContentCopy = ({
  size = 24,
  fill = '#000000'
}) => {
  return (
    <svg
      fill={fill}
      height={size}
      viewBox='0 0 24 24'
      width={size}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z' />
    </svg>
  )
}

module.exports = IconContentCopy