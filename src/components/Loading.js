"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Loading = () => {
    return (react_1.default.createElement("div", { id: "loading" },
        react_1.default.createElement("section", { id: "cricleLoading" },
            react_1.default.createElement("div", { id: "circle1", className: 'container' },
                react_1.default.createElement("div", { className: 'loader' },
                    react_1.default.createElement("span", null))))));
};
exports.default = Loading;
