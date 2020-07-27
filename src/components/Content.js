import React from 'react'
import { Grid } from '@material-ui/core'
import ProductList from './ProductList'

import Banner from './Banner'
const catalogue = [{
    "id": 1,
    "fullname": "Edy Di Ruggero",
    "avatar": "https://robohash.org/reiciendisnatusnihil.jpg?size=50x50&set=set1",
    "company": "Leuschke and Sons",
    "product": "Tomato Puree",
    "imageSrc": "http://dummyimage.com/208x132.png/dddddd/000000",
    "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    "available": true
}, {
    "id": 2,
    "fullname": "Layne Hazelton",
    "avatar": "https://robohash.org/nullaconsequaturdolore.bmp?size=50x50&set=set1",
    "company": "Runolfsdottir, Blick and Swift",
    "product": "Fennel",
    "imageSrc": "http://dummyimage.com/217x133.png/ff4444/ffffff",
    "description": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    "available": true
}, {
    "id": 3,
    "fullname": "Nert Metzing",
    "avatar": "https://robohash.org/ullamquoddelectus.jpg?size=50x50&set=set1",
    "company": "Beatty-Kuhlman",
    "product": "Wine - Saint - Bris 2002, Sauv",
    "imageSrc": "http://dummyimage.com/194x215.jpg/5fa2dd/ffffff",
    "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "available": false
}, {
    "id": 4,
    "fullname": "Bax McEvay",
    "avatar": "https://robohash.org/etsuscipitneque.jpg?size=50x50&set=set1",
    "company": "Nitzsche LLC",
    "product": "Muffin Puck Ww Carrot",
    "imageSrc": "http://dummyimage.com/103x100.bmp/dddddd/000000",
    "description": "Nunc purus Integer aliquet, massa id lobortis tortor risus dapibus augue. ",
    "available": true
}, {
    "id": 5,
    "fullname": "Cesar Klugel",
    "avatar": "https://robohash.org/atquiaalias.bmp?size=50x50&set=set1",
    "company": "Keeling-Bogan",
    "product": "Red Cod Fillets - 225g",
    "imageSrc": "http://dummyimage.com/178x238.png/dddddd/000000",
    "description": "Aliquam erat volutpat nascetur ridiculus mus ivamu.",
    "available": true
}, {
    "id": 6,
    "fullname": "Laurie Braden",
    "avatar": "https://robohash.org/quasiomnisea.bmp?size=50x50&set=set1",
    "company": "Rau Inc",
    "product": "English Muffin",
    "imageSrc": "http://dummyimage.com/215x235.jpg/cc0000/ffffff",
    "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis convallis tellus nisi eu orci.",
    "available": true
}, {
    "id": 7,
    "fullname": "Alvin Pietasch",
    "avatar": "https://robohash.org/autdolorumaccusantium.bmp?size=50x50&set=set1",
    "company": "Konopelski, Emmerich and Hoppe",
    "product": "Coffee - 10oz Cup 92961  Bashirian and Abernathy bernier bashirian",
    "imageSrc": "http://dummyimage.com/231x100.jpg/5fa2dd/ffffff",
    "description": "Cum sociis natoque penatibus et magnis dis parturient montes, vestibulum sagittis sapien.",
    "available": true
}, {
    "id": 8,
    "fullname": "Hagen Barron",
    "avatar": "https://robohash.org/aspernaturestmolestias.bmp?size=50x50&set=set1",
    "company": "Casper, Mitchell and Torphy",
    "product": "Lemonade - Black Cherry, 591 Ml",
    "imageSrc": "http://dummyimage.com/140x238.png/dddddd/000000",
    "description": "Duis bibendum, felis sed in porttitor pede justo eu massa. Donec dapibus.",
    "available": true
}, {
    "id": 9,
    "fullname": "Judy Jays",
    "avatar": "https://robohash.org/quaeratetsit.jpg?size=50x50&set=set1",
    "company": "Bartoletti, Klocko and Leannon",
    "product": "Sprouts - Pea",
    "imageSrc": "http://dummyimage.com/220x144.bmp/dddddd/000000",
    "description": "Aliquam erat volutpat vel accumsan In congue.",
    "available": true
}, {
    "id": 10,
    "fullname": "Vladimir Reyna",
    "avatar": "https://robohash.org/verorerumet.bmp?size=50x50&set=set1",
    "company": "Bernier, Bashirian and Abernathy",
    "product": "Sour Cream Bernier ",
    "imageSrc": "http://dummyimage.com/226x198.png/dddddd/000000",
    "description": "Nulla nisl interdum venenatis, turpis enim blandit mi.",
    "available": true
}]

const Content = () => {
    return (
        <Grid container spacing={3}>
            <Grid item container direction='column'>
                <Banner />
            </Grid>
            <Grid item container spacing={3}>
                <ProductList catalogue={catalogue} />
            </Grid>
        </Grid >
    )
}

export default Content