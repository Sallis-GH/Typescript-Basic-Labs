interface puppies {
  id: string,
  breed: string,
  name: string,
  birthDate: string
  url: string,
}

const data: puppies[] = [
  {
    id:"0",
    breed:'German Shepherd',
    name:'Garry',
    birthDate:'January',
    url: 'https://images.unsplash.com/photo-1585948010778-3dd336d7d92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTY1MzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzMwNTA3NDY&ixlib=rb-4.0.3&q=80&w=400'
  },
  {
    id:"1",
    breed:'Bulldog',
    name:'Bully',
    birthDate:'March',
    url: 'https://images.unsplash.com/photo-1590420168190-533edb4eff7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTY1MzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzMwNTA3NDY&ixlib=rb-4.0.3&q=80&w=400'
  },
  {
    id:"2",
    breed:'Labrador Retriever',
    name:'Labby',
    birthDate:'December',
    url: 'https://images.unsplash.com/photo-1586263374340-75d101b05f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTY1MzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzMwNTA3NDY&ixlib=rb-4.0.3&q=80&w=400'
  },
  {
    id:"3",
    breed:'Siberian Husky',
    name:'Sibby',
    birthDate:'August',
    url: 'https://images.unsplash.com/photo-1516108282925-3c3c19bc72b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTY1MzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzMwNTA3NDY&ixlib=rb-4.0.3&q=80&w=400'
  },
]

export default data;
