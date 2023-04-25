import React, { useContext } from "react";
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from '../components/AuthForm';
import NavLink from "../components/NavLink";

const SignupScreen = () => {
    const { state, signup, clearErroMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErroMessage}
            />
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in instead!"
            />
        </View>
    )
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginBottom: 200,
        flex: 1
    }
});

export default SignupScreen;
