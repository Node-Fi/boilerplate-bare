import {
  useCreateWallet,
  useDeleteWallet,
  useLoadWallet,
  useMutation,
  useWallet,
} from '@node-fi/react-native-sdk';
import {Alert, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {celoNetworkDerivationPath} from '@node-fi/chain-config';
import styles from './styles';
import React, {useCallback} from 'react';
import {shortenAddress} from '../../utils/shortenAddress';

export function WalletButton({style}: {style?: ViewStyle}) {
  const wallet = useWallet();

  const createWallet = useCreateWallet();
  const loadWallet = useLoadWallet();
  const deleteWallet = useDeleteWallet();

  const onConnect = useMutation(
    async () => {
      if (!wallet.address) {
        return createWallet({
          derivationPath: celoNetworkDerivationPath,
          registrationOptions: {
            optInMetatdata: false,
            doNotRegister: false,
          },
          keychainSettings: {
            authenticationPrompt: {
              title: 'Authenticate',
              description: 'Authenticate to access your wallet',
            },
          },
        });
      }
      if (!wallet.signer) {
        return loadWallet({});
      }
    },
    {
      onError: error => {
        Alert.alert('Error', (error as {message: string}).message);
      },
    },
  );

  const handleLongPress = useCallback(() => {
    if (wallet.signer && wallet.address) {
      Alert.alert(
        'Delete Wallet',
        'Are you sure you want to delete your wallet?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Delete',
            onPress: () =>
              deleteWallet({
                address: wallet.address!,
              }),
          },
        ],
      );
    }
  }, [wallet, deleteWallet]);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        wallet.signer ? styles.connected : styles.disconnected,
        style,
      ]}
      onPress={onConnect.mutate as () => void}
      onLongPress={handleLongPress}>
      <Text style={styles.text}>
        {wallet?.signer
          ? shortenAddress(wallet.address)
          : wallet.address
          ? 'Connect Wallet'
          : 'Create Wallet'}
      </Text>
    </TouchableOpacity>
  );
}

export default WalletButton;
