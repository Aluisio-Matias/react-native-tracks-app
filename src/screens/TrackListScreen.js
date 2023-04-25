import React, { useContext } from "react";
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from "react-native-elements";
import { NavigationEvents, SafeAreaView } from "react-navigation";
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <NavigationEvents onWillFocus={fetchTracks} />
            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('TrackDetail', { _id: item._id })}
                        >
                            <ListItem>
                                <ListItem.Content>
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        </TouchableOpacity>
                    );
                }}
            />
        </SafeAreaView>
    )
};

TrackListScreen.navigationOptions = {
    title: 'Tracks'
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginBottom: 200,
        marginLeft: 15,
        flex: 1,
    },
});

export default TrackListScreen;

