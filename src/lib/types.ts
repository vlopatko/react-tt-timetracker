export type User = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export type Task = {
  id: string
  name: string
  createdAt: number
  closedAt: number | null
  description: string
}

export type Item = {
  id: string
  userId: number
  taskId: string
  createdAt: number
  spentTime: number
}

export type AuthState = {
  isAuth?: boolean
  username: string
  uid?: string
}
