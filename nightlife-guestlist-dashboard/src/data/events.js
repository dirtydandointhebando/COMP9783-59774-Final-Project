const events = [

  {
    id: 1,
    name: "Saturday at Noir",
    venue: "Club Noir",
    date: "May 24, 2026",

    parties: [
        {
        id: 101,
        partyName: "John Smith",
        guestCount: 4,
        arrivedCount: 2
        },

        {
        id: 102,
        partyName: "Emily Johnson",
        guestCount: 3,
        arrivedCount: 3
        }
    ]  
  },

  {
    id: 2,
    name: "Velvet Fridays",
    venue: "Velvet Room",
    date: "May 26, 2026",
   
    parties: [
        {
        id: 201,
        partyName: "Michael Brown",
        guestCount: 5,
        arrivedCount: 1
        },

        {
        id: 202,
        partyName: "Sarah Davis",
        guestCount: 2,
        arrivedCount: 0
        }
    ]
  },

  {
    id: 3,
    name: "Electric Nights",
    venue: "District Lounge",
    date: "May 30, 2026",
   
    parties: [
        {
        id: 301,
        partyName: "David Wilson",
        guestCount: 6,
        arrivedCount: 4
        },

        {
        id: 302,
        partyName: "Jessica Miller",
        guestCount: 3,
        arrivedCount: 3
        }
    ]
  }

];

export default events;