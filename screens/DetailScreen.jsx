import react from "react";
import { Text, TouchableOpacity, Image, Dimensions } from "react-native";
import  RoundedButton  from "../components/RoundedButton";
import { FontAwesome } from "@expo/vector-icons";
import { MenuItem } from "../components/MenuItem";
import { getRestaurantById } from "../queries/restaurant";
import { useEffect , useState} from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import MenuSectionItem from "../components/MenuSectionItem";
function DetailScreen(props) {
  const GoBack = () =>{
    props.navigate.goBack();
  }
  const [resto, setResto] = useState({}) ;
  const [menu, setMenu] = useState([]) ;
  useEffect(() => { 
    const id = props.route.params.id
     getRestaurantById(id)
    .then(restaurants => {
      return restaurants.json();
    })
    .then(data => {
      console.log(data);
      setResto(data);
      setMenu(data.menus);
    })
    .catch(err => console.error(err))} , []) ;
  
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          source={{
            uri: "https://img.freepik.com/photos-gratuite/morceaux-steak-agneau-sauces-poivre-grille-salade-fraiche-planche-bois_140725-10580.jpg?w=996&t=st=1688464757~exp=1688465357~hmac=7e25c6ab42eeb6b7fc9bb8e8b19238806a96eb9cbd389e58fe6668f679fa96aa",
          }}
          style={style.restoBg}
        >
          <View style={style.wrapperTop}>
            <RoundedButton onPress={GoBack} icon="arrow-left" />
            <View style={{ flexDirection: "row", gap: 10 }}>
              <RoundedButton icon="heart" />
              <RoundedButton icon="search" />
            </View>
          </View>
          <View style={style.wrapperBottom}>
            <Text style={{ fontWeight: "800", fontSize: 30, color: "white" }}>
             {resto.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                color: "white",
                alignItems: "center",
                gap: 8,
                backgroundColor: "white",
                alignSelf: "flex-start",
                borderRadius: 10,
                paddingHorizontal: 10,
                marginVertical: 15,
              }}
            >
              <FontAwesome name="star" size={16} color="black" />
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>{resto.rating}</Text>
                <Text style={{ fontSize: 13, color: "gray" }}>{resto.reviews}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={style.menuWrapper}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              menu.map((item , index) =>{
               return (
                <MenuSectionItem
                key={index}
                title = {item.name}
                />
               )
              })
            }
          </ScrollView>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 20,
              marginVertical: 40,
            }}
          >
         <View>
          {
            menu.map((item , index) =>{
              return (
                <View
                key={index}
                >
                  <Text style = {{fontWeight: 'bold' , fontSize : 22 , marginBottom : 15}}>{item.name}</Text>
                  <View style = {{flexDirection : 'row' , alignItems:'center',flexWrap: 'wrap', gap:20 , marginVertical : 20}}>
                    {
                      item.menu_items.map((menuItem , index) =>{
                        return <MenuItem
                        key={index}
                        image = {menuItem.thumbnail}
                        price={menuItem.price}
                        piece={menuItem.quantity}
                        description={menuItem.description}
                        />
                      })
                    }
                  </View>

                </View>
              );
            })
          }
         </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  restoBg: {
    width: "100%",
    height: 300,
    justifyContent: "space-between",
  },
  wrapperTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  wrapperBottom: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },

  menuWrapper: {
    backgroundColor: "white",
    paddingVertical: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    top: -28,
  },
  buttonMenuItem: {
    marginTop: 30,
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 20,
  },
});
export default DetailScreen;
