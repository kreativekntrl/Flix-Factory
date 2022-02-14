const { Show } = require('../models');

const showData = [
  {
    title: "OZARK",
    network_id: 2,
  },
  {
    title: "Love is Blind",
    network_id: 2,
  },
  {
    title: "YOU",
    network_id: 2,
  },
  {
    title: "Outlander",
    network_id: 2,
  },
  {
    title: "Outer Banks",
    network_id: 2,
  },
  {
    title: "Manifest",
    network_id: 2,
  },
  {
    title: "Blacklist",
    network_id: 2,
  },
  {
    title: "Peaky Blinders",
    network_id: 2,
  },
  {
    title: "New Girl",
    network_id: 2,
  },
  {
    title: "Squid Games",
    network_id: 2,
  },
  {
    title: "Dopestick",
    network_id: 1,
  },
  {
    title: "The Resident",
    network_id: 1,
  },
  {
    title: "This Is Us",
    network_id: 1,
  },
  {
    title: "How I Met Your Mother",
    network_id: 1,
  },
  {
    title: "Brooklyn Nine-Nine",
    network_id: 1,
  },
  {
    title: "American Horror Story",
    network_id: 1,
  },
  {
    title: "Power",
    network_id: 1,
  },
  {
    title: "Family Guy",
    network_id: 1,
  },
  {
    title: "Snowfall",
    network_id: 1,
  },
  {
    title: "Rick and Morty",
    network_id: 1,
  },
  {
    title: "The Simpsons",
    network_id: 3,
  },
  {
    title: "Black-ish",
    network_id: 3,
  },
  {
    title: "grown-ish",
    network_id: 3,
  },
  {
    title: "The Wonder Years",
    network_id: 3,
  },
  {
    title: "Hannah Montana",
    network_id: 3,
  },
  {
    title: "Stuck in the Middle",
    network_id: 3,
  },
  {
    title: "Thats so Raven",
    network_id: 3,
  },
  {
    title: "The Suite Life On Deck",
    network_id: 3,
  },
  {
    title: "Shake it Up",
    network_id: 3,
  },
  {
    title: "Wizards of Waverly Place",
    network_id: 3,
  },
  {
    title: "True Detective",
    network_id: 4,
  },
  {
    title: "Raised by Wolves",
    network_id: 4,
  },
  {
    title: "Ballers",
    network_id: 4,
  },
  {
    title: "Bachelor",
    network_id: 4,
  },
  {
    title: "Insecure",
    network_id: 4,
  },
  {
    title: "Big Little Lies",
    network_id: 4,
  },
  {
    title: "Gossip Girl",
    network_id: 4,
  },
  {
    title: "The Flight Attendant",
    network_id: 4,
  },
  {
    title: "Euphoria",
    network_id: 4,
  },
];
 
const seedShow = () => Show.bulkCreate(showData);

module.exports = seedShow;
