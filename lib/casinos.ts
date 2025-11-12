export interface Casino {
  rank: number
  name: string
  logo: string
  rating: number
  bonus: string
  isTopChoice?: boolean
  url: string
}

export const casinos: Casino[] = [
  {
    rank: 1,
    name: "Betsson",
    logo: "/betsson.png",
    rating: 9.8,
    bonus: "¡Apuesta Gratis de S/50 y 10 Giros Gratis con tu Primer Depósito!",
    isTopChoice: true,
    url: "https://www.betsson.pe/",
  },
  {
    rank: 2,
    name: "Betsafe",
    logo: "/betsafe.svg",
    rating: 9.7,
    bonus: "¡Oferta de Bienvenida de S/70!",
    url: "https://www.betsafe.pe/es",
  },
  {
    rank: 3,
    name: "CoolBet",
    logo: "/coolbet.svg",
    rating: 9.5,
    bonus: "Gana Hasta S/200",
    url: "https://www.coolbet.pe/pe",
  },
  {
    rank: 4,
    name: "Betcris",
    logo: "/betcris.png",
    rating: 9.3,
    bonus: "Recibe el 100% Extra de tu Primer Depósito",
    url: "https://www.betcris.pe/",
  },
  {
    rank: 5,
    name: "Inkabet",
    logo: "/inkabet-logo.svg",
    rating: 9.1,
    bonus: "S/50 en Apuesta Gratis para Deportes",
    url: "https://inkabet.pe/",
  },
]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
