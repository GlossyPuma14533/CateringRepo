export type MenuItem = {
  id: string
  name: string
  description: string | null
  price: number
  category: string
  image_url: string | null
  available: boolean
  created_at: string
}

export type Order = {
  id: string
  user_id: string
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled'
  event_date: string
  event_type: string
  guest_count: number
  notes: string | null
  total_price: number
  created_at: string
}

export type OrderItem = {
  id: string
  order_id: string
  menu_item_id: string
  quantity: number
  unit_price: number
}

export type Profile = {
  id: string
  full_name: string | null
  phone: string | null
  role: 'customer' | 'admin'
  created_at: string
}
