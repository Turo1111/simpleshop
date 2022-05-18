// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      brand: "Lacoste",
      description: "Remera Algodon Lacoste",
      category: "remera",
      price: "5699.99",
      tag1:"Season",
      tagSale: "50",
      color: [
        {
          name: "black",
          imgs: ["/Remera_Negra_Lacoste1.jpg", "/Remera_Negra_Lacoste2.jpg"]
        },
        {
          name: "grey",
          imgs: ["/Remera_Gris_Lacoste1.jpg", "/Remera_Gris_Lacoste2.jpg"]
        },
        {
          name: "pink",
          imgs: ["/Remera_Rosa_Lacoste1.jpg", "/Remera_Rosa_Lacoste2.jpg"]
        }
      ],
      size: ["S", "M", "L", "XL", "XXL"],
      img: "/item1.jpg"
    },
    {
      id: 2,
      brand: "Under Armour",
      description: "Gorra Tela UnderArmour",
      category: "gorra",
      price: "3399.99",
      tag1:"New",
      tagSale: "10",
      color: [
        {
          name: "black",
          imgs: ["/Gorra_Negra_UnderArmour_Frente.jpeg", "/Gorra_Negra_UnderArmour_Atras.jpeg"]
        },
        {
          name: "white",
          imgs: ["/Gorra_Blanca_UnderArmour_Frente.jpg", "/Gorra_Blanca_UnderArmour_Atras.jpg"]
        },
        {
          name: "blue",
          imgs: ["/Gorra_Azul_UnderArmour_Frente.jpg", "/Gorra_Azul_UnderArmour_Atras.jpg"]
        }
      ],
      size: ["S", "M", "L", "XL", "XXL"],
      img: "/Gorra_Negra_UnderArmour_Frente.jpeg"
    },
    {
      id: 3,
      brand: "Nike",
      description: "Nike Jordan 1 Low",
      category: "zapatilla",
      price: "23399.99",
      tag1:"New",
      tagSale: "15",
      color: [
        {
          name: "gray",
          imgs: ["/Zapatilla_Gris_Nike_1.png", "/Zapatilla_Gris_Nike_2.png", "/Zapatilla_Gris_Nike_3.png"]
        },
        {
          name: "red",
          imgs: ["/Zapatilla_Roja_Nike_1.png", "/Zapatilla_Roja_Nike_2.png", "/Zapatilla_Roja_Nike_3.png"]
        },
        {
          name: "turquoise",
          imgs: ["/Zapatilla_Turquesa_Nike_1.png", "/Zapatilla_Turquesa_Nike_2.png", "/Zapatilla_Turquesa_Nike_3.png"]
        }
      ],
      size: ["36", "37.5", "39", "40", "41.5"],
      img: "/Zapatilla_Gris_Nike_1.png"
    },
    {
      id: 4,
      brand: "Nike 1",
      description: "Nike Jordan 1 Low",
      category: "zapatilla 1",
      price: "23399.99",
      tag1:"New",
      tagSale: "15",
      color: [
        {
          name: "gray",
          imgs: ["/Zapatilla_Gris_Nike_1.png", "/Zapatilla_Gris_Nike_2.png", "/Zapatilla_Gris_Nike_3.png"]
        },
        {
          name: "red",
          imgs: ["/Zapatilla_Roja_Nike_1.png", "/Zapatilla_Roja_Nike_2.png", "/Zapatilla_Roja_Nike_3.png"]
        },
        {
          name: "turquoise",
          imgs: ["/Zapatilla_Turquesa_Nike_1.png", "/Zapatilla_Turquesa_Nike_2.png", "/Zapatilla_Turquesa_Nike_3.png"]
        }
      ],
      size: ["36", "37.5", "39", "40", "41.5"],
      img: "/Zapatilla_Gris_Nike_1.png"
    },
    {
      id: 5,
      brand: "Nike2",
      description: "Nike Jordan 1 Low",
      category: "zapatilla2",
      price: "23399.99",
      tag1:"New",
      tagSale: "15",
      color: [
        {
          name: "gray",
          imgs: ["/Zapatilla_Gris_Nike_1.png", "/Zapatilla_Gris_Nike_2.png", "/Zapatilla_Gris_Nike_3.png"]
        },
        {
          name: "red",
          imgs: ["/Zapatilla_Roja_Nike_1.png", "/Zapatilla_Roja_Nike_2.png", "/Zapatilla_Roja_Nike_3.png"]
        },
        {
          name: "turquoise",
          imgs: ["/Zapatilla_Turquesa_Nike_1.png", "/Zapatilla_Turquesa_Nike_2.png", "/Zapatilla_Turquesa_Nike_3.png"]
        }
      ],
      size: ["36", "37.5", "39", "40", "41.5"],
      img: "/Zapatilla_Gris_Nike_1.png"
    },
    {
      id: 6,
      brand: "Nike3",
      description: "Nike Jordan 1 Low",
      category: "zapatilla3",
      price: "23399.99",
      tag1:"New",
      tagSale: "15",
      color: [
        {
          name: "gray",
          imgs: ["/Zapatilla_Gris_Nike_1.png", "/Zapatilla_Gris_Nike_2.png", "/Zapatilla_Gris_Nike_3.png"]
        },
        {
          name: "red",
          imgs: ["/Zapatilla_Roja_Nike_1.png", "/Zapatilla_Roja_Nike_2.png", "/Zapatilla_Roja_Nike_3.png"]
        },
        {
          name: "turquoise",
          imgs: ["/Zapatilla_Turquesa_Nike_1.png", "/Zapatilla_Turquesa_Nike_2.png", "/Zapatilla_Turquesa_Nike_3.png"]
        }
      ],
      size: ["36", "37.5", "39", "40", "41.5"],
      img: "/Zapatilla_Gris_Nike_1.png"
    },
    {
      id: 7,
      brand: "Nike4",
      description: "Nike Jordan 1 Low",
      category: "zapatilla4",
      price: "23399.99",
      tag1:"New",
      tagSale: "15",
      color: [
        {
          name: "gray",
          imgs: ["/Zapatilla_Gris_Nike_1.png", "/Zapatilla_Gris_Nike_2.png", "/Zapatilla_Gris_Nike_3.png"]
        },
        {
          name: "red",
          imgs: ["/Zapatilla_Roja_Nike_1.png", "/Zapatilla_Roja_Nike_2.png", "/Zapatilla_Roja_Nike_3.png"]
        },
        {
          name: "turquoise",
          imgs: ["/Zapatilla_Turquesa_Nike_1.png", "/Zapatilla_Turquesa_Nike_2.png", "/Zapatilla_Turquesa_Nike_3.png"]
        }
      ],
      size: ["36", "37.5", "39", "40", "41.5"],
      img: "/Zapatilla_Gris_Nike_1.png"
    },
    {
      id: 8,
      brand: "Nike5",
      description: "Nike Jordan 1 Low",
      category: "zapatilla5",
      price: "23399.99",
      tag1:"New",
      tagSale: "15",
      color: [
        {
          name: "gray",
          imgs: ["/Zapatilla_Gris_Nike_1.png", "/Zapatilla_Gris_Nike_2.png", "/Zapatilla_Gris_Nike_3.png"]
        },
        {
          name: "red",
          imgs: ["/Zapatilla_Roja_Nike_1.png", "/Zapatilla_Roja_Nike_2.png", "/Zapatilla_Roja_Nike_3.png"]
        },
        {
          name: "turquoise",
          imgs: ["/Zapatilla_Turquesa_Nike_1.png", "/Zapatilla_Turquesa_Nike_2.png", "/Zapatilla_Turquesa_Nike_3.png"]
        }
      ],
      size: ["36", "37.5", "39", "40", "41.5"],
      img: "/Zapatilla_Gris_Nike_1.png"
    },
    {
      id: 9,
      brand: "Nike6",
      description: "Nike Jordan 1 Low",
      category: "zapatilla6",
      price: "23399.99",
      tag1:"New",
      tagSale: "15",
      color: [
        {
          name: "gray",
          imgs: ["/Zapatilla_Gris_Nike_1.png", "/Zapatilla_Gris_Nike_2.png", "/Zapatilla_Gris_Nike_3.png"]
        },
        {
          name: "red",
          imgs: ["/Zapatilla_Roja_Nike_1.png", "/Zapatilla_Roja_Nike_2.png", "/Zapatilla_Roja_Nike_3.png"]
        },
        {
          name: "turquoise",
          imgs: ["/Zapatilla_Turquesa_Nike_1.png", "/Zapatilla_Turquesa_Nike_2.png", "/Zapatilla_Turquesa_Nike_3.png"]
        }
      ],
      size: ["36", "37.5", "39", "40", "41.5"],
      img: "/Zapatilla_Gris_Nike_1.png"
    },
  ])
}