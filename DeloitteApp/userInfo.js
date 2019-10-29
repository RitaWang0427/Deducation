import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
import signUp from './signUp';
import logIn from "./logIn";

export default class userInfo extends Component {
    constructor(props){
        super(props);
        this.buttonPressed = this.buttonPressed.bind(this);
        if (signUp) {
            this.state = {
                mobile: signUp.state.mobile,
                username: signUp.state.username,
                email: signUp.state.email,
                password: signUp.state.password,
                age: '',
                grade: '',
                school: '',
            };
        } else {
            this.state = {
                mobile: logIn.state.mobile,
                username: logIn.state.username,
                email: logIn.state.email,
                password: logIn.state.password,
        age: logIn.state.age,
        grade: logIn.state.grade,
        school: logIn.state.school

            };
        }
    }

    updateUsers = () => {
        fetch('http://192.168.43.147:9090/user'+this.mobile,{
            method: 'UPDATE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: this.username, email: this.email, password: this.password,
                age: this.age, grade: this.grade, school: this.school }),
        }).then((response) => {
            return response.json();
        }).then((jsonData) => {
            this.setState({
                naData: jsonData,
            });
            console.log(this.state.naData);
        })
            .catch((error) => {
                console.warn(error);
            }).done();
        this.mobile = null;
        this.name = null;
        this.email = null;
        this.password = null;
        this.password2 = null;
    };


    updatePassword = () => {
        const {navigation: navigation} = this.props;
        if (navigation) {
            this.props.navigation.navigate('./updatePassword');
        }
    };

    buttonPressed() {
        const {navigation: navigation} = this.props;
        if (navigation) {
            this.props.navigation.navigate('./MainScreen');
        }
    }

    render() {
        return (
            <ScrollView
                contentContainerStyle={{flex: 1}}
                keyboardDismissMode="on-drag"
                keyboardShouldPersistTaps={false}
                scrollEnabled={false}>
                <View style={styles.container}>
                    <View style={styles.BAContainer}>
                        <TouchableOpacity
                            style={styles.Back}
                            onPress={() => this.buttonPressed()}>
                            <Text style={styles.BAText}>返回</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            disabled = {this.state.disabled}
                            activeOpacity = {0.8}
                            style={styles.TO}
                            onPress={() => [this.updateUsers(),this.signUpUser()]}>
                            <Text style={styles.containerB}>保存</Text>
            </TouchableOpacity>
            {this.state.loading ? <ActivityIndicator size={"large"} /> : null}
          </View>
          <View style={styles.TitleContainer}>
            <Text style={styles.TitleText}>用户信息</Text>
          </View>
          <View style={styles.TContainer}>

                        <View style={styles.T1Container}>
                            <Text style={styles.textProfile}>您的用户名: </Text>
                            <TextInput
                                style={styles.TextInputP}
                                placeholder={this.state.username}
                                secureTextEntry={false}
                                autoCapitalize={'none'}
                                onChangeText={text => {
                                    this.setState({
                                        username: text,
                                    });
                                }}
                                value={this.state.username}
                            />
                        </View>
                        <View style={styles.lineBottom} />
                        <View style={styles.T2Container}>
                            <Text style={styles.textProfile}>您的手机号:</Text>
                            <TextInput
                                style={styles.TextInputP}
                                placeholder={this.state.mobile}
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
                            <Text style={styles.textProfile}>您的邮箱号:</Text>
                            <TextInput
                                style={styles.TextInputP}
                                placeholder={this.state.email}
                                secureTextEntry={false}
                                autoCapitalize={'none'}
                                onChangeText={text => {
                                    this.setState({
                                        email: text,
                                    });
                                }}
                                value={this.state.email}
                            />
                        </View>
                        <View style={styles.lineBottom} />
                        <View style={styles.T2Container}>
                            <Text style={styles.textProfile}>您的年龄:  </Text>
                            <TextInput
                                style={styles.TextInputP}
                                placeholder={this.state.age}
                                secureTextEntry={false}
                                autoCapitalize={'none'}
                                onChangeText={text => {
                                    this.setState({
                                        age: text,
                                    });
                                }}
                                value={this.state.age}
                            />
                        </View>
                        <View style={styles.lineBottom} />
                        <View style={styles.T2Container}>
                            <Text style={styles.textProfile}>您的年级:  </Text>
                            <TextInput
                                style={styles.TextInputP}
                                placeholder={this.state.grade}
                                secureTextEntry={false}
                                autoCapitalize={'none'}
                                onChangeText={text => {
                                    this.setState({
                                        grade: text,
                                    });
                                }}
                                value={this.state.grade}
                            />
                        </View>
                        <View style={styles.lineBottom} />
                        <View style={styles.T2Container}>
                            <Text style={styles.textProfile}>您的学校:  </Text>
                            <TextInput
                                style={styles.TextInputP}
                                placeholder={this.state.school}
                                secureTextEntry={false}
                                autoCapitalize={'none'}
                                onChangeText={text => {
                                    this.setState({
                                        school: text,
                                    });
                                }}
                                value={this.state.school}
                            />
                        </View>
                        <View style={styles.lineBottom} />
                        <View style={styles.BOContainer}>
                            <TouchableOpacity
                                style={styles.Back}
                                onPress={() => this.updatePassword()}>
                                <Text style={styles.BAText}>修改密码</Text>
                            </TouchableOpacity>
                        </View>
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
        justifyContent: 'center',
    },
    BAContainer: {
        flex: 0.05,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row',
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
        fontFamily: 'PingFangTC-Thin',
    },
    TitleContainer:{
        flex: 0.2,
        alignItems:'flex-start',
        justifyContent: 'center',
        marginLeft: 25,
    },
    TitleText: {
        fontSize: 40,
        color: 'darkgreen',
        fontFamily: 'PingFangTC-Regular',
    },
    TContainer: {
        flex: 0.7,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        marginLeft: 25,
        marginBottom: 40,
    },
    T1Container: {
        flex: 4,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginLeft: 15,
        marginBottom: 20,
        flexDirection: 'row',
    },
    T2Container: {
        flex: 0.35,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 15,
        flexDirection: 'row',
    },
    lineBottom: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'darkseagreen',
    },
    textProfile: {
        fontSize: 20,
        color: 'darkgreen',
        fontFamily: 'PingFangTC-Regular',
    },
    TextInputP: {
        flex: 7,
        color: 'black',
        fontSize: 20,
        fontFamily: 'PingFangTC-thin',
        marginRight: 20,
        marginLeft: 15,
    },
    TOV: {
        flex: 1.3,
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
    BOContainer: {
        flex: 0.05,
        alignItems: 'flex-end',
        justifyContent:'center',
        marginBottom: 10,
    },
});
