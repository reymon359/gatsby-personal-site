'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Reactions from './Reactions';
// import dynamic from 'next/dynamic';

interface CommentsContainerProps {
  commentsUrl: string;
}

interface GithubUser {
  html_url: string;
  avatar_url: string;
  login: string;
}

interface GithubComment {
  id: number;
  user: GithubUser;
  created_at: string;
  updated_at: string;
  html_url: string;
  body_html: string;
  author_association?: string;
  reactions?: Record<string, number>;
}

interface HeaderProps {
  url: string;
  noComments: boolean;
}

const Header: React.FC<HeaderProps> = ({ url, noComments }) => (
  <div className='flex flex-col gap-4 mb-8 font-normal'>
    <h2 className="text-2xl mb-2 font-thin">Comments</h2>
    <p className="">Thanks for reading ❤️</p>
    <p className="">
      You can comment by replying to the{' '}
      
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className="cursor-pointer underline underline-offset-2 decoration-dashed decoration-white decoration-[1px] hover:decoration-solid transition-colors ease-in duration-200 font-bold text-white print:text-black print:border-b print:w-fit"
      >
        issue for this post.
      </a>
    </p>
    {noComments && (
      <p className="mb-4 text-gray-400">
        There’s no comments yet,{` `}
        <a
          href={`${url}#new_comment_field`}
          target="_blank"
          rel="noreferrer noopener"
          className="underline text-blue-400 hover:text-blue-200"
        >
          be the first to leave one!
        </a>
      </p>
    )}
  </div>
);

// Utility for relative time
function getTimeAgoInWords(dateString: string) {
  const now = new Date();
  const date = new Date(dateString);
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 }
  ];
  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? 's' : ''}`;
    }
  }
  return 'just now';
}

const Comments: React.FC<{ url: string; comments: GithubComment[] }> = ({ url, comments }) => (
  <div className="py-8">
    <Header url={url} noComments={comments.length === 0} />
    {comments.map(comment => (
      <div key={comment.id} className="mb-8 flex items-start">
        {/* Avatar on the left */}
        <a
          href={comment.user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
        >
          <Image
            src={comment.user.avatar_url}
            alt={comment.user.login}
            width={40}
            height={40}
            className="rounded-full border-2 border-gray-200"
          />
        </a>
        {/* Comment content box */}
        <div className="ml-4 flex-1 border border-gray-200 rounded-lg bg-transparent p-0">
          {/* Header row: name, date, association badge */}
          <div className="flex flex-wrap items-center border-b border-gray-200 px-4 py-4">
            <div className="flex-1 min-w-0 ">
              <a
                href={comment.user.html_url}
                className="cursor-pointer underline underline-offset-2 decoration-dashed decoration-white decoration-[1px] hover:decoration-solid transition-colors ease-in duration-200  font-bold  text-white print:text-black print:border-b print:w-fit"
                target="_blank"
                rel="noopener noreferrer"
              >
                @{comment.user.login}
              </a>
              <span className="ml-2">
                commented{' '}
                <a
                  href={comment.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 decoration-dashed decoration-white decoration-[1px] hover:decoration-solid transition-colors ease-in duration-200 font-bold"
                >
                  {getTimeAgoInWords(comment.created_at)} ago
                </a>
                {comment.updated_at > comment.created_at && <span> • edited</span>}
              </span>
            </div>
            {/* Association badges */}
            <div className="flex gap-2 ">
              {comment.author_association === 'OWNER' && (
                <span className="px-3 py-0.5 border border-white rounded-full text-xs text-white bg-transparent capitalize h-fit flex justify-center items-center">Owner</span>
              )}
              {comment.author_association === 'OWNER' && (
                <span className="px-3 py-0.5 border border-white rounded-full text-xs text-white bg-transparent capitalize h-fit flex justify-center items-center">Author</span>
              )}
            </div>
          </div>
          {/* Comment body */}
          <div className="py-3">
            <div
              className="prose prose-invert mb-2 pb-5 px-4 prose-blockquote:border-white text-white font-semibold"
              dangerouslySetInnerHTML={{ __html: comment.body_html }}
            />
            {/* Reactions */}
            {comment.reactions && (
              <Reactions comment={{ html_url: comment.html_url, reactions: comment.reactions ?? {} }} />
            )}
          </div>
        </div>
      </div>
    ))}
    <div className="mt-4 flex justify-end">
      <a
        href={`${url}#new_comment_field`}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold rounded-lg px-3 py-2 bg-white/30 text-white border-none whitespace-nowrap transition-colors duration-300 hover:bg-white hover:text-black box-border mt-8 mb-1 ml-4 leading-none"
      >
        Add a comment &rarr;
      </a>
    </div>
  </div>
);

const CommentsContainer: React.FC<CommentsContainerProps> = ({ commentsUrl }) => {
  const [comments, setComments] = useState<GithubComment[]>([]);
    console.log(commentsUrl, "commentsUrl")
  useEffect(() => {
    const apiUrl = `${commentsUrl.replace('github.com/', 'api.github.com/repos/')}/comments`;
    fetch(apiUrl, {
      headers: {
        Accept: 'application/vnd.github.v3.html+json, application/vnd.github.squirrel-girl-preview'
      }
    })
      .then(res => res.ok ? res.json() : [])
      .then(setComments)
      .catch(() => setComments([]));
  }, [commentsUrl]);

  return <Comments comments={comments} url={commentsUrl} />;
};

export default CommentsContainer;
