import { beforeAll, beforeEach, describe, expect, test } from 'vitest'

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

let useStore

beforeAll(async () => {
  const module = await import('../src/store/useStore.js')
  useStore = module.default
})

beforeEach(() => {
  useStore.getState().reset()
})

describe('addXP multi-level logic', () => {
  test('levels up correctly from base state', () => {
    useStore.getState().addXP(350)
    const user = useStore.getState().user

    expect(user.level).toBe(3)
    expect(user.xp).toBe(50)
    expect(user.totalXp).toBe(350)
  })

  test('levels up correctly from an existing level with progress', () => {
    useStore.setState((state) => ({
      user: {
        ...state.user,
        level: 2,
        xp: 50,
        totalXp: 150,
      }
    }))

    useStore.getState().addXP(500)
    const user = useStore.getState().user

    expect(user.level).toBe(4)
    expect(user.xp).toBe(50)
    expect(user.totalXp).toBe(650)
  })
})
