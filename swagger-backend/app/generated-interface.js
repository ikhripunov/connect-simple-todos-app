"use strict";
/* tslint:disable:no-string-literal */
/* tslint:disable:member-ordering */
/* tslint:disable:quotemark */
/* tslint:disable:typedef-whitespace */
Object.defineProperty(exports, "__esModule", { value: true });
class Todo {
}
exports.Todo = Todo;
class TodoApiRouter {
    constructor(api, controller) {
        this.restifyHttpMethods = {
            POST: 'post',
            GET: 'get',
            DELETE: 'del',
            PUT: 'put'
        };
        this.api = api;
        this.controller = controller;
    }
    registerRoutes() {
        this.api[this.restifyHttpMethods['PUT']]('/resolve-todo/{id}'.replace(/{(.*?)}/g, ':$1'), (req, res, next) => {
            this.controller.resolveTodo({
                'id': req.params['id'],
            }).then((result) => {
                res.send(result);
                next();
            }).catch(() => {
                res.send(500);
                next();
            });
        });
        this.api[this.restifyHttpMethods['DELETE']]('/remove-todo/{id}'.replace(/{(.*?)}/g, ':$1'), (req, res, next) => {
            this.controller.removeTodo({
                'id': req.params['id'],
            }).then((result) => {
                res.send(result);
                next();
            }).catch(() => {
                res.send(500);
                next();
            });
        });
        this.api[this.restifyHttpMethods['POST']]('/add-todo'.replace(/{(.*?)}/g, ':$1'), (req, res, next) => {
            this.controller.addTodo({
                body: req.body,
            }).then((result) => {
                res.send(result);
                next();
            }).catch(() => {
                res.send(500);
                next();
            });
        });
        this.api[this.restifyHttpMethods['GET']]('/get-todos'.replace(/{(.*?)}/g, ':$1'), (req, res, next) => {
            this.controller.getTodos({}).then((result) => {
                res.send(result);
                next();
            }).catch(() => {
                res.send(500);
                next();
            });
        });
    }
}
exports.TodoApiRouter = TodoApiRouter;
//# sourceMappingURL=generated-interface.js.map