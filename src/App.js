"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Loading_1 = __importDefault(require("./components/Loading"));
const Navigation_1 = __importDefault(require("./components/Navigation"));
const Home_1 = __importDefault(require("./router/Home"));
require("./assets/main.css");
const react_2 = require("react");
function App() {
    const location = (0, react_router_dom_1.useLocation)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_2.useEffect)(() => {
        location.pathname === "/" && navigate('/basic');
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Navigation_1.default, null),
        react_1.default.createElement("div", { id: "main" },
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/basic", element: react_1.default.createElement(Home_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/basic/loading", element: react_1.default.createElement(Loading_1.default, null) })))));
}
exports.default = App;
