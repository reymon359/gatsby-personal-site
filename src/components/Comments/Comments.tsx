import React from 'react'
import styled from 'styled-components'
import {getTimeAgoInWords} from '../../utils'
import Avatar from './Avatar'
import Reaction from './Reaction'
import Header from './Header'

const Wrapper = styled.div`
  padding-bottom: 4rem;
`

const Comment = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  letter-spacing: normal;

  a {
    background: none;
  }

  .content {
    color: ${props => props.theme.colors.lightest};
    border: 1px solid  ${props => props.theme.colors.lightest};;
    border-radius: 6px;
    margin-left: 60px;

    .header {
      padding: 16px;
      width: 100%;

      .date {
        display: inline-block;
      }

      .association {
        border: 1px solid lightgray;
        border-radius: 20px;
        display: inline-block;
        margin-right: 6px;
        margin-top: -3px;
        float: right;
        padding: 4px 8px;
        font-size: 0.8em;
        text-transform: capitalize;
      }
    }

    .reactions {
      padding: 0;
      display: block;
      width: 100%;

      g-emoji {
        border-right: 1px solid lightgray;
        display: inline-block;
        padding: 12px;
        margin: 0;
      }

      .react div {
        border-right: 1px solid lightgray;
        display: inline-block;
        padding: 16px;
        margin: 0;
      }
      .react div svg {
        padding-top: 2px;
      }
    }
  }
`

const Body = styled.div`
box-sizing: border-box;
min-width: 200px;
max-width: 980px;
margin: 0 auto;
padding: 24px;
letter-spacing: normal;
border-bottom: 1px solid #efefef;
line-height: 1.5;
 color: ${props => props.theme.colors.lightest};
`


const Actions = styled('div')`
  margin-top: 40px;
  float: right;
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

interface CommentsProps {
  readonly url: string
  readonly comments: any
}
const Comments: React.FC<CommentsProps> = ({url, comments}) => {
  return (
    <Wrapper>
      <Header url={url} noComments={!comments || comments.length === 0} />

      {comments &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        comments.map((comment: any) => {
          return (
            <Comment key={comment.id} className="comment sans">
              <div className="content">
                <Avatar
                  url={comment.user.html_url}
                  avatar={comment.user.avatar_url}
                  login={comment.user.login}
                />
                <div className="header">
                  <div className="date" data-date={comment.created_at}>
                    <a href={comment.user.html_url}>
                      <strong>@{comment.user.login}</strong>
                    </a>
                    {` `}
                    commented{' '}
                    <a href={comment.html_url}>
                      {getTimeAgoInWords(comment.created_at)} ago
                    </a>
                    {` `}
                    {comment.updated_at > comment.created_at && (
                      <span>• edited</span>
                    )}
                  </div>
                  {comment.author_association === 'OWNER' && (
                    <div className="association">Author</div>
                  )}
                  {comment.author_association === 'OWNER' && (
                    <div className="association">Owner</div>
                  )}
                </div>
                <div
                  className="markdown-body sans"
                  dangerouslySetInnerHTML={{__html: comment.body_html}}
                />
                <div className="reactions">
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
                    className="react"
                  >
                    <div>
                      <svg
                        className="octicon octicon-smiley"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        height="16"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
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
                    </div>
                  </a>
                </div>
              </div>
            </Comment>
          )
        })}
      <Actions>
        <a
          href={`${url}#new_comment_field`}
          target="_blank"
          rel="noreferrer noopener"
          className="button btn"
        >
          Add a comment &rarr;
        </a>
      </Actions>
    </Wrapper>
  )
}

export default Comments