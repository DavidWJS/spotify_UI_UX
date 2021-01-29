import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
    container: {
        position: 'absolute',
        backgroundColor: '#131313',
        bottom: 79,
        width: '100%',
        borderWidth: 2,
        borderColor: 'black',
    },
    image: {
        marginLeft: 15,
        width: 75,
        height: 75,
        marginRight: 10,
    },
    title: {
        margin: 10,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    artist: {
        color: 'grey',
        fontSize: 16,
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-evenly'
    },
    progress: {
        height: 3,
        backgroundColor: '#bcbcbc'
    },
    row: {
        flexDirection: 'row'
    }

})

export default styles;