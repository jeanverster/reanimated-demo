import * as React from "react";
import { Dimensions, ScrollView } from "react-native";
import SingleStory, { Story } from "./SingleStory";
import { StoriesContainer } from "./StoriesStyles";

const { width } = Dimensions.get("window");

type StoriesProps = {
  stories: Story[];
};

const Stories: React.FC<StoriesProps> = ({ stories }) => {
  return (
    <StoriesContainer>
      <ScrollView snapToInterval={width} horizontal={true}>
        {stories.map((story, i) => (
          <SingleStory key={story.id} {...story} />
        ))}
      </ScrollView>
    </StoriesContainer>
  );
};

export default Stories;
