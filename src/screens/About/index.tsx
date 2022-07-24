import React, { useEffect } from "react";
import { Text, View } from "react-native";

import { useRoute } from "@react-navigation/native";
import api from "../../service/api";

export default function About() {
  const route = useRoute();

  const idPokemon = route.params.id;

  useEffect(() => {
    async function getPokemonDetail() {
      try {
        const response = await api.get(`pokemon/${idPokemon}`);
        const { stats, abilities, id, name, types } = response.data;
        console.log(abilities);
      } catch (error) {}
    }
    getPokemonDetail();
  }, []);

  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
}
