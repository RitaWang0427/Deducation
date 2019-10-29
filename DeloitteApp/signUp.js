import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Alert,
    ActivityIndicator,
} from 'react-native';


export default class signUp extends Component {
    constructor(props){
        super(props);
        this.buttonPressed = this.buttonPressed.bind(this);
        this.state = {
            mobile: '',
            username : '',
            email: '',
            password: '',
            password2:'',
            age: '',
            grade: '',
            school: '',
            naData: [],
            apiData: [],
        };
    }

    onPostUser = () => {
        fetch('http://192.168.43.147:9090/user',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mobile:this.mobile, username: this.username, email: this.email, password: this.password,
                age: this.age, grade: this.grade, school: this.school})
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
    }

    signUpUser = () => {
        try {
            if (this.state.password.length < 6){
                Alert.alert('请输入大于等于6位的密码');
            }
            if (this.state.password !== this.state.password2) {
                Alert.alert('两次密码不一致 请重新输入');
            }
        }
        catch (error) {
            console.log(error.toString());
        }
    };

    buttonPressed() {
        const {navigation: navigation} = this.props;
        if (navigation) {
            this.props.navigation.navigate('home');
        }
    }
    BP() {
        const {navigation: navigation} = this.props;
        if (navigation) {
            this.props.navigation.navigate('MS');
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
                    </View>
                    <View style={styles.TContainer}>
                        <View style={styles.T1Container}>
                            <Text style={styles.textProfile}>用户名:</Text>
                            <TextInput
                                style={styles.TextInputP}
                                placeholder="请设置您的用户名"
                                clearButtonMode="while-editing"
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
                            <Text style={styles.textProfile}>手机号:</Text>
                            <TextInput
                                style={styles.TextInputP}
                                placeholder={'请输入您的手机号'}
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
                        <View style={styles.T2Container}>
                            <Text style={styles.textProfile}>邮箱号:</Text>
                            <TextInput
                                style={styles.TextInputP}
                                placeholder={'请输入您的邮箱号'}
                                clearButtonMode="while-editing"
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
                        <View style={styles.T2Container}>
                            <Text>                 </Text>
                            <TextInput
                                style={styles.TextInputP}
                                placeholder="请再次输入密码"
                                clearButtonMode="while-editing"
                                secureTextEntry={true}
                                onChangeText={text => {
                                    this.setState({
                                        password2: text,
                                    });
                                }}
                                value={this.state.password2}
                            />
                        </View>
                        <View style={styles.lineBottom} />
                    </View>
                    <View style={styles.TOV}>
                        <TouchableOpacity
                            disabled = {this.state.disabled}
                            activeOpacity = {0.8}
                            style={styles.TO}
                            onPress={() => [this.onPostUser(),this.signUpUser(),this.BP()]}>
                            <Text style={styles.containerB}>注 册</Text>
                        </TouchableOpacity>
                            (<ActivityIndicator size={'large'} />) : null

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
        fontFamily: 'PingFangTC-Thin',
    },
    TContainer: {
        flex: 1.5,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        marginLeft: 25,
        marginBottom: 40,
    },
    T1Container: {
        flex: 3.3,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginLeft: 15,
        marginBottom: 17,
        flexDirection: 'row',
    },
    T2Container: {
        flex: 1,
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
        color: 'grey',
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
});
