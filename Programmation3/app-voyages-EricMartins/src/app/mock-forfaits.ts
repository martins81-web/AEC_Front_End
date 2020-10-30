import { Forfait } from './forfait';

export const forfaits : Forfait [] = [
    {
        destination: 'Riviera Maya, Mexique',
        villeDeDepart: 'Montréal',
        hotel: {
            nom: 'Ocean Riviera Paradise',
            adresse: 'Cancún Km. 296 Predio Montecarlos Lotes 7 Predio Punta Bete Lote 15-5 CP77710 Playa Del Carmen Quintana Roo, Mexique',
            etoiles: 5,
            nbChambres: 350,
            photo: "https://wcm.transat.com/getmedia/0c380422-7977-4597-aae0-d62131e253a8/OceanRivieraParadise-Aerial-001-AR.aspx",
            caracteristiques: [ 'Face à la plage',
                                "Proximité d'un lieu naturel",
                                "Ascenseur",
                                "Miniclub",
                                "Réalisation de mariages", 
                                '10 restaurants',
                                'WiFi: tout le complex', 
                                'Parque aquiatique'],
        },
        dateDeDepart: '15/11/2020',
        dateDeRetour: '22/11/2020',
        prix: 1150,
        rabais: 100,
        forfaitVedette: true
    },
    {
        destination: 'Holguin, Cuba',
        villeDeDepart: 'Montréal',
        hotel: {
            nom: 'Playa Costa Verde',
            adresse: 'Playa Pesquero, Rafael Freye Holguin, 82200 Cuba',
            etoiles: 4,
            nbChambres: 480,
            photo: "https://media-cdn.tripadvisor.com/media/photo-s/13/04/c9/48/hotel-playa-costa-verde.jpg",
            caracteristiques: [ 'Tout inclus', 
                                'Miniclub ',
                                "2 piscines",
                                "5 restaurants",
                                "7 bars",
                                "Wi-Fi ($) : hall", 
                                'Collations 24 h',
                                "Salle d'exercice", 
                                'Mariages '],
        },
        dateDeDepart: '13/12/2020',
        dateDeRetour: '21/12/2020',
        prix: 979
        ,
        rabais: 0,
        forfaitVedette: false
    },
    {
        destination: 'Punta Cana, République dominicaine',
        villeDeDepart: 'Montréal',
        hotel: {
            nom: 'Ocean Blue & Sand',
            adresse: 'Arena Gorda sn. Playa Bavaro, République dominicaine',
            etoiles: 5,
            nbChambres: 708,
            photo: "https://lh3.googleusercontent.com/proxy/2Qha6YX_LQwddNhqrfO02EGO6GOyaIeKNr2ocLDsaV4IO7YMq2VWPFDr3y7N10CGalvEc1mq1-226MtGXI77u6r6YoYP0O-XFGc-qoqE5w",
            caracteristiques: [ 'Tout inclus', 
                                'Miniclub ',
                                "2 piscines",
                                "10 restaurants",
                                "7 bars",
                                "Wi-Fi : dans tout le complexe", 
                                'Collations 24 h',
                                "Plage", 
                                'Mariages '],
        },
        dateDeDepart: '18/12/2020',
        dateDeRetour: '25/12/2020',
        prix: 1009,
        rabais: 50,
        forfaitVedette: false
    },
    {
        destination: 'San Juan, Porto Rico',
        villeDeDepart: 'Montréal',
        hotel: {
            nom: 'Verdanza',
            adresse: '8020 Tartak, Isla Verde, Puerto Rico 00979',
            etoiles: 4,
            nbChambres: 222,
            photo: "https://ssl.tzoo-img.com/images/tzoo.hd.76148.6699.486772.VerdanzaHotel.jpg?width=1080" ,
            caracteristiques: [ 'Au cœur de la zone hôtelière', 
                                'Wi-Fi : hall',
                                "Piscine",
                                "2 restaurants",
                                "7 bars",
                                "De l’autre côté de la rue longeant la plage", 
                                'Collations 24 h',
                                "Salle d'exercice", 
                                'Coffret de sûreté'],
        },
        dateDeDepart: '18/12/2020',
        dateDeRetour: '25/12/2020',
        prix: 1209,
        rabais: 149,
        forfaitVedette: false
    },
    {
        destination: 'Puerto Vallarta, Mexique',
        villeDeDepart: 'Montréal',
        hotel: {
            nom: 'Friendly Vallarta',
            adresse: 'Ave. Francisco Medina Ascencio Km 2.5, Zona Hetelera 483330 Puerto Vallarta, Jalisco Mexique',
            etoiles: 4,
            nbChambres: 270,
            photo: "https://www.westjet.com/assets/wj-web/images/hotels/pvr/pvrhol-friendly-vallarta-formally-known-as-the-hola-puerto-vallarta/overview/friendly-vallarta_overview.jpg",
            caracteristiques: [ 'Face à la plage', 
                                'Wi-Fi : hall',
                                "3 piscines",
                                "5 restaurants",
                                "Spa ($)",
                                "1 édifice de 14 étages", 
                                'Ascenseur',
                                "Salle d'exercice", 
                                "Près d'un lieu culturel"],
        },
        dateDeDepart: '11/01/2021',
        dateDeRetour: '18/01/2021',
        prix: 1379,
        rabais: 250,
        forfaitVedette: true
    },
    {
        destination: 'Montego Bay, Jamaïque',
        villeDeDepart: 'Montréal',
        hotel: {
            nom: 'Royal Decameron',
            adresse: '2 Gloucester Avenue Montego Bay Jamaïque',
            etoiles: 4,
            nbChambres: 144,
            photo: "https://cf.bstatic.com/images/hotel/max1280x900/112/112587274.jpg",
            caracteristiques: [ 'Face à la plage', 
                                'Wi-Fi : hall',
                                "Près d'un attrait/ville/lieu historique",
                                "2 restaurants",
                                "2 piscines",
                                "4 bars",
                                "Salle d'exercice",
                                "Coffret de sûreté ($)", 
                                'Ascenseur',
                                "Salle d'exercice", 
                                "Mariages"],
        },
        dateDeDepart: '01/04/2021',
        dateDeRetour: '08/04/2021',
        prix: 1479,
        rabais: 300,
        forfaitVedette: true
    },
];