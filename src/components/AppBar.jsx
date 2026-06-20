import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  tabsRow: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  tab: {
    paddingHorizontal: 10,
  },
  tabText: {
    color: theme.colors.appBarText,
    fontWeight: "700",
  },
});

const AppBarTab = ({ title, to }) => {
  return (
    <Link to={to} style={styles.tab}>
      <Text style={styles.tabText}>{title}</Text>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.tabsRow}>
        <AppBarTab title="Repositories" to="/" />
        <AppBarTab title="Sign in" to="/sign-in" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
