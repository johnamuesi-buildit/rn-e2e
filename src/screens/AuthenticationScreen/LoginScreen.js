import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet, TextInput, Button
} from "react-native";
import { Formik } from 'formik';

class LoginScreen extends Component {
    render() {
        return (
           <View style={styles.container}>
                <Formik 
            initialValues={{ firstName: '' }} 
            onSubmit={values => {
                Alert.alert(JSON.stringify(values, null, 2));
                Keyboard.dismiss();
              }
            }>
            {({ handleChange, handleSubmit, values }) => (
              <View>
              <TextInput
              accessibilityLabel="username"
                style={styles.textInput}
                onChangeText={handleChange('username')}
                value={values.firstName}
                label="Username"
                placeholder="username"
              />
              <TextInput
              accessibilityLabel="password"
                style={styles.textInput}
                onChangeText={handleChange('password')}
                value={values.firstName}
                label="Password"
                placeholder="password"
              />
              <Button onPress={handleSubmit} style={styles.button} title="login"/>

              </View>
            )}
          </Formik>
           </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput:{
        backgroundColor: '#999',
        padding: 5,
        width: 300,
        margin: 20,
        color: '#fff',
        fontSize: 24,


    }
});