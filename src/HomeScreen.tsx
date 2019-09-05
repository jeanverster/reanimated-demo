import * as React from "react";
import { Text } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import styled from "styled-components/native";

type HomeScreenProps = NavigationScreenProps & {};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  background-color: lightblue;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 4px;
`;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <Container>
      <Button onPress={() => navigation.navigate("perfDemo")}>
        <Text>Perf Demo</Text>
      </Button>
      <Button onPress={() => navigation.navigate("instaStories")}>
        <Text>Instagram Demo</Text>
      </Button>
    </Container>
  );
};

export default HomeScreen;
