import React from 'react'
import { StyleSheet, View, Text, Image, Linking } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { Transition } from 'react-navigation-fluid-transitions'
// import InAppBrowser from 'react-native-inappbrowser-reborn'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { User } from '../models'
import { ParallaxHeader } from '../containers'

interface Data extends User {
  image: string
}

const LOREM_IPSUM = `
Lorem ipsum dolor sit amet, placerat dui metus suspendisse iaculis, tempus urna ut non, morbi id donec eros. Iaculis orci tincidunt consectetuer morbi lectus, suscipit sed libero eleifend pede iaculis, suspendisse posuere sed libero sed dui, leo quis mauris nostra pretium proin, elit porta at massa eu pellentesque gravida. Scelerisque porttitor at. In nullam, imperdiet tempus, quis sapien ante eget morbi facilisis, ante pellentesque pellentesque arcu tempor aliquet id, pede non senectus sodales. Lacinia suspendisse, massa pede nibh cras nec, sapien vel sodales, metus dolor pulvinar lectus mauris et. Praesent posuere pulvinar, mauris vel sed nec. Maecenas ut et id quis, aliquam feugiat wisi quis, vivamus massa, donec non ipsum, dolor nec et et magna. Sit nunc luctus ut pellentesque sit parturient, vitae vestibulum. Aliquet ipsum duis elit feugiat malesuada ante, porta risus interdum justo, aptent sed rhoncus laoreet, mus ligula egestas donec, lectus proin mus dictum eros placerat.
Praesent natoque elit pretium vestibulum, laboris magna id ante penatibus cursus eros, quam fames auctor habitant lacus vehicula, in rutrum auctor pretium suspendisse lorem ut. Amet molestie etiam nobis morbi, scelerisque praesent, ut velit et, fusce mauris nec velit urna luctus rutrum. Convallis wisi parturient venenatis est sed quam, eget nunc posuere at. Vitae justo, arcu vestibulum, hymenaeos vitae, ante aenean vestibulum sed pellentesque, vestibulum pharetra lacinia lacinia condimentum aliquet vestibulum. Ut eu proin eros, urna interdum nulla nam a praesent, nostra quam ipsum amet vivamus, in velit, sed mi risus vivamus bibendum. Nam mi magna integer lorem, porttitor nec cras, cras faucibus consectetuer vulputate massa, id tempore libero erat. Vestibulum lectus. Quam aliquam aliquam amet eget pellentesque, nisl convallis varius fringilla, fermentum at ut a, vel convallis vel lorem. Suspendisse massa libero, tempor hymenaeos odio montes phasellus ad, eu hendrerit pede mattis mauris blandit velit, ac rutrum urna quis vulputate fusce, non bibendum. Pellentesque eu odio ullamcorper elit. Natoque ut wisi et risus et corrupti, suscipit nisl.
Velit id nullam, modi platea lacus ut odio, ante commodo gravida id sed blandit ut. Blandit aenean taciti, pede dis at lacus sed, rhoncus gravida elementum risus blandit non magna, faucibus eleifend vel ut augue urna, luctus est curae. Neque vivamus. Fringilla consectetuer, fermentum duis nulla vel voluptas, elit ultrices, vivamus sed orci dictum per quisque. Vel felis libero sollicitudin ipsum ante, litora ridiculus pellentesque elementum, praesent orci a lectus ac augue donec, dapibus platea pretium odio morbi bibendum egestas. Mus proin cras, donec proin libero vitae arcu. Esse vivamus amet blandit nec ut orci, pulvinar aspernatur in.
Tellus nesciunt, vivamus nunc condimentum neque posuere montes leo, massa nunc donec non, suscipit aliquam amet, ut laoreet et mi in molestias. Mollis nam egestas, eget lacinia turpis, in neque, sapien rhoncus dui tempus imperdiet, faucibus erat pulvinar tincidunt vel mauris suspendisse. Libero ullamcorper quisque, accumsan sociis malesuada, libero in cras urna, vel dictum mi sit et, lorem sagittis viverra tellus. Hymenaeos vel faucibus aliquam dolor orci aenean, ut mauris vehicula augue tortor porttitor eget. Quam feugiat amet molestie vel orci, cras maecenas ligula dapibus nec. Eu iaculis massa id ipsum, sollicitudin parturient leo enim, in tortor, elit quis nunc et luctus mauris, justo quaerat in pretium tempus vel. Litora enim, tempus rutrum, pellentesque nullam imperdiet, netus nec malesuada pellentesque scelerisque, ligula suspendisse aliquam ac dolor egestas. Nunc justo non at, laoreet aenean placeat, nulla pellentesque, cras ligula cursus ligula omnis auctor pharetra.
`

const DetailsScreen: React.SFC<NavigationInjectedProps> = ({ navigation }) => {

  const { email, image, first, last } = navigation.getParam('data', {}) as Data

  return (
    <View style={styles.container}>
      <ParallaxHeader
        headerMaxHeight={150}
        renderLeft={() => 
          <Icon.Button
            name='close'
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
            backgroundColor='transparent'
            underlayColor='transparent'
          />
        }
        title={`${last}, ${first}`}
        renderRight={() => 
          <Icon.Button
            name='share'
            activeOpacity={0.7}
            onPress={() => Linking.openURL(`mailto:${email}`)}
            backgroundColor='transparent'
            underlayColor='transparent'
          />
        }
        renderContent={() => (
          <View style={styles.content}>
            <Transition appear='top' shared={email}>
              <View style={styles.card}>
                <Image style={{ height: 260 }} resizeMode='contain' source={{ uri: image }} />
              </View>
            </Transition>
            {/* <Button onPress={() => InAppBrowser.open('https://github.com')} title='Open Url'></Button> */}
            <Text>{ LOREM_IPSUM }</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231E32'
  },
  header: {
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    height: 50,
    width: '100%'
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  }
})

export default DetailsScreen
