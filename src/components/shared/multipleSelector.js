import React from 'react';
import {View, Dimensions} from 'react-native';
import {Text, Button} from 'native-base';
import PropTypes from 'prop-types';
import {SearchBar} from 'react-native-elements';
import {styles} from '../../styles/multipleSelector';

class MultipleSelector extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title
        };
    }

    render() {
        return (
            <View style={styles.selectorContainer}>
                <Text style={styles.selectorTitle}> {this.state.title}</Text>
                <View style={{}}>
                    <SearchBar
                        containerStyle={styles.searchBar}
                        inputContainerStyle={styles.searchInput}
                        onChangeText={this.props.updateSearch}
                        placeholder={this.props.searchPlaceHolder}
                        value={this.props.search}
                    />
                    {/* <Button onPress={() => this.props.addSearchedData(this.props.search)}
                        style={{alignSelf: 'center', backgroundColor: 'blue'}}>
                        <Text>Add</Text>
                    </Button> */}
                </View>
                <View style={styles.itemsContainer}>
                    {this.props.showData()}
                    {this.props.showSearchedData()}
                </View>
            </View>
        );
    }
}

MultipleSelector.propTypes = {
    addSearchedData: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
    showData: PropTypes.func.isRequired,
    showSearchedData: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    updateSearch: PropTypes.func.isRequired
};

export default MultipleSelector;