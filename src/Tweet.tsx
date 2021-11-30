import { Text } from "@nextui-org/react";
import React from "react";
import emoji from "react-easy-emoji";
import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";

export default function Tweet() {
  const tweetText = useAppSelector((s) => s.global.tweetText);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        padding: "16px",
        width: "598px",
        border: `solid 1px rgb(239, 243, 244)`,
      }}
    >
      <div style={{ marginRight: 12 }}>
        <TweetAvatar />
      </div>
      <div>
        <Text weight="bold" span>
          {`You `}
        </Text>
        <Text span>@your_username · 1h</Text>
        <div>
          <TweetText>
            {emoji(tweetText || "Welcome to the twitter preview app")}
          </TweetText>
        </div>
      </div>
    </div>
  );
}

const TweetText = styled.div`
  font-size: 15px;
  line-height: 20px;
  white-space: pre-line;
  color: rgba(15, 20, 25);
  > img {
    font-size: 18px;
    vertical-align: -20%;
    line-height: 20px;
  }
`;

const TweetAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 48px;
  display: block;
  background-color: #222;
`;
