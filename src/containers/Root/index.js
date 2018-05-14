import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import styles from './styles'

export default class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Hello Chuma
        </Text>
        <Text style={styles.paragraph}>
          Hello Chuma
        </Text>
      </View>
    );
  }
}
