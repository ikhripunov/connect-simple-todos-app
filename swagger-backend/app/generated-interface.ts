/* tslint:disable:no-string-literal */
/* tslint:disable:member-ordering */
/* tslint:disable:quotemark */
/* tslint:disable:typedef-whitespace */

import {
    Server
} from "restify";
import * as restify from "restify";

export class Todo {
    'id': string

        'title': string

    'resolved': boolean

}

export interface ITodoApiController {
    resolveTodo(parameters: {
            'id': string,
        }): Promise < Array < Todo >>
        removeTodo(parameters: {
            'id': string,
        }): Promise < Array < Todo >>
        addTodo(parameters: {
            'body' ? : Todo,
        }): Promise < Array < Todo >>
        getTodos(parameters: {}): Promise < Array < Todo >>
}

export class TodoApiRouter {
    private api: Server;

    private restifyHttpMethods = {
        POST: 'post',
        GET: 'get',
        DELETE: 'del',
        PUT: 'put'
    };

    private controller: ITodoApiController;

    constructor(api: Server, controller: ITodoApiController) {
        this.api = api;
        this.controller = controller;
    }

    registerRoutes() {
        this.api[this.restifyHttpMethods['PUT']]('/resolve-todo/{id}'.replace(/{(.*?)}/g, ':$1'), (req: restify.Request, res: restify.Response, next: restify.Next) => {
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

        this.api[this.restifyHttpMethods['DELETE']]('/remove-todo/{id}'.replace(/{(.*?)}/g, ':$1'), (req: restify.Request, res: restify.Response, next: restify.Next) => {
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

        this.api[this.restifyHttpMethods['POST']]('/add-todo'.replace(/{(.*?)}/g, ':$1'), (req: restify.Request, res: restify.Response, next: restify.Next) => {
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

        this.api[this.restifyHttpMethods['GET']]('/get-todos'.replace(/{(.*?)}/g, ':$1'), (req: restify.Request, res: restify.Response, next: restify.Next) => {
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