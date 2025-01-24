
export const destinations = [
    {
      id: 1,
      name: "Paris",
      description: "The City of Lights, known for its iconic Eiffel Tower, world-class museums, and romantic atmosphere.",
      image: "https://media.istockphoto.com/id/1364380431/photo/the-eiffel-tower-from-the-river-seine-in-paris.webp?a=1&b=1&s=612x612&w=0&k=20&c=qhX7OwzBwdiq1qtcD49k8DHECOs7tSb4CdyTJRADmNU=",
      details: {
        highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
        bestTimeToVisit: "April to mid-June and September to November",
        cuisine: "French pastries, wine, cheese",
        travelTips: "Learn basic French phrases, use metro for transportation",
        subPlaces: [
          {
            name: "Eiffel Tower",
            image: "https://images.unsplash.com/photo-1600932194763-e9b019e7bcdb",
            openTime: "9:00 AM",
            closeTime: "12:00 AM",
            history: "The Eiffel Tower was completed in 1889 and was initially criticized by many of Paris' most famous artists and writers. It is now one of the most visited paid monuments in the world.",
            info: "You can take an elevator ride to the top for stunning views of Paris."
          },
          {
            name: "Louvre Museum",
            image: "https://images.unsplash.com/photo-1562564685-bb98b5e7f914",
            openTime: "9:00 AM",
            closeTime: "6:00 PM",
            history: "The Louvre Museum, originally a royal palace, became a public museum in 1793. It houses thousands of works of art, including the Mona Lisa.",
            info: "Don't miss the glass pyramid entrance!"
          },
          {
            name: "Notre-Dame Cathedral",
            image: "https://images.unsplash.com/photo-1502810843257-2267de5ba89d",
            openTime: "8:00 AM",
            closeTime: "6:45 PM",
            history: "Notre-Dame de Paris is a masterpiece of French Gothic architecture, built from the 12th century. It has stood the test of time, withstanding wars and revolutions.",
            info: "Climb to the top for magnificent views of Paris and the Seine."
          },
        ],
      },
    },
    {
      id: 2,
      name: "Tokyo",
      description: "A vibrant metropolis blending cutting-edge technology with ancient traditions.",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRva3lvfGVufDB8fDB8fHww",
      details: {
        highlights: ["Tokyo Tower", "Shibuya Crossing", "Senso-ji Temple"],
        bestTimeToVisit: "March to May and September to November",
        cuisine: "Sushi, ramen, tempura",
        travelTips: "Get a Japan Rail Pass, be respectful of local customs",
        subPlaces: [
          {
            name: "Tokyo Tower",
            image: "https://images.unsplash.com/photo-1521747116042-c6b4fc6d5f43",
            openTime: "9:00 AM",
            closeTime: "11:00 PM",
            history: "Tokyo Tower, inspired by the Eiffel Tower, was completed in 1958. It serves as a communications tower and a major tourist destination.",
            info: "Visit the observation decks for panoramic views of Tokyo."
          },
          {
            name: "Senso-ji Temple",
            image: "https://images.unsplash.com/photo-1504508123270-d3784e342926",
            openTime: "6:00 AM",
            closeTime: "5:00 PM",
            history: "Senso-ji is Tokyo's oldest temple, founded in 628 AD. It is one of the most visited religious sites in Japan.",
            info: "Don't forget to make a wish at the temple's famous incense burner."
          },
        ],
      },
    },
    {
      id: 3,
      name: "Bali",
      description: "A tropical paradise with stunning beaches, lush landscapes, and rich cultural heritage.",
      image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFsaXxlbnwwfHwwfHx8MA%3D%3D",
      details: {
        highlights: ["Ubud Monkey Forest", "Tanah Lot Temple", "Rice Terraces"],
        bestTimeToVisit: "April to October (dry season)",
        cuisine: "Nasi goreng, satay, fresh seafood",
        travelTips: "Respect local ceremonies, use sunscreen, stay hydrated",
        subPlaces: [
          {
            name: "Ubud Monkey Forest",
            image: "https://images.unsplash.com/photo-1502982220857-8f0d987e564f",
            openTime: "8:30 AM",
            closeTime: "6:00 PM",
            history: "The Ubud Monkey Forest is home to over 700 long-tailed macaques. It is a sacred space in Bali, with historical temples and lush greenery.",
            info: "Watch the monkeys, but avoid feeding them!"
          },
          {
            name: "Tanah Lot Temple",
            image: "https://images.unsplash.com/photo-1563315872-d57ccf32cd91",
            openTime: "7:00 AM",
            closeTime: "7:00 PM",
            history: "Tanah Lot is a sea temple that has been a part of Balinese mythology for centuries. It sits on a rock formation, surrounded by the ocean.",
            info: "Best visited at sunset for a breathtaking view."
          },
        ],
      },
    },
    {
      id: 4,
      name: "New York City",
      description: "The city that never sleeps, known for its skyline, cultural diversity, and vibrant lifestyle.",
      image: "https://plus.unsplash.com/premium_photo-1672082422409-879d79636902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D",
      details: {
        highlights: ["Statue of Liberty", "Central Park", "Times Square"],
        bestTimeToVisit: "April to June and September to November",
        cuisine: "Bagels, pizza, cheesecake",
        travelTips: "Use public transport, wear comfortable shoes for walking",
        subPlaces: [
          {
            name: "Statue of Liberty",
            image: "https://images.unsplash.com/photo-1563152089-44b65bcf0987",
            openTime: "8:30 AM",
            closeTime: "4:00 PM",
            history: "The Statue of Liberty was a gift from France in 1886, symbolizing freedom and democracy. It stands at the entrance of New York Harbor.",
            info: "Visit the crown for panoramic views of the harbor."
          },
          {
            name: "Central Park",
            image: "https://images.unsplash.com/photo-1564570177-dff378de95d1",
            openTime: "6:00 AM",
            closeTime: "1:00 AM",
            history: "Central Park, opened in 1858, is one of the most famous urban parks in the world, offering green space amidst the urban jungle.",
            info: "Rent a bike or take a carriage ride through the park."
          },
        ],
      },
    },
    {
      id: 5,
      name: "Sydney",
      description: "Australia’s largest city, famous for its Opera House, Harbour Bridge, and stunning beaches.",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3lkbmV5fGVufDB8fDB8fHww",
      details: {
        highlights: ["Sydney Opera House", "Bondi Beach", "Darling Harbour"],
        bestTimeToVisit: "September to November and March to May",
        cuisine: "Seafood, meat pies, lamingtons",
        travelTips: "Use ferries for scenic views, explore the Blue Mountains",
        subPlaces: [
          {
            name: "Sydney Opera House",
            image: "https://images.unsplash.com/photo-1569917457-1b93b5f5f390",
            openTime: "9:00 AM",
            closeTime: "5:00 PM",
            history: "Completed in 1973, the Sydney Opera House is an iconic symbol of Australia, renowned for its unique design and world-class performances.",
            info: "Take a guided tour to learn about its architecture and history."
          },
          {
            name: "Bondi Beach",
            image: "https://images.unsplash.com/photo-1512269171043-31a6a5192a8f",
            openTime: "24 hours",
            closeTime: "24 hours",
            history: "Bondi Beach is one of Sydney's most famous beaches, known for its surfing culture and stunning coastal walk.",
            info: "Perfect for surfing, swimming, and sunbathing."
          },
        ],
      },
    },
    {
      id: 6,
      name: "Cape Town",
      description: "A jewel of South Africa, known for its natural beauty, Table Mountain, and rich history.",
      image: "https://images.unsplash.com/photo-1609158063294-c7014069f886?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
      details: {
        highlights: ["Table Mountain", "Cape of Good Hope", "Robben Island"],
        bestTimeToVisit: "November to March",
        cuisine: "Biltong, bobotie, Cape Malay dishes",
        travelTips: "Pack sunscreen, explore wine regions, respect local wildlife",
        subPlaces: [
          {
            name: "Table Mountain",
            image: "https://images.unsplash.com/photo-1534257174375-24be8492f035",
            openTime: "8:00 AM",
            closeTime: "6:00 PM",
            history: "Table Mountain is one of the most iconic landmarks in South Africa. It offers spectacular views of Cape Town and the surrounding landscape.",
            info: "Take the cable car to the top for breathtaking views."
          },
          {
            name: "Robben Island",
            image: "https://images.unsplash.com/photo-1591133260791-05678482590f",
            openTime: "9:00 AM",
            closeTime: "5:00 PM",
            history: "Robben Island is a UNESCO World Heritage Site known for its historical significance, particularly as the prison of Nelson Mandela.",
            info: "Visit the prison where Mandela was incarcerated for 18 years."
          },
        ],
      },
    },
  ];
