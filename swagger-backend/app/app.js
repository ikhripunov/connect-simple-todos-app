"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const corsMiddleware = require("restify-cors-middleware");
const generated_interface_1 = require("./generated-interface");
const api = restify.createServer();
const cors = corsMiddleware({ origins: ['*'], allowHeaders: [], exposeHeaders: [] });
api.pre(cors.preflight);
api.use(cors.actual);
api.use(restify.plugins.bodyParser());
api.use(restify.plugins.queryParser());
let todos = [];
class TodoController {
    resolveTodo(parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = todos.find((todo) => todo.id === parameters.id);
            todo.resolved = true;
            return todos;
        });
    }
    removeTodo(parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = todos.findIndex((todo) => todo.id === parameters.id);
            todos.splice(index, 1);
            return todos;
        });
    }
    addTodo(parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = new generated_interface_1.Todo();
            todo.id = Math.floor(Math.random() * 20).toString();
            todo.title = parameters.body.title;
            todo.resolved = false;
            todos = [todo, ...todos];
            return todos;
        });
    }
    getTodos(parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            return todos;
        });
    }
}
const todoController = new TodoController();
const todoRouter = new generated_interface_1.TodoApiRouter(api, todoController);
todoRouter.registerRoutes();
api.listen(3001, function () {
    console.log('sever is listening');
});
//# sourceMappingURL=app.js.map