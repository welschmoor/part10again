
import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const rawProducts = await AsyncStorage.getItem(`AccessToken`);

    return JSON.parse(rawProducts)
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(`AccessToken`, JSON.stringify(accessToken));
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`AccessToken`)
  }
}

export default AuthStorage;