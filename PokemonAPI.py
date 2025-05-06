import requests
import os
import pandas as pd


os.makedirs("./sprites", exist_ok=True)
os.makedirs("./sprites_shiny", exist_ok=True)
os.makedirs("./info_pokemon", exist_ok=True)


def varieties(species_url):
    resposta = requests.get(species_url)

    if resposta.status_code != 200:
        print("Error al consultar altres variants")
        return
       
    data = resposta.json()


    if len(data["varieties"]) > 1:
        print("\n=== Altres variants ===\n")
        for i in range(1, len(data["varieties"])):
            infoPokemon(data["varieties"][i]["pokemon"]["url"])
            print("\n=== === ===\n")
    else:
        print("Aquest pokemon no te cap variant")


# Etiquetes per a la que la funcio imprimeix llegueixi els mult com paraules
etiquetes_def = {
    4: "Super dèbil contra",
    2: "Dèbil contra",
    1: "Neutre contra",
    0.5: "Resistent contra",
    0.25: "Molt resistent contra",
    0: "Immune contra"
}


etiquetes_atk = {
    4: "Super efectiu contra",
    2: "Efectiu contra",
    1: "Neutre contra",
    0.5: "Poc efectiu contra",
    0.25: "Gairebé inútil contra",
    0: "No fa mal contra"
}

# Funcio per imprimir les relacion de danys
def imprimeix(dictionari, etiquetes, titol):
    print(f"\n== {titol} ==")
    agrupat = {}
    for tipus, mult in dictionari.items():
        if mult not in agrupat:
            agrupat[mult] = []
        agrupat[mult].append(tipus)


    for mult in sorted(agrupat.keys(), reverse=True):
        if agrupat[mult]:
            label = etiquetes.get(mult, f"x{mult} contra")
            print(f"\n{label}:")
            for tipus in agrupat[mult]:
                print(f" - {tipus}")



# Funció per comparar els tipus y com es relacionen
def damages(type_url):
    resposta = requests.get(type_url)

    # Si alguna falla no continuem
    if resposta.status_code != 200:
        print("Error al carregar els tipus")
        return
       

    data = resposta.json()["damage_relations"] # Nomes ens interesa las relacions de dany

    # DEFENSA
    defensa = {}
    for tipus in data["double_damage_from"]:
        defensa[tipus["name"]] = 2
    for tipus in data["half_damage_from"]:
        defensa[tipus["name"]] = 0.5
    for tipus in data["no_damage_from"]:
        defensa[tipus["name"]] = 0

    # ATAC
    atac = {}
    for tipus in data["double_damage_to"]:
        atac[tipus["name"]] = 2
    for tipus in data["half_damage_to"]:
        atac[tipus["name"]] = 0.5
    for tipus in data["no_damage_to"]:
        atac[tipus["name"]] = 0

    # Mostrem-ho
    imprimeix(defensa, etiquetes_def, "DEFENSA")
    imprimeix(atac, etiquetes_atk, "ATAC")





# Funcio que calcula la relacio de danys dels dos tipus del pokemon
def calculDamages(type1_url, type2_url):

    # Carguem les dos pagines
    resposta1 = requests.get(type1_url)
    resposta2 = requests.get(type2_url)

    # Si alguna falla no continuem
    if resposta1.status_code != 200 or resposta2.status_code != 200:
        print("Error al carregar els tipus")
        return

    # Guardem els dos jsons
    d1 = resposta1.json()["damage_relations"]
    d2 = resposta2.json()["damage_relations"]

    # Defensa: quins tipus li fan mal
    defensa = {}


    def afegeix_destins(damages, factor, diccionari):
        for type_damage in damages:
            name = type_damage["name"]
            if name in diccionari:
                diccionari[name] *= factor
            else:
                diccionari[name] = factor


    afegeix_destins(d1["double_damage_from"], 2, defensa)
    afegeix_destins(d1["half_damage_from"], 0.5, defensa)
    afegeix_destins(d1["no_damage_from"], 0, defensa)


    afegeix_destins(d2["double_damage_from"], 2, defensa)
    afegeix_destins(d2["half_damage_from"], 0.5, defensa)
    afegeix_destins(d2["no_damage_from"], 0, defensa)

    # Atac: a quins tipus fa mal
    atac = {}
       
    afegeix_destins(d1["double_damage_to"], 2, atac)
    afegeix_destins(d1["half_damage_to"], 0.5, atac)
    afegeix_destins(d1["no_damage_to"], 0, atac)


    afegeix_destins(d2["double_damage_to"], 2, atac)
    afegeix_destins(d2["half_damage_to"], 0.5, atac)
    afegeix_destins(d2["no_damage_to"], 0, atac)
   
    # Mostrar les dues coses
    imprimeix(defensa, etiquetes_def, "DEFENSA")
    imprimeix(atac, etiquetes_atk, "ATAC")





