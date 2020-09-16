import React from 'react'
import styled from 'styled-components'
import {getTimeAgoInWords} from '../../utils'
import Avatar from './Avatar'
import Header from './Header'
import Reactions from './Reactions'

const Wrapper = styled.div`
  padding: 1rem 1rem 4rem;
`

const Comment = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  letter-spacing: normal;

  a {
    background: none;
  }
`

const Content = styled.div`
  color: ${props => props.theme.colors.lightest};
  border: 1px solid ${props => props.theme.colors.lightest};
  border-radius: 5px;
  margin-left: 60px;
`

const ContentHeader = styled.div`
  padding: 1rem;
  width: 100%;
`

const ContentHeaderDate = styled.div`
  display: inline-block;
`
// ToDo: create a container and use flex to display left on mobile
const ContentHeaderAssociation = styled.div`
  border: 1px solid lightgray;
  border-radius: 20px;
  display: inline-block;
  margin-right: 6px;
  margin-top: -3px;
  float: right;
  padding: 4px 8px;
  font-size: 0.8em;
  text-transform: capitalize;
  ${props => props.theme.media.max.md`
      margin-top: 1rem;
          float: left;
    `}
`

const ContentBody = styled.div`
  color: ${props => props.theme.colors.lightest};
  margin: 0 auto;
  padding: 1rem 2rem 2rem;
  letter-spacing: normal;
  line-height: 1.5;
`

const Actions = styled.div`
  color: ${props => props.theme.colors.light};
  background-color: ${props => props.theme.colors.light + '40'};
  font-size: ${props => props.theme.fontSizes.normal};
  font-weight: ${props => props.theme.fontWeights.bold};
  border-radius: 5px;
  box-sizing: border-box;
  text-decoration: none;
  display: block;
  padding: 0.4rem 0.6rem;
  border-bottom: 0;
  white-space: nowrap;
  line-height: 1;
  margin: 2rem 0 0.2rem 1rem;
  transition: 0.4s ease;
  float: right;

  &:hover {
    background-color: ${props => props.theme.colors.light};
    border-bottom: none;
  }

  a {
    border: none;
    &:hover {
      border: none;
      color: ${props => props.theme.colors.darkest};
    }
  }
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
            <Comment key={comment.id}>
              <Content>
                <Avatar
                  url={comment.user.html_url}
                  avatar={comment.user.avatar_url}
                  login={comment.user.login}
                />
                <ContentHeader>
                  <ContentHeaderDate data-date={comment.created_at}>
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
                  </ContentHeaderDate>
                  {comment.author_association === 'OWNER' && (
                    <ContentHeaderAssociation>Author</ContentHeaderAssociation>
                  )}
                  {comment.author_association === 'OWNER' && (
                    <ContentHeaderAssociation>Owner</ContentHeaderAssociation>
                  )}
                </ContentHeader>
                <ContentBody>
                  <div dangerouslySetInnerHTML={{__html: comment.body_html}} />
                </ContentBody>
                <Reactions comment={comment} />
              </Content>
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
