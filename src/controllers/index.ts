interface Main {
  prop: boolean;
}
export function createController() {
  return {
    update() {
      console.log('updating')
    },
  }
}