# Funcio que te l'apartat amb la cadena evolutiva del pokemon
def evoChain(evoChain_url):
    resposta = requests.get(evoChain_url)

    # Si falla no seguim amb la funcio
    if resposta.status_code != 200:
        print("Error al connectar amb la pagina species, per mes informació torna-ho ha intentar")
        return


    data = resposta.json()


    print("Cadena evolucions:")


    evoActual = data["chain"] # Comencem per el primer


    # Utilitzarem evoActual(llista que conte toda la informacio de la seguent evolucio en json) i nom agafa el nom de la mateixa
    # Fem un while amb evoActual com a flag, python llegueix llistes plenes com true
    while evoActual:
        name = evoActual["species"]["name"].capitalize()

        # Comprobem que te evolucio
        if evoActual["evolves_to"]:
            nextEvo = evoActual["evolves_to"][0]
            evoDetails = nextEvo["evolution_details"][0]

            # Guardem a quin nivell de les seguents opcion evoluciona, si no es per ninguna d'aquestes guardem el trigger
            level = evoDetails["min_level"]
            affection = evoDetails["min_affection"]
            beauty = evoDetails["min_beauty"]
            happiness = evoDetails["min_happiness"]
            trigger = evoDetails["trigger"]["name"]

            # Printem el nom devolucio actual, la seguent y la rao i nivell d'evolucio
            if level:
                print(f" - {name} -> {nextEvo['species']['name'].capitalize()} (nivell {level})")
            elif affection:
                print(f" - {name} -> {nextEvo['species']['name'].capitalize()} (afecte nivell {affection})")
            elif beauty:
                print(f" - {name} -> {nextEvo['species']['name'].capitalize()} (hermosura nivell {beauty})")
            elif happiness:
                print(f" - {name} -> {nextEvo['species']['name'].capitalize()} (felicitat nivell {happiness})")

            else:
                # Si no evoluciona per nivell mostrem com evoluciona (item, trade, etc.)
                print(f" - {name} -> {nextEvo['species']['name'].capitalize()} ({trigger})")
            evoActual = nextEvo
        else:
            # Diem que no te evolucio
            print(f" - {name} (final)")
            evoActual = [] # Trenquem la flag





# Funcio amb url del apartat species que te mes inforacio sobre el pokemon
def moreInfo(species_url):
    resposta = requests.get(species_url)

    # Si falla no seguim amb la funcio
    if resposta.status_code != 200:
        print("Error al connectar amb la pagina species, per mes informació torna-ho ha intentar")
        return

    data = resposta.json()

    # Printem el color
    color = data["color"]["name"]
    print(f"Color: {color}\n")


    habitat = data["habitat"]
    if habitat:
        # Printem l'habitat al que es pot trobar
        habitat = data["habitat"]["name"]
        print(f"Habitat: {habitat}\n")
    else:
        print(f"Habitat: No te")

    # Cridem la funcio evoChain que es concentra en imprimir la cadena evolutiva del pokemon, les raon d'evolucio i en quin nivell
    evoChain(data["evolution_chain"]["url"])




# Guardar info del primer pokemon per comparar després
pokemon_base_info = {}


