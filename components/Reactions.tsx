import React from 'react';

const reactions = [
  '+1',
  '-1',
  'confused',
  'eyes',
  'heart',
  'hooray',
  'laugh',
  'rocket'
] as const;

const reactionEmojis: Record<typeof reactions[number], string> = {
  '+1': '👍',
  '-1': '👎',
  confused: '😕',
  eyes: '👀',
  heart: '❤️',
  hooray: '🎉',
  laugh: '🤣',
  rocket: '🚀'
};

interface ReactionsProps {
  comment: {
    html_url: string;
    reactions: Record<string, number>;
  };
}

const Reactions: React.FC<ReactionsProps> = ({ comment }) => {
  return (
    <div className="border-t border-gray-200 pt-4 mt-2 flex flex-wrap gap-2 items-center px-4 ">
      {reactions.map(reaction => {
        const count = comment.reactions[reaction];
        if (!count) return null;
        return (
          <a
            key={reaction}
            href={comment.html_url}
            title={reaction}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center px-2 py-1 rounded bg-transparent text-white text-sm hover:bg-stone-900 transition"
          >
            <span>{reactionEmojis[reaction]}</span>
            <span className="ml-1">{count}</span>
          </a>
        );
      })}
      <a
        href={comment.html_url}
        title="Add a reaction"
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center px-2 py-1 rounded bg-transparent text-white text-sm ml-2 hover:bg-stone-900 transition mx-4"
      >
        <svg
          viewBox="0 0 16 16"
          width={16}
          height={16}
          aria-hidden="true"
          className="mr-1"
        >
          <path
            fillRule="evenodd"
            fill="#ffffff"
            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
          />
        </svg>
      </a>
    </div>
  );
};

export default Reactions;
