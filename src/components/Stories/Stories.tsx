import * as React from "react";
import { Dimensions, ScrollView } from "react-native";
import { stories } from "../../../App";
import SingleStory from "./SingleStory";
import { StoriesContainer } from "./StoriesStyles";

const { width } = Dimensions.get("window");

const Stories: React.FC<{}> = () => {
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
