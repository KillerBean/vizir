db = connect("localhost:27017/app_db")
plan1 = {name: "Fale Mais 30", limit: 30}
plan2 = {name: "Fale Mais 60", limit: 60}
plan3 = {name: "Fale Mais 120", limit: 120}
db.plans.insert(plan1)
db.plans.insert(plan2)
db.plans.insert(plan3)

price1 = {origin: 11, destiny: 16, price: 1.9}
price2 = {origin: 16, destiny: 11, price: 2.9}
price3 = {origin: 11, destiny: 17, price: 1.7}
price4 = {origin: 17, destiny: 11, price: 2.7}
price5 = {origin: 11, destiny: 18, price: 0.9}
price6 = {origin: 18, destiny: 11, price: 1.9}
db.prices.insert(price1)
db.prices.insert(price2)
db.prices.insert(price3)
db.prices.insert(price4)
db.prices.insert(price5)
db.prices.insert(price6)
