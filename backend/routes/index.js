var express = require('express');
var router = express.Router();
// Call sequelize
const { sequelize, Op } = require('sequelize');
// Import models
const db = require('../models');
/* GET home page last budgets */
router.get('/home', async (req, res) => {
  const getLastBudgets = await db.personalBudget.findAll({
    limit: 10,
    order: [
        ['date', 'DESC']
    ]              
    }).then(result => {
      res.send(result);
    });
});
// Get budget 
//Get balance
router.get('/balance', async (req, res) => { 
  //SELECT SUM(amount) FROM `personalbudget` WHERE type = 'entry'; 
  //Add up all income
    const entry = await db.personalBudget.sum('amount', {
        where: {
            type: 'Entry'
        }
    })
    .then(result => {
        return(result);
    })
    //Add up all expenses
    const egress = await db.personalBudget.sum('amount', {
        where: {
            type: 'Egress'
        }
    })
    .then(result => {
        return(result);
    })
    //difference between income and expense
    const totalBalance = ((entry)-(egress));
    console.log(totalBalance);
    res.send({entry, egress, totalBalance})
  });
  //Get budgets
  router.get('/getBudget',  (req, res) => {   
    db.personalBudget.findAll()
    .then(result => {
        res.send(result);
    });
    });
module.exports = router;
