import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import PerfDemo from "./src/components/PerfDemo/PerfDemo";
import Stories from "./src/components/Stories/Stories";
import HomeScreen from "./src/HomeScreen";

export const stories = [
  {
    id: "0",
    source: require("./assets/0.jpg"),
    user: "derek.russel",
    avatar: require("./assets/avatars/0.png")
  },
  {
    id: "1",
    source: require("./assets/1.jpg"),
    user: "jmitch",
    avatar: require("./assets/avatars/1.png")
  },
  {
    id: "2",
    source: require("./assets/2.jpg"),
    user: "monicaa",
    avatar: require("./assets/avatars/2.png")
  },
  {
    id: "3",
    source: require("./assets/3.jpg"),
    user: "alexandergarcia",
    avatar: require("./assets/avatars/3.png")
  },
  {
    id: "4",
    source: require("./assets/4.jpg"),
    user: "andrea.schmidt",
    avatar: require("./assets/avatars/4.png")
  }
];

const Navigator = createStackNavigator({
  home: { screen: HomeScreen },
  perfDemo: { screen: PerfDemo },
  instaStories: { screen: Stories }
});

const MainNav = createAppContainer(Navigator);

export default function App() {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    async function loadImages() {
      await Promise.all(
        stories.map(story => Promise.all([Asset.loadAsync(story.source), Asset.loadAsync(story.avatar)]))
      );
      setReady(true);
    }
    loadImages();
  }, []);

  if (!ready) {
    return <AppLoading />;
  }

  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <MainNav />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
