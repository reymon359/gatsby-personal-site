import React from 'react'

interface HeaderProps {
  readonly url: string
  readonly noComments: boolean
}

const Header: React.FC<HeaderProps> = ({url, noComments}) => (
  <>
    <h2>Comments</h2>
    <p>Thanks for reading ❤️ </p>

    <p>
      You can comment by replying to the{' '}
      <a href={url} target="_blank" rel="noreferrer noopener">
        issue for this post.
      </a>
    </p>

    {noComments && (
      <p>
        There’s no comments yet,{` `}
        <a
          href={`${url}#new_comment_field`}
          target="_blank"
          rel="noreferrer noopener"
        >
          be the first to leave one!
        </a>
      </p>
    )}
  </>
)

export default Header
