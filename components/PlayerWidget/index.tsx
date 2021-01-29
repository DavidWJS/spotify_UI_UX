import React, { useEffect, useState } from 'react';
import {Text, Image, View} from 'react-native';
import { Song } from '../../types';
import {AntDesign, FontAwesome} from '@expo/vector-icons';
import {Audio} from 'expo-av';

import styles from './styles';
import { Sound } from 'expo-av/build/Audio';
import { TouchableOpacity } from 'react-native-gesture-handler';

const song = {
    id: '1',
    uri: 'https://wonjungsong.com/wp-content/uploads/2021/01/Ariana-Grande-Santa-Tell-Me.mp3',
    imageUri: 'https://wonjungsong.com/wp-content/uploads/2021/01/9.png',
    title: 'Santa Tell Me',
    artist: 'Ariana...'
}

const PlayerWidget = () => {

    const [sound, setSound] = useState<Sound|null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [duration, setDuration] = useState<number|null>(null);
    const [position, setPosition] = useState<number|null>(null);

    const onPlaybackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
    }

    const playCurrentSong = async () => {
        if (sound) {
            await sound.unloadAsync();
        }
        const {sound: newSound} = await Sound.createAsync(
            {uri: song.uri},
            {shouldPlay: isPlaying},
            onPlaybackStatusUpdate
        )

        setSound(newSound)
    }

    useEffect(() => {
        // play the sond
        playCurrentSong();
    }, [])

    const onPlayPausePress = async () => {
        if (!sound) {
            return;
        }
        if (isPlaying) {
            await sound.pauseAsync();
        } else {
            await sound.playAsync();
        }
    }

    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
            return 0;
        }

        return (position / duration) * 100;
    }

    return (
        <View style={styles.container}>
            <View style={[styles.progress, {width: `${getProgress()}%`}]} />
            <View style={styles.row}>
                <Image source={{uri: song.imageUri}} style={styles.image}/>
                <View style={styles.rightContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.title}>{song.title}</Text>
                        <Text style={styles.artist}>{song.artist}</Text>
                    </View>
                    <View style={styles.iconsContainer}>
                        <AntDesign name="hearto" size={25} color={'white'}/>
                        <TouchableOpacity onPress={onPlayPausePress}>
                            <FontAwesome name={isPlaying ? 'pause' : 'play'} size={25} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PlayerWidget;