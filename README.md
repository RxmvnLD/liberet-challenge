# Liberet front-end challenge

https://rxmvnld-liberet-challenge.web.app

The main goal for this challenge was to build an user interface similar to this mockup (spoiler, it is :D) :  

![Untitled](https://raw.githubusercontent.com/RxmvnLD/liberet-challenge/main/screenshots/Untitled.png)

The requirements were:

- The location input has to show an alert.
- You can select the day by pressing it.
- The listed meals by default are the “Beef” category on [TheMealDB.com](http://TheMealDB.com) (`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`)
- Meal details:
    - Name: strMeal value from `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`
    - Meal location: srtArea value from `[https://www.themealdb.com/api/json/v1/1/lookup.php?i=52968](https://www.themealdb.com/api/json/v1/1/lookup.php?i=52968)` using the id provided from the previous endpoint.
    - Price: idMeal value on mexican pesos using currency format (currency: MXN, zone: es-MX )
    - Top tags: Only the first tag on “strTags” from the lookup endpoint.
- By clicking on the time options this are the only available:
    
    ![Untitled](https://raw.githubusercontent.com/RxmvnLD/liberet-challenge/main/screenshots/Untitled%201.png?raw=true)
    
    - 11:00 am - 12:00 am
    - 1:00 pm - 2:00 pm
    - 2:00 pm - 3:00 pm
- By clicking on the kitchen options it should load the categories from this endpoint `https://www.themealdb.com/api/json/v1/1/categories.php`
    
    ![Untitled](https://raw.githubusercontent.com/RxmvnLD/liberet-challenge/main/screenshots/Untitled%202.png?raw=true)
    
    - The default value its “Beef”
    - Fetch the meals on the main view if a different category its selected
- The “+1 Platillos” button shows an alert.

# Extra points if...

- The bottom nav bar buttons show a different view.
- The icon’s color is yellow if the view is selected.
- The profile view shows:
    - Selected day.
    - Selected shipping hour.
    - Selected category.
    - If none its selected it should show the default values.

# Final results.


## Main view

![Untitled](https://raw.githubusercontent.com/RxmvnLD/liberet-challenge/main/screenshots/Untitled%203.png?raw=true)

---

---

## Time options

![Untitled](https://raw.githubusercontent.com/RxmvnLD/liberet-challenge/main/screenshots/Untitled%204.png?raw=true)

---

---

## Categories

![Untitled](https://raw.githubusercontent.com/RxmvnLD/liberet-challenge/main/screenshots/Untitled%205.png?raw=true)

---

---

## First alert

![Untitled](https://raw.githubusercontent.com/RxmvnLD/liberet-challenge/main/screenshots/Untitled%206.png?raw=true)

---

---

## Second alert

![Untitled](https://raw.githubusercontent.com/RxmvnLD/liberet-challenge/main/screenshots/Untitled%207.png?raw=true)

---

---

## Day selection

![Untitled](https://raw.githubusercontent.com/RxmvnLD/liberet-challenge/main/screenshots/Untitled%208.png?raw=true)

---

---

## Shopping cart view

![Untitled](https://raw.githubusercontent.com/RxmvnLD/liberet-challenge/main/screenshots/Untitled%209.png?raw=true)

---

---

## Different options selected (day, time, menu)

![Untitled](https://raw.githubusercontent.com/RxmvnLD/liberet-challenge/main/screenshots/Untitled%2010.png?raw=true)

---

---

## Profile view with selected preferences

![Untitled](https://raw.githubusercontent.com/RxmvnLD/liberet-challenge/main/screenshots/Untitled%2011.png?raw=true)
