import { Feather as Icon } from "@expo/vector-icons";
import * as React from "react";
import { ImageSourcePropType, SafeAreaView } from "react-native";
import Avatar from "../Avatar";
import { Container, Footer, Input, StoryImage } from "./SingleStoryStyles";

export type Story = {
  id: string;
  source: ImageSourcePropType;
  user: string;
  avatar: ImageSourcePropType;
};

const SingleStory: React.FC<Story> = ({ source, avatar, user }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <StoryImage source={source} />
        <Avatar source={avatar} user={user} />
      </Container>
      <Footer>
        <Icon name="camera" color="white" size={28} />
        <Input style={{ color: "white" }} />
        <Icon name="message-circle" color="white" size={28} />
      </Footer>
    </SafeAreaView>
  );
};

export default React.memo(SingleStory);
