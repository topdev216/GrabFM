import React, {PureComponent} from 'react';
import {Dimensions, SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Button, Icon, Spinner, Text} from 'native-base';
import PropTypes from 'prop-types';

const STYLE = StyleSheet.create({
    container: {
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'space-evenly'
    },
    item: {
        alignSelf: 'center'
    },
    iconWrapper: {
        backgroundColor: '#eeeeee',
        borderColor: '#cccccc',
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        borderWidth: 1,
        fontSize: 100,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },
    icon: {
        color: 'black',
        fontSize: Dimensions.get('window').width / 3
    }
});

const IMAGE_PICKER_OPTIONS = {
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

class CaptureButton extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {loading: false};
    }

    takePhoto = () => {
        this.setState({loading: true});
        ImagePicker.launchCamera(IMAGE_PICKER_OPTIONS, response => {
            this.processPhotoResponse(response);
        });
    };

    selectFromLibrary = () => {
        this.setState({loading: true});
        ImagePicker.launchImageLibrary(IMAGE_PICKER_OPTIONS, response => {
            this.processPhotoResponse(response);
        });
    };

    processPhotoResponse = response => {
        this.setState({loading: false});

        if (!response.didCancel) {
            this.props.navigation.navigate('Tags', {image: response});
        }
    };

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={STYLE.container}>
                    {this.state.loading ? <Spinner/> : <View style={STYLE.container}>
                        <TouchableOpacity onPress={this.takePhoto}>
                            <View style={STYLE.iconWrapper}>
                                <Icon android='md-camera' ios='ios-camera' style={STYLE.icon}/>
                            </View>
                            <Button onPress={this.takePhoto} style={STYLE.item}>
                                <Text>Take Photo</Text>
                            </Button>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.selectFromLibrary}>
                            <View style={STYLE.iconWrapper}>
                                <Icon android='md-images' ios='ios-images' style={STYLE.icon}/>
                            </View>
                            <Button onPress={this.selectFromLibrary} style={STYLE.item}>
                                <Text>Select Photo</Text>
                            </Button>
                        </TouchableOpacity>
                    </View>}
                </View>
            </SafeAreaView>
        );
    }
}

CaptureButton.propTypes = {
    navigate: PropTypes.object,
    navigation: PropTypes.object
};

export default CaptureButton;