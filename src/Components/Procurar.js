import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import CloseDrawerBtn from "./CloseDrawerBtn";

import { Octicons } from "react-native-vector-icons";
import LinhasArray from "./Linhas/LinhasArray";

export default function Procurar() {
  const [linha, setLinha] = useState([
    {
      id: 1,
      name: "A100 Rodoviária – Terminal Central",
    },
    {
      id: 2,
      name: "A105 Santa Mônica – Terminal Central",
    },
    {
      id: 3,
      name: "A106 Roosevelt – Terminal Central ",
    },
    {
      id: 4,
      name: "A107 Pacaembu – Terminal Central (UAI Roosevelt) ",
    },
    {
      id: 5,
      name: "A109 Marta Helena – Terminal Central",
    },
    {
      id: 6,
      name: "A110 Erlan / São José – Terminal Central ",
    },
    {
      id: 7,
      name: "A110 Erlan / São José – Terminal Central",
    },
    {
      id: 8,
      name: "A113 Tibery – Terminal Central",
    },
    {
      id: 9,
      name: "A114 Tibery – Terminal Central ",
    },
    {
      id: 10,
      name: "A115 Terminal Central – Saraiva ",
    },
    {
      id: 11,
      name: "A116 Santa Mônica – Terminal Central ",
    },
    {
      id: 12,
      name: "A118 Pampulha – Terminal Central",
    },
    {
      id: 13,
      name: "A119 Patrimônio – Terminal Central ",
    },
    {
      id: 14,
      name: "A121 Terminal Central – Cidade Jardim ",
    },
    {
      id: 15,
      name: "A123 Maravilha (UAI Roosvelt) – Terminal Central",
    },
    {
      id: 16,
      name: "A131 Terminal Central – Faculdades (Setor Sul) ",
    },
    {
      id: 17,
      name: "A133 Faculdade Pitágoras / Jardins – Terminal Central ",
    },
    {
      id: 18,
      name: "A137  Terminal Central – Shopping Park ",
    },
    {
      id: 19,
      name: "A142 Terminal Central – Uberlândia Shopping / UNITRI",
    },
    {
      id: 20,
      name: "A144 Jardim Brasília – Terminal Central ",
    },
    {
      id: 21,
      name: "A145 Terminal Industrial – Maravilha – Terminal Central",
    },
    {
      id: 22,
      name: "A146 Liberdade – Terminal Central",
    },
    {
      id: 23,
      name: "A147 Terminal central Shopping Park",
    },
    {
      id: 24,
      name: "A148 Terminal Central Shopping Park ",
    },
    {
      id: 25,
      name: "A149 Terminal Central – Senai / Santa Rosa ",
    },
    {
      id: 26,
      name: "A150 Oswaldo / Martins (UAI Martins) – Terminal Central",
    },
    {
      id: 27,
      name: "A160 Terminal Planalto – Terminal Dona Zulmira – Terminal Central ",
    },
    {
      id: 28,
      name: "A161 –  Caça e Pesca Univercittá – Terminal Central ",
    },
    {
      id: 29,
      name: "A162 – Terminal Central – Via Cond. Unidnese / Univercittá ",
    },
    {
      id: 30,
      name: "A208 Terminal Umuarama – Cruzeiro – Nossa Senhoras das Graças",
    },
    {
      id: 31,
      name: "A211 Terminal Umuarama –  Aclimação (Via Clube Tangará)",
    },
    {
      id: 32,
      name: "A212 Terminal Umuarama – Custódio Pereira",
    },
    {
      id: 33,
      name: "A213 Terminal Umuarama – Empresas Rodovia Neuza Rezende",
    },
    {
      id: 34,
      name: "A214 Terminal Umuarama – Boque Buritis / Terra Nova",
    },
    {
      id: 35,
      name: "A215 Terminal Umuarama – Setor Industrial (Anel Viário)",
    },
    {
      id: 36,
      name: "A219 Terminal Umuarama – Coca-Cola (Via Bosque dos Buritis)  ",
    },
    {
      id: 37,
      name: "A229 Terminal Umuarama – Ipanema (New Golden Ville) ",
    },
    {
      id: 38,
      name: "A230 Terminal Umuarama – Dom Almir",
    },
    {
      id: 39,
      name: "A234 Terminal Umuarama – Minas Gerais ",
    },
    {
      id: 40,
      name: "A324 Terminal Santa Luzia / Granada – Hospital Municipal",
    },
    {
      id: 41,
      name: "A326 Terminal Santa Luzia – São Jorge ",
    },
    {
      id: 42,
      name: "A327 Terminal Santa Luzia – Seringueiras ",
    },
    {
      id: 43,
      name: "A328 Terminal Santa Luzia – Laranjeiras (Via Avenida Iraque) ",
    },
    {
      id: 44,
      name: "A329 Terminal Santa Luzia – Laranjeiras (Via Jardim Sul)",
    },
    {
      id: 45,
      name: "A331 Terminal Santa Luzia – Shopping Park – Hospital Municipal  ",
    },
    {
      id: 46,
      name: "A335 Terminal Santa Luzia – Aurora",
    },
    {
      id: 47,
      name: "A339 Terminal Santa Luzia – São Gabriel",
    },
    {
      id: 48,
      name: "A361 Terminal Santa Luzia – Penitenciária ",
    },
    {
      id: 49,
      name: "A362 – Terminal Santa Luzia -Syngenta / Monsanto",
    },
    {
      id: 50,
      name: "A364 Terminal Santa Luzia – Campus Glória (UFU)",
    },
    {
      id: 51,
      name: "A365 Terminal Santa Luzia – Empresas Br 50 ",
    },
    {
      id: 52,
      name: "A401 Terminal Planalto – Luizote III (Natura / AMBEV) ",
    },
    {
      id: 53,
      name: "A401 Terminal Planalto – Luizote III (Natura / AMBEV)",
    },
    {
      id: 54,
      name: "A402 Terminal Planalto – Jardim Europa (Via Rua Nápoles) ",
    },
    {
      id: 55,
      name: "A403 Terminal Planalto – Jardim Europa (Via AV. San Marino)",
    },
    {
      id: 56,
      name: "A405  Terminal Planalto – Cidade Verde/ Jardim Europa ",
    },
    {
      id: 57,
      name: "A 407 Terminal Planalto – Fruta do Conde",
    },
    {
      id: 58,
      name: "A408 Terminal Planalto – Luizote IV ",
    },
    {
      id: 59,
      name: "A425 Terminal Planalto – Flávia Nunes",
    },
    {
      id: 60,
      name: "A434 Terminal Planalto – Nova Tangará (Taperão)",
    },
    {
      id: 61,
      name: "A435 Terminal Planalto – Chácaras Oliveira ",
    },
    {
      id: 62,
      name: "A510 Terminal Industrial – Cargill / União Atacadista",
    },
    {
      id: 63,
      name: "A511 Terminal Industrial – Valparaíso",
    },
    {
      id: 64,
      name: "A512 Terminal Industrial – Setor Industrial ",
    },
    {
      id: 65,
      name: "A526 Terminal Industrial – Tocantins – Guarani – ",
    },
    {
      id: 66,
      name: "A531 Terminal Industrial – Interfast Spasso",
    },
    {
      id: 67,
      name: "A601 Terminal Novo Mundo – Morumbi (Av. José M. Ribeiro)",
    },
    {
      id: 68,
      name: "A602 Terminal Novo Mundo – Morumbi (Av. James Siqueira) ",
    },
    {
      id: 69,
      name: "A603 Terminal Novo Mundo – Morumbi (Via Rua Guaiaca) ",
    },
    {
      id: 70,
      name: "A630 Terminal Novo Mundo – Dom Almir / Sucupira ",
    },
    {
      id: 71,
      name: "A681 Terminal Novo Mundo – Tenda dos Morenos (Via Parque das Andorinhas)",
    },
    {
      id: 72,
      name: "A683 Terminal Novo Mundo – Marielza – Olhos d’ Água",
    },
    {
      id: 73,
      name: "A704 Terminal Dona Zulmira – Posto Décio ",
    },
    {
      id: 74,
      name: "A704 Terminal Dona Zulmira – Posto Décio",
    },
    {
      id: 75,
      name: "A705 Terminal Dona Zulmira – Tocantins (Via Talismã) ",
    },
    {
      id: 76,
      name: "A722 Terminal Dona Zulmira – Guarani ",
    },
    {
      id: 77,
      name: "A726 Terminal Dona Zulmira – Tocantins",
    },
    {
      id: 78,
      name: "A730 Terminal Dona Zulmira – Mansour (Nosso lar) ",
    },
    {
      id: 79,
      name: "A743 Terminal Dona Zulmira – Taiama ",
    },
    {
      id: 80,
      name: "A801 Terminal Canaã – Jardim Canaã ",
    },
    {
      id: 81,
      name: "A802 Terminal Canaã – Jardim Célia ",
    },
    {
      id: 82,
      name: "A803 Terminal Canaã – Jardim Maanaim ",
    },
    {
      id: 83,
      name: "A806 Terminal Canaã – Residencial Monte Hebron ",
    },
    {
      id: 84,
      name: "A820 Terminal Canaã – Jardim Holanda ",
    },
    {
      id: 85,
      name: "A821 Terminal Canaã – Jardim das Palmeiras ",
    },
    {
      id: 86,
      name: "A824 Terminal Canaã – São Lucas ",
    },
    {
      id: 87,
      name: "A833 Terminal Canaã – Morada Nova ",
    },
    {
      id: 88,
      name: "A835 Terminal Canâa Douradinho  ",
    },
    {
      id: 89,
      name: "A836 Terminal Canaã – Residencial Pequis ",
    },
    {
      id: 90,
      name: "A837 Terminal Canaã – Carinhosa – Dom José Mauro",
    },
    {
      id: 91,
      name: "A839 Terminal Canaã – Residencial Pequis (Via Lago Azul) ",
    },
    {
      id: 92,
      name: "D280 Terminal Umuarama – Martinésia / Cruzeiro dos Peixotos",
    },
    {
      id: 93,
      name: "D281 Terminal Umuarama – Escola IFTM ",
    },
    {
      id: 94,
      name: "D281 Terminal Umuarama – Escola IFTM – A partir 02/07/2024",
    },
    {
      id: 95,
      name: "D481 Terminal Planalto – Miraporanga ",
    },
    {
      id: 96,
      name: "D481 Terminal Planalto – Miraporanga",
    },
    {
      id: 97,
      name: "D682 Terminal Novo Mundo – Tapuirama",
    },
    {
      id: 98,
      name: "E131 Terminal Santa Luzia – Terminal Central (Expresso)",
    },
    {
      id: 99,
      name: "E141 Terminal Planalto – Terminal Central (Expresso)",
    },
    {
      id: 100,
      name: "E144 Jardim Brasilia – Terminal Central (Semi-Expresso)  ",
    },
    {
      id: 101,
      name: "E610 Terminal Novo Mundo – Terminal Central (Expresso)",
    },
    {
      id: 102,
      name: "E710 Terminal Dona Zulmira – Terminal Central (Express)",
    },
    {
      id: 103,
      name: "E810 Terminal Canaã – Terminal Central (SemiExpress)",
    },
    {
      id: 104,
      name: "I231 Terminal Santa Luzia – Terminal Umuarama ",
    },
    {
      id: 105,
      name: "I232 Terminal Santa Luzia – Terminal Umuarama (Tribunal de Justiça)",
    },
    {
      id: 106,
      name: "I251 Terminal Industrial – Terminal Umuarama",
    },
    {
      id: 107,
      name: "I252 Terminal Industrial – Terminal Umuarama",
    },
    {
      id: 108,
      name: "I266 Terminal Umuarama – Terminal Novo Mundo ",
    },
    {
      id: 109,
      name: "I267 Terminal Umuarama – Terminal Novo Mundo (Via BR 050) ",
    },
    {
      id: 110,
      name: "I323 Terminal Umuarama – Terminal Santa Luzia (Expresso)",
    },
    {
      id: 111,
      name: "I341 – Terminal Santa Luzia – Terminal Planalto ",
    },
    {
      id: 112,
      name: "I360 Terminal Santa Luzia – Terminal Novo Mundo",
    },
    {
      id: 113,
      name: "I480 Terminal Planalto – Terminal Canaã",
    },
    {
      id: 114,
      name: "I741 – Terminal Dona Zulmira – Terminal Planalto (Via Luizote/Mansour) ",
    },
    {
      id: 115,
      name: "I850 Terminal Canaã – Terminal Industrial (Via Terminal Planalto / Terminal Dona Zulmira) ",
    },
    {
      id: 116,
      name: "T105 Terminal Planalto – Terminal Central (Mansour / Jardim Europa) ",
    },
    {
      id: 117,
      name: "T120 Terminal Umuarama – Luizote (Via Luizote III)",
    },
    {
      id: 118,
      name: "T121 Terminal Umuarama – Luizote (Mansour)",
    },
    {
      id: 119,
      name: "T122 Terminal Umuarama – Terminal Central – Av. Monsenhor Eduardo ",
    },
    {
      id: 120,
      name: "T123 Algar Tech – Terminal Umuarama – Terminal Central (FMC) ",
    },
    {
      id: 121,
      name: "T126 Terminal Umuarama – Algar Tech / CSC",
    },
    {
      id: 122,
      name: "T127 Terminal Umuarama – Terminal Central (Via Ed. Fisica / DMAE)",
    },
    {
      id: 123,
      name: "T131 Terminal Santa Luzia – Terminal Central – A. João Naves de Ávila",
    },
    {
      id: 124,
      name: "T140 Terminal Planalto – Terminal Central (Via UAI Planalto)",
    },
    {
      id: 125,
      name: "T141 Terminal Planalto – Terminal Central ",
    },
    {
      id: 126,
      name: "T142 Terminal Planalto – Terminal Central ",
    },
    {
      id: 127,
      name: "T151 Terminal Industrial – Terminal Central ",
    },
    {
      id: 128,
      name: "T610 Terminal Novo Mundo – Terminal Central ",
    },
    {
      id: 129,
      name: "T610 Terminal Novo Mundo – Terminal Central – A partir 01/07/2024",
    },
    {
      id: 130,
      name: "T710 Terminal Dona Zulmira – Terminal Central (Martins) ",
    },
    {
      id: 131,
      name: "T711 Terminal Dona Zulmira – Tubal Vilela",
    },
    {
      id: 132,
      name: "T810 Terminal Canaã– Terminal Central (Via Jardim Holanda) ",
    },
    {
      id: 133,
      name: "T870 Terminal Canaã– Terminal Central (Via Nova Uberlândia) ",
    },
    {
      id: 134,
      name: "",
    },
  ]);

  return (
    <View style={st.container}>
      <CloseDrawerBtn />

      <View style={st.main}>
        <Text style={{ color: "#fafafa", fontSize: 30, fontWeight: "bold" }}>
          Bem vindo!
        </Text>

        <Text style={{ color: "#fafafa", fontSize: 18 }}>Para onde vamos?</Text>

        <View style={st.inputArea}>
          <TextInput
            style={st.input}
            placeholder="Pesquise uma linha"
            placeholderTextColor={"#121212"}
          />

          <TouchableOpacity>
            <Octicons name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={st.listaLinhas}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={linha}
            renderItem={({ item }) => <LinhasArray data={item} />}
          />
        </View>
      </View>
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C",
  },
  main: {
    flex: 1,
    alignItems: "center",
    marginTop: 15,
  },
  inputArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
    marginTop: 12,
    marginBottom: 12,
    height: 40,
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 6,
  },
  input: {
    color: "#121212",
    width: "80%",
  },
});
