import React, {PureComponent} from 'react';
import {View, Dimensions, Alert, TouchableOpacity} from 'react-native';
import {DATA} from '../constants';
import PropTypes from 'prop-types';
import MultipleSelector from './shared/multipleSelector';
import {Text, Button} from 'native-base';
import {styles} from '../styles/Indicators'

class Themes extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            availableThemes: DATA.THEMES,
            selectedTheme: new Array(DATA.THEMES.length),
            results: [],
            search: ''
        };
    }

    updateSearch = search => {
        this.setState({search});
    };

    addSearchedTheme(search) {
        const results = this.state.results.slice(0);

        if (search !== '' && search !== 'Cool or Trendy' && search !== 'Concert' &&
            search !== 'Coupons' && search !== 'Dance' && search !== 'Fashion' && search !== 'Limited Edition' &&
            search !== 'Limited time Offers' && search !== 'Party' && search !== 'School' && search !== 'Sexuality' &&
            search !== 'Special Offers' && search !== 'Sports' && search !== 'Technology'
        ) {
            results.push(search);
        }

        else {
            Alert.alert('Invalid theme');
        }

        this.setState({results, search: ''});
    }

    showSearchedThemes() {
        return this.state.results.map(data => <Button key={data}
            style={{
                backgroundColor: 'green',
                margin: 5,
                borderRadius: 15
            }}
        ><Text>{data.toString()}</Text>
        </Button>);
    }

    selectTheme = (index, name) => {
        const selectedTheme = this.state.selectedTheme.slice(0);
        selectedTheme[index] = !selectedTheme[index];

        if (selectedTheme.length) {
            selectedTheme.push(name);
        }

        this.setState({selectedTheme});
    };

    showThemes() {
        return this.state.availableThemes.map((data, index) => {
            const color = this.state.selectedTheme[index] ? 'green' : 'gray';
            return <TouchableOpacity key={data.id}
                onPress={() => this.selectTheme(index, `${data.name},`)}
                style={[styles.indicatorItem, this.state.selectedTheme[index] && styles.selectedIndicator]}
            ><Text style={[this.state.selectedTheme[index] ? styles.selectedIndicatorText : styles.indicatorItemText]}>{data.name}</Text>
            </TouchableOpacity>;
        });
    }

    goToTags() {
        this.props.navigation.navigate('Tags', {totalThemes:
                this.state.selectedTheme.filter(index => index === true).length + this.state.results.length,
        themes: this.state.selectedTheme.concat(this.state.results.join(', '))

        });
    }

    render() {
        return (
            <View>
                <View>
                    <MultipleSelector
                        addSearchedData={() => this.addSearchedTheme(this.state.search)}
                        search={this.state.search}
                        showData={() => this.showThemes()}
                        searchPlaceHolder = "Search Themes"
                        showSearchedData={() => this.showSearchedThemes()}
                        title='Select Themes'
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

Themes.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
        goBack: PropTypes.func.isRequired,
        getParam: PropTypes.func.isRequired
    }).isRequired
};

export default Themes;