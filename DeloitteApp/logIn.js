/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import { StackActions, NavigationActions } from "react-navigation";

export default class logIn extends Component {
  constructor() {
    super();
    this.state = {
      mobile: '',
      username: '',
      email: '',
      password: '',
      age: '',
      grade: '',
      school: '',
      apiData: [],
      naData: [],
    };
  }
  onGetUsers = () => {
      fetch('http://192.168.43.147:9090/user' + this.mobile, {
        method: 'GET',
      })
        .then(response => {
          return response.json();
        })
        .then(jsonData => {
          this.setState({
            apiData: jsonData,
          });
          console.log(this.state.apiData);
        })
        .catch(error => {
          console.warn(error);
        })
        .done();
      this.mobile = '';
    };

  checkUserPassword = () => {
      try {
        if (this.state.apiData.password !== this.state.password) {
          Alert.alert('密码输入错误');
          return;
        }
      } catch (error) {
        console.log(error.toString());
      }
    }

  render() {
    const { actions, state, navigation } = this.props;
    return (
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={false}
        scrollEnabled={false}
      >
        <View style={styles.container}>
          <View style={styles.BAContainer}>
            <TouchableOpacity
              style={styles.Back}
              onPress={() =>
                this.props.navigation.dispatch(
                  StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: "Home" })]
                  })
                )
              }
            >
              <Text style={styles.BAText}>返回</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.TContainer}>
            <View style={styles.T1Container}>
              <Text style={styles.textProfile}>手机号: </Text>
              <TextInput
                style={styles.TextInputP}
                placeholder="请输入手机号"
                clearButtonMode="while-editing"
                secureTextEntry={false}
                autoCapitalize={'none'}
                onChangeText={text => {
                  this.setState({
                    mobile: text,
                  });
                }}
                value={this.state.mobile}
              />
            </View>
            <View style={styles.lineBottom} />
            <View style={styles.T2Container}>
              <Text style={styles.textProfile}>密码:   </Text>
              <TextInput
                style={styles.TextInputP}
                placeholder="请输入密码"
                clearButtonMode="while-editing"
                secureTextEntry={true}
                onChangeText={text => {
                  this.setState({
                    password: text,
                  });
                }}
                value={this.state.password}
              />
            </View>
            <View style={styles.lineBottom} />
          </View>
          <View style={styles.TOV}>
            <TouchableOpacity
              style={styles.TO}
              onPress={() =>[
                this.props.navigation.dispatch(
                  StackActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'MS' })
                    ]
                  })
                ),
                this.onGetUsers(),
                this.checkUserPassword(),]
              }
            >
              <Text style={styles.containerB}>登 录</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'azure',
    flex: 1,
    justifyContent: 'center'
  },
  BAContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 5,
  },
  Back: {
    textAlign: 'center',
    backgroundColor: 'azure',
    paddingHorizontal: 10,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderColor: 'azure',
    borderRadius: 20,
  },
  BAText: {
    color: 'darkgreen',
    fontSize: 20,
    fontFamily: 'PingFangTC-Thin'
  },
  TContainer: {
    flex: 1.5,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginLeft: 25,
    marginBottom: 40,
  },
  T1Container: {
    flex: 5,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginLeft: 15,
    marginBottom: 30,
    flexDirection: 'row'
  },
  T2Container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 15,
    flexDirection: 'row'
  },
  lineBottom: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'darkseagreen'
  },
  textProfile: {
    fontSize: 20,
    color: 'darkgreen',
    fontFamily: 'PingFangTC-Regular'
  },
  TextInputP: {
    flex: 7,
    color: 'grey',
    fontSize: 20,
    fontFamily: 'PingFangTC-thin',
    marginRight: 20,
    marginLeft: 15,
  },
  TOV: {
    flex: 1.4,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  TO: {
    textAlign: 'center',
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
