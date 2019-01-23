import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

export default class Satellite extends Component {

    static propTypes = {
        orbit: PropTypes.string,
        satelliteName: PropTypes.string,
    };

    static defaultProps = {
        orbit: 'Earth',
        satelliteName: 'Satellite-Dark',
    };

    constructor(props){
        super(props);

        this.state = {
            myStateVal: 'satellite'
        }
    }

    /**
     * A convenience function to render a satellite orbiting
     * a planet of your choice.
     *
     * @param {string} orbit - name of planet to orbit
     * @param {string} satelliteName - name of your satellite
     */
    renderNewSatellite = (orbit, satelliteName) => {
        //In-line commenting!
        let satelliteGreeting = `Hello from ${satelliteName}`

        return (
            <View style={styles.Satellite}>
                <Text style={styles.satelliteName}>
                    {satelliteGreeting}
                </Text>
                {orbit}
            </View>
        );
    }

    render(){
        let {satelliteName, orbit } = this.props;
        let { myStateVal } = this.state;

        return(
            <View style={styles.planet}>
                <Text>
                    {myStateVal}
                </Text>
               {this.renderNewSatellite(orbit, satelliteName)}
            </View>
        );
    }
}
