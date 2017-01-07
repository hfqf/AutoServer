/**
 * Created by points on 16/11/19.
 */

//用来上传老版本本地数据的数据到服务器上

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Repair = mongoose.model(global.config.ModelNameRepairHistory);


    /**
     * 增加记录
     */
    router.post('/add',function (req, res, next) {

        var newRepair = new  Repair({
            carcode:req.body.carcode,
            totalkm:req.body.totalkm,
            repairetime:req.body.repairetime,
            addition:req.body.addition,
            tipcircle:req.body.tipcircle,
            isclose:req.body.isclose,
            circle:req.body.circle,
            repairtype:req.body.repairtype,
            owner:req.body.owner,
        });

        newRepair.save(function (err) {
            if(err){
                return res.send(global.retFormate(0,err,'存入数据失败'));
            }
            else {
                return res.send(global.retFormate(1,'保存成功','存入数据成功'));
            }
        });

}),



        /**
         * 删除某条记录
         * */
        router.post('/del',function (req, res, next) {
            Contact.remove({_id:req.body.id,owner:req.body.owner,},function (err,ret) {
                if(err){
                    return res.send(global.retFormate(0,err,'存入数据失败'));
                }
                else {
                    return res.send(global.retFormate(1,'保存成功','存入数据成功'));
                }
            });

        }),

        /**
         * 删除当前用户的所有维修记录
         * */
        router.post('/delAll',function (req, res, next) {
            Contact.remove({tel:req.body.tel,owner:req.body.owner,},function (err,ret) {
                if(err){
                    return res.send(global.retFormate(0,err,'存入数据失败'));
                }
                else {
                    return res.send(global.retFormate(1,'保存成功','存入数据成功'));
                }
            });

        }),


        /**
         *更新记录
         **/
        router.post('/update',function (req, res, next) {
            var conditions = {_id : req.body.id,owner:req.body.owner,};
            var update     = {$set : {
                carcode:req.body.carcode,
                totalkm:req.body.totalkm,
                repairetime:req.body.repairetime,
                addition:req.body.addition,
                tipcircle:req.body.tipcircle,
                isclose:req.body.isclose,
                circle:req.body.circle,
                repairtype:req.body.repairtype,
            }};
            var options    = {upsert : true};
            Contact.update(conditions,update,options,function (err,ret) {
                if(err){
                    return res.send(global.retFormate(0,err,'修改数据失败'));
                }
                else {
                    return res.send(global.retFormate(1,'修改成功','修改数据成功'));
                }
            });

        }),

        module.exports = router;