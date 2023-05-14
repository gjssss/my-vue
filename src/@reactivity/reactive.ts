type effect = () => void
let activeEffect: effect | null = null

export function reactive(obj: object) {
    const subscribers = new Set<effect>()

    return new Proxy(obj, {
        get: (target, property) => {
            if (activeEffect) {
                subscribers.add(activeEffect)
            }
            return target[property]
        },
        set: (target, property, value) => {
            target[property] = value
            subscribers.forEach((item) => item())
            return true
        }
    })
}

export function watchEffect(effectFunction: effect) {
    activeEffect = effectFunction
    effectFunction()
    activeEffect = null
}