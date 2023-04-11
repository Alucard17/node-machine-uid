import { assert, describe, it } from "vitest"
import machineId from "../src"

const { platform } = process
const originalPattern: { [key: string]: RegExp } = {
  darwin: /^[0-9,A-z]{8}-[0-9,A-z]{4}-[0-9,A-z]{4}-[0-9,A-z]{4}-[0-9,A-z]{12}$/,
  win32: /^[0-9,A-z]{8}-[0-9,A-z]{4}-[0-9,A-z]{4}-[0-9,A-z]{4}-[0-9,A-z]{12}$/,
  linux: /^[0-9,A-z]{32}$/,
  freebsd:
    /^[0-9,A-z]{8}-[0-9,A-z]{4}-[0-9,A-z]{4}-[0-9,A-z]{4}-[0-9,A-z]{12}$/,
}
const hashPattern = /^[0-9,A-z]{64}$/

describe("Async call: machineId({original: true})", function () {
  it("should return original unique id", async () => {
    let id = await machineId(true)
    assert.match(id, originalPattern[platform])
  })
})

describe("Async call: machineId()", function () {
  it("should return unique sha256-hash", async () => {
    let id = await machineId()
    assert.match(id, hashPattern)
  })
})
