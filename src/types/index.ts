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

export interface IPersonDetailCard {
  id: string
  name: string
  properties: {
    height: string
    mass: string
    hair_color: string
    skin_color: string
    birth_year: string
    gender: string
  }
}

export interface IPersonCard {
  id: string
  name: string
}

export interface IPagination {
  previous: string | null
  next: string | null
}
