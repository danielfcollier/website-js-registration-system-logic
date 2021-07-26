const customerFake = id => {
    return {
        Id: "cus_" + id,
        Name: "João da Silva",
        Email: "joaosilvafake@email.com",
        Birthday: "1985-01-10",
        Document: "XXX.XXX.XXX-XX",
        Type: "CPF",
        ExtraDocument: "RG 234-5 SSP/SC",
        Phone: "(48) 99889-1234",
        DeliveryAddress: {
            Street: "Rua Pirineus",
            Details: "Bloco A Apto 306, Res. Solar da Primavera",
            Number: 86,
            Neighborhood: "Córrego Grande",
            City: "Florianópolis",
            State: "SC",
            Country: "Brasil",
            Zipcode: "88.035-615"
        },
        IsSameAddress: true,
    };
};

export default customerFake;