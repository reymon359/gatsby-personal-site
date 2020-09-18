import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  margin-left: -60px;

  a {
    border: none;
    &:hover {
      border: none;
    }
  }

  img {
    border-radius: 40px;
  }
`

interface AvatarProps {
  readonly url: string
  readonly avatar: string
  readonly login: string
}

const Avatar: React.FC<AvatarProps> = ({url, avatar, login}) => (
  <Wrapper>
    <a href={url} title={`@${login}`}>
      <img
        className="avatar avatar-user"
        height="40"
        width="40"
        alt={`@${login}`}
        src={avatar}
      />
    </a>
  </Wrapper>
)
export default Avatar
