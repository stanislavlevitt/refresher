const router = require('express').Router()
const {Tutorial} = require('../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
module.exports = router

 // Create a new Tutorial
 router.post("/", async (req,res, next)=>{
  if(!req.body.title){
    res.status(400).send({message: "Content can not be empty"})
    return
  }
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  }
  try {
    const newTutorial = await Tutorial.create(tutorial)
    res.send(newTutorial)
  } catch (error) {
    next(error)
    // res.status(500).send({
    //   message:error.message || "Some error occured while creating"
    // })
  }
});

  // Retrieve all Tutorials
  router.get("/", async (req,res)=>{
    const title = req.query.title
    const condition = title ? {title:{[Op.iLike]: `%${title}%`}} : null
    try {
      const tutorials = await Tutorial.findAll({where:condition})
      res.send(tutorials)
    } catch (error) {
      next(error)
      // res.status(500).send({
      //   message:err.message || "Some error occured while retrieving"
      // })
    }
  });

      // Retrieve all published Tutorials
      router.get("/published", async (req,res) =>{
        try {
          const published = await Tutorial.findAll({where:{published:true}})
          res.send(published)
        } catch (error) {
          next(error)
          // res.status(500).send({
          //   message:err.message || `Some error occured while retrieiving published tutorials`
          // })
        }
      });

    // Retrieve a single Tutorial with id
    router.get("/:id", async (req,res)=>{
      const id = req.params.id
      try {
        const tutorial = await Tutorial.findByPk(id)
        // if(data)res.send(data)
        // else {res.status(400).send({message:`Can not find Tutorial with id=${id}`})}
        res.send(tutorial)
      } catch (error) {
        next(error)
        // res.status(500).send({message:`Error retrieving Tutorial with id=${id}`})
      }
    });

      // Update a Tutorial with id
  router.put("/:id", async (req, res) => {
    const id = req.params.id;
    try {
      await Tutorial.update(req.body, {
        where: { id: id }
      })
      // if (num == 1) {
      //   ;
      // } else {
      //   res.send({
      //     message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
      //   });
      // }
      res.send({
        message: "Tutorial was updated successfully."
      })
    } catch (error) {
      next(error)
      // res.status(500).send({
      //   message: "Error updating Tutorial with id=" + id
      // });
    }
  });

 // Delete a Tutorial with id
 router.delete("/:id", async (req,res) =>{
  const id = req.params.id
try {
  await Tutorial.destroy({where:{id:id}})
  // if(num===1) res.send({message:`Tutorial was deleted Successfully`})
  //   else {res.send({message:`Can not delete Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`})}
  res.send({message:`Tutorial was deleted Successfully`})
} catch (error) {
  next(error)
  // res.status(500).send({message:`Error deleting Tutorial with id=${id}`})
}
});

  // Create a new Tutorial
  router.delete("/", async (req,res)=>{
    try {
      const nums = await Tutorial.destroy({
        where: {},
        truncate: false
      })
      res.send({ message: `${nums} Tutorials were deleted successfully!` });

    } catch (error) {
      next(error)
      // res.status(500).send({
      //   message:
      //     err.message || "Some error occurred while removing all tutorials."
      // });
    }
  });

