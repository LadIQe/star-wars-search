import { ApiRouteTypeHeroes } from 'src/types/API/ApiRouteTypes'
import { middlewareApiClient } from './ApiClient'

export const fetchHeroes = (name: string) => middlewareApiClient().get<ApiRouteTypeHeroes.GetHeroNames>('api/people/', `?search=${name}`)
