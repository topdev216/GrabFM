import React, {PureComponent} from 'react';
import {Dimensions, Image, Modal, TextInput, SafeAreaView, View, TouchableOpacity} from 'react-native';
import {Button, Card, CardItem, Input, Item, Label, Text} from 'native-base';
import PropTypes from 'prop-types';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from '../styles/Tags';

class PhotoTags extends PureComponent {
    constructor(props) {
        super(props);
        const image = props.navigation.getParam('image');
        this.state = {
            brand: null,
            product: null,
            showModal: false,
            image: image,
            platform: props.navigation.getParam('platform') || '',
            otherPlatform: props.navigation.getParam('other') || '',
            totalIndicators: props.navigation.getParam('totalIndicators') || '',
            indicators: props.navigation.getParam('indicators') || [],
            totalThemes: props.navigation.getParam('totalThemes') || '',
            themes: props.navigation.getParam('themes') || []
        };
    }

    static getDerivedStateFromProps(props, state) {
        const newPlatform = props.navigation.getParam('platform') || '';
        const newOtherPlatform = props.navigation.getParam('other') || '';
        const newIndicators = props.navigation.getParam('totalIndicators') || '';
        const indicators = props.navigation.getParam('indicators') || [];
        const newThemes = props.navigation.getParam('totalThemes') || '';
        const themes = props.navigation.getParam('themes') || [];

        if (state.platform !== newPlatform || state.otherPlatform !== newOtherPlatform ||
            state.totalIndicators !== newIndicators ||
            state.totalThemes !== newThemes || state.indicators !== indicators || state.themes !== themes
        ) {
            return {
                ...state,
                platform: newPlatform,
                otherPlatform: newOtherPlatform,
                totalIndicators: newIndicators,
                totalThemes: newThemes,
                indicators: indicators,
                themes: themes
            };
        }

        return null;
    }

    render() {
        return (
            <KeyboardAwareScrollView>
                <SafeAreaView>
                    <View>
                        <Item style={styles.itemContainer}>
                            <Label style={styles.itemLabel}> Enter Brand Name</Label>
                            <TextInput style={styles.itemInput} onChangeText={text => this.setState({brand: text})} placeholder="ex. McDonald's"
                                s value={this.state.brand} placeholderTextColor="#444"/>
                        </Item>
                        <Item style={styles.itemContainer}>
                            <Label style={styles.itemLabel}>Product Name</Label>
                            <TextInput style={styles.itemInput} onChangeText={text => this.setState({product: text})}
                                placeholder='ex. Burger' value={this.state.product} placeholderTextColor="#444"/>
                        </Item>
                        <Item style={styles.itemContainer} last stackedLabel>
                            <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate('Platforms');
                                }}>
                                <Label style={styles.itemLabel}>
                                    Select Platform
                                </Label>
                            </TouchableOpacity>
                            {/* <Text>{this.state.platform}</Text> */}
                            <TouchableOpacity style={styles.signInBut}><Text style={styles.buttonText}>Sign/Poster</Text></TouchableOpacity>
                        </Item>

                        <Item style={styles.itemContainer} last stackedLabel>
                            <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate('Indicators');
                                }}>
                                <Label style={styles.itemLabel}>
                                    Select Indicator
                                </Label>
                            </TouchableOpacity>
                            <Text style={styles.itemInput}>{this.state.totalIndicators} Indicators Selected</Text>
                        </Item>

                        <Item style={styles.itemContainer} last stackedLabel>
                            <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate('Themes');
                                }}>
                                <Label style={styles.itemLabel}>
                                    Select Theme
                                </Label>
                            </TouchableOpacity>
                            <Text style={styles.itemInput}>{this.state.totalThemes} Themes Selected</Text>
                        </Item>
                    </View>
                </SafeAreaView>
            </KeyboardAwareScrollView>
        );
    }
}

PhotoTags.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
        goBack: PropTypes.func.isRequired,
        getParam: PropTypes.func.isRequired
    }).isRequired
};

export default PhotoTags;