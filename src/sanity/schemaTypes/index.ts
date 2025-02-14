import { type SchemaTypeDefinition } from 'sanity'
import category from './category'
import product from './product'
import user from './user'
import sale from './sale'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, product, user, sale],
}
