import assert from 'node:assert'

const createStorageMock = () => {
  let store = {}
  return {
    getItem: (key) => Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null,
    setItem: (key, value) => {
      store[key] = value
    },
    removeItem: (key) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    }
  }
}

if (typeof globalThis.localStorage === 'undefined') {
  globalThis.localStorage = createStorageMock()
}

const { default: useStore } = await import('../src/store/useStore.js')

const resetStore = () => {
  useStore.getState().reset()
}

// Test multi-level up from base state
resetStore()
useStore.getState().addXP(350)
let user = useStore.getState().user

assert.strictEqual(user.level, 3, 'User should level up twice from level 1 to 3')
assert.strictEqual(user.xp, 50, 'XP should carry over the remaining amount after leveling')
assert.strictEqual(user.totalXp, 350, 'Total XP should reflect the entire reward amount')

// Test multi-level up starting from an existing level with progress
resetStore()
useStore.setState((state) => ({
  user: {
    ...state.user,
    level: 2,
    xp: 50,
    totalXp: 150,
  }
}))
useStore.getState().addXP(500)
user = useStore.getState().user

assert.strictEqual(user.level, 4, 'User should jump from level 2 to 4 with enough XP')
assert.strictEqual(user.xp, 50, 'Remaining XP should stay within the current level threshold')
assert.strictEqual(user.totalXp, 650, 'Total XP should accumulate correctly')

console.log('addXP multi-level tests passed')
