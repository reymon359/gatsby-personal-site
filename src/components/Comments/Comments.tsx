import React from 'react'
import styled from 'styled-components'
import {getTimeAgoInWords} from '../../utils'
import Avatar from './Avatar'
import Header from './Header'
import Reactions from './Reactions'

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
    border: 1px solid ${props => props.theme.colors.lightest};
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
                <Body>
                  <div
                    className="markdown-body sans"
                    dangerouslySetInnerHTML={{__html: comment.body_html}}
                  />
                </Body>
                <Reactions comment={comment} />
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
