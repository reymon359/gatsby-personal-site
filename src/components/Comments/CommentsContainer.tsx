import React, {useEffect, useState} from 'react'
import Comments from './Comments'

const isBrowser = typeof window !== `undefined`

interface CommentsContainerProps {
  commentsUrl: string
}

const CommentsContainer: React.FC<CommentsContainerProps> = ({commentsUrl}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [comments, setComments] = useState(null as any)
  useEffect(() => {
    if (!isBrowser) return
    const apiUrl = `${commentsUrl.replace(
      'github.com/',
      'api.github.com/repos/'
    )}/comments`
    const fetchComments = async (): Promise<void> => {
      const response = await fetch(apiUrl, {
        headers: {
          Accept:
            'application/vnd.github.v3.html+json application/vnd.github.squirrel-girl-preview'
        }
      })

      if (response.ok) {
        const json = await response.json()
        setComments(json)
      }
    }
    fetchComments()
  }, [commentsUrl])

  return <Comments comments={comments} url={commentsUrl} />
}

export default CommentsContainer
