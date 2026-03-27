import { businessesMock } from "./mocks/businessesMock.js"
import { loopOverBusinesses } from "./utils/loopOverBusinesses.js"
import { pullData } from "./utils/pullData.js"

// const businesses = await pullData()

const businesses = businessesMock

await loopOverBusinesses(businesses)
