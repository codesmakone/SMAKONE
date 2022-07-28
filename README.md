# SMAKONE
SMAKONE Website


 node version version 16.15.0 & npm version8.9.0


# E - Magazine
Note: Image must in webp format

1. Taruh Cover E mag ke src/image/Emagz
2. Buka src/Component/Data/HomeMagazine.js
3. Taruh code 
```
import "Nama File" from "../../Image/Emagz/'Nama File'"
```

4.
Dari 
```
    {
        id:1,
        title: "Festive February",
        img:FestiveFebruary,
        link:"https://heyzine.com/flip-book/8f4e62c54f.html"
    },
    {
        id:2,
        title: "Floraison",
        img:Floraison,
        link:"https://heyzine.com/flip-book/dc4f4f44ec.html"
    },
    {
        id:3,
        title: "Aphrodite April",
        img:AphroditeApril,
        link:"https://heyzine.com/flip-book/5c1931dac5.html"
    },
    {
        id:4,
        title: "Summer Maylodies",
        img:SummerMaylodies,
        link:"https://heyzine.com/flip-book/a5b0ed1cb6.html"
    },

``` 
Ganti ke 

```
    {
        id:1,
        title: "Floraison",
        img:Floraison,
        link:"https://heyzine.com/flip-book/dc4f4f44ec.html"
    },
    {
        id:2,
        title: "Aphrodite April",
        img:AphroditeApril,
        link:"https://heyzine.com/flip-book/5c1931dac5.html"
    },
    {
        id:3,
        title: "Summer Maylodies",
        img:SummerMaylodies,
        link:"https://heyzine.com/flip-book/a5b0ed1cb6.html"
    },
    {
        id:4,
        title: "New Emag titile",
        img: "Nama File"(yang dari step 3),
        link: "" (link emg)
    },
```

5. Buka src/Component/Data/magazineList.js
6. taruh code
```
import "Nama File" from "../../Image/Emagz/'Nama File'"
```
7.
Ganti
```
    {
      id :....,
      title: ....,
      img: ....,
      link: .....,
    }
    ,{
        id: id yang atas + 1,
        title: "New Emag titile",
        img: "Nama File"(yang dari step 5),
        link: "" (link emg)
    },
```

Abis itu run server, untuk cek bener atau tidak