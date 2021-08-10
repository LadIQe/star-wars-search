import { ResponseTypeHero } from './ResponseTypes'

export namespace ApiRouteTypeHeroes {
  export type GetHeroNames = {
    url: 'api/people/'
    request: undefined
    response: ResponseTypeHero.GetHeroNames
  }
}

export namespace DummyAppi {
  export type Dummy = {
    url: 'dummy'
    request: any
    response: any
  }
}

export type ApiGetType = ApiRouteTypeHeroes.GetHeroNames
export type ApiPostType = DummyAppi.Dummy
export type ApiDeleteType = DummyAppi.Dummy
export type ApiPutType = DummyAppi.Dummy
export type ApiPatchType = DummyAppi.Dummy
