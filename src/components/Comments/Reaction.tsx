import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: inline;

  a {
    display: inline-block;
    border: none;
    padding: 1rem;
    margin: 0;

    &:hover {
      border: none;
    }
  }
`

const ReactionCount = styled.span`
  color: ${props => props.theme.colors.lightest};
  padding-left: 0.8rem;
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
type ReactionEmoji = {[key in ReactionKey]: string}

interface ReactionProps {
  readonly url: string
  readonly reaction: ReactionKey
  readonly count: number
}
// @ts-expect-error needed
const Reaction: React.FC<ReactionProps> = ({url, reaction, count}) => {
  const emoji: ReactionEmoji = {
    '+1': '👍',
    '-1': '👎',
    confused: '😕',
    eyes: '👀',
    heart: '❤️',
    hooray: '🎉',
    laugh: '🤣',
    rocket: '🚀'
  }
  const reactionEmoji = emoji[reaction]

  return (
    count !== 0 && (
      <Wrapper>
        <a
          href={url}
          title={reaction}
          target="_blank"
          rel="noreferrer noopener"
        >
          {reactionEmoji} <ReactionCount>{count}</ReactionCount>
        </a>
      </Wrapper>
    )
  )
}

export default Reaction
