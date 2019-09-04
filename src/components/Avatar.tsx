import { Constants } from "expo";
import * as React from "react";
import { ImageSourcePropType, Platform } from "react-native";
import styled from "styled-components/native";

type AvatarProps = {
  user: string;
  source: ImageSourcePropType;
};

const AvatarCont = styled.View`
  padding: 16px;
  flex-direction: row;
  align-items: center;
  margin-top: ${Platform.OS === "android" ? Constants.statusBarHeight : 0};
`;

const AvatarImage = styled.Image`
  width: 36px;
  height: 36px;
  margin-right: 16px;
  border-radius: 18px;
`;

const AvatarText = styled.Text`
  color: white;
  font-size: 16px;
`;

const Avatar: React.FC<AvatarProps> = ({ user, source }) => {
  return (
    <AvatarCont>
      <AvatarImage source={source} />
      <AvatarText>{user}</AvatarText>
    </AvatarCont>
  );
};

export default Avatar;
