import time
import os
import pandas as pd
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
from pathlib import Path


# Configurar Selenium amb ChromeDriver
options = Options()
options.add_argument("--headless") # Executar sense obrir la finestra del navegador
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)


search = input("Que estas buscant? ")


# Obre una pàgina web
driver.get(f"https://www.amazon.com/s?k={search}")


# Mostra el títol de la pàgina
print("Títol de la pàgina:", driver.title)


time.sleep(10)  # Esperar a carregar la pàgina


txt_route = r".\info\info.txt"
html_route = r".\html\page.html"
screenshots_dir_route = r".\Screenshots\screenshot.png"


# Descarrega l'html
page_source = driver.page_source
with open(html_route, "w", encoding="utf-8") as f:
    f.write(page_source)


driver.save_screenshot(screenshots_dir_route)


# Aconseguim el link dels productes
links = driver.find_elements(By.CSS_SELECTOR, "a.a-link-normal.s-line-clamp-2.s-link-style.a-text-normal")


data = {"Títol": [], "Preu": [], "Valoració": [], "Data d'entrega": []}


# Aconseguim trobar cuants productes tenim
products = driver.find_elements(By.CSS_SELECTOR, "div.s-main-slot div.s-result-item")
print(f"Total productes trobats: {len(products)}") # Printem cuants productes n'hi han


# Aconseguim la descripcio(titol) dels productes
title_element = driver.find_elements(By.CSS_SELECTOR, "h2.a-size-medium.a-spacing-none.a-color-base.a-text-normal")

# Aconseguim tot ho que te a veure amb el preu
currency = driver.find_elements(By.CSS_SELECTOR, "span.a-price-symbol") # La moneda de pagament
price_euros = driver.find_elements(By.CSS_SELECTOR, "span.a-price-whole") # El preu sense els "centims"
price_cents = driver.find_elements(By.CSS_SELECTOR, "span.a-price-fraction") # Els "centims" del preu

# Aconseguim data d'entrega
date = driver.find_elements(By.CSS_SELECTOR, "span.a-color-base.a-text-bold")

# Aconseguim la valoracio
stars = driver.find_elements(By.CSS_SELECTOR, "span.a-icon-alt") # Estrellas
reviews = driver.find_elements(By.CSS_SELECTOR, "span.a-size-base.s-underline-text") # Nombre valoracions



with open(txt_route, "w", encoding="utf-8") as f:

    for i in range(10): # Ens quedem amb els 10 primers

        # Pasem a text els elements
        title = title_element[i].text.strip()
        price = f"{price_euros[i].text}.{price_cents[i].text}{currency[i].text}" # Juntem el preu amb els centim y la moneda en la que esta el mateix
        rating = f"{stars[i].text} with {reviews[i].text} reviews" # Formem frase amb la valoracio y el nombre d'usuaris que han posat estrellas
        delivery_date = date[i].text


        data["Títol"].append(title)
        data["Preu"].append(price)
        data["Valoració"].append(rating)
        data["Data d'entrega"].append(delivery_date)

        f.write(f"{i+1}). \nTítol: {title} \nPreu: {price} \nValoració: {rating} \nData d'entrega: {delivery_date} \n\n--------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n")

df = pd.DataFrame(data)
print(df)


# Tanca el navegador
driver.quit()
