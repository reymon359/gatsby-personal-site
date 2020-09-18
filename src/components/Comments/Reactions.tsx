import React from 'react'
import Reaction from './Reaction'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-top: 1px solid ${props => props.theme.colors.lightest};
  padding: 0;
  display: block;
  width: 100%;

  a {
    border: none;
    &:hover {
      border: none;
    }
  }
`

const AddReaction = styled.div`
  border-right: none;
  display: inline-block;
  padding: 16px;
  margin: 0;

  svg {
    padding-top: 2px;
  }
`

type ReactionKey =
  | '+1'
  | '-1'
  | 'confused'
  | 'eyes'
  | 'heart'
  | 'hooray'
  | 'laugh'
  | 'rocket'
const reactions = [
  '+1',
  '-1',
  'confused',
  'eyes',
  'heart',
  'hooray',
  'laugh',
  'rocket'
]
interface ReactionsProps {
  readonly comment: any
}

const Reactions: React.FC<ReactionsProps> = ({comment}) => {
  return (
    <Wrapper>
      {reactions.map(reaction => (
        <Reaction
          key={reaction}
          url={comment.html_url}
          reaction={reaction as ReactionKey}
          count={+comment.reactions[reaction]}
        />
      ))}
      <a
        href={comment.html_url}
        title="Add a reaction"
        target="_blank"
        rel="noreferrer noopener"
      >
        <AddReaction>
          <svg
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              fill="#ffffff"
              d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000
                            2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0
                            011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192
                            1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0
                            111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984
                            1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946
                            0-1.652-.308-2.126-.63a3.32 3.32 0
                            01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
            />
          </svg>
        </AddReaction>
      </a>
    </Wrapper>
  )
}
export default Reactions
