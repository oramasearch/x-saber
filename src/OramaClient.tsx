import { CollectionManager } from '@orama/core'

// export const collectionManager = new CollectionManager({
//   collectionID: '4e7b7ac2-4ed4-49a4-94f7-175ebf7ba6d1',
//   apiKey: 'c1_IujJEQRRb4Nsu6OazwNW8rvfevlXjN29hLRuHx0nuDpbHfWsK5s7ktZMGp3'

// })

export const collectionManager = new CollectionManager({
  collectionID: '8295855b-d85f-4e10-8e50-454d0d9398bd',
  apiKey: 'c1_VWYpOPMxuu1iyiWT5u2RMGsgNtLQQg0CWoUk5868zFf0zNLNI8JUXct7c1K',
  // collectionID: 'fcba0a05-59b1-429f-a996-9763d1b8cdd1',
  // apiKey: 'c1_RKj2VBYv0bLqLQX7zYzZzvabjv_hsarj0bsPdce0tBMMioUw$kDfH-CgQ2-',
  cluster: {
    readURL: 'https://collections.orama.com'
  }
})
