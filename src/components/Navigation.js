"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Navigation = () => {
    return (react_1.default.createElement("div", { id: "navigation" },
        react_1.default.createElement("div", { id: "navMenu" }),
        react_1.default.createElement("div", { id: "navList" },
            react_1.default.createElement("a", { href: '/basic/loading' }, "loading"))));
};
exports.default = react_1.default.memo(Navigation);
