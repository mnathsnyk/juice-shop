/*
 * Copyright (c) 2014-2021 Bjoern Kimminich.
 * SPDX-License-Identifier: MIT
 */

const utils = require('../lib/utils')
const challenges = require('../data/datacache').challenges
const db = require('../data/mongodb')
const insecurity = require('../lib/insecurity')


                utils.solveIf(challenges.timingAttackChallenge, () => { return count > 2 })
                db.reviews.update(
                  { _id: id },
                  { $set: { likedBy: likedBy } }
                ).then(
                  result => {
                    res.json(result)
                  }, err => {
                    res.status(500).json(err)
                  })
              }, () => {
                res.status(400).json({ error: 'Wrong Params' })
              })
            }, 150)
          }, err => {
            res.status(500).json(err)
          })
      } else {
        res.status(403).json({ error: 'Not allowed' })
      }
    }, () => {
      res.status(400).json({ error: 'Wrong Params' })
    })
  }
}
