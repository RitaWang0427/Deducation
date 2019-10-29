import React, { Component } from "react";

import { StyleSheet, View } from "react-native";
import double from "./doubleClasses";
import userInfo from "./userInfo";
import TabNavigator from "react-native-tab-navigator";

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: MainScreen,
    };
  }

  render() {
    return (
      <View style={styles.Container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === MainScreen}
            selectedTitleStyle={styles.selectedTabText}
            title={'错题分析'}
            titleStyle={styles.tabText}
            onPress={() => this.setState({ selectedTab: MainScreen })}
          />
          <TabNavigator.Item
            selected={this.state.selectedTab === double}
            selectedTitleStyle={styles.selectedTabText}
            title={'双师课堂'}
            titleStyle={styles.tabText}
            onPress={() => this.setState({ selectedTab: double })}
          />
          <TabNavigator.Item
            selected={this.state.selectedTab === userInfo}
            selectedTitleStyle={styles.selectedTabText}
            title={'用户信息'}
            titleStyle={styles.tabText}
            onPress={() => this.setState({ selectedTab: userInfo })}
          />
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    color: 'azure'
  },
  tabText: {
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'darkseagreen',
    fontFamily: 'PingFangTC-thin',
    textAlign: 'center'
  },
  selectedTabText: {
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'forestgreen',
    fontFamily: 'PingFangTC-thin',
    textAlign: 'center'
  },
});
