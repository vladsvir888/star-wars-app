export interface IAlert {
  variant: string
  closable: boolean
  icon: string
  text: string
}

export interface IInput {
  type?: string
  label: string
  clearable: boolean
  disabled: boolean
  icon: {
    name: string
    slot?: string
  }
  modelValue: string
}

export interface IPagination {
  previous: string | null
  next: string | null
}

export interface IPersonCard {
  name: string
  id: string | null
}

export interface IPersonDetailCard {
  id: string | string[]
  properties: {
    name: string
    height: string
    mass: string
    hair_color: string
    skin_color: string
    eye_color: string
    birth_year: string
    gender: string
  }
}

export interface ICardList {
  title: string
  isItemLink?: boolean
  data: {
    name: string
    url: string
  }[]
}

export interface IPerson {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  starships: string[]
  vehicles: string[]
  url: string
}

export interface IPeople extends IPagination {
  results: IPerson[]
}

export interface ICraft {
  name: string
  url: string
}
