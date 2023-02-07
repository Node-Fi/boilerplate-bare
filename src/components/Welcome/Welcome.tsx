import React from 'react';
import styles from './styles';
import {View, Text, TouchableOpacity} from 'react-native';
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';

const lightningEmoji = '⚡';

export function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Node</Text>
      <Text style={styles.subtitle}>
        {`Use this boilerplate as a starting\n point for your mobile dapp\n powered by Node ${lightningEmoji}`}
      </Text>
      <View style={styles.separator} />
      <TouchableOpacity
        style={styles.basicButton}
        onPress={() => openURLInBrowser('https://docs.nodefinance.org')}>
        <Text style={styles.basicButtonText}>Check out the Docs</Text>
      </TouchableOpacity>
      <View style={styles.positionBottom}>
        <Text style={styles.p}>Scroll down for general react native tips</Text>
        <Text style={styles.p}>
          Check out `WalletButton` to see how to use wallets
        </Text>
      </View>
    </View>
  );
}
