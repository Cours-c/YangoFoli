import react from "react";
import CategoryItem from "../components/CategoryItem";
import { FontAwesome5 , FontAwesome } from "@expo/vector-icons";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import PromoItem from "../components/PromosItem";
function HomeScreen(props) {
  return (
    <SafeAreaView style={{ padding: 15, paddingTop: 30 }} >
      <ScrollView  showsVerticalScrollIndicator={false}>
        <View style={style.positionWrapper}>
          <Text>Livraison</Text>
          <Text numberOfLines={1}>Zone industrielle</Text>
        </View>

        <TouchableOpacity activeOpacity={0.8}>
          <View style={style.searchBar}>
            <Ionicons size={25} name="search" />
            <Text style={style.searBarText}>Rechercher</Text>
          </View>
        </TouchableOpacity>
        <ScrollView
          horizontal={true}
          style={{ marginVertical: 20 }}
          showsHorizontalScrollIndicator={false}
        >
          <CategoryItem title="Filtre" img={null} onPress={null} />
          <CategoryItem
            title="Bugger"
            img="https://img.freepik.com/photos-gratuite/burger-savoureux-isole-fond-blanc-restauration-rapide-hamburger-frais-du-boeuf-du-fromage_90220-1063.jpg?w=826&t=st=1688393759~exp=1688394359~hmac=74393a2d60f9ff9b9cd9c83a8c36aa88c3aa5016be9d9e7ae1f2a421bf8c8e54"
            onPress={null}
          />
          <CategoryItem
            title="Salade"
            img="https://img.freepik.com/photos-gratuite/assiette-viande-pommes-terre-souce_144627-6148.jpg?w=996&t=st=1688394139~exp=1688394739~hmac=e654178f99d228d6a27f2e275d0ebb1c47ecf1ceb941e60f2e9210d284862eea"
            onPress={null}
          />
          <CategoryItem
            title="Bugger"
            img="https://img.freepik.com/photos-gratuite/burger-savoureux-isole-fond-blanc-restauration-rapide-hamburger-frais-du-boeuf-du-fromage_90220-1063.jpg?w=826&t=st=1688393759~exp=1688394359~hmac=74393a2d60f9ff9b9cd9c83a8c36aa88c3aa5016be9d9e7ae1f2a421bf8c8e54"
            onPress={null}
          />
          <CategoryItem
            title="Patte"
            img="https://img.freepik.com/photos-gratuite/pates-tagliatelles-aux-tomates-au-poulet_2829-18003.jpg?w=996&t=st=1688394195~exp=1688394795~hmac=1e6c34aeaca6cf629585b0d84b21141065e851a0748c61fab00137147c84a8b6"
            onPress={null}
          />
          <CategoryItem
            title="Bugger"
            img="https://img.freepik.com/photos-gratuite/delicieux-poulet-frit-dans-assiette_144627-27380.jpg?w=996&t=st=1688395093~exp=1688395693~hmac=de1ebbdf0d755a477e596f47c75894cfabc31f0ef370ff8c19763a58af8294bc"
            onPress={null}
          />
        </ScrollView>
        <View style={{ flexDirection: "row", gap: 4, marginVertical: 10 }}>
          <TouchableOpacity style={{ flex: 2 }}>
            <Image
              source={{
                uri: "https://img.freepik.com/photos-gratuite/pizza-mixte-croustillante-aux-olives-saucisse_140725-3095.jpg?t=st=1688400027~exp=1688400627~hmac=92aedaa9ad82b3ef73981da0d9905eb42bae3ee6de21afe599b30af28d869dd1",
              }}
              style={style.Images}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1 }}>
            <Image
              source={{
                uri: "https://img.freepik.com/photos-gratuite/burger-boeuf-au-fromage-laitue-tomates-servies-frites-coca_140725-1484.jpg?w=1380&t=st=1688398094~exp=1688398694~hmac=ab8a2b09ace4064bf5e7752e6753ab2d1e3e69f21e3ee082a577687ed2952d41",
              }}
              style={style.Images}
            ></Image>
          </TouchableOpacity>
        </View>
        <Text style={{ fontWeight: 800, fontSize: 25 }}>OFFRES</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row", gap: 10, marginVertical: 10 }}>
            <PromoItem img="https://img.freepik.com/photos-gratuite/vue-avant-delicieux-hamburger-viande-frites-sol-sombre_140725-89723.jpg?w=1380&t=st=1688401830~exp=1688402430~hmac=5a60e0e1b7a961b8712abb39706d0d9bcf4c128f7406657e4f405f50195c8a4d" />
            <PromoItem img="https://img.freepik.com/photos-gratuite/vue-avant-delicieux-hamburger-viande-frites-sol-sombre_140725-89723.jpg?w=1380&t=st=1688401830~exp=1688402430~hmac=5a60e0e1b7a961b8712abb39706d0d9bcf4c128f7406657e4f405f50195c8a4d" />
            <PromoItem img="https://img.freepik.com/photos-gratuite/vue-avant-delicieux-hamburger-viande-frites-sol-sombre_140725-89723.jpg?w=1380&t=st=1688401830~exp=1688402430~hmac=5a60e0e1b7a961b8712abb39706d0d9bcf4c128f7406657e4f405f50195c8a4d" />
            <PromoItem img="https://img.freepik.com/photos-gratuite/vue-avant-delicieux-hamburger-viande-frites-sol-sombre_140725-89723.jpg?w=1380&t=st=1688401830~exp=1688402430~hmac=5a60e0e1b7a961b8712abb39706d0d9bcf4c128f7406657e4f405f50195c8a4d" />
          </View>
        </ScrollView>
        <Text style={{ fontWeight: 800, fontSize: 25 }}>RESTAURANTS</Text>
        <View>
          <TouchableOpacity activeOpacity={0.8}>
            <View>
             <View style={{borderRadius:10 , overflow: 'hidden'}}>
             <ImageBackground
                source={{
                  uri: "https://img.freepik.com/photos-gratuite/chef-placer-herbe-gourmet-repas_23-2148516908.jpg?w=996&t=st=1688402619~exp=1688403219~hmac=0c49d259b4d7543f266030d58443fd8e3420dbb43cda4be7c0f12270a2f1caac",
                }}
                style={style.restoBG}
              >
                <View style={style.wrapperTop}>
                  <View style={style.alert}>
                    <View style={style.alertIcon}>
                      <FontAwesome5 name="walking" size={16} color= "white"/>
                    </View>
                    <Text numberOfLines={1} style={{fontWeight:"bold"}}>Livraison gratuite</Text>
                  </View>
                  <View style={style.btnFav}>
                    <TouchableOpacity>
                         <FontAwesome5 name="heart" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={style.wrapperBottom}>
                    <View style={style.duration}>
                    <FontAwesome5 name="bicycle" size={16} color= "white"/>
                    <Text numberOfLines={1} style={{fontWeight:"bold" , color:'white' , marginLeft: 6}}>30min : 40 min</Text>
                    </View>
                </View>
              </ImageBackground>
             </View>
            </View>
            <View style = {{marginVertical : 10}}>
            <Text style={{ fontWeight: 800, fontSize: 22 }}>O'Good Food</Text>
            <View style={style.reviewRapport} >
            <FontAwesome name="star" size={16} color= "#666"/>
            <Text>3.5(74)</Text>
            </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  positionWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  searchBar: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "#ccc",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  searBarText: {
    marginLeft: 5,
    fontSize: 20,
  },
  Images: {
    width: "100%",
    height: 90,
    borderRadius: 10,
  },
  restoBG: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    justifyContent : "space-between"
  },
  wrapperTop: {
    padding: 10,
    flexDirection: "row",
    justifyContent : 'space-between'
  },
  reviewRapport : {
    flexDirection: "row",
    gap : 5,
    alignItems :'center',
  },
  wrapperBottom: {},
  duration : {
    backgroundColor : "#000",
    borderTopLeftRadius:50,
    borderBottomLeftRadius : 50,
    alignSelf: 'flex-end',
    flexDirection : 'row',
    padding : 10
  },
  btnFav: {
    width:36,
    height: 36,
    backgroundColor: "#fff",
    borderRadius: 80,
    alignItems : "center",
    justifyContent: "center",
  },
  alert: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 8,
    alignSelf: 'flex-start',
    borderRadius: 30,
  },
  alertIcon: {
   marginRight: 6,
    width:25,
    height: 25,
    backgroundColor : "#03a583",
    borderRadius: 80,
    alignItems : "center",
    justifyContent: "center",
  },
});
export default HomeScreen;
