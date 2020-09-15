import React, {useState, useEffect} from 'react'
import timeAgoInWords from '../util/time-ago-in-words'
// We can't generate comments when building the static parts of the website
const isBrowser = typeof window !== `undefined`

const Container = styled('div')`
  width: 55%;
`

const Comment = styled('div')`
  margin-top: 16px;
  padding-top: 16px;
  letter-spacing: normal;

  a {
    border: none;
    text-decoration: none;
    background: none;
  }

  .avatar {
    position: absolute;
    margin-left: -60px;
    border-radius: 40px;
  }
  .content {
    border: 1px solid #efefef;
    border-radius: 6px;
    margin-left: 60px;

    .header {
      padding: 16px;
      background-color: #efefef;
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

const ReactionCount = styled('span')`
  color: gray;
  padding-left: 8px;
`

const Actions = styled('div')`
  margin-top: 40px;
  margin-bottom: 40px;
  float: right;
`

interface AvatarProps {
  readonly url: string
  readonly avatar: string
  readonly login: string
}

const Avatar: React.FC<AvatarProps> = ({url, avatar, login}) => (
  <a href={url} title={`@${login}`}>
    <img className="avatar avatar-user" height="40" width="40" alt={`@${login}`} src={avatar} />
  </a>
)

type ReactionKey = '+1' | '-1' | 'confused' | 'eyes' | 'heart' | 'hooray' | 'laugh' | 'rocket'
type ReactionImages = {[key in ReactionKey]: string}
type ReactionEmoji = {[key in ReactionKey]: string}

const REACTIONS = ['+1', '-1', 'confused', 'eyes', 'heart', 'hooray', 'laugh', 'rocket']

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
    rocket: '1f680.png',
  }
  const emoji: ReactionEmoji = {
    '+1': '👍',
    '-1': '👎',
    confused: '😕',
    eyes: '👀',
    heart: '❤️',
    hooray: '🎉',
    laugh: '🤣',
    rocket: '🚀',
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
        className="emoji">
        {reactionEmoji} <ReactionCount>{count}</ReactionCount>
      </g-emoji>
    </a>
  )
}

interface CommentsProps {
 readonly url: string;
}
const Comments: React.FC<CommentsProps> = ({url}) => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [comments, setComments] = useState(null as any)

  useEffect(() => {
    if (!isBrowser) return
    const apiUrl = url.replace('github.com/', 'api.github.com/repos/')
    const commentsUrl = `${apiUrl}/comments`
    const fetchComments = async (): Promise<void> => {
      const response = await fetch(commentsUrl, {
        headers: {
          Accept: 'application/vnd.github.v3.html+json application/vnd.github.squirrel-girl-preview',
        },
      })

      const json = await response.json()
      console.log(json)
      setComments(json)
    }
    fetchComments()
  }, [url])

  return (
    <>
      <hr />
      <h2>Comments</h2>
      <Container className="github">
        <div>
          <p>
            Thanks for reading ❤️ – comment by replying to the <a href={url}>issue for this post</a>.{` `}
            {(!comments || comments.length === 0) && 'There’s no comments yet; you could be the first.'}
            <br />
          </p>
        </div>
        {comments &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        comments.map((comment: any) => {
          return (
            <Comment key={comment.id} className="comment sans">
              <div className="content">
                <Avatar url={comment.user.html_url} avatar={comment.user.avatar_url} login={comment.user.login} />
                <div className="header">
                  <div className="date" data-date={comment.created_at}>
                    <a href={comment.user.html_url}>
                      <strong>@{comment.user.login}</strong>
                    </a>
                    {` `}
                    commented <a href={comment.html_url}>{timeAgoInWords(comment.created_at)} ago</a>
                    {` `}
                    {comment.updated_at > comment.created_at && <span>• edited</span>}
                  </div>
                  {comment.author_association === 'OWNER' && <div className="association">Author</div>}
                  {comment.author_association === 'OWNER' && <div className="association">Owner</div>}
                </div>
                <div className="markdown-body sans" dangerouslySetInnerHTML={{__html: comment.body_html}} />
                <div className="reactions">
                  {REACTIONS.map(reaction => (
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
                    className="react">
                    <div>
                      <svg
                        className="octicon octicon-smiley"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        height="16"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
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
          <a href={`${url}#new_comment_field`} target="_blank" rel="noreferrer noopener" className="button btn">
            Add a comment &rarr;
          </a>
        </Actions>
      </Container>
    </>
  )
}



export default Comments;
