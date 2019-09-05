import { Dimensions } from "react-native";
import styled from "styled-components/native";
const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
`;

export const StoryImage = styled.Image`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: null;
  height: null;
  border-radius: 4;
  position: absolute;
`;

export const Footer = styled.View`
  padding: 16px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 32px;
  border-width: 2px;
  border-radius: 8px;
  border-color: white;
  margin-horizontal: 16px;
  padding-horizontal: 8px;
`;
