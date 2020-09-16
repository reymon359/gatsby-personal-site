import React from 'react'
import styled from 'styled-components'

const ReactionCount = styled.span`
  color: ${props => props.theme.colors.lightest};
  padding-left: 8px;
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
type ReactionImages = {[key in ReactionKey]: string}
type ReactionEmoji = {[key in ReactionKey]: string}

interface ReactionProps {
  readonly reaction: ReactionKey
  readonly count: number
  readonly url: string
}

const Reaction: React.FC<ReactionProps> = ({url, reaction, count}) => {
  const images: ReactionImages = {
    '+1': '1f44d.png',
    '-1': '1f44e.png',
    confused: '1f615.png',
    eyes: '1f440.png',
    heart: '1f5bc.png',
    hooray: '1f389.png',
    laugh: '1f604.png',
    rocket: '1f680.png'
  }
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
  const reactionImage = images[reaction]
  const reactionEmoji = emoji[reaction]

  if (count === 0) {
    return <></>
  }

  return (
    <a href={url} title={reaction} target="_blank" rel="noreferrer noopener">
      <g-emoji
        tone="0"
        alias={reaction}
        fallback-src={`https://github.githubassets.com/images/icons/emoji/unicode/${reactionImage}`}
        className="emoji"
      >
        {reactionEmoji} <ReactionCount>{count}</ReactionCount>
      </g-emoji>
    </a>
  )
}

export default Reaction
