import requests
import numpy
import pandas as pd
from bs4 import BeautifulSoup
import matplotlib.pyplot as plt



url = "https://coinmarketcap.com/pt-br/trending-cryptocurrencies/"


#ser aceito pelo servidor
headers = { 
    'User-Agent'      : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36', 
    'Accept'          : 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8', 
    'Accept-Language' : 'en-US,en;q=0.5',
    'DNT'             : '1', # Do Not Track Request Header 
    'Connection'      : 'close'
}
data = requests.get(url, headers=headers, timeout=5).text
soup = BeautifulSoup(data,"html.parser")



# Procurando a tabela da página
table = soup.find('table')


# Definindo dataframe
df = pd.DataFrame(columns=['#', 'Nome', 'Preço', '24h', '7d',  '30d', 'Cap. de Mercado', 'Volume(24h)', 'Últimos 7 dias' ])


# Obtendo todas as linhas da tabela
for row in table.tbody.find_all('tr'):
    
    columns = row.find_all('td')  
    if(columns != []):
        tendencia = columns[0].text.strip(' ')
        nome = columns[2].text.strip(' ')
        preco = columns[3].text.strip(' ')
        periodo_24h = columns[4].text.strip(' ')
        periodo_7d = columns[5].text.strip(' ')
        periodo_30d = columns[6].text.strip(' ')
        cap_mercado = columns[7].text.strip(' ')
        volume = columns[8].text.strip(' ')
        last_7d = columns[9].text.strip(' ')
        df = pd.concat([df, pd.DataFrame.from_records([{'#': tendencia,  'Nome': nome, 'Preço': preco, '24h': periodo_24h, '7d': periodo_7d, '30d': periodo_30d, 'Cap. de Mercado': cap_mercado, 'Volume(24h)': volume, 'Últimos 7 dias': last_7d }])], ignore_index=True)
        
df.head(30)


# Refatorando o dataframe


# Valor
df['Preço'] = [x.replace(',', '.') for x in df['Preço']]
df = df.astype({"Preço": float}, errors='ignore')

# Data de Pagamento
df['24h'] = [x.replace(',', '.') for x in df['24h']]
df = df.astype({"24h": float}, errors='ignore')

# Tipo
df['7d'] = [x.replace(',', '.') for x in df['7d']]
df = df.astype({"7d": float}, errors='ignore')

# Por quantas ações
df['30d'] = [x.replace(',', '.') for x in df['30d']]
df = df.astype({"30d": float}, errors='ignore')

df['Cap. de Mercado'] = [x.replace(',', '.') for x in df['Cap. de Mercado']]
df = df.astype({"Cap. de Mercado": float}, errors='ignore')

df['Volume(24h)'] = [x.replace(',', '.') for x in df['Volume(24h)']]
df = df.astype({"Volume(24h)": float}, errors='ignore')

df['Últimos 7 dias'] = [x.replace(',', '.') for x in df['Últimos 7 dias']]
df = df.astype({"Últimos 7 dias": float}, errors='ignore')

df.head(30)


print(df)

df.to_csv('crypto.csv', index=False)