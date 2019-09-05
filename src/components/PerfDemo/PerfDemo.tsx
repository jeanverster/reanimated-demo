import * as React from "react";
import { Animated, Dimensions } from "react-native";
import { PanGestureHandler, PanGestureHandlerStateChangeEvent, State } from "react-native-gesture-handler";
import styled from "styled-components/native";

type PerfDemoProps = {};

const { width } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const Box = styled(Animated.View)`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  background-color: red;
`;

const PerfDemo: React.FC<PerfDemoProps> = () => {
  const [translateX] = React.useState(new Animated.Value(0));

  // Uncomment to see JS thread blocked

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     for (let i = 0; i < 1250; i++) {
  //       console.log("i", i);
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  const onGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX
        }
      }
    ],
    {
      useNativeDriver: true
    }
  );

  const onHandlerStateChange = (event: PanGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true
      }).start();
    }
  };

  return (
    <Container>
      <PanGestureHandler onHandlerStateChange={onHandlerStateChange} onGestureEvent={onGestureEvent}>
        <Box style={{ transform: [{ translateX }] }} />
      </PanGestureHandler>
    </Container>
  );
};

export default PerfDemo;
