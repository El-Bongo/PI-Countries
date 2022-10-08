const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING
    },
    area: {
      type: DataTypes.FLOAT
    },
    population: {
      type: DataTypes.INTEGER
    },
  }, {timestamps: false} );
};

// --------- DB
// ID (Código de 3 letras) *
// Nombre *
// Imagen de la bandera *
// Continente *
// Capital *
// Subregión
// Área
// Población


// --------- API  
// [{
//   "name": {
//       "common": "Guatemala",
//       "official": "Republic of Guatemala",
//       "nativeName": {
//           "spa": {
//               "official": "República de Guatemala",
//               "common": "Guatemala"
//           }
//       }
//   },
//   "tld": [".gt"],
//   "cca2": "GT",
//   "ccn3": "320",
//   "cca3": "GTM",
//   "cioc": "GUA",
//   "independent": true,
//   "status": "officially-assigned",
//   "unMember": true,
//   "currencies": {
//       "GTQ": {
//           "name": "Guatemalan quetzal",
//           "symbol": "Q"
//       }
//   },
//   "idd": {
//       "root": "+5",
//       "suffixes": ["02"]
//   },
//   "capital": ["Guatemala City"],
//   "altSpellings": ["GT"],
//   "region": "Americas",
//   "subregion": "Central America",
//   "languages": {
//       "spa": "Spanish"
//   },
//   "translations": {
//       "ara": {
//           "official": "جمهورية غواتيمالا",
//           "common": "غواتيمالا"
//       },
//       "bre": {
//           "official": "Republik Guatemala",
//           "common": "Guatemala"
//       },
//       "ces": {
//           "official": "Republika Guatemala",
//           "common": "Guatemala"
//       },
//       "cym": {
//           "official": "Republic of Guatemala",
//           "common": "Guatemala"
//       },
//       "deu": {
//           "official": "Republik Guatemala",
//           "common": "Guatemala"
//       },
//       "est": {
//           "official": "Guatemala Vabariik",
//           "common": "Guatemala"
//       },
//       "fin": {
//           "official": "Guatemalan tasavalta",
//           "common": "Guatemala"
//       },
//       "fra": {
//           "official": "République du Guatemala",
//           "common": "Guatemala"
//       },
//       "hrv": {
//           "official": "Republika Gvatemala",
//           "common": "Gvatemala"
//       },
//       "hun": {
//           "official": "Guatemalai Köztársaság",
//           "common": "Guatemala"
//       },
//       "ita": {
//           "official": "Repubblica del Guatemala",
//           "common": "Guatemala"
//       },
//       "jpn": {
//           "official": "グアテマラ共和国",
//           "common": "グアテマラ"
//       },
//       "kor": {
//           "official": "과테말라 공화국",
//           "common": "과테말라"
//       },
//       "nld": {
//           "official": "Republiek Guatemala",
//           "common": "Guatemala"
//       },
//       "per": {
//           "official": "جمهوری گواتِمالا",
//           "common": "گواتِمالا"
//       },
//       "pol": {
//           "official": "Republika Gwatemali",
//           "common": "Gwatemala"
//       },
//       "por": {
//           "official": "República da Guatemala",
//           "common": "Guatemala"
//       },
//       "rus": {
//           "official": "Республика Гватемала",
//           "common": "Гватемала"
//       },
//       "slk": {
//           "official": "Guatemalská republika",
//           "common": "Guatemala"
//       },
//       "spa": {
//           "official": "República de Guatemala",
//           "common": "Guatemala"
//       },
//       "swe": {
//           "official": "Republiken Guatemala",
//           "common": "Guatemala"
//       },
//       "tur": {
//           "official": "Guatemala Cumhuriyeti",
//           "common": "Guatemala"
//       },
//       "urd": {
//           "official": "جمہوریہ گواتیمالا",
//           "common": "گواتیمالا"
//       },
//       "zho": {
//           "official": "危地马拉共和国",
//           "common": "危地马拉"
//       }
//   },
//   "latlng": [15.5, -90.25],
//   "landlocked": false,
//   "borders": ["BLZ", "SLV", "HND", "MEX"],
//   "area": 108889.0,
//   "demonyms": {
//       "eng": {
//           "f": "Guatemalan",
//           "m": "Guatemalan"
//       },
//       "fra": {
//           "f": "Guatémaltèque",
//           "m": "Guatémaltèque"
//       }
//   },
//   "flag": "\uD83C\uDDEC\uD83C\uDDF9",
//   "maps": {
//       "googleMaps": "https://goo.gl/maps/JoRAbem4Hxb9FYbVA",
//       "openStreetMaps": "https://www.openstreetmap.org/relation/1521463"
//   },
//   "population": 16858333,
//   "gini": {
//       "2014": 48.3
//   },
//   "fifa": "GUA",
//   "car": {
//       "signs": ["GCA"],
//       "side": "right"
//   },
//   "timezones": ["UTC-06:00"],
//   "continents": ["North America"],
//   "flags": {
//       "png": "https://flagcdn.com/w320/gt.png",
//       "svg": "https://flagcdn.com/gt.svg"
//   },
//   "coatOfArms": {
//       "png": "https://mainfacts.com/media/images/coats_of_arms/gt.png",
//       "svg": "https://mainfacts.com/media/images/coats_of_arms/gt.svg"
//   },
//   "startOfWeek": "monday",
//   "capitalInfo": {
//       "latlng": [14.62, -90.52]
//   },
//   "postalCode": {
//       "format": "#####",
//       "regex": "^(\\d{5})$"
//   }
// }