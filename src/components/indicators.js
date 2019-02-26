import React, {PureComponent} from 'react';
import {Dimensions, View, Alert, TouchableOpacity} from 'react-native';
import {DATA} from '../constants';
import PropTypes from 'prop-types';
import MultipleSelector from './shared/multipleSelector';
import {Text, Button} from 'native-base';
import { styles } from '../styles/Indicators'

class Indicators extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            availableIndicators: DATA.INDICATORS,
            selectedIndicators: new Array(DATA.INDICATORS.length),
            search: '',
            results: []
        };
    }

    updateSearch = search => {
        this.setState({search});
    };

    addSearchedIndicator(search) {
        const results = this.state.results.slice(0);

        if (search !== '' && search !== 'Celebrity' && search !== 'Character' &&
            search !== 'Humour' && search !== 'Language' && search !== 'Music' && search !== 'Teen Actor'
        ) {
            results.push(search);
        }

        else {
            Alert.alert('Invalid indicator');
        }

        this.setState({results, search: ''});
    }

    showSearchedIndicators() {
        return this.state.results.map(data =>
            <Button key={data}
                style={{
                    backgroundColor: 'green',
                    margin: 5,
                    borderRadius: 15
                }}
            ><Text>{data.toString()}</Text>
            </Button>);
    }

    selectIndicator = (index, name) => {
        const selectedIndicators = this.state.selectedIndicators.slice(0);
        selectedIndicators[index] = !selectedIndicators[index];

        if (selectedIndicators.length) {
            selectedIndicators.push(name);
        }

        this.setState({selectedIndicators});
    };

    showIndicators() {
        return this.state.availableIndicators.map((data, index) => {
            return <TouchableOpacity key={data.id}
                onPress={() => this.selectIndicator(index, `${data.name}, `)}
                style={[styles.indicatorItem, this.state.selectedIndicators[index] && styles.selectedIndicator]}
            ><Text style={[this.state.selectedIndicators[index] ? styles.selectedIndicatorText : styles.indicatorItemText]}>{data.name}</Text>
            </TouchableOpacity>;
        });
    }

    goToTags() {
        this.props.navigation.navigate('Tags', {totalIndicators:
            this.state.selectedIndicators.filter(index => index === true).length + this.state.results.length,
        indicators: this.state.selectedIndicators.concat(this.state.results.join(', '))
        });
    }

    render() {
        return (
            <View>
                <View>
                    <MultipleSelector
                        addSearchedData={() => this.addSearchedIndicator(this.state.search)}
                        search={this.state.search}
                        showData={() => this.showIndicators()}
                        searchPlaceHolder = "Search Indicators"
                        showSearchedData={() => this.showSearchedIndicators()}
                        title='Select Indicators'
                        updateSearch={this.updateSearch}
                    />
                </View>
                <View>
                    <Button onPress={() => this.goToTags()} style={styles.submitButton}>
                        <Text>Submit</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

Indicators.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
        goBack: PropTypes.func.isRequired,
        getParam: PropTypes.func.isRequired
    }).isRequired
};

export default Indicators;