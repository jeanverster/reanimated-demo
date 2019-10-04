import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { stories } from "../../../App";
import SingleStory from "./SingleStory";
import { StoriesContainer } from "./StoriesStyles";

const { Value, event, Extrapolate, abs, sub, multiply, divide, sin, cond, greaterThan } = Animated;

const { width } = Dimensions.get("window");

const perspective = width * 1.5;

const angle = Math.atan(perspective / (width / 2));

const ratio = 2;

const Stories: React.FC<{}> = () => {
  const x = new Value(0);

  function getStyle(index: number) {
    const offset = index * width;
    const inputRange = [offset - width, offset + width];

    const translateX = x.interpolate({
      inputRange,
      outputRange: [width / ratio, -width / ratio],
      extrapolate: Extrapolate.CLAMP
    });

    const rotateY = x.interpolate({
      inputRange,
      outputRange: [angle, -angle],
      extrapolate: Extrapolate.CLAMP
    });

    const alpha = abs(rotateY);
    const gamma = sub(angle, alpha);
    const beta = sub(Math.PI, alpha, gamma);

    const w = sub(width / 2, multiply(width / 2, divide(sin(gamma), sin(beta))));

    const translateX1 = cond(greaterThan(rotateY, 0), w, multiply(w, -1));

    return {
      ...StyleSheet.absoluteFillObject,
      transform: [{ perspective }, { translateX }, { rotateY }, { translateX: translateX1 }]
    };
  }

  function getMaskStyle(index: number) {
    const offset = index * width;
    const inputRange = [offset - width, offset, offset + width];
    const opacity = x.interpolate({
      inputRange,
      outputRange: [0.85, 0, 0.85],
      extrapolate: Extrapolate.CLAMP
    });
    return {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "black",
      opacity
    };
  }

  return (
    <StoriesContainer>
      {stories.map((story, i) => (
        <Animated.View style={getStyle(i)} key={story.id}>
          <SingleStory {...story} />
          <Animated.View style={getMaskStyle(i)} />
        </Animated.View>
      ))}
      <Animated.ScrollView
        snapToInterval={width}
        horizontal={true}
        decelerationRate="fast"
        contentContainerStyle={{ width: width * stories.length }}
        scrollEventThrottle={16}
        onScroll={event([
          {
            nativeEvent: {
              contentOffset: {
                x
              }
            }
          }
        ])}
      />
    </StoriesContainer>
  );
};

export default Stories;
