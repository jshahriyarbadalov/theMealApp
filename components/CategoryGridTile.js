import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform, TouchableNativeFeedback, ImageBackground } from 'react-native';

const CategoryGridTile = props => {

    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
            <TouchableCmp style={{ flex: 1 }}
                onPress={props.onSelect}>
                 <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                    </View>
                </ImageBackground> 

                {/* <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                </View> */}
            </TouchableCmp>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
        elevation: 5
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    bgImage: {
        width: '100%',
        height:'100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: "OpenSans-Bold",
        fontSize: 20,
        color:'white',
        textAlign: 'right'
    }
});

export default CategoryGridTile;