import { create2dArray } from "./utils/misc";

const array = ["a", "b", "c", "d"]

it("Creates a two dimensional array from a one dimensional array", () => {
  expect(create2dArray(array, 2).length).toEqual(2)
})