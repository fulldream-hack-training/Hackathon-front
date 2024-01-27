import {
  people01,
  people02,
  people03,
  send,
  shield,
  star,
} from '../assets';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'features',
    title: 'Features',
  },
  {
    id: 'clients',
    title: 'Clients',
  },
];

export const features = [
  {
    id: 'feature-1',
    icon: star,
    title: 'Rewards',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quibusdam, debitis recusandae consectetur',
  },
  {
    id: 'feature-2',
    icon: shield,
    title: '100% Secured',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quibusdam, debitis recusandae consectetur',
  },
  {
    id: 'feature-3',
    icon: send,
    title: 'Balance Transfer',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quibusdam, debitis recusandae consectetur',
  },
];

export const feedback = [
  {
    id: 'feedback-1',
    content: 'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
    name: 'Fiantso Harena',
    title: 'Founder & Leader',
    img: people01,
  },
  {
    id: 'feedback-2',
    content: "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: 'Mark Zuckerger',
    title: 'Founder & Leader',
    img: people02,
  },
  {
    id: 'feedback-3',
    content: 'It is usually people in the money business, finance, and international trade that are really rich.',
    name: 'Elon Musk',
    title: 'Founder & Leader',
    img: people03,
  },
];
