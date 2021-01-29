import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 20,
    },
    image: {
        width: 75,
        height: 75
    },
    title: {
        color: 'white',
        fontSize: 20,
    },
    artist: {
        color: 'grey',
        fontSize: 16,
    },
    rightContainer: {
        justifyContent: 'space-evenly',
        marginLeft: 15,
    },

})

export default styles;