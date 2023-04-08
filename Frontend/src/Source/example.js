export function dbExample(){
   return {
      "qforms": 2,
      "rows": [
          {
              "editable": false,
              "id": 0,
              "name": "Urology",
              "last_updated": "2021-12-17T02:24:00.000Z",
              "field": "Urology",
              "creator": "Andreis PURIM",
              "preview": "http://services.epnet.com/getimage.aspx?imageiid=7432",
              "creator_avatar": "https://andreispurim.github.io/images/andreis.jpg",
              "creator_id": 1201,
              "keywords": [
                  "Urology",
                  "MRI"
              ],
              "questions": 17,
              "uses": 15,
              "description": "This is a complete urology report made in 2020 for all urology based-scans used by the CHU Lille.",
              "paragraph": "This is a complete urology report made in 2020 for all urology based-scans used by the CHU Lille."
          },
          {
              "editable": false,
              "id": 1,
              "name": "Respiratory",
              "last_updated": "2021-12-15T02:24:00.000Z",
              "field": "Respiratory",
              "creator": "Guilherme Ramirez",
              "preview": "https://www.researchgate.net/profile/John-Magnussen/publication/13354345/figure/fig2/AS:601775111409672@1520485775964/Lung-scan-in-eight-standard-views-of-8-mm3-block-sizes-involving-42-of-lung-tissue-In.png",
              "creator_avatar": "https://andreispurim.github.io/images/andreis.jpg",
              "creator_id": 999,
              "keywords": [
                  "Respiratory","System"
              ],
              "questions": 2,
              "uses": 1,
              "description": "A public CR created by the CHU Lille for respiratory scans used since 2018. It is release phase"
          },
      ],
      "columns": [
          {
              "id": "favorite",
              "label": "Favorites",
              "default": true,
              "minWidth": 0,
              "align": "center"
          },
          {
              "id": "name",
              "label": "Title",
              "default": true,
              "minWidth": 170,
              "align": "left"
          },
          {
              "id": "field",
              "label": "Area",
              "default": true,
              "minWidth": 100,
              "align": "right"
          },
          {
              "id": "creator",
              "label": "Creator",
              "default": true,
              "minWidth": 100,
              "align": "right"
          },
          {
              "id": "uses",
              "label": "Uses",
              "default": true,
              "minWidth": 100,
              "align": "right"
          },
          {
              "id": "last_updated",
              "label": "Last update",
              "default": false,
              "minWidth": 100,
              "align": "right"
          },
          {
              "id": "keywords",
              "label": "Keywords",
              "default": false,
              "minWidth": 100,
              "align": "right"
          }
      ],
      "users": {
          "andreis": {
              "id": 1201,
              "username": "andreis",
              "password": "123",
              "admin": true,
              "description": "Student",
              "joined": "2021-02-05",
              "last_seen": "2022-02-05",
              "avatar": "abc",
              "chips": [
                  {
                      "type": "work",
                      "label": "Samsung"
                  },
                  {
                      "type": "study",
                      "label": "Unicamp"
                  },
                  {
                      "type": "favorites",
                      "label": "0 Favorites"
                  },
                  {
                      "type": "created",
                      "label": "0 Created"
                  }
              ],
              "favorites": [
                  0
              ],
              "recents": {
                  "1": "2021-12-14T02:24:00.000Z"
              },
              "created": [
                  0
              ]
          },
          "scholze": {
              "id": 999,
              "username": "scholze",
              "password": "123",
              "admin": false,
              "description": "blablabla",
              "joined": "2021-03-05",
              "last_seen": "2022-02-05",
              "avatar": "scholze",
              "chips": [
                  {
                      "type": "study",
                      "label": "Unicamp"
                  },
                  {
                      "type": "favorites",
                      "label": "0 Favorites"
                  },
                  {
                      "type": "created",
                      "label": "0 Created"
                  }
              ],
              "favorites": [],
              "recents": [],
              "created": []
          }
      },
  }
}