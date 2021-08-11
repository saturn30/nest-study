"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCat = exports.updatePartialCat = exports.updateCat = exports.createCat = exports.readCat = exports.readCats = void 0;
var cats_modal_1 = require("./cats.modal");
var readCats = function (req, res) {
    try {
        var cats = cats_modal_1.Cat;
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            },
        });
    }
    catch (err) {
        res.status(400).send({
            success: false,
            error: err.message,
        });
    }
};
exports.readCats = readCats;
var readCat = function (req, res) {
    try {
        var id_1 = req.params.id;
        var cat = cats_modal_1.Cat.find(function (cat) { return cat.id === id_1; });
        res.status(200).send({
            success: true,
            data: {
                cat: cat,
            },
        });
    }
    catch (err) {
        res.status(400).send({
            success: false,
            error: err.message,
        });
    }
};
exports.readCat = readCat;
var createCat = function (req, res) {
    try {
        var data = req.body;
        cats_modal_1.Cat.push(data);
        res.status(200).send({
            success: true,
            data: { data: data },
        });
    }
    catch (err) {
        res.status(400).send({
            success: false,
            error: err.message,
        });
    }
};
exports.createCat = createCat;
var updateCat = function (req, res) {
    try {
        var params_1 = req.params, body_1 = req.body;
        cats_modal_1.Cat.forEach(function (cat, index) {
            if (cat.id === params_1.id) {
                cats_modal_1.Cat[index] = body_1;
            }
        });
        res.status(200).send({
            success: true,
            data: { body: body_1 },
        });
    }
    catch (err) {
        res.status(400).send({
            success: false,
            error: err.message,
        });
    }
};
exports.updateCat = updateCat;
var updatePartialCat = function (req, res) {
    try {
        var params_2 = req.params, body_2 = req.body;
        cats_modal_1.Cat.forEach(function (cat, index) {
            if (cat.id === params_2.id) {
                cats_modal_1.Cat[index] = __assign(__assign({}, cat), body_2);
            }
        });
        res.status(200).send({
            success: true,
            data: { body: body_2 },
        });
    }
    catch (err) {
        res.status(400).send({
            success: false,
            error: err.message,
        });
    }
};
exports.updatePartialCat = updatePartialCat;
var deleteCat = function (req, res) {
    try {
        var params_3 = req.params, body = req.body;
        cats_modal_1.Cat.forEach(function (cat, index) {
            if (cat.id === params_3.id) {
                delete cats_modal_1.Cat[index];
            }
        });
        res.status(200).send({
            success: true,
            data: { body: body },
        });
    }
    catch (err) {
        res.status(400).send({
            success: false,
            error: err.message,
        });
    }
};
exports.deleteCat = deleteCat;
//# sourceMappingURL=cats.service.js.map