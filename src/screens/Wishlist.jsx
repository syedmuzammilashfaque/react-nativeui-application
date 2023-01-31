import React from 'react';
import { StyleSheet, ScrollView, View, StatusBar, Image, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { removeFromWishlist } from '../../redux/actions/Actions';

const Wishlist = ({ navigation }) => {

  const product = useSelector(state => state.WishlistReducer);
  const theme = useSelector(state => state.ThemeReducer);

  const dispatch = useDispatch();

  const renderProducts = (item, index) => {
    return (
      <>

        <TouchableOpacity style={{
          borderRadius: 4,
          backgroundColor: theme == "DARK" ? "#000" : "#fff",
          height: 100,
          marginTop: 30,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
        }}>

          <View

            style={{
              width: "30%",
              height: 100,
              padding: 14,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: theme == "DARK" ? "#000" : "#D3D3D3",
              marginRight: 22,
            }}>
            <Image source={item.image} style={{ width: "100%", height: "100%", resizeMode: "contain", }} />
          </View>

          <View style={{
            flex: 1,
            height: "100%",
            justifyContent: "center",
          }}>
            <Text style={{
              color: theme == "DARK" ? "#fff" : "#000",
              fontSize: 14,
              maxWidth: "100%",
              fontWeight: "600",
              letterSpacing: 1,
            }}>{item.name}</Text>

            <View style={{
              marginTop: 5,
              flexDirection: "row",
              alignItems: "center",
              opacity: 0.6,
            }}>
              <Text style={{
                color: theme == "DARK" ? "#fff" : "#000",
                fontSize: 14,
                fontWeight: "500",
                maxWidth: "85%",
                marginRight: 4,
              }}>{"Rs:" + " " + item.price}</Text>
              <Text style={{
                fontSize: 14,
                fontWeight: "500",
                maxWidth: "85%",
                marginRight: 4,
              }}>{item.price + item.price / 20}</Text>
            </View>

            <View style={{
              marginTop: 7,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>


              <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}>

              </View>

              <View>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(removeFromWishlist(index));
                  }}
                  style={{
                    color: "red",
                    backgroundColor: "#fff",
                    padding: 5,
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "#700",
                    shadowOffset: {
                      width: 0,
                      height: 10,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.5,
                    elevation: 5,
                  }}>
                  <Ionicon
                    style={{
                      fontWeight: "bold",
                      color: "red",
                    }} size={16} name="heart" />
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </TouchableOpacity>

      </>
    )
  };


  return (
    <>
      <StatusBar
        backgroundColor={theme == "DARK" ? "#000" : "#fff"}
        barStyle="dark-content" />
      <View style={[styles.mainContainer, {
        backgroundColor: theme == "DARK" ? "#000" : "#fff",
      }]}>

        <ScrollView>
          <View style={styles.topContainer}>
            <TouchableOpacity
              style={{ width: 40, height: 40, fontSize: 18, padding: 12, borderRadius: 8, backgroundColor: "#D3D3D3", marginLeft: 20, }}
              onPress={() => { navigation.navigate('Home') }}>
              <Text>
                <Ionicon style={{ fontWeight: "bold", color: "#000", fontSize: 17 }}
                  name='arrow-back'
                />
              </Text>
            </TouchableOpacity>
            <Text style={{ textAlign: "center", fontSize: 20, color: "#000", fontWeight: "500", letterSpacing: 1, }}>My Wishlist</Text>
          </View>


          {product.length == 0 ? (
            <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center", }}>
              <Text style={{ marginTop: 20, fontSize: 17, color: "#000", fontWeight: "400", }}>There are no items in this wishlist</Text>
            </View>
          ) : (
            <View style={{ marginTop: 20, marginBottom: 120, paddingHorizontal: 16, }}>
              {product.map(renderProducts)}
            </View>
          )}

        </ScrollView>
      </View>
    </>
  )
}

export default Wishlist;

const styles = StyleSheet.create({

  mainContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },

  topContainer: {
    marginTop: 20,
    width: "100%",
    justifyContent: 'center',
  },

});