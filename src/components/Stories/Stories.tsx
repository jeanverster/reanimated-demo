import * as React from "react";
import { ScrollView } from "react-native";
import SingleStory, { Story } from "./SingleStory";
import { StoriesContainer } from "./StoriesStyles";

type StoriesProps = {
  stories: Story[];
};

const Stories: React.FC<StoriesProps> = ({ stories }) => {
  return (
    <StoriesContainer>
      <ScrollView horizontal={true}>
        {stories.map((story, i) => (
          <SingleStory key={story.id} {...story} />
        ))}
      </ScrollView>
    </StoriesContainer>
  );
};

export default Stories;
