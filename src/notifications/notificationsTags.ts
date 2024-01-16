import { OneSignal } from 'react-native-onesignal'

export function tagUserInfoCreate(email: string) {
  OneSignal.User.addTags({
    email: 'ewerllon_cristian@hotmail.com'
  })
}
