/*
 * Copyright (c) 2014-2021 Bjoern Kimminich.
 * SPDX-License-Identifier: MIT
 */

const insecurity = require('../lib/insecurity')
const models = require('../models/index')

module.exports = function applyCoupon () {
  return ({ params }, res, next) => {
    const id = params.id
    let coupon = params.coupon ? decodeURIComponent(params.coupon) : undefined
    const discount = insecurity.discountFromCoupon(coupon)
    coupon = discount ? coupon : null
    models.Basket.findByPk(id).then(basket => {
      if (basket) {
        basket.update({ coupon }).then(() => {
          if (discount) {
            res.json({ discount })
          } else {
            res.status(404).send('Invalid coupon.')
          }
        }).catch(error => {
          next(error)
        })
      } else {
        next(new Error('Basket with id=' + id + ' does not exist.'))
      }
    }).catch(error => {
      next(error)
    })
  }
}
e.filter = queryParam.toLowerCase()
      this.searchValue = this.sanitizer.bypassSecurityTrustHtml(queryParam)
      this.gridDataSource.subscribe((result: any) => {
        if (result.length === 0) {
          this.emptyState = true
