var express = require('express');
var router = express.Router();
const model = require('../models/index')
const {rest_error, rest_ok} = require('../helpers/index')
const {request_validation} = require('../middleware/request_validation')
const { issueType } = require('../schemas/index')
const jwt = require('jsonwebtoken');
const jwt_validation = require('../middleware/jwt_validation');

router.get('/', jwt_validation.authenticateJWT, async (req, res, next) => {
    try {
        const issueType = await model.ms_issue_type.findAll();

        res.status(200).json(rest_ok("Successfully get master issue type data", issueType))
    } catch (error) {
        res.status(400).json(rest_ok(error, {}))
    }
})

router.get('/:id', jwt_validation.authenticateJWT, async (req, res, next) => {
    try {
        const issueType = await model.ms_issue_type.findByPk(req.params.id);

        res.status(200).json(rest_ok("Successfully get master issue type detail", issueType))
    } catch (error) {
        res.status(400).json(rest_ok(error, {}))
    }
})

router.post('/', jwt_validation.authenticateJWT, request_validation(issueType, 'body'), async (req, res, next) => {
    const t = await model.sequelize.transaction();

    try {
        const findIssueType = await model.ms_issue_type.findOne({
            where: {
                type_name: req.body.type_name
            }
        })
        
        if(findIssueType){
            throw "Issue type already exists"
        }
        
        const issueType = await model.ms_issue_type.create({
            type_name: req.body.type_name,
            created_by: req.user.name
        }, {transaction: t})

        await t.commit();
        res.status(200).json(rest_ok("Create issue type success.", issueType))
    } catch (error) {
        await t.rollback();
        res.status(400).json(rest_error(error, {}))
    }
})

router.put('/:id', jwt_validation.authenticateJWT, request_validation(issueType, 'body'), async (req, res, next) => {
    const t = await model.sequelize.transaction();

    try {
        const findIssueType = await model.ms_issue_type.findByPk(req.params.id)
        
        if(!findIssueType){
            throw "Issue type not found"
        }
        
        const issueType = await model.ms_issue_type.update({
            type_name: req.body.type_name,
            created_by: req.user.name
        }, {where: {id: req.params.id}}, {transaction: t})

        await t.commit();
        res.status(200).json(rest_ok("Update issue type success.", {}))
    } catch (error) {
        await t.rollback();
        res.status(400).json(rest_error(error, {}))
    }
})

router.delete('/:id', jwt_validation.authenticateJWT, async (req, res, next) => {
    const t = await model.sequelize.transaction();

    try {
        const findIssueType = await model.ms_issue_type.findByPk(req.params.id)
        
        if(!findIssueType){
            throw "Issue type not found"
        }
        
        const issueType = await model.ms_issue_type.destroy({where: {id: req.params.id}}, {transaction: t})

        await t.commit();
        res.status(200).json(rest_ok("Delete issue type success.", {}))
    } catch (error) {
        await t.rollback();
        res.status(400).json(rest_error(error, {}))
    }
})


module.exports = router;
