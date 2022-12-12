const store = {
    name: 'shop',
    adress: {
        country: 'Ukraine',
        city: 'Odesa',
        street: 'Glushko',
        houseNumber: 46,
    }
}

store.clients = {};

store.clients['Nataliia Kulybina']= {
    quantity: 5,
    bonuses: 50,
};

store.clients['Yevhen Vuzlov']= {
    quantity: 7,
    bonuses: 65,
};

store.clients['Alina Kholod']= {
    quantity: 9,
    bonuses: 115,
};

store.clients['Bohdan Onatskiy']= {
    quantity: 15,
    bonuses: 250,
};

store.clients['Oleksii Medvediev']= {
    quantity: 2,
    bonuses: 35,
};
