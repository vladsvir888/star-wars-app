export interface IAlert {
  variant: string
  closable: boolean
  icon: string
  text: string
}

export interface IInput {
  type: string
  label: string
  clearable: boolean
  helpText: string
  disabled: boolean
  modelValue: string
  icon: {
    name: string
    slot: string
  }
}

export interface IPagination {
  previous: string | null
  next: string | null
}

export interface IPerson {
    birth_year: string
    created: string
    edited: string
    eye_color: string
    films: string[]
    gender: string
    hair_color: string
    height: string
    homeworld: string
    mass: string
    name: string
    skin_color: string
    species: string[]
    starships: string[]
    url: string
    vehicles: string[]
}

export interface IPersonCard {
  id: string | null
  name: string
}

export interface IPersonDetailCard {
  id: string
  name: string
  properties: IPerson
}

export interface ICardList {
  title: string
  isItemLink: boolean
  data: {
    name: string
    url: string
  }
}

export interface IPeople extends IPagination {
  results: IPerson[]
}
