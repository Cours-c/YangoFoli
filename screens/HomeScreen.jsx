import react, { useEffect , useState } from "react";
import CategoryItem from "../components/CategoryItem";
import RestaurantItem from "../components/RestaurantItem";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import PromoItem from "../components/PromosItem";
import { getAllRestaurants } from "../queries/restaurant";
import { getAllCategory } from "../queries/category";
import { getAllPromo } from "../queries/promo";
function HomeScreen(props) {
  const [restaurants, setRestaurants] = useState([]) ;
  const [category, setCategory] = useState([]) ;
  const [promo, setPromo] = useState([]) ;
  const [offers, setOffers] = useState([]) ;
  useEffect(() => {
    getAllRestaurants()
      .then(restaurants => {
        return restaurants.json();
      })
      .then(data => {
        //console.log(data);
        setRestaurants(data);
      })
      .catch(err => console.error(err))
      getAllCategory()
      .then(restaurants => {
        return restaurants.json();
      })
      .then(data => {
        //console.log(data);
        setCategory(data);
      })
      .catch(err => console.error(err))
      getAllPromo()
      .then(restaurants => {
        return restaurants.json();
      })
      .then(data => {
        //console.log(data);
        setPromo(data);
      })
      .catch(err => console.error(err))
      getAllPromo()
      .then(restaurants => {
        return restaurants.json();
      })
      .then(data => {
        //console.log(data);
        setPromo(data);
      })
      .catch(err => console.error(err))
  }, []);
  return (
    <SafeAreaView style={{ paddingHorizontal: 15, paddingTop: 30 }} >
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
          {
            category.map((item,index) => {
                 return <CategoryItem
                 key={index}
                 title={item.name}
                 img={item.picture}
                 onPress = {null}
                 />
            })
          }
          
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
        <View style = {{gap : 5}}>
          {
            restaurants.map((item, index) => {
             return (
              <RestaurantItem 
              {...props} 
              key={index}
              id = {item.id}
              name = {item.name}  
              duration={item.status}  
              avis = {item.reviews}  
              note= {item.rating}   
              bg={item.banner}  />
             )
            })
          }
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
});
export default HomeScreen;
