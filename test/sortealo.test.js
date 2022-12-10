import { expect, test } from "vitest";
import { selectRandomFromArray } from "../util";

test('select random', ()=>{

    const arrayTest = [1,5,6]
   const value =  selectRandomFromArray(arrayTest)
  const isIncluded= arrayTest.includes(value)
expect(isIncluded).toBe (true)
})