def infoPokemon(pokemon_url):
    global pokemon_base_info  # L'hi diem al programa que volem poder modificar la funcio global


    resposta = requests.get(pokemon_url)


    if resposta.status_code == 200:
        data = resposta.json()


        pokedex = data["id"]


        if pokedex < 1026: # Nomes preguntem per borrar l'informacio una vegada per pokemon buscat, si el num pokedex es major a 1025 estem en una varietat del pokemon desitgat
            if os.listdir("./sprites"):
                if input("Sembla que ja has buscat un pokemon abans. Vols esborrar la informació obtinguda? (Y/n) ").lower() == "y":
                    for file in os.listdir("./sprites"):
                        os.remove(f"./sprites/{file}")
                    for file in os.listdir("./sprites_shiny"):
                        os.remove(f"./sprites_shiny/{file}")
                    for file in os.listdir("./info_pokemon"):
                        os.remove(f"./info_pokemon/{file}")


        name = data["name"].capitalize()
        print(f"Nom: {name}\n")
        print(f"Número Pokédex: {pokedex}\n")


        # L'altura i el pes estan posats sense comes amb un "decimal d'exactitud, ho fixem dividint per 10"
        height = data["height"] / 10
        weight = data["weight"] / 10


        # Guardem l'informacio en variables per despres imprimirla o si es una variant comparar-la amb l'original
        # Al ser mes d'una dada ho guardem cadascuna en una llista
            # t= cada tipus    bucle que guarda segons data["types"]["type"]["name"]
        type = [t["type"]["name"] for t in data["types"]]
        abilities = [a["ability"]["name"] for a in data["abilities"]]
        stats = [s["base_stat"] for s in data["stats"]]


        # Si el pokemon es l'original guardem l'informacio
        if pokedex < 1026:
            pokemon_base_info = {
                "tipus": type,
                "habilitats": abilities,
                "stats": stats,
                "altura": height,
                "pes": weight
            }


        # Si es una variant comparem el diccionari global amb la variant
        if pokedex >= 1026:
            # En cas que siguin iguals retornara un True, que utilitzarem per despres fer les condicions
            sameHeight = height == pokemon_base_info.get("altura")
            sameWeight = weight == pokemon_base_info.get("pes")
            sameType = type == pokemon_base_info.get("tipus")
            sameAbilities = abilities == pokemon_base_info.get("habilitats")
            sameStats = stats == pokemon_base_info.get("stats")


            # Si es tot igual ho printem
            if sameHeight and sameWeight and sameType and sameAbilities and sameStats:
                print("Aquesta variant és exactament igual que l'original.\n")
            else:
                # Si hi ha coses diferents anem imprimint les que ho son una a una
                if not sameHeight:
                    print(f"Alçada: {height} metres") # Printem alçada
                if not sameWeight:
                    print(f"Pes: {weight} Kg") # Printem pes
                if not sameStats:
                    print("\nStats bases:")
                    for i in range(6): # Bucle que recorre les 6 stats que n'hi ha
                        stat = data["stats"][i]["stat"]["name"] # Nom de la stat
                        num = data["stats"][i]["base_stat"] # Valor numeric de la stat
                        print(f"{stat}: {num}")
                if not sameAbilities:
                    print("\nHabilitats:")
                    for ability in abilities: # Bucle per printar totes les stats en forma de llista
                        print(f" - {ability}")
                if not sameType:
                    print("\nTipus:")
                    for t in type: # Bucle per printar tots els tipus(max 2) en forma de llista
                        print(f" - {t}")
        else:
            # Si no es una variant, es a dir es l'original, printem tot
            print(f"Alçada: {height} metres")
            print(f"Pes: {weight} Kg")




            # La pagina species es la mateixa en les variants i en l'original, per aixo nomes les printem en l'original
            moreInfo(data["species"]["url"]) # Cridem la funcio que ens porta a una pagina amb mes informacio


            print("\nStats bases:")
            for i in range(6):
                stat = data["stats"][i]["stat"]["name"]
                num = data["stats"][i]["base_stat"]
                print(f"{stat}: {num}")


            print("\nHabilitats:")
            for ability in abilities:
                print(f" - {ability}")


            print("\nTipus:")
            for t in type:
                print(f" - {t}")


        # Si no estem en una variant o ho estem pero el tipus de la variant es diferent a l'original printem la relacio de danys
        if pokedex < 1026 or not sameType:
            if len(type) == 1:
                damages(data["types"][0]["type"]["url"]) # En cas que nomes tingui un tipus
            else:
                calculDamages(data["types"][0]["type"]["url"], data["types"][1]["type"]["url"]) # En cas que tingui dos tipus
        else:
            print("\nRelació de danys: Igual que en l'original\n")


        # Guardem els sprites a un diccionari, d'aquesta forma despres podrem donar-l'hi el nom desitgat
        sprites = {
            "male_normal": data["sprites"]["front_default"],
            "male_shiny": data["sprites"]["front_shiny"],
            "female_normal": data["sprites"]["front_female"],
            "female_shiny": data["sprites"]["front_shiny_female"]
        }


        # Guardem el sprite
        for variant, sprite_url in sprites.items():
            if sprite_url:
                image_response = requests.get(sprite_url)
                if image_response.status_code == 200:
                    # Comprovem si es shiny
                    if "shiny" in variant:
                        carpeta = "./sprites_shiny"
                    else:
                        carpeta = "./sprites"
            
                    filename = f"{carpeta}/{name}_{variant}.png"
                    with open(filename, "wb") as f:
                        f.write(image_response.content)
        

        # Preparem la informació en un diccionari
        info_pokemon = {
            "Nom": name,
            "Pokedex": pokedex,
            "Alçada": height,
            "Pes": weight,
            "Tipus": ", ".join(type), # Aixo fara que entre cada valor de type hi hagi un ", "
            "Habilitats": ", ".join(abilities),
            "Stats": {
                "HP": stats[0],
                "Atac": stats[1],
                "Defensa": stats[2],
                "Atac Especial": stats[3],
                "Defensa Especial": stats[4],
                "Velocitat": stats[5],
            }
        }

        # Crear DataFrame
        df = pd.DataFrame([info_pokemon])

        # Guardar com a JSON
        filename_json = f"./info_pokemon/{name}.json" # Guardarem l'informacio en un nou json cada vegada, tambe de cada varietat
        df.to_json(filename_json, orient="records", indent=4, force_ascii=False)


        # Cridem a la funcio varieties nomes si no estem ya buscant informacio de una
        if pokedex < 1026:
            varieties(data["species"]["url"]) # Cridem a la funcio varieties


            nextPokemon = input("Vols info d'algun altre?(Y/n) ").lower()
            if nextPokemon == "y":
                infoPokemon(f"https://pokeapi.co/api/v2/pokemon/{input('Que pokemon quieres buscar? ')}")
    else:
        print("No s'ha trobat cap pokemon amb aquest nom")
        infoPokemon(f"https://pokeapi.co/api/v2/pokemon/{input('Introdueix un nom vàlid: ')}")



# Iniciem el programa preguntant el pokemon que es vol buscar
infoPokemon(f"https://pokeapi.co/api/v2/pokemon/{input('Que pokemon quieres buscar? ')}")