import React, {PureComponent} from 'react';
import {View, Dimensions, TextInput, ScrollView, Alert} from 'react-native';
import {Text, Button} from 'native-base';
import PropTypes from 'prop-types';
import {DATA} from '../constants';
import {Switcher, Button as Btn} from 'nachos-ui';

class Platforms extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            availablePlatforms: DATA.PLATFORMS,
            results: [],
            search: '',
            platform: null
        };
    }

    updateSearch = search => {
        this.setState({search});
    }

    addSearchedPlatform(search) {
        const results = this.state.results.slice(0);

        if (search !== '') {
            results.push(search);
        }

        this.setState({results, search: ''});

        if (this.state.results.length >= 1) {
            Alert.alert('Wrong Input');
        }
    }

    showSearchedPlatform() {
        return this.state.results.slice(0, 1).map(platform => <Button key={platform}
            style={{
                backgroundColor: 'orange',
                margin: 5,
                borderRadius: 15
            }}
        ><Text>{platform.toString()}</Text>
        </Button>);
    }

    showSearchBar() {
        return <ScrollView keyboardDissmissMode='interactive'
            style={{marginTop: 5, height: Dimensions.get('window').height * 0.2}}>
            <TextInput
                onChangeText={this.updateSearch}
                placeholder='Other Platform'
                style={{margin: 15, borderColor: 'black', borderWidth: 1,
                    height: Dimensions.get('window').height * 0.05}}
                value={this.state.search}
            />
            <Button onPress={() => this.addSearchedPlatform(this.state.search)}
                style={{alignSelf: 'center', backgroundColor: 'blue'}}>
                <Text>Add</Text>
            </Button>
        </ScrollView>;
    }

    render() {
        return (
            <View style={{marginTop: 30}}>
                <Text style={{textAlign: 'center', fontSize: 20}}> Select platforms</Text>
                <View style={{height: Dimensions.get('window').height * 0.90}}>
                    <View style={{flexDirection: 'column', flexWrap: 'wrap'}}>
                        <Switcher direction='row'
                            onChange={value => this.setState({platform: value})}
                        >
                            {this.state.availablePlatforms.slice(0, 2).map(p => <Btn key={p.name}
                                style={{backgroundColor: this.state.platform === p.name ? 'orange' : 'lightgray',
                                    flexWrap: 'wrap', margin: 5}}
                                uppercase={false}
                                value={p.name}
                            >
                                {p.name}
                            </Btn>)}
                        </Switcher>
                    </View>
                    <View style={{flexDirection: 'column', flexWrap: 'wrap'}}>
                        <Switcher direction='row'
                            onChange={value => this.setState({platform: value})}
                        >
                            {this.state.availablePlatforms.slice(2, 4).map(p => <Btn key={p.name}
                                style={{backgroundColor: this.state.platform === p.name ? 'orange' : 'lightgray',
                                    flexWrap: 'wrap', margin: 5}}
                                uppercase={false}
                                value={p.name}
                            >
                                {p.name}
                            </Btn>)}
                        </Switcher>
                    </View>
                    <View style={{flexDirection: 'column', flexWrap: 'wrap'}}>
                        <Switcher direction='row'
                            onChange={value => this.setState({platform: value})}
                        >
                            {this.state.availablePlatforms.slice(4, 6).map(p => <Btn key={p.name}
                                style={{backgroundColor: this.state.platform === p.name ? 'orange' : 'lightgray',
                                    flexWrap: 'wrap', margin: 5}}
                                uppercase={false}
                                value={p.name}
                            >
                                {p.name}
                            </Btn>)}
                        </Switcher>
                    </View>
                    <View style={{flexDirection: 'column', flexWrap: 'wrap'}}>
                        <Switcher direction='row'
                            onChange={value => this.setState({platform: value})}
                        >
                            {this.state.availablePlatforms.slice(6, 7).map(p => <Btn key={p.name}
                                style={{backgroundColor: this.state.platform === p.name ? 'orange' : 'lightgray',
                                    flexWrap: 'wrap', width: 150}}
                                uppercase={false}
                                value={p.name}
                            >
                                {p.name}
                            </Btn>)}
                        </Switcher>
                    </View>
                    <View style={{flexDirection: 'column', flexWrap: 'wrap'}}>
                        <Switcher direction='row'
                            onChange={value => this.setState({platform: value})}
                        >
                            {this.state.availablePlatforms.slice(7, 8).map(p => <Btn key={p.name}
                                style={{backgroundColor: this.state.platform === p.name ? 'orange' : 'lightgray',
                                    flexWrap: 'wrap', margin: 5}}
                                uppercase={false}
                                value={p.name}
                            >
                                {p.name}
                            </Btn>)}
                        </Switcher>
                    </View>
                    <View style={{flexDirection: 'column', flexWrap: 'wrap'}}>
                        <Switcher direction='row'
                            onChange={value => this.setState({platform: value})}
                        >
                            {this.state.availablePlatforms.slice(8, 11).map(p => <Btn key={p.name}
                                style={{backgroundColor: this.state.platform === p.name ? 'orange' : 'lightgray',
                                    flexWrap: 'wrap', marginTop: 5}}
                                uppercase={false}
                                value={p.name}
                            >
                                {p.name}
                            </Btn>)}
                        </Switcher>
                    </View>
                    <View style={{flexDirection: 'column', flexWrap: 'wrap'}}>
                        <Switcher direction='row'
                            onChange={value => this.setState({platform: value})}
                        >
                            {this.state.availablePlatforms.slice(11, 14).map(p => <Btn key={p.name}
                                style={{backgroundColor: this.state.platform === p.name ? 'orange' : 'lightgray',
                                    flexWrap: 'wrap', marginTop: 5}}
                                uppercase={false}
                                value={p.name}
                            >
                                {p.name}
                            </Btn>)}
                        </Switcher>
                    </View>
                    <View style={{flexDirection: 'column', flexWrap: 'wrap'}}>
                        <Switcher direction='row'
                            onChange={value => this.setState({platform: value})}
                        >
                            {this.state.availablePlatforms.slice(this.state.availablePlatforms.length - 1)
                                .map(p => <Btn key={p.name}
                                    style={{backgroundColor: this.state.platform === p.name
                                        ? 'orange' : 'lightgray',
                                    flexWrap: 'wrap', marginTop: 5}}
                                    uppercase={false}
                                    value={p.name}
                                >
                                    {p.name}
                                </Btn>)}
                        </Switcher>
                        {this.state.platform === 'Other' && this.showSearchBar()}
                        {this.state.platform === 'Other' && this.showSearchedPlatform()}
                    </View>
                    <Text>{this.state.platform}</Text>
                </View>
                <View style={{margin: 5, alignSelf: 'center', bottom: 0, position: 'absolute'}}>
                    <Button onPress={() => this.props.navigation.navigate('Tags',
                        {platform: this.state.platform, other: this.state.results.slice(0, 1)})}
                    >
                        <Text>Submit</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

Platforms.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
        goBack: PropTypes.func.isRequired
    }).isRequired
};

export default Platforms;