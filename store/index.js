import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      fighters: [
        {
          slug: 'spring-man',
          name: 'Spring Man',
          logo: '',
          health: 1000,
          grab: {
            damage: 150
          },
          ability: [
            {
              description: 'After holding dash or jump, release when gloves flash to emit a blue shockwave that deflects attacks. This will block incoming ARMS.'
            },
            {
              description: 'When under 25% health, ARMS will be permanently charged making all of his punches charged attacks.'
            }
          ]
        },
        {
          slug: 'kid-cobra',
          name: 'Kid Cobra',
          logo: '',
          health: 1200,
          grab: {
            damage: 170
          },
          ability: [
            {
              description: 'Double jump'
            }
          ]
        }
      ]
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    },
    getters: {
      getFighter: (state) => (fighterSlug) => {
        return state.fighters.filter(fighter => fighter.slug === fighterSlug)[0]
      }
    }
  })
}

export default store
