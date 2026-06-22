import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";
import { useQuery, useApolloClient } from "@apollo/client/react";
import Text from "./Text";
import theme from "../theme";
import { ME } from "../graphql/queries";
import useAuthStorage from "../hooks/useAuthStorage";

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
  const { data } = useQuery(ME);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.tabsRow}>
        <AppBarTab title="Repositories" to="/" />
        {data?.me ? (
          <Pressable style={styles.tab} onPress={signOut}>
            <Text style={styles.tabText}>Sign out</Text>
          </Pressable>
        ) : (
          <AppBarTab title="Sign in" to="/sign-in" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
