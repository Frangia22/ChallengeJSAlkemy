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
    //Add budget
    router.post('/addBudget', (req, res) => {   
      let {concept, amount, date, type, reference} = req.body;
      db.personalBudget.create({
          concept,
          amount,
          date,
          type,
          reference
      })
    });
    //Delete budget
    router.get('/deleteBudget/:id', (req, res) => {   
      const idBudget = req.params.id;
      console.log(req.params.id);          
      db.personalBudget.destroy({
        where: {
            id: idBudget
        }
      })
      res.send('Resultado del delete', deleteBudget);
    });
    //Edit budget
    /* Edit operation GET */
  router.get('/editBudget/:id', async (req, res) => {
    const id = req.params.id;
    console.log('El id es = ', id);
     await db.personalBudget.findByPk(id)
      .then(result => {
          console.log('Res',result);
      });
      
  });
  /* Edit operation POST */
  router.post('/editBudget/:id', async(req, res) => {   
    const id = req.params.id;
    console.log('ID del put = ', id);
    const {concept, amount, type, reference} = req.body;
    console.log('Resultado del body put ',req.body);
    await db.personalBudget.update({concept, amount, type, reference},{
      where: {
          id
      }
  })
  });
module.exports = router;
