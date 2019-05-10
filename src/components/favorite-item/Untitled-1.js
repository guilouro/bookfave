const fave = {
  entities: {
    1: {
      id: 1,
      title: 'Site Flamengo',
      link: 'netfla.com.br',
      tags: {
        flamengo: true,
        futebol: true,
        bola: true
      }
    }
  },

  allIds: [1]
}

/**
 * const getFavIdsByTag = (state, tagName) => state.user
 */

/**
 * Adicionar Logo
 * Resolver problema URLs
 * Adicionar form de cadastro e de Links
 * Adicionar form de Filtrar tags
 * Adicionar troca de Forms
 *
 * Containers
 * Favorities
 *
 * Actions
 * addFave()
 * removeFave()
 * searchTag()
 *
 * Create new item
 * List items by tags
 *
 * Selector
 * searchIdByTag (state, tagName) => state.[fave].tags.
 *
 * Reducers
 * ADD_FAVE
 * REMOVE_FAVE
 *
 * Responsivo
 *
 * Tests Components
 * Add coverage
 * Add travis
 * Netlify
 * Docker !?
 *
 * Cypress.io ???
 */
