import { InMemoryDbService } from 'angular-in-memory-web-api';
import {List}from './list';

export class InMemoryDataService implements InMemoryDbService {
  createDb() { 
    const hero = [
      {id: 1, email:'rishi@gmail.com', password: '123456'  },
      {id: 2, email:'anil@gmail.com', password: '123456' }, 
      {id: 3, email:'jack@gmail.com', password: '123456' },
      {id: 4, email:'kunal@gmail.com', password: '123456' },
      {id: 5, email:'mukesh@gmail.com', password: '123456' },
      {id: 6, email:'rohan@gmail.com', password: '123456' },
      {id: 7, email:'dia@gmail.com', password: '123456' },
      {id: 8, email:'esha@gmail.com', password: '123456' },
      {id: 9, email:'manish@gmail.com', password: '123456' },
      {id: 10, email:'tarun@gmail.com', password: '123456' },
    ];

    const myList = [
      { id: 1, name: 'Aristotle', content:'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.'},
      { id: 2, name: 'Albert Einstein', content:'I have no special talent. I am only passionately curious.' },
      { id: 3, name: 'Mother Teresa', content:'If you judge people, you have no time to love them.' },
      { id: 4, name: 'William Shakespeare', content:'Wisely, and slow. They stumble that run fast.' },
      { id: 5, name: 'Coco Chanel', content:'The most courageous act is still to think for yourself. Aloud. ' },
      { id: 6, name: 'Steve Jobs', content:'Stay hungry, stay foolish.' },
      { id: 7, name: 'Ralph Waldo Emerson' , content:'A great man is always willing to be little.'},
      { id: 8, name: 'Plato', content:'The greatest wealth is to live content with little.' },
      { id: 9, name: 'Malcolm X', content:'The future belongs to those who prepare for it today.' },
      { id: 10, name:'Bruce Lee', content:'The successful warrior is the average man, with laser-like focus.' }
    ];
    return {hero,myList};
  }

  genId(myList: List[]): number {
    return myList.length > 0 ? Math.max(...myList.map(list => list.id)) + 1 : 11;
  }

}