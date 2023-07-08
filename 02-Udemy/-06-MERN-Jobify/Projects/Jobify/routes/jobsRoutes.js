import express from "express";
import * as jobsController from "../controllers/jobsController.js";
import testUser from "../middleware/testUser.js";
const router = express.Router();

router.get('/', jobsController.getAllJobs);
router.post('/create-job', testUser, jobsController.creatJob);
router.get('/stats', jobsController.showStats);
router.patch('/update-job/:id', testUser, jobsController.updateJob);
router.delete('/delete-job/:id', testUser, jobsController.deleteJob);

export {router}