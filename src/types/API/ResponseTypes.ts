import { HeroItem } from '../HeroTypes'

export namespace ResponseTypeHero {
  export type GetHeroNames = {
    count: number
    next: number | null
    previous: number | null
    results: HeroItem[]
  }
}
