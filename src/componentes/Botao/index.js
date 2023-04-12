"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./Botao.css");
const react_1 = __importDefault(require("react"));
const Botao = (props) => {
    return (react_1.default.createElement("button", { className: 'botao' }, props.children));
};
exports.default = Botao;
