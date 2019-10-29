/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  StackActions,
  NavigationActions,
} from 'react-navigation';
import signUp from './signUp';
import logIn from './logIn';
import MainScreen from './MainScreen';


export class WelcomeScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
        <View style={styles.contain}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Deducation</Text>
          </View>
          <View style={styles.container}>
            <TouchableOpacity
                style={styles.TO}
                 onPress={()=>this.props.navigation.dispatch(
                     StackActions.reset({
                       index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: "signUp" })
                    ]
                  })
                )
              }
            >
              <Text style={styles.containerB}>注册</Text>
            </TouchableOpacity>
            <View style={{ flex: 0.4 }}>
              <Text />
            </View>
            <TouchableOpacity style={styles.TO} onPress={() => this.props.navigation.dispatch(
                StackActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: "LogIn" })
                    ]
                })
                )
              }
            >
              <Text style={styles.containerB}>登录</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  Container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  contain: {
    flex: 1,
    backgroundColor: 'azure',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    margin: 10,
    marginTop: 30,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'darkslategrey',
    fontSize: 45,
    textShadowColor: 'darkslateblue',
    textShadowRadius: 3,
    letterSpacing: 2,
    textAlign: 'center',
    fontFamily: 'Geeza Pro',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 50,
  },
  TO: {
    backgroundColor: 'darkcyan',
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderColor: 'darkcyan',
    borderRadius: 30,
  },
  containerB: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'PingFangTC-Light',
    fontSize: 25,
  },
});

const AppNavigator = createStackNavigator(
    {
  Home: { screen: WelcomeScreen },
  LogIn: { screen: logIn },
  signUp: { screen: signUp },
  MS: { screen: MainScreen },
});

export default createAppContainer(AppNavigator);
