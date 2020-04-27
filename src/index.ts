import { scaleLinear } from 'd3-scale'
import pick from 'lodash/fp/pick'
import { ticks, tickIncrement } from 'd3-array'
import { createController } from './controllers'

console.log(scaleLinear, ticks, tickIncrement, pick)
export function lovelife() {
  console.log('lovelife', ticks)
  createController()
}
